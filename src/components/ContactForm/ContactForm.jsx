import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import GoBack from 'components/GoBack';
import { useNavigate } from 'react-router-dom';
import styles from './ContactForm.module.scss';

export default function ContactForm({ submitForm, validationSchema }) {
  const id = nanoid();
  const navigate = useNavigate();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const newContact = {
      id,
      name,
      number,
    };
    submitForm(newContact);
    resetForm();

    navigate('/contacts');
  };

  return (
    <>
      <GoBack text="Contact list" path="/contacts" />
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.Label}>
            <span className={styles.Title}>Name</span>
            <Field
              className={styles.Input}
              type="text"
              name="name"
              placeholder="Volodymyr Zelenskyy"
              title="Name may contain only letters, apostrophe, dash and spaces."
              required
            />
            <ErrorMessage
              name="name"
              render={message => <p className={styles.ErM}>{message}</p>}
            />
          </label>
          <label className={styles.Label}>
            <span className={styles.Title}>Number</span>
            <Field
              className={styles.Input}
              type="tel"
              name="number"
              placeholder="937-99-92"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage
              name="number"
              render={message => <p className={styles.ErM}>{message}</p>}
            />
          </label>
          <Button variant="outline-primary" type="submit">
            <BsFillPersonPlusFill size={20} />
            <p>Add contact</p>
          </Button>
        </Form>
      </Formik>
    </>
  );
}

ContactForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
