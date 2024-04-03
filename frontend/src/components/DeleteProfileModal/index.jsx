import { Container, Content, CancelBtn, Header, InputWrapper } from "./styles";
import { FiLock } from "react-icons/fi"
import { Button } from "../Button";
import PropTypes from 'prop-types';
import { Input } from "../Input";

import { useState } from "react";
import { useAuth } from "../../hooks/authHooks/useAuth";
import { useNavigate } from "react-router-dom";


export function ModalDeleteAccount({onClose}) {
  ModalDeleteAccount.propTypes = {
    onClose: PropTypes.func
  }

  const [password, setPassword] = useState("")
  const { deleteProfile } = useAuth()
  const navigate = useNavigate()

  async function hadleDeleteProfile(){
    if(!password){
      return alert("Please inform your password.")
    }
    const deletedProfile = await deleteProfile({password})
    
    if(deletedProfile){
      navigate("/")
    }
  }

  return(
    <Container>
      <Content>
        <Header>
          <h1>Exclude profile confirmation</h1>
          <CancelBtn type="button" onClick={onClose}>
            &times;
          </CancelBtn>
        </Header>

        <p>Informe your password to confirm.</p>
        
        <InputWrapper>
          <Input
            placeholder="Password" 
            type="password" 
            labelId="password" 
            icon={FiLock}
            onChange={e => setPassword(e.target.value)} 
          />
          <Button 
            title="Confirm"
            onClick={hadleDeleteProfile} />
        </InputWrapper>
      </Content>
    </Container>
  )
}