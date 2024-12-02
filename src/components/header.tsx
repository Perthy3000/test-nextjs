"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-green-500 py-3 px-4 md:px-8">
      <h4 className="text-white text-xl italic">a Board</h4>
      <Link href="/sign-in" className="md:block hidden">
        <Button>Sign In</Button>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden inline-flex text-white" size={"icon"} variant={"ghost"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle hidden>Drawer menu</SheetTitle>
            <SheetDescription hidden>Navigation drawer menu</SheetDescription>
          </SheetHeader>
          <div className="flex-col gap-2">
            <Link href={"/"}>
              <Button variant={"sidebar"} className="w-full text-white">
                Home
              </Button>
            </Link>
            <Link href={"/my-blog"}>
              <Button variant={"sidebar"} className="w-full text-white">
                My Blog
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
