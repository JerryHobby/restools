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
-- Table structure for table `Airline`
--

DROP TABLE IF EXISTS `Airline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Airline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `iata_code` varchar(191) DEFAULT NULL,
  `headquarters` varchar(191) DEFAULT NULL,
  `hubs` varchar(191) DEFAULT NULL,
  `country` varchar(191) DEFAULT NULL,
  `logo` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `website` varchar(191) DEFAULT NULL,
  `continent` varchar(191) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Airline`
--

LOCK TABLES `Airline` WRITE;
/*!40000 ALTER TABLE `Airline` DISABLE KEYS */;
INSERT INTO `Airline` VALUES
(1,'Aer Lingus','EI','Dublin, Ireland','Dublin Airport, Shannon Airport','Ireland','aerlingus.png',NULL,'https://www.aerlingus.com','EU'),
(2,'Aeroméxico','AM','Mexico City, Mexico','Mexico City International Airport','Mexico','aeromexico.svg',NULL,'https://www.aeromexico.com','NA'),
(3,'Air Asia','AK','Kuala Lumpur, Malaysia','Kuala Lumpur International Airport','Malaysia','airasia.webp',NULL,'https://www.airasia.com','AS'),
(4,'Air Canada','AC','Montreal, Quebec, Canada','Toronto Pearson, Vancouver, Montreal','Canada','aircanada.svg',NULL,'https://www.aircanada.com','NA'),
(5,'Air China','CA','Beijing, China','Beijing Capital International Airport','China','airchina.webp',NULL,'https://www.airchina.com','AS'),
(6,'Air France','AF','Tremblay-en-France, France','Charles de Gaulle Airport, Orly Airport','France','airfrance.svg',NULL,'https://www.airfrance.com','EU'),
(7,'Air India','AI','New Delhi, India','Indira Gandhi International Airport','India','airindia.webp',NULL,'https://www.airindia.in','AS'),
(8,'Air New Zealand','NZ','Auckland, New Zealand','Auckland Airport','New Zealand','airnewzealand.svg',NULL,'https://www.airnewzealand.com','OC'),
(9,'Alaska Airlines','AS','Seattle, Washington, USA','Seattle-Tacoma, Portland, Anchorage, San Francisco, Los Angeles','USA','alaska.svg',NULL,'https://www.alaskaair.com','NA'),
(10,'All Nippon Airways','NH','Tokyo, Japan','Tokyo Narita, Tokyo Haneda','Japan','allnippon.svg',NULL,'https://www.ana.co.jp','AS'),
(11,'American Airlines','AA','Fort Worth, Texas, USA','Dallas/Fort Worth, Charlotte, Chicago-O\'Hare, Los Angeles, Miami, New York-JFK, New York-LaGuardia, Philadelphia, Phoenix, Washington-National','USA','american.webp',NULL,'https://www.aa.com','NA'),
(12,'Austrian Airlines','OS','Vienna, Austria','Vienna International Airport','Austria','austrian.svg',NULL,'https://www.austrian.com','EU'),
(13,'British Airways','BA','London, England','London Heathrow, London Gatwick','United Kingdom','british.svg',NULL,'https://www.britishairways.com','EU'),
(14,'Cathay Pacific','CX','Hong Kong','Hong Kong International Airport','Hong Kong','cathay.svg',NULL,'https://www.cathaypacific.com','AS'),
(15,'China Eastern','MU','Shanghai, China','Shanghai Pudong, Shanghai Hongqiao','China','chinaeastern.png',NULL,'https://us.ceair.com','AS'),
(16,'China Southern','CZ','Guangzhou, China','Guangzhou Baiyun International Airport','China','chinasouthern.webp',NULL,'https://www.csair.com','AS'),
(17,'Delta Air Lines','DL','Atlanta, Georgia, USA','Atlanta, Boston, Detroit, Los Angeles, Minneapolis/St. Paul, New York-JFK, New York-LaGuardia, Salt Lake City, Seattle/Tacoma','USA','delta.svg',NULL,'https://www.delta.com','NA'),
(18,'EasyJet','U2','Luton, England','London Gatwick, London Luton','United Kingdom','easyjet.svg',NULL,'https://www.easyjet.com','EU'),
(19,'EgyptAir','MS','Cairo, Egypt','Cairo International Airport','Egypt','egyptair.webp',NULL,'https://www.egyptair.com','AF'),
(20,'Emirates','EK','Dubai, UAE','Dubai International Airport','United Arab Emirates','emirates.webp',NULL,'https://www.emirates.com','AS'),
(21,'Ethiopian Airlines','ET','Addis Ababa, Ethiopia','Bole International Airport','Ethiopia','ethiopian.webp',NULL,'https://www.ethiopianairlines.com','AF'),
(22,'Eurowings','EW','Düsseldorf, Germany','Düsseldorf Airport, Hamburg Airport','Germany','eurowings.webp',NULL,'https://www.eurowings.com','EU'),
(23,'EVA Air','BR','Taoyuan, Taiwan','Taoyuan International Airport','Taiwan','evaair.png',NULL,'https://www.evaair.com','AS'),
(24,'Garuda Indonesia','GA','Jakarta, Indonesia','Soekarno-Hatta International Airport','Indonesia','garuda.webp',NULL,'https://www.garuda-indonesia.com','AS'),
(25,'Go First','G8','Mumbai, India','Chhatrapati Shivaji Maharaj International Airport','India','gofirst.webp',NULL,'https://www.flygofirst.com','AS'),
(26,'Hawaiian Airlines','HA','Honolulu, Hawaii, USA','Daniel K. Inouye International Airport','USA','hawaiian.webp',NULL,'https://www.hawaiianairlines.com','NA'),
(27,'Iberia','IB','Madrid, Spain','Adolfo Suárez Madrid–Barajas Airport','Spain','iberia.webp',NULL,'https://www.iberia.com','EU'),
(28,'IndiGo','6E','Gurgaon, India','Indira Gandhi International Airport','India','indigo.webp',NULL,'https://www.goindigo.in','AS'),
(29,'Japan Airlines','JL','Tokyo, Japan','Tokyo Narita, Tokyo Haneda','Japan','japanair.webp',NULL,'https://www.jal.com','AS'),
(30,'Jet Airways','9W','Mumbai, India','Chhatrapati Shivaji Maharaj International Airport','India','jetairways.webp',NULL,'https://www.jetairways.com','AS'),
(31,'KLM','KL','Amstelveen, Netherlands','Amsterdam Airport Schiphol','Netherlands','klm.webp',NULL,'https://www.klm.com','EU'),
(32,'Korean Air','KE','Seoul, South Korea','Incheon International Airport','South Korea','korean.webp',NULL,'https://www.koreanair.com','AS'),
(33,'LEVEL','LV','Madrid, Spain','Barcelona–El Prat Airport','Spain','level.svg',NULL,'https://www.flylevel.com','EU'),
(34,'Lufthansa','LH','Frankfurt, Germany','Frankfurt Airport, Munich Airport','Germany','lufthansa.webp',NULL,'https://www.lufthansa.com','EU'),
(35,'Malaysia Airlines','MH','Kuala Lumpur, Malaysia','Kuala Lumpur International Airport','Malaysia','malaysia.webp',NULL,'https://www.malaysiaairlines.com','AS'),
(36,'Mexicana','MX','Mexico City, Mexico','Mexico City International Airport','Mexico','mexicana.webp',NULL,'https://www.mexicana.com','NA'),
(37,'Qantas','QF','Sydney, Australia','Sydney Airport, Melbourne Airport','Australia','qantas.webp',NULL,'https://www.qantas.com','OC'),
(38,'Qatar Airways','QR','Doha, Qatar','Hamad International Airport','Qatar','qatar.webp',NULL,'https://www.qatarairways.com','AS'),
(39,'Ryanair','FR','Dublin, Ireland','Dublin Airport, London Stansted Airport','Ireland','ryanair.webp',NULL,'https://www.ryanair.com','EU'),
(40,'Scandinavian Airlines','SK','Stockholm, Sweden','Copenhagen Airport, Oslo Airport, Stockholm Arlanda Airport','Sweden','sas.webp',NULL,'https://www.flysas.com','EU'),
(41,'Singapore Airlines','SQ','Singapore','Singapore Changi Airport','Singapore','singapore.webp',NULL,'https://www.singaporeair.com','AS'),
(42,'Southwest Airlines','WN','Dallas, Texas, USA','Atlanta, Baltimore, Chicago-Midway, Dallas-Love, Denver, Houston-Hobby, Las Vegas, Los Angeles, Oakland, Orlando, Phoenix','USA','southwest.webp',NULL,'https://www.southwest.com','NA'),
(43,'SpiceJet','SG','Gurgaon, India','Indira Gandhi International Airport','India','spicejet.webp',NULL,'https://www.spicejet.com','AS'),
(44,'Swiss International Air Lines','LX','Basel, Switzerland','Zürich Airport','Switzerland','swiss.webp',NULL,'https://www.swiss.com','EU'),
(45,'Turkish Airlines','TK','Istanbul, Turkey','Istanbul Airport','Turkey','turkish.webp',NULL,'https://www.turkishairlines.com','EU'),
(46,'United Airlines','UA','Chicago, Illinois, USA','Chicago-O\'Hare, Denver, Guam, Houston-Intercontinental, Los Angeles, Newark, San Francisco, Washington-Dulles','USA','united.svg',NULL,'https://www.united.com','NA'),
(47,'Vietnam Airlines','VN','Hanoi, Vietnam','Noi Bai International Airport','Vietnam','vietnam.webp',NULL,'https://www.vietnamairlines.com','AS'),
(48,'Vistara','UK','Gurgaon, India','Indira Gandhi International Airport','India','vistara.webp',NULL,'https://www.airvistara.com','AS'),
(49,'Wizz Air','W6','Budapest, Hungary','Budapest Ferenc Liszt International Airport','Hungary','wizz.png',NULL,'https://wizzair.com','EU');
/*!40000 ALTER TABLE `Airline` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-10  9:20:11
