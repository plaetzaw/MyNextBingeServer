const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/createMovie", async (req, res) => {
    try {
        let movieEntry = await db.movies.build({
            adult: req.body.adult,
            backdrop_path: req.body.backdrop_path,
            budget: req.body.budget,
            homepage: req.body.homepage,
            movieid: req.body.movieid,
            imdb_id: req.body.imdb_id,
            original_language: req.body.original_language,
            original_title: req.body.original_title,
            overview: req.body.overview,
            popularity: req.body.popularity,
            poster_path: req.body.poster_path,
            release_date: req.body.release_date,
            revenue: req.body.revenue,
            runtime: req.body.runtime,
            status: req.body.status,
            tagline: req.body.tagline,
            title: req.body.title,
            video: req.body.video,
            vote_average: req.body.vote_average,
            vote_count: req.body.vote_count,
            userid: req.body.userid,
        })

        let savedMovie = await movieEntry.save();

        res.status(200).json({ message: "Movie saved into db", savedMovie})

    }
    catch (e) {
        res.status(500).json({ message: "An error has occured", error: e})
    }
})