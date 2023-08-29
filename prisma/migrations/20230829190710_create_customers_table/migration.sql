-- CreateEnum
CREATE TYPE "states_enum" AS ENUM ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO');

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "entity" TEXT NOT NULL,
    "uf" "states_enum" NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "email" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerPhones" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "CustomerPhones_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomerPhones" ADD CONSTRAINT "CustomerPhones_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
