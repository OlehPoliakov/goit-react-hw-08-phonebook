import { Report } from 'notiflix/build/notiflix-report-aio';
import ContactForm from 'components/ContactForm';

import { contactSchema } from 'utils/validationSchema';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';

function AddContactPage() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const checkAddingContacts = name => {
    return state.contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
  };

  const setValueSubmitForm = data => {
    if (checkAddingContacts(data.name)) {
      Report.info(`${data.name} is already in contacts!`);
      return;
    }
    dispatch(addContacts(data));
  };

  return (
    <ContactForm
      submitForm={setValueSubmitForm}
      validationSchema={contactSchema}
    />
  );
}

export default AddContactPage;
