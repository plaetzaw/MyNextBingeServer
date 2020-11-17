require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const axios = require("axios");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/popularPeople", async (req, res) => {
    let API_KEY = process.env.API_KEY
    let popularURL = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`

    try {
        let popular = await axios.get(popularURL);
        res.status(200).send(popular.data)
    } catch (e){
        res.status(500).json({ message: "An error has occured", error: e})
    }

})

module.exports = router;