import styles from "./Thumb.module.scss";
import { Link } from "react-router-dom";

function Thumb ({id, title, cover}){
    return(
        <Link to={`/location/${id}`}>
            <div className={styles.thumbContainer} style={{
                backgroundImage: `url("${cover}")`,
            }}>
                <h3 className={`${styles.title}`}>{title}</h3>
            </div>
        </Link>
    )
}

export default Thumb