import UserForm from 'components/UserForm';
import userRegisterUser from 'hooks/useRegisterUser';
import { userRegisterSchema } from 'utils/validationSchema';

function RegisterPage() {
  const { onSubmitForm } = userRegisterUser();
  return (
    <UserForm
      onSubmitForm={onSubmitForm}
      validationSchema={userRegisterSchema}
      initialValues={{ name: '', email: '', password: '' }}
      formType="sign up"
    />
  );
}

export default RegisterPage;
