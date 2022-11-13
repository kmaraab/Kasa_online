import { useState } from 'react'
import Arrow from '../../assets/images/arrow.png'
import styles from './EquipementToogle.module.scss'

function EquipementToogle() {
  const [visible, setVisible] = useState(false)

  function handleClick() {
    setVisible(!visible)
  }

  return (
    <div>
      <h2
        onClick={handleClick}
        className={`${styles.titleContent} d-flex justify-content-spacebetween align-items-center`}
      >
        Test
        <img
          className={visible ? `${styles.rotateArrow}` : ''}
          src={Arrow}
          alt="arrow"
        />
      </h2>
      {visible && <p className={styles.description}>Test</p>}
    </div>
  )
}

export default EquipementToogle
