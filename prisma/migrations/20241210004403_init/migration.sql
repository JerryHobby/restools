-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `username` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,
    `refresh_token_expires_in` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Account_userId_key`(`userId`),
    INDEX `Account_userId_idx`(`userId`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    INDEX `Session_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Authenticator` (
    `credentialID` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `credentialPublicKey` VARCHAR(191) NOT NULL,
    `counter` INTEGER NOT NULL,
    `credentialDeviceType` VARCHAR(191) NOT NULL,
    `credentialBackedUp` BOOLEAN NOT NULL,
    `transports` VARCHAR(191) NULL,

    UNIQUE INDEX `Authenticator_credentialID_key`(`credentialID`),
    PRIMARY KEY (`userId`, `credentialID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Airline` (
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
CREATE TABLE `Airport` (
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

    INDEX `Airport_iso_country_idx`(`iso_country`),
    INDEX `Airport_iso_region_idx`(`iso_region`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Country` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `continent` VARCHAR(191) NULL,
    `wikipedia_link` VARCHAR(191) NULL,
    `keywords` VARCHAR(191) NULL,

    UNIQUE INDEX `Country_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Region` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `local_code` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `continent` VARCHAR(191) NOT NULL,
    `iso_country` VARCHAR(191) NOT NULL,
    `wikipedia_link` VARCHAR(191) NULL,
    `keywords` VARCHAR(191) NULL,

    UNIQUE INDEX `Region_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hub` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `airline` VARCHAR(191) NOT NULL,
    `iata` VARCHAR(191) NOT NULL,
    `airport` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Hub_iata_idx`(`iata`),
    INDEX `Hub_airline_idx`(`airline`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Faq` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `answer` TEXT NOT NULL,
    `orderInCategory` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Faq_category_idx`(`category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Time_Zone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `iata` VARCHAR(191) NOT NULL,
    `time_zone` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Time_Zone_iata_idx`(`iata`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Authenticator` ADD CONSTRAINT `Authenticator_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Airport` ADD CONSTRAINT `Airport_iso_country_fkey` FOREIGN KEY (`iso_country`) REFERENCES `Country`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Airport` ADD CONSTRAINT `Airport_iso_region_fkey` FOREIGN KEY (`iso_region`) REFERENCES `Region`(`code`) ON DELETE SET NULL ON UPDATE CASCADE;
