import { Container } from "./style";
import PropTypes from 'prop-types';

export function Button({ title, loading, ...rest }) {
  Button.propTypes = {
    title: PropTypes.any.isRequired,
    loading: PropTypes.bool
  }

  return(
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? "Carregando..." : title}
    </Container>
  );
  

}