/*
  Warnings:

  - You are about to drop the column `hasdPass` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `hashPass` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "hasdPass",
DROP COLUMN "password",
ADD COLUMN     "hashPass" TEXT NOT NULL;
