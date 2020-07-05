const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User");

passport.use(
  new LocalStrategy((username, password, cb) => {
    User.findOne({ username: username })
      .then(foundUser => {
        if (!foundUser) {
          return cb(null, false, { message: "Incorrect username." });
        }
        // if (password.length < 8) {
        //   return cb(null, false, {
        //     message: "Password is too short, check again"
        //   });
        // }
        return bcrypt.compare(password, foundUser.password).then(match => {
          if (!match) {
            return cb(null, false, { message: "Incorrect password." });
          }
          cb(null, foundUser);
        });
      })
      .catch(err => {
        cb(err);
      });
  })
);
