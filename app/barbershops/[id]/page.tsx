import { Button } from "@/app/_components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { authOptions } from "@/app/_lib/auth";
import { db } from "@/app/_lib/prisma";
import { Smartphone } from "lucide-react";
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
        <Tabs defaultValue="servicos">
          <TabsList className="flex gap-3">
            <TabsTrigger
              className="px-4 py-3 rounded-lg  border border-solid border-secondary text-base font-bold text-white"
              value="servicos"
            >
              Serviços
            </TabsTrigger>
            <TabsTrigger
              className="px-4 py-3 rounded-lg  border border-solid border-secondary text-base font-bold text-white"
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
            <div className="px-4 pb-6 border-b border-solid border-secondary">
              <h2 className="text-xs text-gray-400 uppercase py-6">
                Sobre nós
              </h2>
              <p className="text-sm text-justify">
                Bem-vindo à Vintage Barber, onde tradição encontra estilo. Nossa
                equipe de mestres barbeiros transforma cortes de cabelo e barbas
                em obras de arte. Em um ambiente acolhedor, promovemos
                confiança, estilo e uma comunidade unida.
              </p>
            </div>

            <div className="px-5 py-6 flex flex-col gap-4  border-b border-solid border-secondary">
              <div className="flex items-center justify-between">
                <h3 className="flex gap-2">
                  <Smartphone />
                  (11) 98204 - 5108
                </h3>
                <Button variant="secondary">Copiar</Button>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="flex gap-2">
                  <Smartphone />
                  (11) 98204 - 5108
                </h3>
                <Button variant="secondary">Copiar</Button>
              </div>
            </div>

            <div className="px-5 py-6 flex flex-col gap-2">
              <div className="flex justify-between">
                <h3 className="text-gray-400">Segunda</h3>
                <h4 className="text-sm">Fechado</h4>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-400">Terça-Feira</h3>
                <h4 className="text-sm">09:00 - 21:00</h4>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-400">Quarta-Feira</h3>
                <h4 className="text-sm">09:00 - 21:00</h4>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-400">Quinta-Feira</h3>
                <h4 className="text-sm">09:00 - 21:00</h4>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-400">Sexta-Feira</h3>
                <h4 className="text-sm">09:00 - 21:00</h4>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-400">Sábado</h3>
                <h4 className="text-sm">Fechado</h4>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default BarbershopDetailsPage;
