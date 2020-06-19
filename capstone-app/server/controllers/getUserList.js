const fs = require("fs");

const getUserList = () => {
  const allData = fs.readFileSync("./model/data.json");

  const userList = JSON.parse(allData).map((user) => {
    return {
      id: user.id,
      username: user.username,
    };
  });
  return userList;
};

module.exports = getUserList;
