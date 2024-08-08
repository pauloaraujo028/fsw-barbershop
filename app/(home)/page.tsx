import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { getServerSession } from "next-auth";
import Image from "next/image";
import BookingItem from "../_components/booking-item";
import CategoryList from "../_components/category-list";
import Header from "../_components/header";
import { authOptions } from "../_lib/auth";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import Search from "./_components/search";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const [barbershops, confirmedBookings] = await Promise.all([
    db.barbershop.findMany({}),
    session?.user
      ? db.booking.findMany({
          where: {
            userId: (session.user as any).id,
            date: {
              gte: new Date(),
            },
          },
          include: {
            service: true,
            barbershop: true,
          },
        })
      : Promise.resolve([]),
  ]);

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

      <section className="mt-6">
        <CategoryList />
      </section>

      <section className="w-full h-auto px-5 mt-6">
        <Image
          src="/banner01.png"
          width={0}
          height={0}
          alt="Banner"
          sizes="100vw"
          quality={100}
          className="w-full h-[150px] rounded-md border border-muted"
        />
      </section>

      {confirmedBookings.length > 0 && (
        <section className="mt-6">
          <h2 className="pl-5 text-xs uppercase text-gray-400 font-bold mb-3">
            Agendamentos
          </h2>

          <div className="px-5 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {confirmedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        </section>
      )}

      <section className="mt-6">
        <h2 className="pl-5 text-xs uppercase text-gray-400 font-bold mb-3">
          Recomendados
        </h2>
        <div className="px-5 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <div key={barbershop.id} className="min-w-[167px] max-w-[167px]">
              <BarbershopItem barbershop={barbershop} />
            </div>
          ))}
        </div>
      </section>

      <section className="my-6">
        <h2 className="pl-5 text-xs uppercase text-gray-400 font-bold mb-3">
          Populares
        </h2>
        <div className="px-5 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <div key={barbershop.id} className="min-w-[167px] max-w-[167px]">
              <BarbershopItem barbershop={barbershop} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
