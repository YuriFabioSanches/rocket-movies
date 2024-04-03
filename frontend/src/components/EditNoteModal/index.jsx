import { Container, Content, HeaderWrapper, InputWrapper, NoteItensWrapper, NoteItens } from "./styles";
import { Textarea } from "../Textarea"
import { NoteItem } from "../NoteItem"
import { FiX } from "react-icons/fi";
import PropTypes from 'prop-types'
import { Button } from "../Button"
import { Input } from "../Input"

import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

export function EditNoteModal({ onClose, data, onSave }) {
  EditNoteModal.propTypes = {
    onClose: PropTypes.func,
    data: PropTypes.object,
    onSave: PropTypes.func,
  }

  const [title, setTitle] = useState(data.title)
  const [description, setDescription] = useState(data.description)
  const [rating, setRating] = useState(data.rating)

  const tagsValues = data.movie_note_tags.map((tag) => (tag.name))
  const [tags, setTags] = useState(tagsValues)
  const [newTag, setNewTag] = useState("")
  const params = useParams()

  async function handleUpdateNote(){
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

    await api.put(`/movienotes/${params.id}`, {title, description, rating, tags})

    alert("Note updated sucessfully!")

    onClose()
    onSave()
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

  return (
    <Container>
      <Content>
          <HeaderWrapper>
            <h1>Edit note</h1>

            <button onClick={onClose}><FiX /></button>
          </HeaderWrapper>

          <InputWrapper>
            <Input 
              placeholder="Title"
              value={title} 
              onChange={event => setTitle(event.target.value)}
            />
            <Input 
              placeholder="Your rating (0 to 5)" 
              type="number" 
              min="0" 
              max="5"
              value={rating} 
              onChange={event => setRating(parseInt(event.target.value))}
            />
          </InputWrapper>

          <Textarea 
            placeholder="Description"
            value={description} 
            onChange={event => setDescription(event.target.value)}
          />

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

          <Button 
            title="Save"
            onClick={handleUpdateNote}
          />
        </Content>

    </Container>
  )
}