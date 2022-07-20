const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./src/routes/routes");


//Connection to the Database
const mongoConnection = process.env.URL_DATABASE;
mongoose.connect(mongoConnection);
const database = mongoose.connection;

//Console log if error
database.on("error", (err) => {
  console.log(err);
});

//Console log once connected
database.once("connected", () => {
  console.log("Database Connected!");
});

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`The server is running on port ${process.env.PORT}, enjoy!`);
});

//Using routes
app.use("/users", routes);
