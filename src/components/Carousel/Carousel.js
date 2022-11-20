import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import styles from './Carousel.module.scss';
import './Carousel.css';
function Carousels({ dataImg }) {
  return (
    <Carousel>
      {dataImg.map((slide) => (
        <div>
          <img src={slide} alt="" />
        </div>
      ))}
    </Carousel>
  );
}
export default Carousels;
