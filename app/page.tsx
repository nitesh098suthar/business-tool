import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="relative top-0 left-0">
      <div className=" overflow-hidden">
        <div className="relative">
          <Image
            width={1000}
            height={1000}
            src="/images/main-image.jpg"
            alt="main-image"
            className="w-full h-full"
          />
        </div>
        <div className="bg-black h-full w-full absolute top-0 bottom-0 opacity-70 "></div>
      </div>
      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
