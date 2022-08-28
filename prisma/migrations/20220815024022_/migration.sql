/*
  Warnings:

  - You are about to drop the column `agenda` on the `consult` table. All the data in the column will be lost.
  - You are about to drop the column `alunoId` on the `consult` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `consult` table. All the data in the column will be lost.
  - You are about to drop the column `bairro` on the `institution` table. All the data in the column will be lost.
  - You are about to drop the column `cidade` on the `institution` table. All the data in the column will be lost.
  - You are about to drop the column `complemento` on the `institution` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `institution` table. All the data in the column will be lost.
  - You are about to drop the column `logradouro` on the `institution` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `institution` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `institution` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `institution` table. All the data in the column will be lost.
  - You are about to drop the column `data_nasc` on the `studant` table. All the data in the column will be lost.
  - You are about to drop the column `instituicaoId` on the `studant` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `studant` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `studant` table. All the data in the column will be lost.
  - You are about to drop the column `cargo` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `institution` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `studant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hour` to the `consult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schedule` to the `consult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studantId` to the `consult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adressNumber` to the `institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complement` to the `institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `studant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `institutionId` to the `studant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `studant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `studant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confirmPassword` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "consult" DROP CONSTRAINT "consult_alunoId_fkey";

-- DropForeignKey
ALTER TABLE "studant" DROP CONSTRAINT "studant_instituicaoId_fkey";

-- DropIndex
DROP INDEX "institution_nome_key";

-- DropIndex
DROP INDEX "studant_nome_key";

-- AlterTable
ALTER TABLE "consult" DROP COLUMN "agenda",
DROP COLUMN "alunoId",
DROP COLUMN "hora",
ADD COLUMN     "hour" TEXT NOT NULL,
ADD COLUMN     "schedule" TEXT NOT NULL,
ADD COLUMN     "studantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "institution" DROP COLUMN "bairro",
DROP COLUMN "cidade",
DROP COLUMN "complemento",
DROP COLUMN "estado",
DROP COLUMN "logradouro",
DROP COLUMN "nome",
DROP COLUMN "numero",
DROP COLUMN "telefone",
ADD COLUMN     "adressNumber" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "complement" TEXT NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "studant" DROP COLUMN "data_nasc",
DROP COLUMN "instituicaoId",
DROP COLUMN "nome",
DROP COLUMN "telefone",
ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "institutionId" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "cargo",
DROP COLUMN "nome",
DROP COLUMN "senha",
ADD COLUMN     "confirmPassword" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "institution_name_key" ON "institution"("name");

-- CreateIndex
CREATE UNIQUE INDEX "studant_name_key" ON "studant"("name");

-- AddForeignKey
ALTER TABLE "studant" ADD CONSTRAINT "studant_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consult" ADD CONSTRAINT "consult_studantId_fkey" FOREIGN KEY ("studantId") REFERENCES "studant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
