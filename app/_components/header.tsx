"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import SideMenu from "./side-menu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  return (
    <header className="border-b border-muted">
      <div className="p-5 flex justify-between flex-row items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="FSW Barber logo"
            style={{ width: "120px", height: "18px" }}
          />
        </Link>

        <div className="space-x-2">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon size={16} />
              </Button>
            </SheetTrigger>

            <SheetContent className="p-0">
              <SideMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
