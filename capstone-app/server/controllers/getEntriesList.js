const express = require("express");
const app = express();
const fs = require("fs");

const getEntriesList = (id) => {
  const entryData = fs.readFileSync("./model/data.json");

  const filteredEntries = JSON.parse(entryData).filter(
    (user) => user.id === id
  );

  entriesPerUser = filteredEntries[0].entries;

  return entriesPerUser;
};

module.exports = getEntriesList;
