import { createContext, useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { api } from "../../services/api"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  AuthProvider.propTypes = {
    children: PropTypes.node
  }

  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try{
      const response = await api.post("/sessions", {email, password})
      const { user, token } = response.data

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovies:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })
    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Unable to join session.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user")
    localStorage.removeItem("@rocketmovies:token")

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try{
      if(avatarFile){
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data
      }

      await api.put("/users", user)

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({user, token: data.token})

      alert("User profile updated!")

    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Impossible to update profile.")
      }
    }
  }

  async function deleteProfile({ password }) {
    try{
      const response = await api.post("/users/delete", {password})

      localStorage.removeItem("@rocketmovies:user")
      localStorage.removeItem("@rocketmovies:token")
  
      setData({})

      alert("Profile delete sucessfully.")
      return response.data.deleted
    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Unable to delete profile.")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token")
    const user = localStorage.getItem("@rocketmovies:user")

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user: JSON.parse(user), token})
    }
  }, [])

  return(
    <AuthContext.Provider value={{ signIn, signOut, updateProfile, deleteProfile, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }