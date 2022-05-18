require("dotenv").config();
const axios = require("axios");

const { API_KEY } = process.env;

exports.handler = async function (event) {
  const keyword = JSON.parse(event.body);
  const result = await axios(
    `https://www.omdbapi.com?apikey=${API_KEY}&s=${keyword}`
  );
  return {
    statusCode: 200,
    body: JSON.stringify(result.data),
  };
};
