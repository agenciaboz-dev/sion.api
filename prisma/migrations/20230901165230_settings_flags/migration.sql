/*
  Warnings:

  - You are about to drop the column `rate` on the `settings` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `contracts_seller_id_fkey` ON `contracts`;

-- DropIndex
DROP INDEX `contracts_statusId_fkey` ON `contracts`;

-- DropIndex
DROP INDEX `images_user_id_fkey` ON `images`;

-- DropIndex
DROP INDEX `logs_contract_id_fkey` ON `logs`;

-- DropIndex
DROP INDEX `logs_seller_id_fkey` ON `logs`;

-- DropIndex
DROP INDEX `texts_user_id_fkey` ON `texts`;

-- DropIndex
DROP INDEX `userLogs_user_id_fkey` ON `userLogs`;

-- AlterTable
ALTER TABLE `settings` DROP COLUMN `rate`,
    ADD COLUMN `greenFlagRate` DOUBLE NOT NULL DEFAULT 1,
    ADD COLUMN `red2FlagRate` DOUBLE NOT NULL DEFAULT 1,
    ADD COLUMN `redFlagRate` DOUBLE NOT NULL DEFAULT 1,
    ADD COLUMN `yellowFlagRate` DOUBLE NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `contracts` ADD CONSTRAINT `contracts_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `contractStatus`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contracts` ADD CONSTRAINT `contracts_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `financial` ADD CONSTRAINT `financial_contract_id_fkey` FOREIGN KEY (`contract_id`) REFERENCES `contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rdstation` ADD CONSTRAINT `rdstation_contract_id_fkey` FOREIGN KEY (`contract_id`) REFERENCES `contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `omie` ADD CONSTRAINT `omie_contract_id_fkey` FOREIGN KEY (`contract_id`) REFERENCES `contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `logs` ADD CONSTRAINT `logs_contract_id_fkey` FOREIGN KEY (`contract_id`) REFERENCES `contracts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `logs` ADD CONSTRAINT `logs_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userLogs` ADD CONSTRAINT `userLogs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `texts` ADD CONSTRAINT `texts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
