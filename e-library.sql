/*
SQLyog Ultimate v10.41 
MySQL - 5.7.34-0ubuntu0.18.04.1 : Database - e-library
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`e-library` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `e-library`;

/*Table structure for table `admin_access` */

DROP TABLE IF EXISTS `admin_access`;

CREATE TABLE `admin_access` (
  `adacAdmnId` int(10) unsigned NOT NULL DEFAULT '0',
  `adacMenuId` int(10) unsigned NOT NULL DEFAULT '0',
  `adacView` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `adacNew` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `adacEdit` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `adacDelete` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `adacConfirm` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `adacVoid` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`adacAdmnId`,`adacMenuId`),
  KEY `adacMenuId` (`adacMenuId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Daftar Akses User Admin';

/*Data for the table `admin_access` */

insert  into `admin_access`(`adacAdmnId`,`adacMenuId`,`adacView`,`adacNew`,`adacEdit`,`adacDelete`,`adacConfirm`,`adacVoid`) values (1,67,1,1,1,1,1,1),(1,68,1,1,1,1,1,1),(1,71,1,1,1,1,1,1),(1,73,1,1,1,1,1,1),(1,74,1,1,1,1,1,1),(1,75,1,1,1,1,1,1),(1,76,1,1,1,1,1,0),(1,77,1,1,1,1,1,0),(1,78,1,1,1,1,1,0),(1,79,1,1,1,1,1,1),(1,80,1,1,1,1,1,1),(1,81,1,1,1,1,1,1),(1,83,1,1,1,1,1,1),(1,84,1,1,1,1,1,1),(1,85,1,1,1,1,1,1),(1,86,1,1,1,1,1,1),(1,87,1,1,1,1,1,1),(1,88,1,1,1,1,1,0),(2,53,1,1,1,1,1,1),(2,71,1,1,1,1,1,1),(2,76,1,1,1,1,1,0),(2,77,1,1,1,1,1,0),(2,78,1,1,1,1,1,0),(2,88,1,1,1,1,1,0),(4,3,1,1,1,1,1,1),(4,4,1,1,1,1,1,1),(4,6,1,1,1,1,1,1),(4,7,1,1,1,1,1,1),(4,31,1,1,1,1,1,1),(4,33,1,1,1,1,1,0),(4,34,1,1,1,1,1,0),(4,35,1,1,1,1,1,1),(4,36,1,1,1,1,1,1),(4,37,1,1,1,1,1,1),(4,38,1,1,1,1,1,1),(4,39,1,1,1,1,1,1),(4,40,1,1,1,1,1,1),(4,41,1,1,1,1,1,1),(4,42,1,1,1,1,1,1),(4,43,1,1,1,1,1,1),(4,44,1,1,1,1,1,1),(4,45,1,1,1,1,1,1),(4,46,1,1,1,1,1,1),(4,47,1,1,1,1,1,1),(4,48,1,1,1,1,1,1),(4,49,1,1,1,1,1,1),(4,50,1,1,1,1,1,1),(4,51,1,1,1,1,1,1),(4,52,1,1,1,1,1,1),(4,53,1,1,1,1,1,1),(4,61,1,1,1,1,1,1),(4,62,1,1,1,1,1,1),(4,63,1,1,1,1,1,1),(4,64,1,1,1,1,1,1),(4,65,1,1,1,1,1,1),(4,66,1,1,1,1,0,0),(4,67,1,1,1,1,1,1),(4,68,1,1,1,1,1,1),(4,71,1,1,1,1,1,1),(4,73,1,1,1,1,1,1),(4,74,1,1,1,1,1,1),(4,75,1,1,1,1,1,1),(4,76,1,1,1,1,1,0),(4,77,1,1,1,1,1,0),(4,78,1,1,1,1,1,0),(4,79,1,1,1,1,1,1),(4,80,1,1,1,1,1,1),(4,81,1,1,1,1,1,1),(4,83,1,1,1,1,1,1),(4,84,1,1,1,1,1,1),(4,85,1,1,1,1,1,1),(4,86,1,1,1,1,1,1),(4,87,1,1,1,1,1,1),(4,88,1,1,1,1,1,1),(5,1,1,1,1,1,1,1),(5,2,1,1,1,1,0,0),(5,3,1,1,1,1,1,0),(5,4,1,1,1,1,1,0),(5,6,1,1,1,1,1,0),(5,7,1,1,1,1,1,1),(5,8,1,1,1,1,0,0),(5,9,1,1,1,1,0,0),(5,10,1,1,1,1,0,0),(5,11,1,1,1,1,0,0),(5,12,1,1,1,1,0,0),(5,13,1,1,1,1,0,0),(5,14,1,1,1,1,0,0),(5,15,1,1,1,1,0,0),(5,16,1,1,1,1,0,0),(5,17,1,1,1,1,0,0),(5,18,1,1,1,1,0,0),(5,21,1,1,1,1,0,0),(5,22,1,1,1,1,0,0),(5,23,1,1,1,1,0,0),(5,24,1,1,1,1,0,0),(5,25,1,1,1,1,0,0),(5,26,1,1,1,1,0,0),(5,27,1,1,1,1,0,0),(5,28,1,1,1,1,0,0),(5,29,1,1,1,1,0,0),(5,30,1,1,1,1,0,0),(5,31,1,1,1,1,1,1),(5,32,1,1,1,1,1,0),(5,33,1,1,1,1,0,0),(5,34,1,1,1,1,0,0),(5,35,1,1,1,1,1,1),(5,36,1,1,1,1,1,1),(5,37,1,1,1,1,1,1),(5,38,1,1,1,1,1,1),(5,39,1,1,1,1,1,1),(5,40,1,1,1,1,1,1),(5,41,1,1,1,1,1,1),(5,42,1,1,1,1,1,0),(5,43,1,1,1,1,1,1),(5,44,1,1,1,1,1,1),(5,45,1,1,1,1,1,1),(5,46,1,1,1,1,1,1),(5,47,1,1,1,1,1,1),(5,48,1,1,1,1,1,1),(5,49,1,1,1,1,1,1),(5,50,1,1,1,1,1,1),(5,51,1,1,1,1,1,1),(5,52,1,1,1,1,1,1),(5,53,1,1,1,1,1,1),(5,61,1,1,1,1,1,1),(5,62,1,1,1,1,1,1),(5,63,1,1,1,1,1,1),(5,64,1,1,1,1,1,1),(5,65,1,1,1,1,1,1),(5,66,1,1,1,1,0,0),(5,67,1,1,1,1,1,1),(5,68,1,1,1,1,1,1),(5,71,1,1,1,1,1,1),(5,73,1,1,1,1,1,1),(5,74,1,1,1,1,1,1),(5,75,1,1,1,1,1,1),(5,76,1,1,1,1,1,0),(5,77,1,1,1,1,1,0),(5,78,1,1,1,1,1,0),(5,79,1,1,1,1,1,1),(5,80,1,1,1,1,1,1),(5,81,1,1,1,1,1,1),(5,83,1,1,1,1,1,1),(5,84,1,1,1,1,1,1),(5,85,1,1,1,1,1,1),(5,86,1,1,1,1,1,1),(5,87,1,1,1,1,1,1),(5,88,1,1,1,1,1,0),(7,65,1,1,1,1,1,1),(7,66,1,1,1,1,0,0),(7,67,1,1,1,1,1,1),(7,68,1,1,1,1,1,1),(7,71,1,1,1,1,1,1),(7,73,1,1,1,1,1,1),(7,74,1,1,1,1,1,1),(7,75,1,1,1,1,1,1),(7,76,1,1,1,1,1,0),(7,77,1,1,1,1,1,0),(7,78,1,1,1,1,1,0),(7,79,1,1,1,1,1,1),(7,80,1,1,1,1,1,1),(7,81,1,1,1,1,1,1),(7,83,1,1,1,1,1,1),(7,84,1,1,1,1,1,1),(7,85,1,1,1,1,1,1),(7,86,1,1,1,1,1,1),(7,87,1,1,1,1,1,1),(7,88,1,1,1,1,1,0),(8,1,1,1,1,1,1,1),(8,2,1,1,1,1,0,0),(8,3,1,1,1,1,1,0),(8,4,1,1,1,1,1,0),(8,6,1,1,1,1,1,0),(8,7,1,1,1,1,1,1),(8,8,1,1,1,1,0,0),(8,9,1,1,1,1,0,0),(8,10,1,1,1,1,0,0),(8,11,1,1,1,1,0,0),(8,12,1,1,1,1,0,0),(8,13,1,1,1,1,0,0),(8,14,1,1,1,1,0,0),(8,15,1,1,1,1,0,0),(8,16,1,1,1,1,0,0),(8,17,1,1,1,1,0,0),(8,18,1,1,1,1,0,0),(8,21,1,1,1,1,0,0),(8,22,1,1,1,1,0,0),(8,23,1,1,1,1,0,0),(8,24,1,1,1,1,0,0),(8,25,1,1,1,1,0,0),(8,26,1,1,1,1,0,0),(8,27,1,1,1,1,0,0),(8,28,1,1,1,1,0,0),(8,29,1,1,1,1,0,0),(8,30,1,1,1,1,0,0),(8,31,1,1,1,1,1,1),(8,32,1,1,1,1,1,0),(8,33,1,1,1,1,0,0),(8,34,1,1,1,1,0,0),(8,35,1,1,1,1,1,1),(8,36,1,1,1,1,1,1),(8,37,1,1,1,1,1,1),(8,38,1,1,1,1,1,1),(8,39,1,1,1,1,1,1),(8,40,1,1,1,1,1,1),(8,41,1,1,1,1,1,1),(8,42,1,1,1,1,1,0),(8,43,1,1,1,1,1,1),(8,44,1,1,1,1,1,1),(8,45,1,1,1,1,1,1),(8,46,1,1,1,1,1,1),(8,47,1,1,1,1,1,1),(8,48,1,1,1,1,1,1),(8,49,1,1,1,1,1,1),(8,50,1,1,1,1,1,1),(8,51,1,1,1,1,1,1),(8,52,1,1,1,1,1,1),(8,53,1,1,1,1,1,1),(8,61,1,1,1,1,1,1),(8,62,1,1,1,1,1,1),(8,63,1,1,1,1,1,1),(8,64,1,1,1,1,1,1),(8,65,1,1,1,1,1,1),(8,66,1,1,1,1,0,0),(8,67,1,1,1,1,1,1),(8,68,1,1,1,1,1,1),(8,71,1,1,1,1,1,1),(8,73,1,1,1,1,1,1),(8,74,1,1,1,1,1,1),(8,75,1,1,1,1,1,1),(8,76,1,1,1,1,1,0),(8,77,1,1,1,1,1,0),(8,78,1,1,1,1,1,0),(8,79,1,1,1,1,1,1),(8,80,1,1,1,1,1,1),(8,81,1,1,1,1,1,1),(8,82,1,1,1,1,1,1),(8,83,1,1,1,1,1,1),(8,84,1,1,1,1,1,1),(8,85,1,1,1,1,1,1),(8,86,1,1,1,1,1,1),(8,87,1,1,1,1,1,1),(8,88,1,1,1,1,1,0),(9,1,1,1,1,1,1,1),(9,2,1,1,1,1,0,0),(9,3,1,1,1,1,1,0),(9,4,1,1,1,1,1,0),(9,6,1,1,1,1,1,0),(9,7,1,1,1,1,1,1),(9,8,1,1,1,1,0,0),(9,9,1,1,1,1,0,0),(9,10,1,1,1,1,0,0),(9,11,1,1,1,1,0,0),(9,12,1,1,1,1,0,0),(9,13,1,1,1,1,0,0),(9,14,1,1,1,1,0,0),(9,15,1,1,1,1,0,0),(9,16,1,1,1,1,0,0),(9,17,1,1,1,1,0,0),(9,18,1,1,1,1,0,0),(9,21,1,1,1,1,0,0),(9,22,1,1,1,1,0,0),(9,23,1,1,1,1,0,0),(9,24,1,1,1,1,0,0),(9,25,1,1,1,1,0,0),(9,26,1,1,1,1,0,0),(9,27,1,1,1,1,0,0),(9,28,1,1,1,1,0,0),(9,29,1,1,1,1,0,0),(9,30,1,1,1,1,0,0),(9,31,1,1,1,1,1,1),(9,32,1,1,1,1,1,0),(9,33,1,1,1,1,0,0),(9,34,1,1,1,1,0,0),(9,35,1,1,1,1,1,1),(9,36,1,1,1,1,1,1),(9,37,1,1,1,1,1,1),(9,38,1,1,1,1,1,1),(9,39,1,1,1,1,1,1),(9,40,1,1,1,1,1,1),(9,41,1,1,1,1,1,1),(9,42,1,1,1,1,1,0),(9,43,1,1,1,1,1,1),(9,44,1,1,1,1,1,1),(9,45,1,1,1,1,1,1),(9,46,1,1,1,1,1,1),(9,47,1,1,1,1,1,1),(9,48,1,1,1,1,1,1),(9,49,1,1,1,1,1,1),(9,50,1,1,1,1,1,1),(9,51,1,1,1,1,1,1),(9,52,1,1,1,1,1,1),(9,53,1,1,1,1,1,1),(9,61,1,1,1,1,1,1),(9,62,1,1,1,1,1,1),(9,63,1,1,1,1,1,1),(9,64,1,1,1,1,1,1),(9,65,1,1,1,1,1,1),(9,66,1,1,1,1,0,0),(9,67,1,1,1,1,1,1),(9,68,1,1,1,1,1,1),(9,71,1,1,1,1,1,1),(9,73,1,1,1,1,1,1),(9,74,1,1,1,1,1,1),(9,75,1,1,1,1,1,1),(9,76,1,1,1,1,1,0),(9,77,1,1,1,1,1,0),(9,78,1,1,1,1,1,0),(9,79,1,1,1,1,1,1),(9,80,1,1,1,1,1,1),(9,81,1,1,1,1,1,1),(9,82,1,1,1,1,1,1),(9,83,1,1,1,1,1,1),(9,84,1,1,1,1,1,1),(9,85,1,1,1,1,1,1),(9,86,1,1,1,1,1,1),(9,87,1,1,1,1,1,1),(9,88,1,1,1,1,1,0),(10,1,1,1,1,1,1,1),(10,2,1,1,1,1,0,0),(10,3,1,1,1,1,1,0),(10,4,1,1,1,1,1,0),(10,6,1,1,1,1,1,0),(10,7,1,1,1,1,1,1),(10,8,1,1,1,1,0,0),(10,9,1,1,1,1,0,0),(10,10,1,1,1,1,0,0),(10,11,1,1,1,1,0,0),(10,12,1,1,1,1,0,0),(10,13,1,1,1,1,0,0),(10,14,1,1,1,1,0,0),(10,15,1,1,1,1,0,0),(10,16,1,1,1,1,0,0),(10,17,1,1,1,1,0,0),(10,18,1,1,1,1,0,0),(10,21,1,1,1,1,0,0),(10,22,1,1,1,1,0,0),(10,23,1,1,1,1,0,0),(10,24,1,1,1,1,0,0),(10,25,1,1,1,1,0,0),(10,26,1,1,1,1,0,0),(10,27,1,1,1,1,0,0),(10,28,1,1,1,1,0,0),(10,29,1,1,1,1,0,0),(10,30,1,1,1,1,0,0),(10,31,1,1,1,1,1,1),(10,32,1,1,1,1,1,0),(10,33,1,1,1,1,0,0),(10,34,1,1,1,1,0,0),(10,35,1,1,1,1,1,1),(10,36,1,1,1,1,1,1),(10,37,1,1,1,1,1,1),(10,38,1,1,1,1,1,1),(10,39,1,1,1,1,1,1),(10,40,1,1,1,1,1,1),(10,41,1,1,1,1,1,1),(10,42,1,1,1,1,1,0),(10,43,1,1,1,1,1,1),(10,44,1,1,1,1,1,1),(10,45,1,1,1,1,1,1),(10,46,1,1,1,1,1,1),(10,47,1,1,1,1,1,1),(10,48,1,1,1,1,1,1),(10,49,1,1,1,1,1,1),(10,50,1,1,1,1,1,1),(10,51,1,1,1,1,1,1),(10,52,1,1,1,1,1,1),(10,53,1,1,1,1,1,1),(10,61,1,1,1,1,1,1),(10,62,1,1,1,1,1,1),(10,63,1,1,1,1,1,1),(10,64,1,1,1,1,1,1),(10,65,1,1,1,1,1,1),(10,66,1,1,1,1,0,0),(10,67,1,1,1,1,1,1),(10,68,1,1,1,1,1,1),(10,71,1,1,1,1,1,1),(10,73,1,1,1,1,1,1),(10,74,1,1,1,1,1,1),(10,75,1,1,1,1,1,1),(10,76,1,1,1,1,1,0),(10,77,1,1,1,1,1,0),(10,78,1,1,1,1,1,0),(10,79,1,1,1,1,1,1),(10,80,1,1,1,1,1,1),(10,81,1,1,1,1,1,1),(10,82,1,1,1,1,1,1),(10,83,1,1,1,1,1,1),(10,84,1,1,1,1,1,1),(10,85,1,1,1,1,1,1),(10,86,1,1,1,1,1,1),(10,87,1,1,1,1,1,1),(10,88,1,1,1,1,1,0);

/*Table structure for table `admin_company` */

DROP TABLE IF EXISTS `admin_company`;

CREATE TABLE `admin_company` (
  `adcoAdmnId` int(10) unsigned NOT NULL DEFAULT '0',
  `adcoCompId` mediumint(8) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`adcoAdmnId`,`adcoCompId`),
  KEY `adcoCompId` (`adcoCompId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=8192 COMMENT='Daftar Akses User Admin ke Company';

/*Data for the table `admin_company` */

insert  into `admin_company`(`adcoAdmnId`,`adcoCompId`) values (30,1);

/*Table structure for table `admin_logs` */

DROP TABLE IF EXISTS `admin_logs`;

CREATE TABLE `admin_logs` (
  `alogAdminId` int(10) unsigned DEFAULT NULL,
  `alogAdminLogin` varchar(50) NOT NULL,
  `alogTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `alogIP` varchar(100) NOT NULL,
  `alogStatus` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '0:Success; 1:Failed; 2:Banned; 3:Doubled',
  KEY `admin` (`alogAdminId`,`alogTime`),
  KEY `ip` (`alogIP`,`alogTime`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Admin Log';

/*Data for the table `admin_logs` */

/*Table structure for table `admin_sessions` */

DROP TABLE IF EXISTS `admin_sessions`;

CREATE TABLE `admin_sessions` (
  `asesAdminId` int(10) unsigned NOT NULL DEFAULT '0',
  `asesSessionId` varchar(50) NOT NULL,
  `asesModule` varchar(255) NOT NULL,
  `asesLastAccess` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`asesAdminId`),
  UNIQUE KEY `asesSessionId` (`asesSessionId`),
  KEY `asesModule` (`asesModule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Daftar Session User';

/*Data for the table `admin_sessions` */

/*Table structure for table `admin_user_sessions` */

DROP TABLE IF EXISTS `admin_user_sessions`;

CREATE TABLE `admin_user_sessions` (
  `usesUserId` int(10) unsigned NOT NULL,
  `usesSessionId` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `usesComp` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `usesLastAccess` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`usesUserId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci COMMENT='Daftar User Session';

/*Data for the table `admin_user_sessions` */

insert  into `admin_user_sessions`(`usesUserId`,`usesSessionId`,`usesComp`,`usesLastAccess`) values (2,'cd3f410cba55290108038cbc02192bda93987fa0','e6cb5b74698de7b11e95e44c4ccb32b4','2015-02-12 21:09:14');

/*Table structure for table `admin_users` */

DROP TABLE IF EXISTS `admin_users`;

CREATE TABLE `admin_users` (
  `ausrId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ausrUsername` varchar(32) NOT NULL,
  `ausrPassword` varchar(64) NOT NULL,
  `ausrName` varchar(100) NOT NULL,
  `ausrActive` tinyint(1) NOT NULL DEFAULT '0',
  `ausrLastLogin` datetime NOT NULL,
  `ausrCreated` datetime NOT NULL,
  `ausrRolhId` int(10) NOT NULL DEFAULT '0',
  `ausrUnit` int(10) NOT NULL DEFAULT '0',
  `ausrStatus` int(5) NOT NULL,
  `ausrFirstLogin` tinyint(4) NOT NULL DEFAULT '0',
  `ausrBannedTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`ausrId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 AVG_ROW_LENGTH=910 COMMENT='Daftar Table User';

/*Data for the table `admin_users` */

insert  into `admin_users`(`ausrId`,`ausrUsername`,`ausrPassword`,`ausrName`,`ausrActive`,`ausrLastLogin`,`ausrCreated`,`ausrRolhId`,`ausrUnit`,`ausrStatus`,`ausrFirstLogin`,`ausrBannedTime`) values (10,'root','$2y$10$hHhZi5YoanpnWa5oNKtISehgjlMop5qUYa/UvZ6NASZkZYK2jw2Se','Admin IT',0,'2021-07-22 11:56:36','2013-06-04 09:29:05',10,0,2,0,'0000-00-00 00:00:00');

/*Table structure for table `admin_users_access` */

DROP TABLE IF EXISTS `admin_users_access`;

CREATE TABLE `admin_users_access` (
  `auacAusrId` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'ID Admin User',
  `auacMenuId` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'ID Menu',
  `auacView` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `auacNew` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `auacEdit` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `auacDelete` tinyint(3) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`auacAusrId`,`auacMenuId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci COMMENT='Daftar Akses User Admin';

/*Data for the table `admin_users_access` */

/*Table structure for table `company` */

DROP TABLE IF EXISTS `company`;

CREATE TABLE `company` (
  `compId` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `compNick` varchar(10) NOT NULL,
  `compName` varchar(35) NOT NULL,
  `compAddress` varchar(75) NOT NULL,
  `compPostCode` varchar(5) NOT NULL,
  `compCity` varchar(50) NOT NULL,
  `compTelp` varchar(15) NOT NULL,
  `compTelp2` varchar(15) NOT NULL,
  `compFax` varchar(15) NOT NULL,
  `compFax2` varchar(15) NOT NULL,
  `compEmail` varchar(25) NOT NULL,
  `compNonActiveFlag` tinyint(3) NOT NULL DEFAULT '0' COMMENT '0: Active | 1: Non Active',
  `compStatusAnggaran` tinyint(1) NOT NULL DEFAULT '1',
  `comWorkingDate` date NOT NULL DEFAULT '0000-00-00',
  `compCreatedTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `compCreatedUserId` int(11) NOT NULL,
  `compUpdatedTime` datetime DEFAULT NULL,
  `compUpdatedUserId` int(11) DEFAULT NULL,
  `compDeletedTime` datetime DEFAULT NULL,
  `compDeletedUserId` int(11) DEFAULT NULL,
  PRIMARY KEY (`compId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Daftar Company';

/*Data for the table `company` */

insert  into `company`(`compId`,`compNick`,`compName`,`compAddress`,`compPostCode`,`compCity`,`compTelp`,`compTelp2`,`compFax`,`compFax2`,`compEmail`,`compNonActiveFlag`,`compStatusAnggaran`,`comWorkingDate`,`compCreatedTime`,`compCreatedUserId`,`compUpdatedTime`,`compUpdatedUserId`,`compDeletedTime`,`compDeletedUserId`) values (1,'Samawa','Kabupaten Sumbawa','tower','12345','Gotham City','2222222','33333333','44444444','555555555','sss@sss.com',0,1,'2015-03-03','2014-12-10 00:00:00',2,'2015-02-23 11:57:15',0,NULL,NULL);

/*Table structure for table `homepage` */

DROP TABLE IF EXISTS `homepage`;

CREATE TABLE `homepage` (
  `hpid` int(2) NOT NULL AUTO_INCREMENT,
  `hpNama` varchar(50) NOT NULL,
  `hpNamaKab` varchar(100) DEFAULT NULL,
  `hpNamaKecamatan` varchar(100) DEFAULT NULL,
  `hpNamaDesa` tinytext,
  `hpAlamatDesa` tinytext,
  `hpTeleponDesa` tinytext,
  `hpEmailDesa` tinytext,
  `hpKepalaDesa` tinytext,
  `hpSekreDesa` tinytext,
  `hpBendaharaDesa` tinytext,
  `hpAngaranAktif` tinytext,
  `hpSusunSah` smallint(1) NOT NULL DEFAULT '0',
  `hpUbahSah` smallint(1) NOT NULL DEFAULT '0',
  `hpCreateTime` datetime DEFAULT NULL,
  `hpCreateUser` varchar(25) DEFAULT NULL,
  `hpUpdateTime` datetime DEFAULT NULL,
  `hpUpdateUser` varchar(25) DEFAULT NULL,
  `hpDeleteTime` datetime DEFAULT NULL,
  `hpDeleteUser` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`hpid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `homepage` */

insert  into `homepage`(`hpid`,`hpNama`,`hpNamaKab`,`hpNamaKecamatan`,`hpNamaDesa`,`hpAlamatDesa`,`hpTeleponDesa`,`hpEmailDesa`,`hpKepalaDesa`,`hpSekreDesa`,`hpBendaharaDesa`,`hpAngaranAktif`,`hpSusunSah`,`hpUbahSah`,`hpCreateTime`,`hpCreateUser`,`hpUpdateTime`,`hpUpdateUser`,`hpDeleteTime`,`hpDeleteUser`) values (1,'konfigurasi 1','Kota Probolinggo','Jangkar','Jangkar','Jl. Panglima Soedirman','0338-999999','DPKKA@probolinggokota.go.id','012345','23456','45678','1',0,0,NULL,NULL,'2016-02-16 20:08:26','root',NULL,NULL);

/*Table structure for table `menu` */

DROP TABLE IF EXISTS `menu`;

CREATE TABLE `menu` (
  `menuId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `menuScope` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '1: admin; 2: user; 3: public',
  `menuName` varchar(50) NOT NULL,
  `menuNameInd` varchar(50) DEFAULT NULL,
  `menuNameEng` varchar(50) DEFAULT NULL,
  `apiLangGrid` varchar(255) DEFAULT NULL,
  `apiLangForm` varchar(255) DEFAULT NULL,
  `apiData` varchar(255) DEFAULT NULL,
  `menuLink` varchar(100) DEFAULT NULL COMMENT 'Jika modal=1, maka link datanya null',
  `htmlLink` varchar(200) DEFAULT '#',
  `menuModal` tinyint(4) DEFAULT '0',
  `menuParentId` int(10) DEFAULT '0',
  `menuIcon` varchar(100) DEFAULT NULL,
  `menuOrder` tinyint(4) DEFAULT '0',
  `menuLevel` tinyint(3) DEFAULT '0',
  `menuHeader` tinyint(3) DEFAULT '0' COMMENT '1: Header; 0: Detail',
  `menuFormCode` int(11) DEFAULT NULL,
  `menuNonActive` tinyint(4) DEFAULT '0',
  `menuCreatedTime` datetime DEFAULT '0000-00-00 00:00:00',
  `menuCreatedUserId` int(11) DEFAULT '2',
  `menuUpdatedTime` datetime DEFAULT NULL,
  `menuUpdatedUserId` int(11) DEFAULT NULL,
  `menuDeletedTime` datetime DEFAULT NULL,
  `menuDeletedUserId` int(11) DEFAULT NULL,
  PRIMARY KEY (`menuId`),
  KEY `menuParentId` (`menuParentId`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=780 COMMENT='Daftar Menu';

/*Data for the table `menu` */

insert  into `menu`(`menuId`,`menuScope`,`menuName`,`menuNameInd`,`menuNameEng`,`apiLangGrid`,`apiLangForm`,`apiData`,`menuLink`,`htmlLink`,`menuModal`,`menuParentId`,`menuIcon`,`menuOrder`,`menuLevel`,`menuHeader`,`menuFormCode`,`menuNonActive`,`menuCreatedTime`,`menuCreatedUserId`,`menuUpdatedTime`,`menuUpdatedUserId`,`menuDeletedTime`,`menuDeletedUserId`) values (2,1,'Master ','','','','','','','#',0,0,'fa-table',3,0,0,0,0,'2015-02-17 09:47:43',2,'2021-07-22 13:18:59',0,NULL,NULL),(3,1,'User','','','backend/public/lang/admin/config/useradmin/grid','backend/public/lang/admin/config/useradmin/form','backend/public/api/admin/config/useradmin','User','ajax/master/master.html',0,7,'',1,0,0,NULL,0,'0001-01-01 00:00:00',2,NULL,NULL,NULL,NULL),(7,1,'Setting','','','','','','','#',0,0,'fa-gears',1,0,0,NULL,0,'0001-01-01 00:00:00',2,'2021-07-09 08:18:56',0,NULL,NULL),(8,1,'Menu','','','backend/public/lang/admin/config/useradminmenu/grid','backend/public/lang/admin/config/useradminmenu/form','backend/public/api/admin/config/menuadminapi','Menu','ajax/master/master.html',0,7,'',2,0,0,NULL,0,'0001-01-01 00:00:00',2,'2015-09-15 20:34:00',0,NULL,NULL),(14,1,'Grup','','','backend/public/lang/admin/config/role/grid','backend/public/lang/admin/config/role/form','backend/public/api/admin/config/role','Grup','ajax/master/master.html',0,7,'',3,0,0,NULL,0,'2015-04-27 11:13:21',0,'2015-11-26 15:16:27',0,NULL,NULL),(15,1,'Grup Menu','','','backend/public/lang/admin/config/role/grid','backend/public/lang/admin/config/role/form','backend/public/api/admin/config/role','Grupmenu','ajax/setup/rolemenu.html',0,7,'',4,0,0,NULL,0,'2015-04-27 11:26:33',0,'2015-11-26 15:16:59',0,NULL,NULL),(41,1,'Konfigurasi',NULL,NULL,'backend/public/lang/admin/transaksi/homepage/grid','backend/public/lang/admin/transaksi/homepage/form','backend/public/api/admin/transaksi/homepage','Client','ajax/master/master2.html',0,7,'',20,0,0,NULL,0,'2015-09-15 20:39:40',0,'2018-04-04 10:14:11',0,NULL,NULL),(45,1,'Master',NULL,NULL,'','','','Master','#',0,0,'fa-list',3,0,0,NULL,0,'2015-11-06 09:14:34',0,NULL,NULL,NULL,NULL),(87,1,'Wilayah',NULL,NULL,'','','','Wilayah','#',0,45,'',20,0,0,NULL,0,'2018-03-16 14:13:46',NULL,NULL,NULL,NULL,NULL),(88,1,'Provinsi',NULL,NULL,'backend/public/lang/admin/master/provinsi/grid','backend/public/lang/admin/master/provinsi/form','backend/public/api/admin/master/provinsi','Provinsi','ajax/master/master.html',0,87,'',1,0,0,NULL,0,'2018-03-16 14:15:43',NULL,NULL,NULL,NULL,NULL),(89,1,'Kabupaten / Kota',NULL,NULL,'backend/public/lang/admin/master/kabupaten/grid','backend/public/lang/admin/master/kabupaten/form','backend/public/api/admin/master/kabupaten','Kabupaten','ajax/master/master.html',0,87,'',2,0,0,NULL,0,'2018-03-16 14:19:03',NULL,'2018-03-16 14:21:34',0,NULL,NULL),(90,1,'Kecamatan',NULL,NULL,'backend/public/lang/admin/master/kecamatan/grid','backend/public/lang/admin/master/kecamatan/form','backend/public/api/admin/master/kecamatan','Kecamatan','ajax/master/master.html',0,87,'',3,0,0,NULL,0,'2018-03-16 14:19:56',NULL,NULL,NULL,NULL,NULL),(91,1,'Desa / Kelurahan',NULL,NULL,'backend/public/lang/admin/master/kelurahan/grid','backend/public/lang/admin/master/kelurahan/form','backend/public/api/admin/master/kelurahan','Kelurahan ','ajax/master/master.html',0,87,'',4,0,0,NULL,0,'2018-03-16 14:20:48',NULL,'2018-03-16 14:21:45',0,NULL,NULL),(92,1,'Ganti Password',NULL,NULL,'backend/public/lang/admin/config/password/grid','backend/public/lang/admin/config/password/form','backend/public/api/admin/config/useradmin','GantiPassword','ajax/master/password.html',0,7,'',6,0,0,NULL,0,'2018-01-06 13:38:44',0,NULL,NULL,NULL,NULL),(93,1,'Agama',NULL,NULL,'backend/public/lang/admin/master/agama/grid','backend/public/lang/admin/master/agama/form','backend/public/api/admin/master/agama','Agama','ajax/master/master.html',0,45,'',16,0,0,NULL,0,'2018-03-16 09:18:07',0,NULL,NULL,NULL,NULL),(94,1,'Kop',NULL,NULL,'backend/public/lang/admin/master/kop/grid','backend/public/lang/admin/master/kop/form','backend/public/api/admin/master/kop','Kop','ajax/master/kop.html',0,45,'fa-table',127,0,0,NULL,0,'2020-03-16 09:31:10',0,'2020-03-16 09:41:45',0,NULL,NULL);

/*Table structure for table `msKop` */

DROP TABLE IF EXISTS `msKop`;

CREATE TABLE `msKop` (
  `kopId` int(11) NOT NULL AUTO_INCREMENT,
  `kopNama` varchar(100) NOT NULL,
  `kopAlamat` varchar(100) NOT NULL,
  `kopKdPos` int(11) DEFAULT NULL,
  `kopWeb` varchar(100) NOT NULL,
  `kopEmail` varchar(100) NOT NULL,
  `kopTelp` varchar(50) DEFAULT NULL,
  `kopKab` varchar(50) DEFAULT NULL,
  `kopGambar1` varchar(100) DEFAULT NULL,
  `kopGambar2` varchar(100) DEFAULT NULL,
  `kopCreateUser` varchar(100) DEFAULT NULL,
  `kopUpdateTime` datetime DEFAULT NULL,
  `kopUpdateUser` varchar(100) DEFAULT NULL,
  `kopDeleteTime` datetime DEFAULT NULL,
  `kopDeleteUser` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`kopId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `msKop` */

insert  into `msKop`(`kopId`,`kopNama`,`kopAlamat`,`kopKdPos`,`kopWeb`,`kopEmail`,`kopTelp`,`kopKab`,`kopGambar1`,`kopGambar2`,`kopCreateUser`,`kopUpdateTime`,`kopUpdateUser`,`kopDeleteTime`,`kopDeleteUser`) values (1,'OIMS - MEDICAL','Jl. Kanal No. 5a, Lamper Lor, Semarang Selatan',50242,'https://optimasolution.co.id','marketing@optimasolution.co.id','0812-8963-2381','SEMARANG','logo-oms.png','logo-jateng.png','root','2021-06-04 14:58:04','punky',NULL,NULL);

/*Table structure for table `role` */

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `roleId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `roleName` varchar(50) NOT NULL,
  `roleStatus` smallint(2) NOT NULL,
  `roleNonActive` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `roleCreatedUserId` varchar(25) DEFAULT NULL,
  `roleCreatedTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `roleUpdatedUserId` varchar(25) DEFAULT NULL,
  `roleUpdatedTime` datetime DEFAULT NULL,
  `roleDeletedUserId` varchar(25) DEFAULT NULL,
  `roleDeletedTime` datetime DEFAULT NULL,
  PRIMARY KEY (`roleId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=8192 COMMENT='Daftar Role';

/*Data for the table `role` */

insert  into `role`(`roleId`,`roleName`,`roleStatus`,`roleNonActive`,`roleCreatedUserId`,`roleCreatedTime`,`roleUpdatedUserId`,`roleUpdatedTime`,`roleDeletedUserId`,`roleDeletedTime`) values (10,'Administrator',2,0,'2','2014-12-02 06:47:29','root','2020-10-02 09:48:38',NULL,NULL);

/*Table structure for table `role_menu` */

DROP TABLE IF EXISTS `role_menu`;

CREATE TABLE `role_menu` (
  `rolmId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rolmRoleId` int(10) unsigned DEFAULT NULL,
  `rolmMenuId` int(10) unsigned DEFAULT NULL,
  `rolmView` tinyint(3) NOT NULL DEFAULT '0',
  `rolmNew` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `rolmEdit` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `rolmDelete` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `rolmConfirm` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `rolmApprove` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `rolmVoid` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `rolmCreatedUserId` varchar(25) DEFAULT NULL,
  `rolmCreatedTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `rolmUpdatedUserId` varchar(25) DEFAULT NULL,
  `rolmUpdatedTime` datetime DEFAULT NULL,
  `rolmDeletedUserId` varchar(25) DEFAULT NULL,
  `rolmDeletedTime` datetime DEFAULT NULL,
  PRIMARY KEY (`rolmId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=630 COMMENT='Daftar Role Menu';

/*Data for the table `role_menu` */

insert  into `role_menu`(`rolmId`,`rolmRoleId`,`rolmMenuId`,`rolmView`,`rolmNew`,`rolmEdit`,`rolmDelete`,`rolmConfirm`,`rolmApprove`,`rolmVoid`,`rolmCreatedUserId`,`rolmCreatedTime`,`rolmUpdatedUserId`,`rolmUpdatedTime`,`rolmDeletedUserId`,`rolmDeletedTime`) values (1,10,7,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(2,10,45,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(3,10,3,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(4,10,8,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(5,10,14,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(6,10,15,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(7,10,92,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(8,10,87,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(9,10,93,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(10,10,94,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(11,10,88,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(12,10,89,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(13,10,90,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL),(14,10,91,0,0,0,0,0,0,0,NULL,'0000-00-00 00:00:00',NULL,NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
