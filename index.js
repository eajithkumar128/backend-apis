const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("./Authentication/jwt");

var cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });

app.use(cors());
app.use(jwt());
app.use(bodyParser.json());
const database = require("./Models/index");
database.connect();

//including contact_Details routes
require("./Routes/contact_directory/routes")(app);
require("./Routes/blog_post/routes")(app);
require("./Routes/Authentication/auth")(app);
require("./Routes/Simplilearn/routes")(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
