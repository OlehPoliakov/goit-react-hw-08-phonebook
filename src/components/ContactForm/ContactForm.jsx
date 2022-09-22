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
  name: yup.string().min(3).max(20).required(),
  number: yup.number().min(3).required(),
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
      <FormContact autoComplete="off">
        <Label>
          Name
          <Input
            type="text"
            name="name"
            placeholder="Volodymyr Zelenskyy"
            id={nanoid()}
          />
          <ErrorMessage
            name="name"
            render={message => <ErrorText>{message}</ErrorText>}
          />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" placeholder="911" id={nanoid()} />
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
  name: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};
