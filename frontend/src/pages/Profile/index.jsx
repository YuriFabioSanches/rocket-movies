import { Container, Form, InputWrapper, Avatar, ButtonWrapper } from "./styles"
import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from "react-icons/fi"
import { Button } from "../../components/Button"
import { ModalDeleteAccount } from "../../components/DeleteProfileModal"
import { Input } from "../../components/Input"
import { Link } from 'react-router-dom'
import avatarPlaceholder from "../../assets/avatarPlaceholder.png"

import { useState } from "react"
import { useAuth } from "../../hooks/authHooks/useAuth"
import { api } from "../../services/api"

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  const [modalOpen, setModalOpen] = useState(false)

  async function handleUpdateProfile() {
    const update = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    const userUpdated = Object.assign(user, update)

    await updateProfile({ user: userUpdated,avatarFile })

    setOldPassword("")
    setNewPassword("")
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleModalOpen(){
    setModalOpen(true)
  }

  function handleModalClose(){
    setModalOpen(false)
  }

  return(
    <Container>
      <header>
        <Link to="/"><FiArrowLeft />Back</Link>
      </header>

      <Form>
      <Avatar>
          <img src={avatar} alt="User profile image" />
          
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <InputWrapper>
          <Input 
            placeholder="Name" 
            type="text" 
            labelId="name" 
            icon={FiUser}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input 
            placeholder="E-mail" 
            type="email" 
            labelId="email" 
            icon={FiMail}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            placeholder="Current password" 
            type="password" 
            labelId="password" 
            icon={FiLock}
            onChange={e => setOldPassword(e.target.value)}
          />
          <Input 
            placeholder="New password" 
            type="password"
            labelId="new-password" 
            icon={FiLock}
            onChange={e => setNewPassword(e.target.value)}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button 
            title="Save" 
            onClick={handleUpdateProfile}
          />
          <Button 
            className="inverted-colors" 
            title="Exclude profile" 
            onClick={handleModalOpen}
          />
        </ButtonWrapper>

        {modalOpen && 
          <ModalDeleteAccount onClose={handleModalClose} />
        }

      </Form>
    </Container>
  );
}