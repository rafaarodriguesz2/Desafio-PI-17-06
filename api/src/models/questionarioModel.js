var database = require("../database/config")

function cadastrar(qtdAguaDia, qtdLitrosVida, aguaHoje, idade, motivoCompraAgua, gostaAgua) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", qtdAguaDia, qtdLitrosVida, aguaHoje, idade, motivoCompraAgua, gostaAgua);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO questionario (qtdLitrosVida, aguaHoje, idade, motivoCompraAgua, gosta, qtdAguaHoje) VALUES ('${qtdAguaDia}', '${qtdLitrosVida}', '${aguaHoje}', '${idade}', '${motivoCompraAgua}', '${gostaAgua}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};