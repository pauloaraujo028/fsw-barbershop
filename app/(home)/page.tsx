import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { getServerSession } from "next-auth";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BarbershopItem from "./_components/barbershop-item";
import Search from "./_components/search";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const barbershops = await db.barbershop.findMany({});

  return (
    <main>
      <Header />

      <section className="px-5 mt-5">
        <h2 className="text-xl font-bold">
          Olá, {session?.user?.name ?? "Faça seu Login"}!
        </h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEE',' d 'de' MMMM", { locale: ptBR })}
        </p>
      </section>

      <section className="px-5 mt-6">
        <Search />
      </section>

      {/* {session?.user && (
        <section className="px-5 mt-6">
          <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
            Agendamentos
          </h2>
          <BookingItem />
        </section>
      )} */}

      <section className="px-5 mt-6">
        <h2 className=" text-xs uppercase text-gray-400 font-bold mb-3">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </section>

      <section className="px-5 mt-6 mb-[4.5rem]">
        <h2 className=" text-xs uppercase text-gray-400 font-bold mb-3">
          Populares
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </section>
    </main>
  );
}
