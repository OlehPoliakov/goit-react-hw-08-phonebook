import styles from './Message.module.scss';

function Message() {
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Text}>Contact list is empty.</p>
    </div>
  );
}

export default Message;
