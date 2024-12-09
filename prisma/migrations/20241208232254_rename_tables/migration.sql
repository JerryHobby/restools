-- DropForeignKey
ALTER TABLE `Airport` DROP FOREIGN KEY `Airport_iso_country_fkey`;

-- DropForeignKey
ALTER TABLE `Airport` DROP FOREIGN KEY `Airport_iso_region_fkey`;

-- AddForeignKey
ALTER TABLE `Airport` ADD CONSTRAINT `Airport_iso_country_fkey` FOREIGN KEY (`iso_country`) REFERENCES `Country`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Airport` ADD CONSTRAINT `Airport_iso_region_fkey` FOREIGN KEY (`iso_region`) REFERENCES `Region`(`code`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RedefineIndex
CREATE INDEX `Airport_iso_country_idx` ON `Airport`(`iso_country`);
DROP INDEX `Airports_iso_country_idx` ON `Airport`;

-- RedefineIndex
CREATE INDEX `Airport_iso_region_idx` ON `Airport`(`iso_region`);
DROP INDEX `Airports_iso_region_idx` ON `Airport`;

-- RedefineIndex
CREATE UNIQUE INDEX `Country_code_key` ON `Country`(`code`);
DROP INDEX `Countries_code_key` ON `Country`;

-- RedefineIndex
CREATE UNIQUE INDEX `Region_code_key` ON `Region`(`code`);
DROP INDEX `Regions_code_key` ON `Region`;
