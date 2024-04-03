import { Container } from "./styles";
import PropTypes from 'prop-types';

export function Input({ icon:Icon, labelId, ...rest }) {
  Input.propTypes = {
    icon: PropTypes.func,
    labelId: PropTypes.string
  }

  return(
    <Container>
      <label htmlFor={labelId}>
        {Icon && <Icon />}
      </label>
      <input id={labelId} {...rest} />
    </Container>
  );
}