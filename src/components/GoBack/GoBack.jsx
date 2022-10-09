import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './GoBack.module.scss';

function GoBack({ text, path }) {
  const navigate = useNavigate();
  const goToPage = () => navigate(path);

  return (
    <Button className={styles.Button} type="button" onClick={goToPage}>
      <FaLongArrowAltLeft />
      <span className={styles.Label}>{text}</span>
    </Button>
  );
}

GoBack.prototype = {
  label: propTypes.string,
  path: propTypes.string,
};

export default GoBack;
