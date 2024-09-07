import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-8">
      <Image
        width={60}
        height={60}
        src="/images/logo.jpg"
        alt="logo"
        className=""
      />
      <div className="flex gap-4">
        <p className="text-background/60 hover:text-background/80 cursor-pointer">
          Home
        </p>
        <p className="text-background/60 hover:text-background/80 cursor-pointer">
          All Tops
        </p>
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
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
