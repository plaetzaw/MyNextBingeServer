require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const axios = require("axios");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/popularShows", async (req, res) => {
    let API_KEY = process.env.API_KEY
    let popularURL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`

    try {
        let popular = await axios.get(popularURL);
        res.status(200).send(popular.data)
    } catch (e){
        res.status(500).json({ message: "An error has occured", error: e})
    }

})

router.post("/topratedShows", async (req, res) => {
    let API_KEY = process.env.API_KEY
    let topratedURL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`

    try {
        let toprated = await axios.get(topratedURL);
        res.status(200).send(toprated.data)
    } catch (e){
        res.status(500).json({ message: "An error has occured", error: e})
    }

})

router.post("/airingtodayShows", async (req, res) => {
    let API_KEY = process.env.API_KEY
    let airingtodayURL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`

    try {
        let airingToday = await axios.get(airingtodayURL);
        res.status(200).send(airingToday.data)
    } catch (e){
        res.status(500).json({ message: "An error has occured", error: e})
    }

})

module.exports = router;