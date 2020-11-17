
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//JWT
const { authUser } = require("./utility/auth");

//Routes
app.use(require("./routes/login", authUser))
app.use(require("./routes/register"))
app.use(require("./routes/movies"))
app.use(require("./routes/tvshows"))
app.use(require("./routes/people"))
app.use(require("./routes/search"))
app.use(require("./routes/trending"))
app.use(require("./routes/createEntry", authUser))


 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });