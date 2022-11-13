import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { NavLink } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

function ErrorPage () {
    return(
        <>
            <Header/>
            <div className={`d-flex flex-column justify-content-center align-items-center ${styles.contentContainer}`}>
                <h2 className={styles.errorType}>404</h2>
                <p className={styles.errorMessage}>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink className={styles.backToHome} to="/">Retourner sur la page d’accueil</NavLink>
            </div>
            <Footer/>
        </>
    )
}

export default ErrorPage