/*
  Warnings:

  - You are about to drop the column `forwarding` on the `followUp` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `followUp` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "followUp" DROP COLUMN "forwarding";

-- CreateTable
CREATE TABLE "Forwarding" (
    "id" TEXT NOT NULL,
    "raiox" TEXT,
    "fisioterapia" TEXT,
    "colete" TEXT,
    "cirurgia" TEXT,
    "angulocob" TEXT,

    CONSTRAINT "Forwarding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FollowUpToForwarding" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Forwarding_id_key" ON "Forwarding"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_FollowUpToForwarding_AB_unique" ON "_FollowUpToForwarding"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowUpToForwarding_B_index" ON "_FollowUpToForwarding"("B");

-- CreateIndex
CREATE UNIQUE INDEX "followUp_id_key" ON "followUp"("id");

-- AddForeignKey
ALTER TABLE "_FollowUpToForwarding" ADD CONSTRAINT "_FollowUpToForwarding_A_fkey" FOREIGN KEY ("A") REFERENCES "followUp"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowUpToForwarding" ADD CONSTRAINT "_FollowUpToForwarding_B_fkey" FOREIGN KEY ("B") REFERENCES "Forwarding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
