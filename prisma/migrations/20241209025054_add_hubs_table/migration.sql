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
