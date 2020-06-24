const fs = require("fs");

const deleteEntry = (id, entryId) => {
  const feedback = {};

  const rawData = fs.readFileSync("./model/data.json");
  const allData = JSON.parse(rawData);

  const userIndex = allData.findIndex((user) => user.id === id);
  const entryIndex = allData[userIndex].entries.findIndex(
    (entry) => entry.entryId === entryId
  );

  allData[userIndex].entries.splice(entryIndex, 1);

  fs.writeFileSync("./model/data.json", JSON.stringify(allData));

  return allData;
};

module.exports = deleteEntry;
