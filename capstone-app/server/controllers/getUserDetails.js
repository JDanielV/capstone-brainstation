const express = require("express");
const app = express();
const fs = require("fs");

const getUserDetails = (id) => {
  const allData = fs.readFileSync("./model/data.json");

  const filteredUser = JSON.parse(allData).filter((user) => user.id === id);

  return filteredUser;
};

module.exports = getUserDetails;
