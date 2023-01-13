const fs = require("fs");
const csvWriter = require("csv-write-stream");

// ============= generate prices for price and is_offers ============= //
function* generatePrice(numPrice) {
  for (let i = 0; i < numPrice; i++) {
    yield (Math.random() * 100).toFixed(2).toString();
  }
}

const price = generatePrice(30000);

// // ============== generate string for text data ======================== //
function* generateRandomStrings(numStrings, minLength, maxLength) {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ   ";
  for (let j = 0; j < numStrings; j++) {
    let result = "";
    const length =
      Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    yield result;
  }
}

const randomString = generateRandomStrings(30000, 5, 20);

// ===================== create csv file and prep for writing =================
const writer = csvWriter({ sendHeaders: false });
const writeStream = fs.createWriteStream("./data/recommendations.csv", {
  flags: "a",
});
writer.pipe(writeStream);

// =============== generate data using results from previous generators =========
// const chunkSize = 100000;

function* generateRecs(entries, randomString, price) {
  for (let i = 0; i < entries; i++) {
    yield {
      product_img: "imgs.jpg",
      product_name: randomString.next().value,
      product_seller: randomString.next().value,
      num_reviews: parseInt(price.next().value),
      operating_system: randomString.next().value,
      price: price.next().value,
      is_best_seller: false,
      is_limited_time_deal: false,
      is_prime_delivery: true,
      limited_time_end: new Date(),
      is_offers: price.next().value,
      is_climate_friendly: false,
    };
  }
}

// ====== Call the generator function and write the generated data to the file ======
// let counter = 0;
for (const product of generateRecs(10000, randomString, price)) {
  writer.write(product);
  // counter++;
  // if(counter % chunkSize === 0)
  // writeStream.write('', 'utf8', () => {})
  // global.gc();
}

// ============ Close the writable stream ================
writer.end();
