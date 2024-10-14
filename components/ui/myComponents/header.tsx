"use client";

// import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "../button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Header = () => {
  const signInHandler = () => {
    signIn("google", { callbackUrl: "/homeffgf" });
  };
  return (
    <div className=" p-2 flex justify-between items-center w-full px-8 bg-foreground">
      <div>
        <Button className="" onClick={signInHandler}>
          Signout
        </Button>
      </div>
      {/* <Image
        width={60}
        height={60}
        src="/images/logo.jpg"
        alt="logo"
        className=""
      /> */}
      <div className="flex gap-4">
        <Link href="/">
          <p className="text-background/60 hover:text-background/80 cursor-pointer">
            Home
          </p>
        </Link>
        <Link href="/all-tops">
          <p className="text-background/60 hover:text-background/80 cursor-pointer">
            All Tops
          </p>
        </Link>
        <p className="text-background/60 hover:text-background/80 cursor-pointer">
          All Bottoms
        </p>
        <p className="text-background/60 hover:text-background/80 cursor-pointer">
          New Arrivals
        </p>
        <p className="text-background/60 hover:text-background/80 cursor-pointer">
          Most Sold
        </p>
        <p className="text-background/60 hover:text-background/80 cursor-pointer">
          Wholesale
        </p>
      </div>
      <div className="flex gap-2 ">
        <Link href={"/cart"}>
          <div className="border bg-white grid place-content-center w-9 h-9 rounded-md">
            <ShoppingCartIcon />
          </div>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
