-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BACKOFFICE', 'ADMIN', 'CAMPO');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "confirmPassword" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CAMPO',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institution" (
    "id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adressNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "street" TEXT NOT NULL,

    CONSTRAINT "institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studant" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "age" TEXT NOT NULL,
    "institutionId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "studant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "followUp" (
    "id" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "firstPhoto" TEXT NOT NULL,
    "secondPhoto" TEXT NOT NULL,
    "returnDate" TEXT NOT NULL,
    "note" TEXT,
    "raiox" BOOLEAN DEFAULT false,
    "fisioterapia" BOOLEAN DEFAULT false,
    "colete" BOOLEAN DEFAULT false,
    "cirurgia" BOOLEAN DEFAULT false,
    "angulocob" BOOLEAN DEFAULT false,
    "studentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "followUp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "institution_name_key" ON "institution"("name");

-- CreateIndex
CREATE UNIQUE INDEX "studant_name_key" ON "studant"("name");

-- CreateIndex
CREATE UNIQUE INDEX "followUp_id_key" ON "followUp"("id");

-- AddForeignKey
ALTER TABLE "studant" ADD CONSTRAINT "studant_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followUp" ADD CONSTRAINT "followUp_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "studant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
