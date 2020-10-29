require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const axios = require("axios");
const CircularJSON = require("circular-json");



router.use(bodyParser.urlencoded({ extended: false }));

router.post("/searchMovies", (req, res) => {
    let title = req.body.title
    let API_KEY = process.env.API_KEY

    let apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&page=1`

    axios.get(apiURL)
    .then((movies) => {
        let results = CircularJSON.stringify(movies.data)
        res.status(200).send(results);
    })
    .catch((err) => console.error(err))
})

router.post("/searchTV", (req, res) => {
    let title = req.body.title
    let apiURL = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${title}&page=1`

    axios.get(apiURL)
    .then((tvshows) => {
        let results = CircularJSON.stringify(tvshows.data)
        res.status(200).send(results);
    })
    .catch((err) => console.error(err))
})

router.post("/searchPeople", (req, res) => {
    let person = req.body.person
    let apiURL = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${person}&page=1`

    axios.get(apiURL)
    .then((persons) => {
        let results = CircularJSON.stringify(persons.data)
        res.status(200).send(results);
    })
    .catch((err) => console.error(err))
})

module.exports = router;
