import { Container } from "./styles"
import PropTypes from 'prop-types'

export function Tag({ title, isNoteHome = false, ...rest }) {
  Tag.propTypes = {
    title: PropTypes.string.isRequired,
    isNoteHome: PropTypes.bool
  }

  return(
    <Container {...rest} $isnothome={isNoteHome.toString()}>
      {title}
    </Container>
  );
}