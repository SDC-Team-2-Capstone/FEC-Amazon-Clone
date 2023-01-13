import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeCarousel.css';
import Carousel from 'react-bootstrap/Carousel';

function CarouselOne() {
  return (
    <Carousel className='Carousel-div' fade>
      <Carousel.Item>
        <img className="d-block w-100" src="./carousel-images/amazon2.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./carousel-images/amazon3.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./carousel-images/amazon4.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselOne;
