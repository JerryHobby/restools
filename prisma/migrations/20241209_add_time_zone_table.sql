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
