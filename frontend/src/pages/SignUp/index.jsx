import { Container, BackgroundImg, Form, InputWrapper } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link, useNavigate } from 'react-router-dom'
import { api } from "../../services/api"
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Fill all fields to register your account.")
    }

    try{
      await api.post("/users", { name, email, password })

      alert("Account created successfully!")

      navigate("/")

    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Impossible to register your account.")
      }
    }
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Your application to keep track of everything you watch.</p>
        <h2>Create your account</h2>

        <InputWrapper>
          <Input 
            placeholder="Name" 
            labelId="name" 
            type="text" 
            icon={FiUser}
            onChange={e => setName(e.target.value)}
          />
          <Input 
            placeholder="E-mail" 
            labelId="email" 
            type="email" 
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            placeholder="Password" 
            labelId="password" 
            type="password" 
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />
        </InputWrapper>

        <div className="button-wrapper">
          <Button 
            title="Sign Up" 
            onClick={handleSignUp}
          />
        </div>

        <div className="link">
          <Link 
            to="/">
              <FiArrowLeft /> Back to log in
          </Link>
        </div>
      </Form>
      
      <BackgroundImg />
    </Container>
  );
}