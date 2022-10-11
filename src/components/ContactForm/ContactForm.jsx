import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Report } from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import GoBack from 'components/GoBack';
import { contactSchema } from 'utils/validationSchema';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/api';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const navigate = useNavigate();

  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleSubmit = ({ name, number }) => {
    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : createContact({ name, number });

    Notify.success(`The ${name} has been added to your contact list.`);
    navigate('/contacts');
  };

  return (
    <>
      <GoBack text="Contact list" path="/contacts" />
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={contactSchema}
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
