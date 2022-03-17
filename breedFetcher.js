const request = require("request");

const fetchBreedDescription = (breed, f) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if (error) {
      f(`Error: ${error}`, null);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      f("Breed not found", null);
      return;
    }

    f(null, data[0].description);

  });
};

module.exports = { fetchBreedDescription };