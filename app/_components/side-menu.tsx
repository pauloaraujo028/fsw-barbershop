"use client";

import {
  CalendarDays,
  CircleUserRound,
  HomeIcon,
  LayoutDashboardIcon,
  LogIn,
  LogOutIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
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
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { SheetClose, SheetHeader, SheetTitle } from "./ui/sheet";

const SideMenu = () => {
  const { data } = useSession();

  const handleLogoutClick = () => signOut();

  const handleLoginClick = () => signIn("google");

  return (
    <section>
      <SheetHeader className="text-left border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      {data?.user ? (
        <div className="flex justify-between items-center px-5 py-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={data.user?.image ?? ""} />
            </Avatar>

            <div className="flex flex-col gap-1">
              <h2 className="font-bold">{data.user.name}</h2>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col px-5 py-6 gap-4">
          <div className="flex items-center gap-2">
            <CircleUserRound size={40} className="text-secondary" />
            <h2>Olá, faça seu login!</h2>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="secondary" className="flex justify-start gap-2">
                <LogIn size={18} />
                Fazer Login
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[90%] rounded-2xl">
              <AlertDialogHeader className="items-center">
                <AlertDialogTitle>Faça login na plataforma</AlertDialogTitle>
                <AlertDialogDescription>
                  Conecte-se usando sua conta do Google.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button
                  className="gap-1"
                  variant="outline"
                  onClick={handleLoginClick}
                >
                  <Image
                    src="google.svg"
                    width={18}
                    height={18}
                    alt="Icone do Google"
                  />
                  Google
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}

      <div className="flex flex-col">
        <div className="flex flex-col gap-3 px-5 py-6 border-b border-solid border-secondary">
          <SheetClose asChild>
            <Button variant="outline" className="justify-start gap-2" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>
          {data?.user && (
            <SheetClose asChild>
              <Button variant="outline" className="justify-start gap-2" asChild>
                <Link href="/bookings">
                  <CalendarDays size={18} />
                  Agendamentos
                </Link>
              </Button>
            </SheetClose>
          )}
          {data?.user && (
            <SheetClose asChild>
              <Button variant="outline" className="justify-start gap-2" asChild>
                <Link href="/dashboard">
                  <LayoutDashboardIcon size={18} />
                  Dashboard
                </Link>
              </Button>
            </SheetClose>
          )}
        </div>
        <div className="flex px-5 py-6">
          {data?.user && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="secondary"
                  className="flex w-full justify-center gap-2"
                >
                  <LogOutIcon size={18} />
                  Sair
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-[90%] rounded-2xl">
                <AlertDialogHeader>
                  <AlertDialogTitle>Sair</AlertDialogTitle>
                  <AlertDialogDescription className="py-3">
                    Deseja mesmo sair da plataforma?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-row gap-3">
                  <AlertDialogCancel className="w-full m-0">
                    Cancelar
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="w-full"
                    onClick={handleLogoutClick}
                  >
                    Sair
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
