const fs = require("fs");

const getEntryDetails = (id, entryId) => {
  const entryData = fs.readFileSync("./model/data.json");

  const filteredEntries = JSON.parse(entryData).filter(
    (user) => user.id === id
  );

  entriesPerUser = filteredEntries[0].entries;

  const filteredEntry = entriesPerUser.filter(
    (entry) => entry.entryId === entryId
  );

  return filteredEntry[0];
};

module.exports = getEntryDetails;
