import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormContact,
  Input,
  Label,
  ErrorText,
  Btn,
} from './ContactForm.styled.jsx';

const schema = yup.object().shape({
  name: yup.string().min(3).max(15).required(),
  number: yup.string().min(3).max(12).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormContact autoComplete="on">
        <Label>
          Name
          <Input
            id={nanoid()}
            type="text"
            name="name"
            placeholder="Volodymyr Zelenskyy"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <ErrorMessage
            name="name"
            render={message => <ErrorText>{message}</ErrorText>}
          />
        </Label>
        <Label>
          Number
          <Input
            id={nanoid()}
            type="tel"
            name="number"
            placeholder="937-99-92"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
          <ErrorMessage
            name="number"
            render={message => <ErrorText>{message}</ErrorText>}
          />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </FormContact>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
