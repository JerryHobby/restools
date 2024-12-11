/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.6.2-MariaDB, for Win64 (AMD64)
--
-- Host: jerryhobby.com    Database: restools
-- ------------------------------------------------------
-- Server version	10.5.26-MariaDB-0+deb11u2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `Hub`
--

DROP TABLE IF EXISTS `Hub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Hub` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `airline` varchar(191) NOT NULL,
  `iata` varchar(191) NOT NULL,
  `airport` varchar(191) NOT NULL,
  `city` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Hub_iata_idx` (`iata`),
  KEY `Hub_airline_idx` (`airline`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hub`
--

LOCK TABLES `Hub` WRITE;
/*!40000 ALTER TABLE `Hub` DISABLE KEYS */;
INSERT INTO `Hub` VALUES
(1,'United Airlines','DEN','Denver International Airport','Denver','2024-12-09 03:06:14.857','2024-12-09 03:06:14.857'),
(2,'United Airlines','IAH','George Bush Intercontinental Airport','Houston','2024-12-09 03:06:15.007','2024-12-09 03:06:15.007'),
(3,'United Airlines','LAX','Los Angeles International Airport','Los Angeles','2024-12-09 03:06:15.091','2024-12-09 03:06:15.091'),
(4,'United Airlines','EWR','Newark Liberty International Airport','Newark','2024-12-09 03:06:15.186','2024-12-09 03:06:15.186'),
(5,'United Airlines','ORD','O’Hare International Airport','Chicago','2024-12-09 03:06:15.272','2024-12-09 03:06:15.272'),
(6,'United Airlines','SFO','San Francisco International Airport','San Francisco','2024-12-09 03:06:15.353','2024-12-09 03:06:15.353'),
(7,'United Airlines','IAD','Washington Dulles International Airport','Washington','2024-12-09 03:06:15.438','2024-12-09 03:06:15.438'),
(8,'United Airlines','GUM','Antonio B. Won Pat International Airport','Guam','2024-12-09 03:06:15.511','2024-12-09 03:06:15.511'),
(9,'United Airlines','NRT','Narita International Airport','Tokyo','2024-12-09 03:06:15.584','2024-12-09 03:06:15.584'),
(10,'American Airlines','CLT','Charlotte Douglas International Airport','Charlotte','2024-12-09 03:06:15.658','2024-12-09 03:06:15.658'),
(11,'American Airlines','ORD','O’Hare International Airport','Chicago','2024-12-09 03:06:15.735','2024-12-09 03:06:15.735'),
(12,'American Airlines','DFW','Dallas/Fort Worth International Airport','Dallas','2024-12-09 03:06:15.812','2024-12-09 03:06:15.812'),
(13,'American Airlines','LAX','Los Angeles International Airport','Los Angeles','2024-12-09 03:06:15.909','2024-12-09 03:06:15.909'),
(14,'American Airlines','MIA','Miami International Airport','Miami','2024-12-09 03:06:15.983','2024-12-09 03:06:15.983'),
(15,'American Airlines','JFK','John F. Kennedy International Airport','New York','2024-12-09 03:06:16.055','2024-12-09 03:06:16.055'),
(16,'American Airlines','LGA','LaGuardia Airport','New York','2024-12-09 03:06:16.130','2024-12-09 03:06:16.130'),
(17,'American Airlines','PHL','Philadelphia International Airport','Philadelphia','2024-12-09 03:06:16.212','2024-12-09 03:06:16.212'),
(18,'American Airlines','PHX','Phoenix Sky Harbor International Airport','Phoenix','2024-12-09 03:06:16.287','2024-12-09 03:06:16.287'),
(19,'American Airlines','DCA','Ronald Reagan Washington National Airport','Washington','2024-12-09 03:06:16.370','2024-12-09 03:06:16.370'),
(20,'Delta','CVG','Cincinnati/Northern Kentucky International Airport','Cincinnati','2024-12-09 03:06:16.445','2024-12-09 03:06:16.445'),
(21,'Delta','DTW','Detroit Metropolitan Airport','Detroit','2024-12-09 03:06:16.514','2024-12-09 03:06:16.514'),
(22,'Delta','ATL','Hartsfield-Jackson Atlanta International Airport','Atlanta','2024-12-09 03:06:16.590','2024-12-09 03:06:16.590'),
(23,'Delta','JFK','John F. Kennedy International Airport','New York City','2024-12-09 03:06:16.669','2024-12-09 03:06:16.669'),
(24,'Delta','LGA','LaGuardia Airport','New York City','2024-12-09 03:06:16.754','2024-12-09 03:06:16.754'),
(25,'Delta','BOS','Logan International Airport','Boston','2024-12-09 03:06:16.829','2024-12-09 03:06:16.829'),
(26,'Delta','LAX','Los Angeles International Airport','Los Angeles','2024-12-09 03:06:16.898','2024-12-09 03:06:16.898'),
(27,'Delta','MSP','Minneapolis-St. Paul International Airport','Minneapolis','2024-12-09 03:06:16.970','2024-12-09 03:06:16.970'),
(28,'Delta','SLC','Salt Lake City International Airport','Salt Lake City','2024-12-09 03:06:17.047','2024-12-09 03:06:17.047'),
(29,'Delta','SEA','Seattle-Tacoma International Airport','Seattle','2024-12-09 03:06:17.132','2024-12-09 03:06:17.132'),
(30,'Southwest','DAL','Dallas Love Field','Dallas','2024-12-09 03:06:17.209','2024-12-09 03:06:17.209'),
(31,'Southwest','MDW','Chicago Midway International Airport','Chicago','2024-12-09 03:06:17.283','2024-12-09 03:06:17.283'),
(32,'Southwest','HOU','William P. Hobby Airport','Houston','2024-12-09 03:06:17.356','2024-12-09 03:06:17.356'),
(33,'Southwest','BWI','Baltimore Washington International Airport','Baltimore','2024-12-09 03:06:17.430','2024-12-09 03:06:17.430'),
(34,'Southwest','ATL','Hartsfield-Jackson Atlanta International Airport','Atlanta','2024-12-09 03:06:17.505','2024-12-09 03:06:17.505'),
(35,'Southwest','DEN','Denver International Airport','Denver','2024-12-09 03:06:17.588','2024-12-09 03:06:17.588'),
(36,'Southwest','LAS','McCarran International Airport','Las Vegas','2024-12-09 03:06:17.664','2024-12-09 03:06:17.664'),
(37,'Southwest','OAK','Metropolitan Oakland International Airport','Oakland','2024-12-09 03:06:17.745','2024-12-09 03:06:17.745'),
(38,'Southwest','MCO','Orlando International Airport','Orlando','2024-12-09 03:06:17.823','2024-12-09 03:06:17.823'),
(39,'Southwest','PHX','Phoenix Sky Harbor International Airport','Phoenix','2024-12-09 03:06:17.921','2024-12-09 03:06:17.921'),
(40,'Jet Blue','JFK','John F. Kennedy International Airport','New York City','2024-12-09 03:06:18.007','2024-12-09 03:06:18.007'),
(41,'Jet Blue','FLL','Hollywood International Airport','Fort Lauderdale','2024-12-09 03:06:18.077','2024-12-09 03:06:18.077'),
(42,'Jet Blue','BOS','Logan International Airport','Boston','2024-12-09 03:06:18.162','2024-12-09 03:06:18.162'),
(43,'Jet Blue','LGB','Long Beach Airport','Long Beach','2024-12-09 03:06:18.232','2024-12-09 03:06:18.232'),
(44,'Jet Blue','SJU','Luis Muñoz Marin International Airport','San Juan','2024-12-09 03:06:18.317','2024-12-09 03:06:18.317'),
(45,'Jet Blue','MCO','Orlando International Airport','Orlando','2024-12-09 03:06:18.392','2024-12-09 03:06:18.392'),
(46,'Alaska Airlines','LAX','Los Angeles International Airport','Los Angeles','2024-12-09 03:06:18.463','2024-12-09 03:06:18.463'),
(47,'Alaska Airlines','PH','Portsmouth-South Coast Regional Airport','Portsmouth','2024-12-09 03:06:18.538','2024-12-09 03:06:18.538'),
(48,'Alaska Airlines','SEA','Seattle-Tacoma International Airport','Seattle','2024-12-09 03:06:18.615','2024-12-09 03:06:18.615'),
(49,'Alaska Airlines','ANC','Ted Stevens Anchorage International Airport','Anchorage','2024-12-09 03:06:18.688','2024-12-09 03:06:18.688'),
(50,'Alaska Airlines','SAN','San Diego International Airport','San Diego','2024-12-09 03:06:18.795','2024-12-09 03:06:18.795'),
(51,'Alaska Airlines','SJC','Norman Y Mineta San Jose International Airport','San Jose','2024-12-09 03:06:18.890','2024-12-09 03:06:18.890');
/*!40000 ALTER TABLE `Hub` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-10 20:33:36
