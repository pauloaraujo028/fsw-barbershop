"use client";

import {
  CalendarDays,
  CircleUserRound,
  HomeIcon,
  LogIn,
  LogOutIcon,
  MenuIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  const { data, status } = useSession();

  const handleLogoutClick = () => signOut();

  const handleLoginClick = () => signIn("google");

  return (
    <Card>
      <CardContent className="p-5 flex justify-between flex-row items-center">
        <Image src="/logo.png" alt="FSW Barber logo" width={120} height={18} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SheetHeader className="text-left border-b border-solid border-secondary p-5">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
              <div className="flex justify-between items-center px-5 py-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={data.user?.image ?? ""} />
                  </Avatar>

                  <h2 className="font-bold">{data.user.name}</h2>
                </div>

                <Button
                  variant="secondary"
                  onClick={handleLogoutClick}
                  className="flex justify-start gap-2"
                >
                  <LogOutIcon size={18} />
                  Sair
                </Button>
              </div>
            ) : (
              <div className="flex flex-col px-5 py-6 gap-4">
                <div className="flex items-center gap-2">
                  <CircleUserRound size={40} className="text-secondary" />
                  <h2>Olá, faça seu login!</h2>
                </div>

                <Button
                  variant="secondary"
                  onClick={handleLoginClick}
                  className="flex justify-start gap-2"
                >
                  <LogIn size={18} />
                  Fazer Login
                </Button>
              </div>
            )}

            <div className="flex flex-col gap-3 px-5 py-6">
              <Button variant="outline" className="justify-start gap-2" asChild>
                <Link href="/">
                  <HomeIcon size={18} />
                  Início
                </Link>
              </Button>

              {data?.user && (
                <Button
                  variant="outline"
                  className="justify-start gap-2"
                  asChild
                >
                  <Link href="/bookings">
                    <CalendarDays size={18} />
                    Agendamentos
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
