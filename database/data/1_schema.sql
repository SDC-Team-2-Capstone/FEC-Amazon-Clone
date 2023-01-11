DROP TABLE IF EXISTS recommendations CASCADE;
DROP TABLE IF EXISTS amazon_qa CASCADE;

CREATE TABLE recommendations(
  id serial PRIMARY KEY,
  product_img text,
  product_name text,
  product_seller text,
  num_reviews int,
  operating_system text,
  price decimal,
  is_best_seller boolean,
  is_limited_time_deal boolean,
  is_prime_delivery boolean,
  limited_time_end text,
  is_offers decimal,
  is_climate_friendly boolean
);

CREATE TABLE amazon_qa (
  id serial PRIMARY KEY,
  question text NOT NULL,
  answer text NOT NULL,
  product_id int,
  date_posted text,
  rating int CHECK (
    rating >= 0
    AND rating <= 5
  )
);
