import { isFuture, isPast } from "date-fns";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import BookingItem from "../_components/booking-item";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";

const BookingsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/");
  }

  const bookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
    },
    include: {
      service: true,
      barbershop: true,
    },
  });

  const confirmedBookings = bookings.filter((booking) =>
    isFuture(booking.date)
  );

  const finishedBookings = bookings.filter((booking) => isPast(booking.date));

  return (
    <>
      <Header />

      <div className="px-5 py-6 h-screen">
        <h1 className="text-xl font-bold">Agendamentos</h1>

        <section>
          <h2 className="mt-6 pb-3 uppercase text-sm font-bold text-gray-400">
            Confirmados
          </h2>

          <div className="flex flex-col gap-3">
            {confirmedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mt-6 pb-3 uppercase text-sm font-bold text-gray-400">
            Finalizados
          </h2>

          <div className="flex flex-col gap-3">
            {finishedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BookingsPage;
