const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

// Importing controller functions
const getEntriesList = require("./controllers/getEntriesList");
const getUserDetails = require("./controllers/getUserDetails");
const getUserList = require("./controllers/getUserList");

// Middleware here

app.use(express.json());
app.use(cors());

// Endpoints ahead

// Route to get list of users
app.get("/users", (req, res) => {
  res.json(getUserList());
});

// Route to get list of entries of selected user
app.get("/users/:userId/entries", (req, res) => {
  res.json(getEntriesList(req.params.userId));
});

//Route to get all details of the selected user
app.get("/users/:userId", (req, res) => {
  res.json(getUserDetails(req.params.userId));
});
// Listening to port 5000
app.listen(5000, console.log("server's running on 5000"));
