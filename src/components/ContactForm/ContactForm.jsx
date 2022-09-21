import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormContact,
  Input,
  Label,
  ErrorText,
  Btn,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().max(15).required(),
  number: yup.string().min(5).required(),
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
          <Input type="text" name="name" id={nanoid()} />
          <ErrorMessage
            name="name"
            render={message => <ErrorText>{message}</ErrorText>}
          />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" id={nanoid()} />
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
