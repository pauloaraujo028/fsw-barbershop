import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { authOptions } from "@/app/_lib/auth";
import { db } from "@/app/_lib/prisma";
import { getServerSession } from "next-auth";
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
  const session = await getServerSession(authOptions);

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

      <div className="pt-6">
        <Tabs defaultValue="account">
          <TabsList className="flex gap-3">
            <TabsTrigger
              className="px-4 py-3 rounded-lg  border border-solid border-secondary text-base font-bold"
              value="servicos"
            >
              Serviços
            </TabsTrigger>
            <TabsTrigger
              className="px-4 py-3 rounded-lg  border border-solid border-secondary text-base font-bold"
              value="informacoes"
            >
              Informações
            </TabsTrigger>
          </TabsList>
          <TabsContent value="servicos" className="p-0">
            <div className="flex flex-col px-5 py-6 gap-4">
              {barbershop.services.map((service) => (
                <ServiceItem
                  key={service.id}
                  barbershop={barbershop}
                  service={service}
                  isAuthenticated={!!session?.user}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="informacoes">
            <div className="px-4">
              <h2 className="text-xs text-gray-400 uppercase py-6">
                Sobre nós
              </h2>
              <p>{}</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default BarbershopDetailsPage;
