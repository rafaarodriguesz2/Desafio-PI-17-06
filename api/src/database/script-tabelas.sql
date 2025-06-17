create database engarrafatech;

use engarrafatech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

create table questionario(
qtdLitrosVida decimal(10,2),
aguaHoje boolean,
idade int,
motivoCompraAgua varchar(100),
gosta boolean,
qtdAguaHoje decimal(10,2)
);