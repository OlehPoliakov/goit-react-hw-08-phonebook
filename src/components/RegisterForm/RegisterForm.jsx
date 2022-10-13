import { Formik, Form, Field, ErrorMessage } from 'formik';
import useRegistrUser from 'hooks/registerUser';
import { userRegisterSchema } from 'utils/validationSchema';

export default function RegisterForm() {
  const { onSubmitForm } = useRegistrUser();

  return (
    <>
      <h2>Registration</h2>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={onSubmitForm}
        validationSchema={userRegisterSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>
              <span>What is your name?</span>
              <Field
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              <ErrorMessage
                name="number"
                render={message => <p>{message}</p>}
              />
            </label>
            <label>
              <span>Your e-mail adress?</span>
              <Field
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              <ErrorMessage
                name="number"
                render={message => <p>{message}</p>}
              />
            </label>
            <label>
              <span>Create a password.</span>
              <Field
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              <ErrorMessage
                name="number"
                render={message => <p>{message}</p>}
              />
            </label>
            <button type="submit">
              {isSubmitting ? '...' : 'Registration'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
