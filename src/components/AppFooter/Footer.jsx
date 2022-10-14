import { BsBookHalf } from 'react-icons/bs';
import { Box } from 'utils/Box';

function AppFooter() {
  return (
    <Box textAlign="center" p={20}>
      <footer>
        <BsBookHalf />
        <p>© Phonebook 2022</p>
      </footer>
    </Box>
  );
}

export default AppFooter;
