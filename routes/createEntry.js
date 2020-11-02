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
            movieid: req.body.id,
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

router.post("/createTvshow", async (req, res) => {
    try {
    let movieEntry = await db.tvshows.build({
        backdrop_path: req.body.backdrop_path,
        first_air_date: req.body.first_air_date,
        homepage: req.body.homepage,
        tvid: req.body.id,
        in_production: req.body.in_production,
        last_air_date: req.body.last_air_date,
        name: req.body.name,
        number_of_episodes: req.body.number_of_episodes,
        number_of_seasons: req.body.number_of_seasons,
        original_language: req.body.original_language,
        original_name: req.body.original_name,
        overview: req.body.overview,
        popularity: req.body.popularity,
        poster_path: req.body.poster_path,
        status: req.body.status,
        type: req.body.type,
        vote_average: req.body.vote_average,
        vote_count: req.body.vote_count,
        userid: req.body.userid
        })
        
        let savedShow = await movieEntry.save();

        res.status(200).json({ message: "TV show saved into db", savedShow})
    }
    catch (e) {
        res.status(500).json({ message: "An error has occured", error: e})

    }

})

router.post("/createPerson", async (req, res) => {
    try {
    let personEntry = await db.persons.build({
        birthday: req.body.birthday,
        known_for_department: req.body.known_for_department,
        deathday: req.body.deathday,
        personid: req.body.id,
        name: req.body.name,
        gender: req.body.gender,
        biography: req.body.biography,
        popularity: req.body.popularity,
        place_of_birth: req.body.place_of_birth,
        profile_path: req.body.profile_path,
        adult: req.body.adult,
        imdb_id: req.body.imdb_id,
        homepage: req.body.homepage,
        userid: req.body.userid
        })
        
        let savedPerson = await personEntry.save();

        res.status(200).json({ message: "New person saved into db", savedPerson})
    }
    catch (e) {
        res.status(500).json({ message: "An error has occured", error: e})

    }

})




module.exports = router;