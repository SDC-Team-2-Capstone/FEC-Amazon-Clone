const { Client } = require('pg');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const client = new Client({
  user: 'postgres',
  host: 'database',
  database: 'my_db',
  password: 'pass',
  port: 5432,
});

client.connect();

const randomName = () => {
  const adjectives = ['small', 'big', 'happy', 'sad', 'blue', 'red'];
  const nouns = ['dog', 'cat', 'car', 'house', 'tree', 'flower'];
  return `${adjectives[Math.floor(Math.random() * adjectives.length)]}_${nouns[Math.floor(Math.random() * nouns.length)]}`;
};

// Create a CSV file with the names
const csvWriter = createCsvWriter({
  path: 'names.csv',
  header: [
    { id: 'product_img', title: 'Product_img' },
    { id: 'product_name', title: 'Product_name' },
    { id: 'product_seller', title: 'Product_seller' },
    { id: 'num_reviews', title: 'Num_reviews' },
    { id: 'operating_system', title: 'Operating_system' },
    { id: 'price', title: 'Price' },
    { id: 'is_best_seller', title: 'Is_best_seller' },
    { id: 'is_limited_time_deal', title: 'Is_limited_time_deal' },
    { id: 'is_prime_delivery', title: 'Is_prime_delivery' },
    { id: 'limited_time_end', title: 'Limited_time_end' },
    { id: 'is_offers', title: 'Is_offers' },
    { id: 'is_climate_friendly', title: 'Is_climate_friendly' },
  ],
});

const records = [];
for (let i = 0; i < 100; i++) {
  records.push({
    product_img: "imgs.jpg",
    product_name: "Xbox Series S - Holiday Console",
    product_seller: "Xbox",
    num_reviews: 189,
    operating_system: "Xbox Series S",
    price: "239.99",
    is_best_seller: false,
    is_limited_time_deal: false,
    is_prime_delivery: true,
    limited_time_end: "2022-12-25T00:00:00.000Z",
    is_offers: "249.99",
    is_climate_friendly: false
  });
}

csvWriter.writeRecords(records).then(() => {
  console.log('Done writing CSV file');
});

// Load the CSV file into the database
client.query(`COPY recommendations ( id, product_img, product_name, product_seller, num_reviews,
operating_system, price, is_best_seller, is_limited_time_deal, is_prime_delivery,
limited_time_end, is_offers, is_climate_friendly) FROM 'back-end/names.csv' WITH (FORMAT csv)`, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
});
