import { motion, AnimatePresence } from 'framer-motion';
import Container from 'components/Container';
import { variants } from 'utils/motionVar';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <Container>
      <div className={styles.Wrapper}>
        <AnimatePresence>
          <motion.h1
            className={styles.Title}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
          >
            Welcome 👋
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence>
          <motion.p
            className={styles.Text}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
          >
            Now you will exactly not forget your contacts!
          </motion.p>
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default Home;
