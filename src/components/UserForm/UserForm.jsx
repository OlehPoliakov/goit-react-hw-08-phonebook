import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import userItem from 'components/UserItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './UserForm.module.scss';

export default function UserForm({
  onSubmitForm,
  initialValues,
  validationSchema,
  formType,
}) {
  const navigate = useNavigate();
  const show = useState(true);
  // UserForm
  return (
    <>
      <Modal show={show} onHide={() => navigate('/')}>
        <Modal.Header closeButton>
          <Modal.Title>{formType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            onSubmit={onSubmitForm}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form className={styles.form}>
              {Object.keys(initialValues).map(key =>
                userItem({ name: key, formType })
              )}
              <Modal.Footer>
                <Button variant="primary" type="submit">
                  {formType}
                </Button>
              </Modal.Footer>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
