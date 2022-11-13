import Thumb from "../../components/Thumb/Thumb";
import styles from "./Accueil.module.scss";

function Accueil (){
    return(
        <div>
            <div className={`${styles.maskGroup} d-flex justify-content-center align-items-center mx-100 mb-20`}>
                <p className={styles.maskGroupTitle}>Chez vous, partout et ailleurs</p>
            </div>
            <section className={`${styles.thumbFullContainer} mx-100`}>
                <Thumb id="1234" title="Titre de la location" cover="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"/>
            </section>
        </div>
    )
}

export default Accueil