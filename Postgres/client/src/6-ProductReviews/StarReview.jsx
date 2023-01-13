import ReactStars from 'react-rating-stars-component';
import React from 'react';

export default function StarRating(props) {
  const starSettings = {
    count: 5,
    size: 30,
    isHalf: false,
    value: props.currentRating,
    color: 'grey',
    activeColor: '#e77600',
    onChange: (newValue) => {
      props.setCurrentRating(newValue);
    },
  };
  return (
    <div className="App">
      <ReactStars {...starSettings} />
    </div>
  );
}
