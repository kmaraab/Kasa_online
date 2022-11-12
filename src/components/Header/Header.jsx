import Logo from "../../assets/images/LOGO-1.png";
import styles from "./Header.module.scss";

function Header (){
    return(
        <header className="d-flex justify-content-spacebetween mt-40 mx-100 mb-20">
            <img className={styles.logo} src={Logo} alt="Logo-Kasa" />
            <div className= {`${styles.linkHeader} d-flex`}>
                <p style={{marginRight : '20px'}}>Accueil</p>
                <p>A propos</p>
            </div>
        </header>
    )
}

export default Header