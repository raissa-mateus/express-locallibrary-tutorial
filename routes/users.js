const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
  router.get("/cool", function (req, res, next) {
    res.send("you are so cool");
});

router.get("/cool/praia", function (req, res, next) {
  res.send("eu adoro praia");
});

router.get("/ifc", function (req, res, next) {
  res.send("Bem vindo ao IFC ");
});

module.exports = router;
