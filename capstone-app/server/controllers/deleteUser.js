const fs = require("fs");

const deleteUser = (id) => {
  const rawData = fs.readFileSync("./model/data.json");
  const allData = JSON.parse(rawData);

  const userIndex = allData.findIndex((user) => user.id === id);

  allData.splice(userIndex, 1);

  fs.writeFileSync("./model/data.json", JSON.stringify(allData));

  return allData;
};

module.exports = deleteUser;
