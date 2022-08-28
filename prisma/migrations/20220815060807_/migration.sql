/*
  Warnings:

  - You are about to drop the column `studantId` on the `consult` table. All the data in the column will be lost.
  - Added the required column `studentId` to the `consult` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "consult" DROP CONSTRAINT "consult_studantId_fkey";

-- AlterTable
ALTER TABLE "consult" DROP COLUMN "studantId",
ADD COLUMN     "studentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "consult" ADD CONSTRAINT "consult_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "studant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
