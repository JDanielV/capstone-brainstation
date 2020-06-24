const fs = require("fs");
const { v4: uuid } = require("uuid");

const createUser = (user) => {
  const allData = fs.readFileSync("./model/data.json");
  const parsedData = JSON.parse(allData);

  // Creating the new user object
  const newUser = {
    id: uuid(),
    username: user.username,
    entries: [],
  };

  // Adding the new user to the local array
  parsedData.push(newUser);

  // Overwriting the data.json file
  fs.writeFileSync("./model/data.json", JSON.stringify(parsedData));

  // Returns the added user just for reference
  return newUser;
};

module.exports = createUser;
