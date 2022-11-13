import Thumb from "../../components/Thumb/Thumb";
import styles from "./Accueil.module.scss";
import { useEffect, useState } from "react";

function Accueil (){
    const [dataLocations, setDataLocations] = useState([]);

    useEffect(()=>{
        async function fetchDataLocations (){
            try{
                const response = await fetch("data/logements.json");
                if(response.ok){
                    const data = await response.json();
                    console.log(data);
                    setDataLocations(data);
                }
                else{
                    console.log("Erreur 1")    
                }
            }catch(e){
                console.log("Erreur")
            }
        }
        fetchDataLocations();
    }, [])


    return(
        <div>
            <div className={`${styles.maskGroup} d-flex justify-content-center align-items-center mx-100 mb-20`}>
                <p className={styles.maskGroupTitle}>Chez vous, partout et ailleurs</p>
            </div>
            <section className={`${styles.thumbFullContainer} mx-100`}>
                {dataLocations.map(value => <Thumb id={value.id} title={value.title} cover={value.cover}/>)}
            </section>
        </div>
    )
}

export default Accueil