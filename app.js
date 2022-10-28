require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

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

app.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong");
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});
