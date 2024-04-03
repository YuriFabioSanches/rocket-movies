import { Container, Profile } from "./styles";
import { Input } from "../Input"

import { useAuth } from "../../hooks/authHooks/useAuth"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { api } from "../../services/api";
import PropTypes from 'prop-types'

import avatarPlaceholder from "../../assets/avatarPlaceholder.png"

export function Header({ onSearch, disabled = false }) {
  Header.propTypes = {
    onSearch: PropTypes.func,
    disabled: PropTypes.bool
  }

  const { user, signOut } = useAuth()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarPlaceholder
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function handleSearchChange(event) {
    const search = event.target.value
    onSearch(search)
  }

  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input disabled={disabled} placeholder="Search by title" onChange={handleSearchChange} />

      <Profile>
        <div className="profile-text">
          <strong>{user.name}</strong>
          <Link onClick={handleSignOut}>
            <span>sign out</span>
          </Link>
        </div>
        <Link to="/profile">
          <img src={avatarURL} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  );
}