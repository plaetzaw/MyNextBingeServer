const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
let SALT = 15;
let db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/register", (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;
  
        db.users
          .findOne({
            where: {
              email: email,
            },
          })
          .then((email) => {
            console.log("looking for email...");
            if (email) {
              console.log("email already exists");
              res.status(500).json({ message: "email already exists- please use a different email address" });
            } else {
              bcrypt.hash(password, SALT).then((hash) => {
                console.log("hashing password....");
                let user = db.users.build({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: hash,
                });

                user
                  .save()
                  .then(() =>
                    res.status(200).json({ message: "New user created!" })
                  )
                  .catch((err) => console.error(err));
              });
            }
          });
});

module.exports = router;
