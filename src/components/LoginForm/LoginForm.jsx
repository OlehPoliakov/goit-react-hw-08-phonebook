import { Formik, Form, Field, ErrorMessage } from 'formik';
import useLoginUser from 'hooks/loginUser';
import { userLoginSchema } from 'utils/validationSchema';

export default function RegisterForm() {
  const { onSubmitForm } = useLoginUser();

  return (
    <>
      <h2>Login</h2>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmitForm}
        validationSchema={userLoginSchema}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>
              <span>Your e-mail adress?</span>
              <Field
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              <ErrorMessage name="email" render={message => <p>{message}</p>} />
            </label>
            <label>
              <span>Your password?</span>
              <Field
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              <ErrorMessage
                name="password"
                render={message => <p>{message}</p>}
              />
            </label>
            <button type="submit">{isSubmitting ? '...' : 'Login'}</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
