DROP TABLE IF EXISTS recommendations CASCADE;

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
  limited_time_end date,
  is_offers decimal,
  is_climate_friendly boolean
)
