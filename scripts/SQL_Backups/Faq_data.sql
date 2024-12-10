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
-- Table structure for table `Faq`
--

DROP TABLE IF EXISTS `Faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Faq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(191) NOT NULL,
  `question` varchar(191) NOT NULL,
  `answer` text NOT NULL,
  `orderInCategory` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Faq_category_idx` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Faq`
--

LOCK TABLES `Faq` WRITE;
/*!40000 ALTER TABLE `Faq` DISABLE KEYS */;
INSERT INTO `Faq` VALUES
(1,'Getting Started','What is ResTools?','ResTools is a comprehensive aviation toolkit that provides:\n\n- **World Clock Management**: Track multiple timezone clocks\n- **Airport Information**: Detailed airport database\n- **Flight Planning**: Tools for route planning\n- **Data Analysis**: Aviation statistics and insights\n\nDesigned for aviation professionals and enthusiasts.',1,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(2,'Getting Started','How do I create an account?','Creating an account is simple:\n\n1. Click the **Sign Up** button\n2. Enter your email address\n3. Choose a secure password\n4. Verify your email\n5. Complete your profile\n\nYour account will be ready immediately after verification.',2,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(3,'Getting Started','What features are included in the free tier?','Free tier includes:\n\n- **Basic World Clock**: Up to 3 time zones\n- **Airport Search**: Basic airport information\n- **Route Viewer**: Simple route visualization\n- **Time Zone Converter**: Basic conversion tools\n\n*Upgrade to Premium for unlimited access.*',3,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(4,'Features','How does the World Clock feature work?','The World Clock feature offers:\n\n1. **Multiple Time Zones**: Track unlimited locations\n2. **Custom Labels**: Name your clocks\n3. **Quick Add**: Search by airport code\n4. **Auto-Sync**: Real-time updates\n5. **Favorites**: Save frequently used locations',1,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(5,'Features','Can I customize the dashboard?','Yes! Dashboard customization options include:\n\n- **Widget Arrangement**: Drag and drop\n- **Color Themes**: Light/Dark modes\n- **Time Format**: 12/24 hour\n- **Default View**: Set your preferred layout\n- **Quick Access**: Pin favorite tools',2,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(6,'Features','What airport information is available?','Our airport database includes:\n\n- **Basic Info**: IATA/ICAO codes\n- **Location**: Coordinates and elevation\n- **Time Zone**: Local time and DST rules\n- **Weather**: Current conditions\n- **Links**: Official websites\n- **Facilities**: Available services',3,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(7,'Technical','How often is the airport database updated?','Database updates follow this schedule:\n\n- **Core Data**: Monthly updates\n- **Time Zones**: Real-time DST changes\n- **Weather**: Every 30 minutes\n- **Facilities**: Quarterly reviews\n\n*Last update timestamps are shown in the app.*',1,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(8,'Technical','What browsers are supported?','ResTools is tested and optimized for:\n\n- **Chrome**: Version 90+\n- **Firefox**: Version 88+\n- **Safari**: Version 14+\n- **Edge**: Version 90+\n\n*Mobile browsers are supported but desktop is recommended.*',2,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(9,'Technical','How secure is my data?','We implement multiple security measures:\n\n- **Encryption**: All data in transit and at rest\n- **Authentication**: 2FA available\n- **Backups**: Daily automated backups\n- **Monitoring**: 24/7 system monitoring\n- **Compliance**: GDPR and CCPA compliant',3,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(10,'Account Management','How do I reset my password?','1. Click **Forgot Password**\n2. Enter your email\n3. Check your inbox\n4. Click the reset link\n5. Enter new password\n\n*Links expire after 24 hours for security.*',1,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(11,'Account Management','Can I change my email address?','Yes, to change your email:\n\n1. Go to **Account Settings**\n2. Click **Change Email**\n3. Enter new email\n4. Verify both old and new emails\n5. Update completed\n\n*Your account history will be preserved.*',2,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(12,'Account Management','How do I upgrade to Premium?','To upgrade your account:\n\n1. Visit **Subscription** page\n2. Choose your plan\n3. Select payment method\n4. Complete purchase\n\n*Features unlock immediately after payment.*',3,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(13,'Troubleshooting','Why is my clock not syncing?','Common sync issues and solutions:\n\n1. **Check Internet**: Ensure stable connection\n2. **Browser Cache**: Clear cache/cookies\n3. **Time Zone**: Verify system time\n4. **Refresh**: Force reload the page\n\n*Contact support if issues persist.*',1,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(14,'Troubleshooting','What if airport data is incorrect?','To report data issues:\n\n1. Use the **Report** button\n2. Provide correct information\n3. Include source if possible\n4. Submit report\n\n*Our team verifies and updates within 48 hours.*',2,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(15,'Troubleshooting','App is running slowly, what can I do?','Performance optimization steps:\n\n1. **Clear Cache**: Browser cleanup\n2. **Reduce Widgets**: Remove unused items\n3. **Update Browser**: Use latest version\n4. **Check Extensions**: Disable conflicts\n\n*Try incognito mode to isolate issues.*',3,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(16,'Privacy & Security','How is my personal data handled?','Your data protection includes:\n\n- **Storage**: Encrypted servers\n- **Access**: Role-based controls\n- **Sharing**: Never sold to third parties\n- **Retention**: Clear policies\n- **Control**: Download or delete anytime',1,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(17,'Privacy & Security','What is your cookie policy?','Our cookie usage:\n\n- **Essential**: Site functionality\n- **Analytics**: Usage patterns\n- **Preferences**: Your settings\n- **Marketing**: Optional, can disable\n\n*Detailed policy available in footer.*',2,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(18,'Privacy & Security','How can I enable 2FA?','Enable 2FA security:\n\n1. Go to **Security Settings**\n2. Click **Enable 2FA**\n3. Choose method:\n   - Authenticator app\n   - SMS verification\n4. Save backup codes\n\n*Recommended for all users.*',3,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(19,'Premium Features','What extra features do Premium users get?','Premium benefits include:\n\n- **Unlimited Clocks**: No restrictions\n- **Advanced Search**: Full database access\n- **Custom Reports**: Data exports\n- **Priority Support**: 24/7 assistance\n- **Early Access**: New features first',1,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(20,'Premium Features','Can I try Premium features before buying?','Yes, trial options available:\n\n- **14-day Trial**: Full access\n- **No Credit Card**: Required for trial\n- **All Features**: Unlocked\n- **Auto-Cancel**: No obligations\n\n*Start trial from account page.*',2,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(21,'Premium Features','Do you offer team subscriptions?','Team plans provide:\n\n- **Shared Dashboard**: Team view\n- **User Management**: Admin controls\n- **Group Pricing**: Volume discounts\n- **Team Reports**: Usage analytics\n\n*Contact sales for custom plans.*',3,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(22,'Mobile Access','Is there a mobile app available?','Mobile access options:\n\n- **Web App**: Mobile-optimized\n- **iOS App**: App Store\n- **Android**: Play Store\n- **Sync**: Cross-device data\n\n*All features available on mobile.*',1,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(23,'Mobile Access','How do I sync across devices?','Device synchronization:\n\n1. **Sign In**: Use same account\n2. **Auto-Sync**: Real-time updates\n3. **Settings**: Sync preferences\n4. **Offline**: Local storage backup\n\n*Internet required for sync.*',2,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(24,'Mobile Access','Can I use offline mode?','Offline capabilities:\n\n- **Basic Functions**: Continue working\n- **Cached Data**: Recent searches\n- **Auto-Sync**: When online\n- **Storage**: Local device\n\n*Premium required for full offline.*',3,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(25,'Updates & News','How often are new features added?','Our update schedule:\n\n- **Major Updates**: Quarterly\n- **Minor Updates**: Monthly\n- **Bug Fixes**: Weekly\n- **Emergency Fixes**: As needed\n\n*Follow our blog for announcements.*',1,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(26,'Updates & News','Where can I find release notes?','Access update information:\n\n- **In-App**: Updates tab\n- **Email**: Subscriber newsletter\n- **Blog**: Detailed articles\n- **Social**: Quick updates\n\n*Enable notifications for alerts.*',2,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(27,'Updates & News','Can I suggest new features?','Feature suggestion process:\n\n1. Visit **Feedback** page\n2. Submit your idea\n3. Community voting\n4. Development updates\n\n*We review all suggestions monthly.*',3,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(28,'Support','How do I contact support?','Support channels available:\n\n- **Chat**: 24/7 live support\n- **Email**: tickets@restools.com\n- **Phone**: Premium users only\n- **Forum**: Community help\n\n*Average response time: 2 hours*',1,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(29,'Support','Is there a user guide available?','Documentation resources:\n\n- **Quick Start**: Basic guide\n- **Full Manual**: Detailed docs\n- **Video Tutorials**: Step-by-step\n- **FAQs**: Common questions\n\n*All available in Help Center.*',2,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000'),
(30,'Support','Do you offer training sessions?','Training options include:\n\n- **Webinars**: Monthly sessions\n- **1-on-1**: Premium users\n- **Group**: Team accounts\n- **Custom**: Enterprise only\n\n*Schedule from Training page.*',3,'2024-12-10 14:13:06.000','2024-12-10 14:13:06.000');
/*!40000 ALTER TABLE `Faq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-10  9:20:15
