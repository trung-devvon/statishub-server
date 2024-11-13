-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "taxCode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "managementUnit" TEXT NOT NULL,
    "companyType" TEXT,
    "status" TEXT,
    "name_normalized" TEXT NOT NULL,
    "address_normalized" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Company_name_normalized_idx" ON "Company"("name_normalized");

-- CreateIndex
CREATE INDEX "Company_address_normalized_idx" ON "Company"("address_normalized");
