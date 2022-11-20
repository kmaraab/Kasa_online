import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
  return (
    <Link key={id} to={`/location/${id}`}>
      <div
        className={styles.cardContainer}
        style={{
          backgroundImage: `url("${cover}")`,
        }}
      >
        <h3 className={`${styles.title}`}>{title}</h3>
      </div>
    </Link>
  );
}

export default Card;
