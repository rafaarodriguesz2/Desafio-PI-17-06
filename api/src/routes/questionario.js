var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de questionarioController.js
router.post("/cadastrar", function (req, res) {
    questionarioController.cadastrar(req, res);
})
