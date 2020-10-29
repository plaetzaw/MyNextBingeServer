const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const axios = require("axios");
const apiKEY = require("dotenv")

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/searchMovies", (req, res) => {
    let title = req.body.title
    let apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&query=${title}&page=1`

    axios.get(apiURL)
    .then((movies) => {
        res.status(200).send(movies);
    })
    .catch((err) => console.error(err))
})

router.post("/searchTV", (req, res) => {
    let title = req.body.title
    let apiURL = `https://api.themoviedb.org/3/search/tv?api_key=${apiKEY}&query=${title}&page=1`

    axios.get(apiURL)
    .then((tvshows) => {
        res.status(200).send(tvshows);
    })
    .catch((err) => console.error(err))
})

router.post("/searchPeople", (req, res) => {
    let person = req.body.person
    let apiURL = `https://api.themoviedb.org/3/search/person?api_key=${apiKEY}&query=${person}&page=1`

    axios.get(apiURL)
    .then((persons) => {
        res.status(200).send(persons);
    })
    .catch((err) => console.error(err))
})

module.exports = router;
