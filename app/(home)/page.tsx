import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Header from "../_components/header";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Paulo!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </section>
    </main>
  );
}
