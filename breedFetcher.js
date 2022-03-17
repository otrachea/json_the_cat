const request = require("request");

const requestBreed = (breed) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if (error) {
      console.log(`Error: ${error}`);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed not found");
      return;
    }

    console.log(data[0].description);

  });
};

requestBreed(process.argv[2]);