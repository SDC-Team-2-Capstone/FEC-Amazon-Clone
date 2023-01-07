INSERT INTO
  recommendations(
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
    is_climate_friendly) VALUES(
    'THIS IS NEW THIS IS',
    'Xbox Series S - Holiday Console',
    'Xbox',
    189,
    'Xbox Series S',
    239.99,
    false,
    false,
    TRUE,
    '2022-12-25',
    249.99,
    false);

INSERT INTO
  recommendations(
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
    is_climate_friendly) VALUES(
    '../recs-imgs/2.jpg',
    'Xbox Elite Wireless Controller Series 2 – Black',
    'Xbox',
    29769,
    'Xbox One, Xbox Series S',
    154.99,
    false,
    false,
    TRUE,
    '2022-12-25',
    300,
    false
  );

COPY recommendations 
(product_img,
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
    FROM './names.txt' WITH (FORMAT CSV); 
