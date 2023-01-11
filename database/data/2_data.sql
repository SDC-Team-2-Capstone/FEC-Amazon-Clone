INSERT INTO recommendations
  (product_img, product_name, product_seller, num_reviews,
  operating_system, price, is_best_seller, is_limited_time_deal,
  is_prime_delivery, limited_time_end, is_offers, is_climate_friendly) 
VALUES
  ('THIS IS NEW THIS IS', 'Xbox Series S - Holiday Console', 'Xbox', 189, 
  'Xbox Series S', 239.99, false, false, TRUE, '2022-12-25', 249.99, false),
  ('../recs-imgs/2.jpg', 'Xbox Elite Wireless Controller Series 2 – Black',
  'Xbox', 29769, 'Xbox One, Xbox Series S', 154.99, false, false, TRUE, '2022-12-25',
  300, false);

INSERT INTO amazon_qa 
  (question, answer, product_id, date_posted, rating)
VALUES 
  (
    'Can the Xbox controller control my cats mind?',
    'Absolutely! The Xbox controller has advanced mind control technology that 
    can make your cat do your bidding. Just make sure to press the correct buttons 
    in the correct order, and your feline friend will be at your beck and call.',
    1, CURRENT_TIMESTAMP, 5
  ),
  (
    'Is this product compatible with bluetooth capabilities?',
    'Yes, it is compatible with bluetooth capabilities.', 1, CURRENT_TIMESTAMP, 2
  ),
  (
    'Is this product made from organic materials?',
    'No, it is not made from organic materials.',
    1, CURRENT_TIMESTAMP, 1
  ),
  (
    'Will this product make me happy?',
    'Yes, it comes included with two joysticks',
    1, CURRENT_TIMESTAMP, 5
  ),
  (
    'Is the Xbox controller capable of solving world peace?',
    'Absolutely! With its state-of-the-art button-pressing technology, 
    the Xbox controller is sure to bring harmony to even the most tumultuous 
    of international relations. Just make sure to press the correct buttons 
    in the correct order, and world peace is guaranteed.', 1, CURRENT_TIMESTAMP, 5
  ),
  (
    'What is the weight of this product?', 'The weight is 2 lbs, its a thicc boy.',
    1, CURRENT_TIMESTAMP, 3
  );


-- copy data from the /data/names.csv file into database
-- the schema is required here as well as HEADER because 
-- in the csv file, the first line is the schema
COPY recommendations (
  product_img,
  product_name,
  product_seller,
  num_reviews,
  operating_system,
  price,
  is_best_seller,
  is_limited_time_deal,
  is_prime_delivery,
  limited_time_end,
  is_offers,
  is_climate_friendly)
  FROM '/data/recommendations.csv' CSV; 

COPY amazon_qa (
  question,
  answer,
  product_id,
  date_posted,
  rating)
  FROM '/data/amazon_qa.csv' CSV;


