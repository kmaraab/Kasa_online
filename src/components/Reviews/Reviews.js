import { useState } from 'react';

function Reviews({ level }) {
  const [reviews, setReviews] = useState([]);
  const etoileVide = 5 - level;

  for (let i = 0; i < level; i++) {
    setReviews([
      ...reviews,
      '<i className="fa-solid fa-star" style={{ color: "#FF6060l }}></i>',
    ]);
  }
  for (let j = 0; j < etoileVide; j++) {
    setReviews([...reviews, '<i className="fa-solid fa-star"></i>']);
  }

  return <>{console.log(reviews)}</>;
}

export default Reviews;
