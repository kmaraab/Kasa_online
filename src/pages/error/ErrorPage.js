import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <>
      <Header />
      <div
        className={`d-flex flex-column justify-content-center align-items-center ${styles.contentContainer}`}
      >
        <h2 className={styles.errorType}>404</h2>
        <p className={styles.errorMessage}>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className={styles.backToHome} to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
