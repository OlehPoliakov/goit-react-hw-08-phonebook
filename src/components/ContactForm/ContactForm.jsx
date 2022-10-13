import Button from 'react-bootstrap/Button';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import GoBack from 'components/GoBack';
import styles from './ContactForm.module.scss';

export default function ContactForm({
  title,
  initialValues,
  onSubmitForm,
  validationSchema,
  buttonLabel,
}) {
  return (
    <>
      <GoBack text="Contact list" path="/contacts" />
      <p>{title}</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitForm}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.Label}>
              <span className={styles.Title}>Name</span>
              <Field
                className={styles.Input}
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Volodymyr Zelenskyy"
                title="Name may contain only letters, apostrophe, dash and spaces."
                value={values.name}
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
                onChange={handleChange}
                placeholder="937-99-92"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={values.number}
                required
              />
              <ErrorMessage
                name="number"
                render={message => <p className={styles.ErM}>{message}</p>}
              />
            </label>
            <Button
              variant="outline-primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? '...' : buttonLabel}
              <BsFillPersonPlusFill size={20} />
              <p>Add contact</p>
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
