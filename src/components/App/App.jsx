import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import AddContactPage from '../../pages/AddContactPage/AddContactPage';

const Home = lazy(() =>
  import('pages/HomePage/HomePage' /* webpackChunkName: "home-page" */)
);
const Contacts = lazy(() =>
  import(
    'pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */
  )
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:contacts-add" element={<AddContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
