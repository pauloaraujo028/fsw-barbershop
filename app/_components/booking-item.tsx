"use client";

import { Prisma } from "@prisma/client";
import { format, isFuture } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { cancelBooking } from "../_actions/cancel-booking";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true;
    };
  }>;
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const isBookingConfirmed = isFuture(booking.date);

  const handleCancelClick = async () => {
    setIsDeleteLoading(true);

    try {
      await cancelBooking(booking.id);

      toast.success("Reserva cancelada com sucesso!");
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="min-w-full">
        <Card>
          <CardContent className="p-0 pl-5 flex justify-between py-0">
            <div className="flex flex-col gap-2 py-5">
              <Badge
                className="w-fit"
                variant={isBookingConfirmed ? "default" : "secondary"}
              >
                {isBookingConfirmed ? "Confirmado" : "Finalizado"}
              </Badge>
              <h2 className="font-bold text-left">{booking.service.name}</h2>

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
      </SheetTrigger>

      <SheetContent className="p-0">
        <SheetHeader className="text-left border-b border-solid border-secondary p-5">
          <SheetTitle>Informações da Reserva</SheetTitle>
        </SheetHeader>

        <div className="px-5">
          <div className="relative h-[180px] w-full mt-6">
            <Image
              src="/barbershop-map.png"
              fill
              alt={booking.barbershop.name}
            />

            <div className="w-full absolute bottom-4 left-0 px-5">
              <Card>
                <CardContent className="flex gap-2 p-3">
                  <Avatar>
                    <AvatarImage src={booking.barbershop.imageUrl} />
                  </Avatar>

                  <div className="w-[75%]">
                    <h2 className="font-bold">{booking.barbershop.name}</h2>
                    <h3 className="text-xs overflow-hidden text-ellipsis text-nowrap">
                      {booking.barbershop.address}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Badge
            className="w-fit my-3"
            variant={isBookingConfirmed ? "default" : "secondary"}
          >
            {isBookingConfirmed ? "Confirmado" : "Finalizado"}
          </Badge>

          <Card>
            <CardContent className="flex flex-col gap-3 p-3">
              <div className="flex justify-between">
                <h2 className="font-bold">{booking.service.name}</h2>
                <h3 className="font-bold text-sm">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(booking.service.price))}
                </h3>
              </div>

              <div className="flex justify-between">
                <h3 className="text-gray-400">Data</h3>
                <h4 className="text-sm">
                  {format(booking.date, "dd 'de' MMMM", {
                    locale: ptBR,
                  })}
                </h4>
              </div>

              <div className="flex justify-between">
                <h3 className="text-gray-400">Horário</h3>
                <h4 className="text-sm">{format(booking.date, "hh:mm")}</h4>
              </div>

              <div className="flex justify-between">
                <h3 className="text-gray-400">Barbearia</h3>
                <h4 className="text-sm">{booking.barbershop.name}</h4>
              </div>
            </CardContent>
          </Card>

          <SheetFooter className="flex-row gap-3 mt-6">
            <SheetClose asChild>
              <Button className="w-full" variant="secondary">
                Voltar
              </Button>
            </SheetClose>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  disabled={!isBookingConfirmed || isDeleteLoading}
                  className="w-full"
                  variant="destructive"
                >
                  Cancelar Reserva
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="rounded-2xl w-[90%]">
                <AlertDialogHeader>
                  <AlertDialogTitle>Cancelar Reserva</AlertDialogTitle>
                  <AlertDialogDescription className="py-3">
                    Tem certeza que deseja cancelar esse agendamento?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-row gap-3">
                  <AlertDialogCancel className="w-full m-0">
                    Voltar
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="w-full"
                    onClick={handleCancelClick}
                    disabled={isDeleteLoading}
                  >
                    Confirmar
                    {isDeleteLoading && (
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    )}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BookingItem;
