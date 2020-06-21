const fs = require("fs");
const { v4: uuid } = require("uuid");

const postEntry = (entry) => {
  const allData = fs.readFileSync("./model/data.json");
  const parsedData = JSON.parse(allData);

  // Creating the new "Entry" object with info passed
  const newEntry = {
    entryId: uuid(),
    id: entry.id,
    title: entry.title,
    content: entry.content,
    contextOne: entry.contextOne,
    contextTwo: entry.contextTwo,
    neutral: entry.neutral,
    joyful: entry.joyful,
    motivated: entry.motivated,
    satisfied: entry.satisfied,
    sad: entry.sad,
    stressed: entry.stressed,
    angry: entry.angry,
    timestamp: Date.now(),
    edited: entry.edited,
  };

  // Finding the user to assign new entry to
  const activeUserData = parsedData.find((user) => user.id === newEntry.id);

  // Adding the new entry to the local array of entries
  activeUserData.entries.push(newEntry);

  // Using local array of entries to overwrite data.json
  const userIndex = parsedData.map((user) => user.id).indexOf(newEntry.id);

  // Overwriting the old user details with the updated user details (locally)
  parsedData.splice(userIndex, 1, activeUserData);

  // Overwriting the data.json file
  fs.writeFileSync("./model/data.json", JSON.stringify(parsedData));

  // Returns the added entry just for reference
  return newEntry;
};

module.exports = postEntry;
