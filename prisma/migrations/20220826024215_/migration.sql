/*
  Warnings:

  - You are about to drop the `consult` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "consult" DROP CONSTRAINT "consult_studentId_fkey";

-- DropTable
DROP TABLE "consult";

-- CreateTable
CREATE TABLE "followUp" (
    "id" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "firstPhoto" TEXT NOT NULL,
    "secondPhoto" TEXT NOT NULL,
    "returnDate" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "forwarding" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "followUp_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "followUp" ADD CONSTRAINT "followUp_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "studant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
