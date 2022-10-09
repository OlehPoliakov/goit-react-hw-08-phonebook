import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container';
import Loader from 'components/Loader';
import AppBar from 'components/AppBar';
// import AppFooter from 'components/AppFooter';

const Layout = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={3000} position="top-right" theme="colored" />
      </Container>
      {/* <AppFooter /> */}
    </>
  );
};

export default Layout;
