var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    date: new Date(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    date: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", { title: "Mini Messageboard" });
});

router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    date: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
