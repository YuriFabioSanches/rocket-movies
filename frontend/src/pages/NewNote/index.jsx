import { Container, Content, HeaderWrapper, InputWrapper, NoteItensWrapper, NoteItens, ButtonWrapper } from "./styles";
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { FiArrowLeft } from "react-icons/fi"

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";



export function NewNote() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleback() {
    navigate("/")
  }

  function handleAddTag() {
    if(newTag != "") {
      setTags(prevState => [...prevState, newTag])
      setNewTag("")
    }
  }

  function handleRemoveTag(tagIndex) {
    setTags(prevState => prevState.filter((_, index) => index !== tagIndex))
  }

  async function handleCreateNote() {
    if(!title){
      return alert("Please inform a title.")
    }

    if(!rating){
      return alert("Please inform a rating.")
    }
    if(rating < 0 || rating > 5){
      return alert("Please inform a valid rating.")
    }

    if(newTag){
      return alert("You entered a tag in the field, but did not add it.")
    }

    await api.post("/movienotes", {title, description, rating, tags})

    alert("Note created sucessfully!")
    
    navigate("/")
  }

  return(
    <Container>
      <Header />

      <main>
        <Content>
          <HeaderWrapper>
            <button onClick={handleback}><FiArrowLeft />Back</button>

            <h1>New movie note</h1>
          </HeaderWrapper>

          <InputWrapper>
            <Input 
              placeholder="Title" 
              onChange={event => setTitle(event.target.value)}
            />
            <Input 
              placeholder="Your rating (0 to 5)" 
              type="number" 
              min="0" 
              max="5"
              onChange={event => setRating(parseInt(event.target.value))}
            />
          </InputWrapper>

          <Textarea placeholder="Description" onChange={event => setDescription(event.target.value)} />

          <NoteItensWrapper>
            <h2>Tags</h2>
            <NoteItens>
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={index} 
                    value={tag}
                    onClick={() => handleRemoveTag(index)}
                  />
                ))
              }
              <NoteItem
                isNew
                value={newTag}
                placeholder="New tag"
                onChange={event => setNewTag(event.target.value)}
                onClick={handleAddTag}
              />
            </NoteItens>
          </NoteItensWrapper>

          <ButtonWrapper>
            <Button 
              className="inverted-colors" 
              title="Delete"
              onClick={handleback}
            />
            <Button 
              title="Create"
              onClick={handleCreateNote}
            />
          </ButtonWrapper>
        </Content>
      </main>
    </Container>
  );
}