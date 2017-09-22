-- --------------------------------------------------------
-- Strežnik:                     127.0.0.1
-- Verzija strežnika:            5.7.14 - MySQL Community Server (GPL)
-- Operacijski sistem strežnika: Win64
-- HeidiSQL Različica:           9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for tasks
CREATE DATABASE IF NOT EXISTS `tasks` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_slovenian_ci */;
USE `tasks`;

-- Dumping structure for tabela tasks.tasks
CREATE TABLE IF NOT EXISTS `tasks` (
  `Id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `TaskDesc` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Completed` tinyint(1) DEFAULT '0' COMMENT 'Is Completed?',
  `Deleted` tinyint(1) DEFAULT '0',
  `EntryTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `TaskOwner` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

-- Dumping data for table tasks.tasks: 37 rows
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` (`Id`, `TaskDesc`, `Completed`, `Deleted`, `EntryTime`, `TaskOwner`) VALUES
	(2, 'Prvi vnost opravila!', 1, 0, '2017-01-15 19:06:00', 'Eddie'),
	(3, 'Drugo opravilo', 1, 0, '2017-01-15 20:10:00', 'Jake'),
	(4, 'Četrto opravilo!!!', 1, 0, '2017-02-15 23:43:52', 'Sammy'),
	(5, 'Novo Opravilo', 0, 0, '2017-01-15 19:05:00', NULL),
	(9, 'Novo sedmo opravilo', 0, 0, '2017-01-15 22:33:00', NULL),
	(7, 'Neko novo 5 opravilo!?', 1, 0, '2017-01-15 21:02:00', NULL),
	(8, 'Šesto opravilo 6', 0, 0, '2017-01-15 21:04:00', NULL),
	(10, 'fgwdgfsgfdgfd', 1, 0, '2017-02-15 21:14:00', NULL),
	(11, 'Novo sporočilo!', 1, 0, '2017-01-15 22:45:00', NULL),
	(12, 'Novo sporočilo! Drugič!', 0, 0, '2017-01-15 22:46:00', NULL),
	(18, 'ŽDodano danes!', 0, 0, '2017-02-11 21:49:00', NULL),
	(14, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, 0, '2017-01-16 19:12:00', NULL),
	(15, '', 0, 0, '2017-02-15 23:54:12', NULL),
	(30, 'AsAsAS', 0, 0, '2017-02-15 23:56:55', 'DAJA'),
	(31, 'AAAAAAAAAAAAAA', 1, 0, '2017-02-12 21:50:00', NULL),
	(32, 'RRRRRRRRRRRRRRRRRRRRRRRRRR!', 0, 0, '2017-02-16 00:00:19', NULL),
	(36, 'A1', 1, 0, '2017-02-12 22:33:00', NULL),
	(27, 'asdrfsdfsdfsd', 1, 0, '2017-02-12 20:26:00', NULL),
	(28, '', 0, 0, '2017-02-15 23:54:20', NULL),
	(29, 'rwerwer', 1, 0, '2017-02-12 20:45:00', NULL),
	(24, 'TO JE IZ MODALA!', 0, 0, '2017-02-12 13:43:00', NULL),
	(25, 'NOVO DODAN', 1, 0, '2017-02-12 18:46:45', NULL),
	(26, '', 0, 0, '2017-02-15 23:54:14', NULL),
	(35, 'casdfasdfsdsdsdffsdgjhklfsgjklfsdjlgfjsklgjlkfs\nfsklgfskdlgjklfsdgjklfsdjklgjkl', 0, 0, '2017-02-12 22:10:00', NULL),
	(34, 'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', 0, 0, '2017-02-12 22:07:00', NULL),
	(37, 'AAAAAAAAAAAAA11111', 1, 0, '2017-02-12 22:41:00', NULL),
	(38, 'BBB2222', 0, 0, '2017-02-12 22:43:00', NULL),
	(39, 'B3', 0, 0, '2017-02-12 22:43:00', NULL),
	(41, 'SSSSSS', 1, 0, '2017-02-12 22:51:00', NULL),
	(42, 'NEW1', 0, 0, '2017-02-12 22:52:00', NULL),
	(43, 'NEW1QQ  Vpišemo!', 1, 0, '2017-02-15 23:52:14', NULL),
	(44, 'CCCCCCCCCCCCC', 1, 0, '2017-02-12 22:57:00', NULL),
	(45, 'VPIŠEMO!?', 0, 0, '2017-02-15 23:54:55', NULL),
	(47, 'TO JE ZADNJI TESTNI TASK!', 1, 0, '2017-02-16 00:47:00', NULL),
	(48, 'TZRETZRTH', 0, 0, '2017-02-16 00:03:09', 'TARO'),
	(49, 'AKFKDSGK', 0, 0, '2017-02-16 01:02:00', 'ZMAJA'),
	(50, 'Ima nekaj za vas!', 1, 0, '2017-02-16 01:07:00', 'RAJO');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
