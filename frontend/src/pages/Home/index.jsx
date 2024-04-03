import { Container, Content, NoteList } from "./styles";
import { Header } from "../../components/Header"
import { Note } from "../../components/Note"
import { FiPlus } from "react-icons/fi"
import { Link } from 'react-router-dom'

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
  const [notes, setNotes] = useState([])
  /* const [tags, setTags] = useState([]) */
  const [search, setSearch] = useState([])
  const navigate = useNavigate()

  function handleSearchChange(newSearch) {
    setSearch(newSearch)
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/movienotes?title=${search}`)
      setNotes(response.data)
    }
    fetchNotes()
  }, [search])

/*   useEffect(() => {
    async function fetchTags(){
      const response = await api.get("/movietags")
      setTags(response.data)
    }

    fetchTags()
  }, []) */

  return(
    <Container>
      <Header onSearch={handleSearchChange} />

      <main>
        <Content>
          <header>
            <h1>My movies</h1>
            <Link to="/new"><FiPlus /> Add Movie</Link>
          </header>

        <NoteList>
          {
            notes.length == 0 ? <h1>No notes found</h1> : notes.map(note => (
              <Note
                key={note.id} 
                data = {note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </NoteList>
        </Content>
      </main>
    </Container>
  );
}