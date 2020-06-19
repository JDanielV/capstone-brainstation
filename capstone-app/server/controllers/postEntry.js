const fs = require("fs");
const { v4: uuid } = require("uuid");

const postEntry = (entry) => {
  const allData = fs.readFileSync("./model/data.json");
  const parsedData = JSON.parse(allData);

  // Creating the new "Entry" object with info passed
  const newEntry = {
    postId: uuid(),
    id: entry.id,
    title: entry.title,
    content: entry.content,
    context: entry.context,
    emotions: entry.emotions,
    timestamp: entry.timestamp,
    edited: entry.edited,
  };

  // Finding the user to assign new entry to
  const activeUserData = parsedData.find((user) => user.id === newEntry.id);

  // Adding the new entry to the local array of entries
  activeUserData.entries.push(newEntry);

  // Using local array of entries to overwrite data.json
  const userIndex = parsedData.map((user) => user.id).indexOf(newEntry.id);

  parsedData.splice(userIndex, 1, activeUserData);

  fs.writeFileSync("./model/data.json", JSON.stringify(parsedData));

  return newEntry;
};

module.exports = postEntry;
