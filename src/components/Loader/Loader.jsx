import { RotatingLines } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.scss';

export default function Loader({ width }) {
  return (
    <div className={styles.overlay}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </div>
  );
}
