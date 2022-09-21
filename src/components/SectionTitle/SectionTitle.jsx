import PropTypes from 'prop-types';
import { Section, Title, Length } from './SectionTitle.styled.jsx';

export default function SectionTitle({ title, children, ContactsLength }) {
  return (
    <Section>
      {title && (
        <Title>
          <Length>{ContactsLength} </Length>
          {title}
        </Title>
      )}
      {children}
    </Section>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
