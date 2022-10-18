import UserForm from 'components/UserForm';
import useLoginUser from 'hooks/useLoginUser';
import { userLoginSchema } from 'utils/validationSchema';

function LoginPage() {
  const { onSubmitForm } = useLoginUser();

  return (
    <UserForm
      onSubmitForm={onSubmitForm}
      validationSchema={userLoginSchema}
      initialValues={{ email: '', password: '' }}
      formType="login"
    />
  );
}

export default LoginPage;
