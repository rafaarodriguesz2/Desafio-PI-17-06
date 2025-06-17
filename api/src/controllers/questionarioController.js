var questionarioModel = require("../models/questionarioModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    const qtdAguaDia = req.body.qtdAguaDiaServer
    const qtdLitrosVida = req.body.qtdLitrosVidaServer
    const aguaHoje = req.body.aguaHojeServer
    const idade = req.body.idadeServer
    const motivoCompraAgua = req.body.motivoCompraAguaServer
    const gostaAgua = req.body.gostaAguaServer

    // Faça as validações dos valores
    if (qtdAguaDia == undefined) {
        res.status(400).send("Seu qtdAguaDia está undefined!");
    } else if (qtdLitrosVida == undefined) {
        res.status(400).send("Seu qtdLitrosVida está undefined!");
    } else if (aguaHoje == undefined) {
        res.status(400).send("Sua aguaHoje está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("Sua idade a vincular está undefined!");
    } else if (motivoCompraAgua == undefined) {
        res.status(400).send("Sua motivoCompraAgua a vincular está undefined!");
    } else if (gostaAgua == undefined) {
        res.status(400).send("Sua gostaAgua a vincular está undefined!");
    }
    
    else {

        // Passe os valores como parâmetro e vá para o arquivo questionarioModel.js
        questionarioModel.cadastrar(qtdAguaDia, qtdLitrosVida, aguaHoje, idade, motivoCompraAgua, gostaAgua)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}