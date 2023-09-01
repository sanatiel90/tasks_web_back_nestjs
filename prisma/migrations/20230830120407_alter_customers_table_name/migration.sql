/*
  Warnings:

  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CustomerPhones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CustomerPhones" DROP CONSTRAINT "CustomerPhones_customerId_fkey";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "CustomerPhones";

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "entity" TEXT NOT NULL,
    "uf" "states_enum" NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "email" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_phones" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "customer_phones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_cnpj_key" ON "customers"("cnpj");

-- AddForeignKey
ALTER TABLE "customer_phones" ADD CONSTRAINT "customer_phones_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
