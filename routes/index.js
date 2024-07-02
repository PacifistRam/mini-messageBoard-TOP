var express = require("express");
var router = express.Router();

const messages = [
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messageArray: messages });
});

router.get("/new",(req,res,next) => {
  res.render("form")
})
router.post("/new",(req,res,next) => {
  const authorValue = req.body.author
  const messageValue = req.body.message
  if (authorValue && messageValue){
    messages.push({text: messageValue, user:authorValue, added: new Date() })
    res.redirect('/')
  }else {
    console.log("form is empty")
  }
})

module.exports = router;
