const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, function(error, response, body) {
    if (error) {
      callback(error);
      // console.error('error:', error); // Print the error if one occurred
    }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    
    const data = JSON.parse(body);
    if (!data[0]) {
      callback("Breed not found");
    } else {
      callback(null, data[0].description);
      // console.log(data[0].description);
      // console.log(typeof data);
    }
  });

}

module.exports = {fetchBreedDescription};

