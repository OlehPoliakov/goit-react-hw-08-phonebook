import { Field, ErrorMessage } from 'formik';
import styles from './UserItem.module.scss';

export default function userInput({ name, formType }) {
  const getType = () => {
    switch (name) {
      case 'name':
        return 'text';

      case 'email':
        return 'email';

      case 'password':
        return 'password';

      default:
        return 'text';
    }
  };

  const getTitle = () => {
    switch (name) {
      case 'name':
        return 'What is your name?';

      case 'email':
        return 'Your e-mail adress?';

      case 'password':
        return formType === 'login' ? 'Your password?' : 'Create a password!';

      default:
        return 'text';
    }
  };
  // Input UserForm
  return (
    <label className={styles.Label} key={name}>
      <span className={styles.Title}>{getTitle()}</span>
      <Field className={styles.Input} type={getType()} name={name} />
      <ErrorMessage
        name={name}
        render={message => <p className={styles.ErM}>{message}</p>}
      />
    </label>
  );
}
