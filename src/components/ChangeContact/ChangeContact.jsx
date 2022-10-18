import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//
import ContactForm from 'components/ContactForm';
// import useChangeContactForm from 'hooks/useChangeContactForm';
import { contactSchema } from 'utils/validationSchema';
import { useParams, useNavigate } from 'react-router-dom';
import {
  useChangeContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function ChangeContact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  let currentContact = null;
  let initialValues = null;

  const { contactId } = useParams();
  const navigate = useNavigate();

  const [chengeContact] = useChangeContactMutation();
  const { data: contacts } = useGetContactsQuery();

  // console.log(useChangeContactMutation());
  // console.log(useGetContactsQuery());

  if (contacts) {
    currentContact = contacts.find(({ id }) => id === contactId);

    initialValues = {
      name: currentContact.name,
      number: currentContact.number,
    };
  }

  const onSubmitForm = values => {
    if (JSON.stringify(values) === JSON.stringify(initialValues)) {
      Notify.warning('Try to change something first.');
      return;
    }
    chengeContact({ contactId, ...values });
    navigate('/contacts');
    Notify.success('The contact has been successfully changed.');
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        c
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm
            // title={`Edit Contact ${initialValues.name}`}
            initialValues={initialValues}
            onSubmitForm={onSubmitForm}
            validationSchema={contactSchema}
            buttonLabel="Change contact"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
