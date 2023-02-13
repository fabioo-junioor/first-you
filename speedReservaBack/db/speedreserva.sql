-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 13-Fev-2023 às 05:14
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
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

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
  `apto` tinyint(1) NOT NULL,
  PRIMARY KEY (`idEstabelecimento`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Extraindo dados da tabela `estabelecimento`
--

INSERT INTO `estabelecimento` (`idEstabelecimento`, `nome`, `telefone`, `email`, `senha`, `nomeResponsavel`, `apto`) VALUES
(1, 'confraria pub', 888888888, 'confraria@bol.com', '111', 'Carlos', 0);

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

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
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nome`, `telefone`, `email`, `senha`) VALUES
(1, 'fabio', 999999999, 'fabio@bol.com', '55');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
