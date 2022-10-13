import ContactForm from 'components/ContactForm';
import useCreateNewContact from 'hooks/createNewContact';
import { contactSchema } from 'utils/validationSchema';

function AddContactPage() {
  const initialValues = { name: '', number: '' };
  const newContact = useCreateNewContact();

  return (
    <ContactForm
      title="Add new contact"
      initialValues={initialValues}
      onSubmitForm={newContact}
      validationSchema={contactSchema}
      buttonLabel="Add contact"
    />
  );
}

export default AddContactPage;
