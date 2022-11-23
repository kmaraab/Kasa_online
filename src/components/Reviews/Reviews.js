import styles from './Reviews.module.scss';

function Reviews({ level }) {
  const tabEtoile = [1, 2, 3, 4, 5];

  return tabEtoile.map((elem) =>
    level >= elem ? (
      <i
        key={elem.toString()}
        className={`${styles.etoilePleine} fa-solid fa-star`}
      ></i>
    ) : (
      <i key={elem.toString()} className="fa-solid fa-star"></i>
    )
  );
}

export default Reviews;
