-- CreateTable
CREATE TABLE `Airlines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `iata_code` VARCHAR(191) NULL,
    `headquarters` VARCHAR(191) NULL,
    `hubs` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `logo` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `website` VARCHAR(191) NULL,
    `continent` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Airports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ident` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `latitude_deg` DOUBLE NULL,
    `longitude_deg` DOUBLE NULL,
    `elevation_ft` INTEGER NULL,
    `continent` VARCHAR(191) NULL,
    `iso_country` VARCHAR(191) NOT NULL,
    `iso_region` VARCHAR(191) NULL,
    `municipality` VARCHAR(191) NULL,
    `scheduled_service` VARCHAR(191) NULL,
    `gps_code` VARCHAR(191) NULL,
    `iata_code` VARCHAR(191) NULL,
    `local_code` VARCHAR(191) NULL,
    `home_link` VARCHAR(191) NULL,
    `wikipedia_link` VARCHAR(191) NULL,
    `keywords` VARCHAR(1000) NULL,

    INDEX `Airports_iso_country_idx`(`iso_country`),
    INDEX `Airports_iso_region_idx`(`iso_region`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Countries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `continent` VARCHAR(191) NULL,
    `wikipedia_link` VARCHAR(191) NULL,
    `keywords` VARCHAR(191) NULL,

    UNIQUE INDEX `Countries_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Regions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `local_code` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `continent` VARCHAR(191) NOT NULL,
    `iso_country` VARCHAR(191) NOT NULL,
    `wikipedia_link` VARCHAR(191) NULL,
    `keywords` VARCHAR(191) NULL,

    UNIQUE INDEX `Regions_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Airports` ADD CONSTRAINT `Airports_iso_country_fkey` FOREIGN KEY (`iso_country`) REFERENCES `Countries`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Airports` ADD CONSTRAINT `Airports_iso_region_fkey` FOREIGN KEY (`iso_region`) REFERENCES `Regions`(`code`) ON DELETE SET NULL ON UPDATE CASCADE;
