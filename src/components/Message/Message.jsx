import PropTypes from 'prop-types';
import { Paragraph } from './Message.styled.jsx';

export default function Message({ text }) {
  return <Paragraph>{text}</Paragraph>;
}

Message.prototype = {
  text: PropTypes.string.isRequired,
};
