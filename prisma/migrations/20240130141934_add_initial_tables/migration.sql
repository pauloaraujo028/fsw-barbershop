/*
  Warnings:

  - You are about to drop the column `imagURL` on the `Barbershop` table. All the data in the column will be lost.
  - Added the required column `imageURL` to the `Barbershop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "imagURL",
ADD COLUMN     "imageURL" TEXT NOT NULL;
