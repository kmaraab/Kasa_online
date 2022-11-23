import { useState } from 'react';
import Arrow from '../../assets/images/arrow.png';
import styles from './EquipementToogle.module.scss';

function EquipementToogle({ title, description }) {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(!visible);
  }

  return (
    <div>
      <h2
        onClick={handleClick}
        className={`${styles.titleContent} d-flex justify-content-spacebetween align-items-center`}
      >
        Equipements
        <img
          className={visible ? `${styles.rotateArrow}` : ''}
          src={Arrow}
          alt="arrow"
        />
      </h2>
      {visible && (
        <div className={styles.content}>
          <ul>{description}</ul>
        </div>
      )}
    </div>
  );
}

export default EquipementToogle;
