import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRefreshCurrentUser from 'hooks/useRefreshCurrentUser';
import Loader from 'components/Loader';
import AppBar from 'components/AppBar';
import AppFooter from 'components/AppFooter';
import { Box } from 'utils/Box';

const Layout = () => {
  const { isRefreshing } = useRefreshCurrentUser();
  return (
    <>
      <AppBar />

      <Box flex="1 1 auto">
        <Suspense fallback={<Loader />}>{!isRefreshing && <Outlet />}</Suspense>
      </Box>

      <AppFooter />
      <ToastContainer autoClose={3000} position="top-right" theme="colored" />
    </>
  );
};

export default Layout;
