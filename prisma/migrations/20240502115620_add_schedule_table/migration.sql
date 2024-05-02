-- AlterTable
ALTER TABLE "Barbershop" ADD COLUMN     "description" TEXT,
ADD COLUMN     "phone" TEXT;

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BarbershopToSchedule" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BarbershopToSchedule_AB_unique" ON "_BarbershopToSchedule"("A", "B");

-- CreateIndex
CREATE INDEX "_BarbershopToSchedule_B_index" ON "_BarbershopToSchedule"("B");

-- AddForeignKey
ALTER TABLE "_BarbershopToSchedule" ADD CONSTRAINT "_BarbershopToSchedule_A_fkey" FOREIGN KEY ("A") REFERENCES "Barbershop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BarbershopToSchedule" ADD CONSTRAINT "_BarbershopToSchedule_B_fkey" FOREIGN KEY ("B") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
