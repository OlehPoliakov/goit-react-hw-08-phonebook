// import PropTypes from 'prop-types';
// import {} from './Filter.styled.jsx';

export default function Filter({ value, onChange }) {
  return (
    <label>
      Filter Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
