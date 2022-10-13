import { useDeleteContactMutation } from 'redux/contacts/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function useDeletingContact(id, name) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteSelectedContact = () => {
    deleteContact(id);
    Notify.success(`The ${name} has been removed from your contact list.`);
  };

  return { isDeleting, deleteSelectedContact };
}

export default useDeletingContact;
