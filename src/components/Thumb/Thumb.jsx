import styles from "./Thumb.module.scss";
import { NavLink } from "react-router-dom";

function Thumb ({id, title, cover}){
    return(
        <NavLink to={`/location/${id}`}>
            <div className={styles.thumbContainer} style={{
                backgroundImage: `url("${cover}")`,
            }}>
                <h3 className={`${styles.title}`}>{title}</h3>
            </div>
        </NavLink>
    )
}

export default Thumb