require("dotenv").config();
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const axios = require("axios");
const CircularJSON = require("circular-json");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/trending", (req, res) => {
    let category = req.body.category
    let trend = req.body.trend;
    let API_KEY = process.env.API_KEY;



    switch (category) {
        case 1:
            category = "movie";
            break;
        case 2: 
            category = "tv";
            break;
        case 3:
            category = "person";
            break;
        default:
            category = "movie";
            break;
    }

    console.log(category)

    if (category === 'movie'){
        switch (trend) {
            case 1:
                trend = "latest";
                break;
            case 2: 
                trend = "now_playing";
                break;
            case 3:
                trend = "popular"
                break;
            case 4:
                trend = "top_rated";
                break;
            case 5:
                trend = "upcoming";
                break;
            default:
                trend = "latest";
                break;
        }

    } else if (category === "tv"){
        switch (trend) {
            case 1:
                trend = "latest";
                break;
            case 2:
                trend = "airing_today";
                break;
            case 3:
                trend = "on_the_air";
                break;
            case 4:
                trend = "popular";
                break;
            case 5:
                trend = "top_rated";
                break;
            default:
                trend = "latest";
                break;
        }
    } else if (category === "person"){
        switch (trend) {
            case 1: 
                trend = "latest";
                break;
            case 2:
                trend = "popular";
                break;
            default:
                trend = "latest";
                break;
        }
    }
    console.log(trend)

    let apiURL = `https://api.themoviedb.org/3/${category}/${trend}?api_key=${API_KEY}`;

    axios.get(apiURL)
    .then((results) => {
        let response = CircularJSON.stringify(results.data);
        res.status(200).send(response);
    })
    .catch((err) => console.error(err));

})

module.exports = router;
// https://api.themoviedb.org/3/tv/airing_today?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1