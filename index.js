
const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv.slice(2);

const callback = function(err, description) {
  if (err) {
    console.log("Error Details: ", err);
  } else {
    console.log("Description: ", description)
  }
};

fetchBreedDescription(breed, callback);