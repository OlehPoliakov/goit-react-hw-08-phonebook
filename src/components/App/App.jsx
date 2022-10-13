import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
// import AddContactPage from '../../pages/AddContactPage/AddContactPage';

// const Home = lazy(() => import('pages/HomePage'));
// const Contacts = lazy(() => import('pages/ContactsPage'));
// const AddContactPage = lazy(() => import('pages/AddContactPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
const HomePage = lazy(() =>
  import('pages/HomePage/HomePage' /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import(
    'pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */
  )
);
const AddContactPage = lazy(() =>
  import(
    'pages/AddContactPage/AddContactPage' /* webpackChunkName: "addContact-page" */
  )
);
const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "register-page" */)
);
const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "login-page" */)
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/contacts">
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/contacts/add"
          element={
            <PublicRoute>
              <AddContactPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
