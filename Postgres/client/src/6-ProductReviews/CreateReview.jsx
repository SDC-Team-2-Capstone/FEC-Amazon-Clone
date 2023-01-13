import { useState } from 'react';
import StarReview from './StarReview';
import './ProductReview.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CreateReview = (props) => {
  const [currentOverallRating, setCurrentOverallRating] = useState(5);
  const [headline, setHeadline] = useState('');
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const handleHeadlineChange = (event) => {
    setHeadline(event.target.value);
    console.log(headline);
  };
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    let newReview = {};
    newReview.title = headline;
    newReview.body = review;
    newReview.rating = currentOverallRating;
    newReview.username = name;
    let d = new Date();
    newReview.datecreated = d.toLocaleDateString();
    props.setReviews((prev) => [...prev, newReview]);

    fetch('http://localhost:8000/reviews', {
      method: 'POST',
      body: JSON.stringify(newReview),
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err.stack));
  };

  return (
    <div className="create-review">
      <h2>Create Review</h2>
      <div className="rating-line">
        <h4>Overall Rating:</h4>
        <StarReview currentRating={currentOverallRating} setCurrentRating={setCurrentOverallRating} />
        <div className="spacer"></div>
        <Link to="/" className="back-button button">
          Back
        </Link>
      </div>
      <div>
        <div className="deviderLine"></div>
      </div>
      <h4>Review Title</h4>
      <input
        type="input"
        onChange={(e) => handleHeadlineChange(e)}
        style={{ width: '650px' }}
        placeholder={`What's the most important thing to know?`}
      />
      <div></div>
      <div>
        <h4>Add Written Review</h4>

        <textarea onChange={(e) => handleReviewChange(e)} style={{ height: '150px', width: '650px' }}></textarea>
      </div>
      <div>
        <h4>Choose your public name</h4>
        <span>This is how you'll appear to other customers</span>
        <br />

        <input onChange={(e) => handleNameChange(e)} style={{ width: '650px' }}></input>
        <br />
        <span>Don't worry, you can always change this on your profile</span>
      </div>
      <Link to="/" onClick={handleSubmit} className="submitReview button">
        Submit
      </Link>
    </div>
  );
};

export default CreateReview;
