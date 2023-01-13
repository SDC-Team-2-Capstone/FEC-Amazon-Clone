import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../1-Navbar/Navbar.jsx';
import AmazonQA from '../4-Q&A/q&a.jsx';
import Preview from '../3-ImagePreview/Preview.jsx';
import styles from './App.module.css';
import RecsSection from '../5-Recommendations/RecsSection.jsx';
import ReviewsComponent from '../6-ProductReviews/ReviewsComponent.jsx';
import CarouselOne from '../2-Carousel/HomeCarousel.jsx';
import Footer from '../7-Footer/Footer.jsx';

function App() {
  const [reviews, setReviews] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);

  const [basketCount, setBasketCount] = useState(0);

  // fetch and post reviews
  useEffect(() => {
    fetch('https://fec-amazon-back-end.onrender.com/Amazon/reviews')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.error(err.stack));
  }, []);

  return (
    <div className={styles.App}>
      <Navbar count={basketCount} />
      <div className={styles.main}>
        {!reviewMode && <CarouselOne />}
        <div className={styles.centralCollumn}>
          <>
            <Preview />
            <div className={styles.divider}></div>
            <RecsSection />
            <div className={styles.divider}></div>
            <AmazonQA />
            <div className={styles.divider}></div>
            <ReviewsComponent reviews={reviews} setReviewMode={setReviewMode} />
            <div className={styles.divider}></div>
          </>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
