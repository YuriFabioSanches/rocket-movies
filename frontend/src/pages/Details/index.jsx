import { Container, Content, Title, Stars, CreatedBox, Tags, Description, ButtonWrapper  } from "./styles";
import avatarPlaceholder from "../../assets/avatarPlaceholder.png"
import { FiArrowLeft, FiStar, FiClock, FiTrash, FiEdit } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"

import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/authHooks/useAuth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { EditNoteModal } from "../../components/EditNoteModal";

export function Details() {
  const { user } = useAuth()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarPlaceholder
  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState([])
  const [emptyStars, setEmptyStars] = useState("")
  const [formattedDate, setFormattedDate] = useState("")

  const [modalOpen, setModalOpen] = useState(false)
  const [fecthNote, setFecthNote] = useState(false)


  function handleModalOpen(){
    setModalOpen(true)
  }

  function handleModalClose(){
    setModalOpen(false)
  }

  function handleFecthNote() {
    setFecthNote(fecthNote ? false : true)
  }

  function handleBack() {
    navigate("/")
  }

  function padZero(num) {
    return num.toString().padStart(2, '0');
  }

  async function handleDeleteNote() {
    const confirm = window.confirm("Do you want to delete this note?")

    if(confirm){
      await api.delete(`/movienotes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/movienotes/${params.id}`)

      if(response.data.status == "error"){
        navigate("/")
      }

      setData(response.data)
      setEmptyStars(5 - response.data.rating)

      const date = new Date(response.data.updated_at)
      setFormattedDate(`${padZero(date.getDate())}/${padZero(date.getMonth() + 1)}/${date.getFullYear()} às ${padZero(date.getHours())}:${padZero(date.getMinutes())}`)
    }

    fetchNote()
  }, [params.id, navigate, fecthNote])

  return(
    <Container>
      <Header disabled />

      <main>
        <Content>
          <ButtonWrapper>
            <div className="left">
              <button onClick={handleBack}><FiArrowLeft /> Back</button>
            </div>

            <div className="right">
              <button onClick={handleModalOpen}><FiEdit /></button>
              <button onClick={handleDeleteNote}><FiTrash /></button>
            </div>
          </ButtonWrapper>

          <Title>
            <h1>{data.title}</h1>
            <Stars>
              {[...Array(data.rating)].map((_, index) => (
                <FiStar key={index} className="fill" />
              ))}
              {[...Array(emptyStars)].map((_, index) => (
                <FiStar key={index} />
              ))}
            </Stars>
          </Title>

          <CreatedBox>
            <img src={avatarURL} alt={user.name} />
            <p>{user.name}</p>
            <FiClock />
            <p>{formattedDate}</p>
          </CreatedBox>

          {
            data.movie_note_tags &&
            <Tags>
              {data.movie_note_tags.map(tag => (
                <Tag key={tag.id} title={tag.name} />
              ))}
            </Tags>
          }

          <Description>
              <p>{data.description}</p>
          </Description>

          {
            modalOpen &&
            <EditNoteModal onSave={handleFecthNote} data={data} onClose={handleModalClose} />
          }
        </Content>
      </main>
    </Container>
  );
}