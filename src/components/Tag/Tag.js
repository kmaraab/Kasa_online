import styles from './Tag.module.scss'

function Tag({ content }) {
  return <div className={styles.tagContenair}>{content}</div>
}

export default Tag
