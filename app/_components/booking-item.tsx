import { Prisma } from "@prisma/client";
import { format, isFuture } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true;
    };
  }>;
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const isBookingConfirmed = isFuture(booking.date);
  return (
    <div>
      <Card>
        <CardContent className="p-0 pl-5 flex justify-between py-0">
          <div className="flex flex-col gap-2 py-5">
            <Badge
              className="w-fit"
              variant={isBookingConfirmed ? "default" : "secondary"}
            >
              {isBookingConfirmed ? "Confirmado" : "Finalizado"}
            </Badge>
            <h2 className="font-bold">{booking.service.name}</h2>

            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={booking.barbershop.imageUrl} />

                <AvatarFallback>A</AvatarFallback>
              </Avatar>

              <h3 className="text-sm">{booking.barbershop.name}</h3>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-3 w-1/3">
            <p className="text-sm capitalize">
              {format(booking.date, "MMMM", {
                locale: ptBR,
              })}
            </p>
            <p className="text-2xl">{format(booking.date, "dd")}</p>
            <p className="text-sm">{format(booking.date, "hh:mm")}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingItem;
