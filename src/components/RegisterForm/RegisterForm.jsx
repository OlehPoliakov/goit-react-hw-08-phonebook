import { Formik, Form, Field, ErrorMessage } from 'formik';
import useRegisterUser from 'hooks/useRegisterUser';
import { userRegisterSchema } from 'utils/validationSchema';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './RegisterForm.module.scss';

export default function RegisterForm() {
  const { onSubmitForm } = useRegisterUser();
  const navigate = useNavigate();
  const show = useState(true);

  return (
    <>
      <Modal show={show} onHide={() => navigate('/')}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={onSubmitForm}
            validationSchema={userRegisterSchema}
          >
            {({ name, email, password, handleChange, handleSubmit }) => (
              <Form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.Label}>
                  <span className={styles.Title}>What is your name?</span>
                  <Field
                    className={styles.Input}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={name}
                  />
                  <ErrorMessage
                    name="name"
                    render={message => <p className={styles.ErM}>{message}</p>}
                  />
                </label>
                <label className={styles.Label}>
                  <span className={styles.Title}>Your e-mail adress?</span>
                  <Field
                    className={styles.Input}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                  />
                  <ErrorMessage
                    name="email"
                    render={message => <p className={styles.ErM}>{message}</p>}
                  />
                </label>
                <label className={styles.Label}>
                  <span className={styles.Title}>Create a password.</span>
                  <Field
                    className={styles.Input}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                  />
                  <ErrorMessage
                    name="password"
                    render={message => <p className={styles.ErM}>{message}</p>}
                  />
                </label>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Sign up
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
