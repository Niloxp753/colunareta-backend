/*
  Warnings:

  - You are about to drop the `Forwarding` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "followUp" ADD COLUMN     "angulocob" BOOLEAN DEFAULT false,
ADD COLUMN     "cirurgia" BOOLEAN DEFAULT false,
ADD COLUMN     "colete" BOOLEAN DEFAULT false,
ADD COLUMN     "fisioterapia" BOOLEAN DEFAULT false,
ADD COLUMN     "raiox" BOOLEAN DEFAULT false;

-- DropTable
DROP TABLE "Forwarding";
