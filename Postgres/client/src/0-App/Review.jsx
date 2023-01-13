import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../1-Navbar/Navbar.jsx';
import styles from './App.module.css';
import CreateReview from '../6-ProductReviews/CreateReview.jsx';
import Footer from '../7-Footer/Footer.jsx';

function App() {
  const [reviews, setReviews] = useState([]);

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
        <div className={styles.centralCollumn}>
          <CreateReview setReviews={setReviews} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
