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
const writeStream = fs.createWriteStream("./data/amazon_qa.csv", {
  flags: "a",
});
writer.pipe(writeStream);

function* generateQa(entries, randomString, price) {
  for (let i = 0; i < entries; i++) {
    yield {
      question: randomString.next().value,
      answer: randomString.next().value,
      product_id: parseInt(price.next().value),
      date_posted: new Date(),
      rating: null,
    };
  }
}

for (const qa of generateQa(10000, randomString, price)) {
  writer.write(qa);
  // counter++;
  // if(counter % chunkSize === 0)
  // writeStream.write('', 'utf8', () => {})
  // global.gc();
}

// ============ Close the writable stream ================
writer.end();
