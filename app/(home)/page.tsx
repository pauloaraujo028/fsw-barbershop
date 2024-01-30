import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import BookingItem from "../_components/booking-item";
import Header from "../_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="px-5 mt-5">
        <h2 className="text-xl font-bold">Olá, Paulo!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </section>

      <section className="px-5 mt-6">
        <Search />
      </section>

      <section className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </section>
    </main>
  );
}
