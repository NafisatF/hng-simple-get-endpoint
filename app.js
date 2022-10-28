const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const hostname = "0.0.0.0";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
const myDetails = {
  slackUsername: "Nafisat Faruk",
  backend: true,
  age: 24,
  bio: "I am a frontend developer looking to expand my skills in backend development with HNG",
};

app.set("view engine", "ejs");
app.get("/", (request, response) => {
  response.json(myDetails);
});

app.listen(port, hostname, function (error) {
  if (error) {
    console.log("Something went wrong");
  } else {
    console.log(`Server is listening at ${hostname} on port ${port}`);
  }
});
