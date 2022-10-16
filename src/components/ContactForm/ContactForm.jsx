import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Container from 'components/Container';
import GoBack from 'components/GoBack';
import styles from './ContactForm.module.scss';

export default function ContactForm({
  initialValues,
  onSubmitForm,
  validationSchema,
  buttonLabel,
}) {
  return (
    <Container>
      <GoBack text="Contact list" path="/contacts" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitForm}
      >
        {({ name, number, handleChange, handleSubmit, isSubmitting }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.Label}>
              <span className={styles.Title}>Name</span>
              <Field
                className={styles.Input}
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Volodymyr Zelenskyy"
                value={name}
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
                value={number}
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
              <BsFillPersonPlusFill size={20} />
              {isSubmitting ? '...' : buttonLabel}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

ContactForm.propTypes = {
  title: PropTypes.string,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onSubmitForm: PropTypes.func,
  validationSchema: PropTypes.shape({
    name: PropTypes.func,
    number: PropTypes.func,
  }),
  buttonLabel: PropTypes.string,
};
