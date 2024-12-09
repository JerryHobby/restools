-- Rename Tables
RENAME TABLE `Airlines` TO `Airline`;
RENAME TABLE `Airports` TO `Airport`;
RENAME TABLE `Countries` TO `Country`;
RENAME TABLE `Regions` TO `Region`;

-- Drop Foreign Keys (if not already dropped)
ALTER TABLE `Airport` DROP FOREIGN KEY `Airports_iso_country_fkey`;
ALTER TABLE `Airport` DROP FOREIGN KEY `Airports_iso_region_fkey`;

-- Recreate Foreign Keys
ALTER TABLE `Airport` 
  ADD CONSTRAINT `Airport_iso_country_fkey` FOREIGN KEY (`iso_country`) REFERENCES `Country`(`code`);
ALTER TABLE `Airport` 
  ADD CONSTRAINT `Airport_iso_region_fkey` FOREIGN KEY (`iso_region`) REFERENCES `Region`(`code`);