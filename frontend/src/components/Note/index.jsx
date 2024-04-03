import { Container, Stars, Tags } from "./styles";
import { Tag } from "../../components/Tag";
import { FiStar } from "react-icons/fi"

import PropTypes from 'prop-types'


export function Note({ data, ...rest }) {
  Note.propTypes = {
    data: PropTypes.object
  }

  const emptyStars = 5 - data.rating

  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Stars>
        {[...Array(data.rating)].map((_, index) => (
          <FiStar key={index} className="fill" />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FiStar key={index} />
        ))}
      </Stars>

      <p>{data.description}</p>

      {data.tags &&
        <Tags>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} isNoteHome />)
          }
        </Tags>
      }
    </Container>
  );
}