-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institution" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "medico" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studant" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nasc" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "instituicaoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "studant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consult" (
    "id" TEXT NOT NULL,
    "agenda" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "alunoId" TEXT NOT NULL,

    CONSTRAINT "consult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "institution_nome_key" ON "institution"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "studant_nome_key" ON "studant"("nome");

-- AddForeignKey
ALTER TABLE "studant" ADD CONSTRAINT "studant_instituicaoId_fkey" FOREIGN KEY ("instituicaoId") REFERENCES "institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consult" ADD CONSTRAINT "consult_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "studant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
