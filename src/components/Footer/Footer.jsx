import Logo from "../../assets/images/LOGO.png";
import styles from "./Footer.module.scss";

function Footer (){

    return (
        <footer className={`${styles.backgroundColor} ${styles.content} d-flex flex-column align-items-center p-10`}>
            <img className={styles.logo} src={Logo} alt="Logo-Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer