import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  if (!params.id) {
    // TODO: redirecionar para home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    // TODO: redirecionar para home page
    return null;
  }

  return (
    <main>
      <BarbershopInfo barbershop={barbershop} />

      <div className="flex flex-col px-5 pt-6 gap-4">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </main>
  );
};

export default BarbershopDetailsPage;
