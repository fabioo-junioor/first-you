-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 15-Fev-2023 às 03:31
-- Versão do servidor: 8.0.31
-- versão do PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `speedreserva`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `agendamento`
--

DROP TABLE IF EXISTS `agendamento`;
CREATE TABLE IF NOT EXISTS `agendamento` (
  `idAgendamento` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `idEstabelecimento` int NOT NULL,
  `qtdPessoas` int NOT NULL,
  `observacao` varchar(255) NOT NULL,
  `dataTime` datetime NOT NULL,
  PRIMARY KEY (`idAgendamento`),
  KEY `idUsuario` (`idUsuario`),
  KEY `idEstabelecimento` (`idEstabelecimento`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Extraindo dados da tabela `agendamento`
--

INSERT INTO `agendamento` (`idAgendamento`, `idUsuario`, `idEstabelecimento`, `qtdPessoas`, `observacao`, `dataTime`) VALUES
(4, 1, 3, 10, '1 criança', '2023-02-14 23:55:49'),
(3, 1, 2, 22, 'Vegetariano', '2023-02-14 23:48:39'),
(5, 3, 2, 2, 'não', '2023-02-15 00:07:29');

-- --------------------------------------------------------

--
-- Estrutura da tabela `estabelecimento`
--

DROP TABLE IF EXISTS `estabelecimento`;
CREATE TABLE IF NOT EXISTS `estabelecimento` (
  `idEstabelecimento` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `telefone` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nomeResponsavel` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `apto` tinyint(1) NOT NULL,
  PRIMARY KEY (`idEstabelecimento`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Extraindo dados da tabela `estabelecimento`
--

INSERT INTO `estabelecimento` (`idEstabelecimento`, `nome`, `telefone`, `email`, `senha`, `nomeResponsavel`, `descricao`, `apto`) VALUES
(1, 'Confraria Pub', 888888888, 'confraria@bol.com', '111', 'Carlos', 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI', 0),
(2, 'Gonha Lanches', 8888887, 'gonha@bol.com', '66', 'Gonha', 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI...', 0),
(3, 'Furacao Lanches', 77777777, 'furacao@bol.com', '123', 'Jorge', 'LLorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `favorito`
--

DROP TABLE IF EXISTS `favorito`;
CREATE TABLE IF NOT EXISTS `favorito` (
  `idFavorito` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `idEstabelecimento` int NOT NULL,
  `dataTime` datetime NOT NULL,
  PRIMARY KEY (`idFavorito`),
  KEY `idUsuario` (`idUsuario`),
  KEY `idEstabelecimento` (`idEstabelecimento`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

--
-- Extraindo dados da tabela `favorito`
--

INSERT INTO `favorito` (`idFavorito`, `idUsuario`, `idEstabelecimento`, `dataTime`) VALUES
(6, 1, 1, '2023-02-14 23:09:09'),
(8, 3, 2, '2023-02-15 00:07:58'),
(7, 1, 2, '2023-02-14 23:11:16'),
(5, 3, 3, '2023-02-14 00:46:41');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `telefone` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nome`, `telefone`, `email`, `senha`) VALUES
(1, 'Fabio Junior', 999999999, 'fabio@bol.com', '55'),
(2, 'maria', 9999999, 'maria@bol.com', '44'),
(3, 'Pedro Silva', 444444, 'pedro@bol.com', '11');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
