import Logo from "../../assets/images/LOGO-1.png";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header (){
    return(
        <header className="d-flex justify-content-spacebetween align-items-center mt-40 mx-100 mb-20">
            <img className={styles.logo} src={Logo} alt="Logo-Kasa" />
            <ul className= {`${styles.linkHeader} d-flex`}>
                <NavLink className={({isActive})=> (isActive ? `link-active` : "")} to="/" style={{marginRight : '20px'}}>Accueil</NavLink>
                <NavLink className={({isActive})=> (isActive ? `link-active` : "")} to="/apropos">A propos</NavLink>
            </ul>
        </header>
    )
}

export default Header