const fs = require('fs');
const csvWriter = require('csv-write-stream');

// ============= generate prices for price and is_offers ============= //
function* generatePrice(numPrice) {
  for (let i = 0; i < numPrice; i++) {
    yield ((Math.random()*100).toFixed(2)).toString();
  }
}

const price = generatePrice(9000000);

// // ============== generate string for text data ======================== //
function* generateRandomStrings(numStrings, minLength, maxLength) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ   ';
  for (let j = 0; j < numStrings; j++) {
    let result = '';
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    yield result;
  }
}

const randomString = generateRandomStrings(9000000, 5, 20);

// ===================== create csv file and prep for writing =================
const writer = csvWriter({ headers: ['product_img', 'product_name', 'product_seller', 'num_reviews', 'operating_system', 'price', 'is_best_seller', 'is_limited_time_deal', 'is_prime_delivery', 'limited_time_end', 'is_offers', 'is_climate_friendly']});
writer.pipe(fs.createWriteStream('./data/recommendations.csv'));

// =============== generate data using results from previous generators =========
function* generateData(entries, randomString, price) {
  for (let i = 0; i < entries; i++){
    yield ({
      product_img: "imgs.jpg",
      product_name: randomString.next().value,
      product_seller: randomString.next().value,
      num_reviews: parseInt(price.next().value),
      operating_system: randomString.next().value,
      price: price.next().value,
      is_best_seller: false,  
      is_limited_time_deal: false,
      is_prime_delivery: true,
      limited_time_end: "2022-12-25T00:00:00.000Z",
      is_offers: price.next().value,
      is_climate_friendly: false
    });
  }
}

// ====== Call the generator function and write the generated data to the file ======
for (const product of generateData(3000000, randomString, price)) {
  writer.write(product);
}

// ============ Close the writable stream ================
writer.end();