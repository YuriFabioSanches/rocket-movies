import { FiPlus, FiX } from "react-icons/fi"
import PropTypes from 'prop-types'

import { Container } from "./styles"

export function NoteItem({ isNew = false, value, onClick, ...rest }) {
  NoteItem.propTypes = {
    isNew: PropTypes.bool,
    value: PropTypes.string,
    onClick: PropTypes.func,
  }

  return(
    <Container $isnew={isNew.toString()} >
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button  type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX /> }
      </button>
    </Container>
  );
}