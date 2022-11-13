import { useState } from 'react'
import Arrow from '../../assets/images/arrow.png'
import styles from './Toogle.module.scss'

function Toogle({ title, description }) {
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
        {title}
        <img
          className={visible ? `${styles.rotateArrow}` : ''}
          src={Arrow}
          alt="arrow"
        />
      </h2>
      {visible && <p className={styles.description}>{description}</p>}
    </div>
  )
}

export default Toogle
