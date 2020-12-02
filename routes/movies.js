require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const axios = require("axios");
const API_KEY = process.env.API_KEY


router.use(bodyParser.urlencoded({ extended: false }));

router.post("/popularMovies", async (req, res) => {
    let popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    try {
        let popular = await axios.get(popularURL)    
        res.status(200).send(popular.data);
    }
    catch (e) {
        res.status(500).json({ message: "An error has occured", error: e})
    }
})

router.post("/nowplayingMovies", async (req, res) => {
    let nowplayingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`

    try {
        let nowPlaying = await axios.get(nowplayingURL)    
        res.status(200).send(nowPlaying.data);
    }
    catch (e) {
        res.status(500).json({ message: "An error has occured", error: e})
    }
})

router.post("/upcomingMovies", async (req, res) => {
    let upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

    try {
        let upcoming = await axios.get(upcomingURL)    
        res.status(200).send(upcoming.data);
    }
    catch (e) {
        res.status(500).json({ message: "An error has occured", error: e})
    }
})

router.post("/topratedMovies", async (req, res) => {
    let topratedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`

    try {
        let topRated = await axios.get(topratedURL)    
        res.status(200).send(topRated.data);
    }
    catch (e) {
        res.status(500).json({ message: "An error has occured", error: e})
    }
})

router.post("/fullmovieInfo", async (req, res) => {
    let movie_id = req.body.id
    console.log(movie_id)
    let fullURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`

    try {
        let fullMovie = await axios.get(fullURL)
        res.status(200).send(fullMovie.data)
    }  catch (e) {
        res.status(500).json({ message: "An error has occured", error: e})
    }
})


module.exports = router;