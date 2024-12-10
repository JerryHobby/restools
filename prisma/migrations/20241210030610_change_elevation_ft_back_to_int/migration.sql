/*
  Warnings:

  - You are about to alter the column `elevation_ft` on the `Airport` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Airport` MODIFY `elevation_ft` INTEGER NULL;
