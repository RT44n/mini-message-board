const express = require("express");

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

/* GET new messsage page */
router.get("/new", (req, res, next) => {
  res.render("form", { title: "Message Form" });
});

/* POST message */

router.post("/new", (req, res, next) => {
  const user = req.body.userName;
  const text = req.body.userMessage;
  const added = new Date();
  messages.push({ text, user, added });
  res.redirect("/");
});

module.exports = router;
