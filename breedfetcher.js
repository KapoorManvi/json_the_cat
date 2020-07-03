const request = require('request');
const breed = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, function(error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log("Sorry, that breed does not exist.");
  } else {
    console.log(data[0].description);
    console.log(typeof data);
  }
});
