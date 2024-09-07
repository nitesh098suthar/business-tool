import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/myComponents/footer";
import Header from "@/components/ui/myComponents/header";
import Image from "next/image";
import React from "react";
const mainTypes = [
  {
    name: "All TOPS",
    image: "/images/types.jpg",
    price: "$444",
  },
  {
    name: "All TOPS",
    image: "/images/types.jpg",
    price: "$444",
  },
  {
    name: "All TOPS",
    image: "/images/types.jpg",
    price: "$444",
  },
  {
    name: "All TOPS",
    image: "/images/types.jpg",
    price: "$444",
  },
  {
    name: "All TOPS",
    image: "/images/types.jpg",
    price: "$444",
  },
  {
    name: "All TOPS",
    image: "/images/types.jpg",
    price: "$444",
  },
];
const newArrivals = [
  {
    name: "New Shirts",
    image: "/images/new-arrivals.jpg",
    price: "$444",
  },
  {
    name: "New Shirts",
    image: "/images/new-arrivals.jpg",
    price: "$444",
  },
  {
    name: "New Shirts",
    image: "/images/new-arrivals.jpg",
    price: "$444",
  },
  {
    name: "New Shirts",
    image: "/images/new-arrivals.jpg",
    price: "$444",
  },
];
const HomePage = () => {
  return (
    <>
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
      </div>
      <div className="sectionOne my-20">
        <h1 className="text-center text-4xl font-bold my-10">
          What you&#39;re looking for?
        </h1>
        <div className="flex justify-center items-center flex-wrap gap-8">
          {mainTypes.map((item, i) => {
            return (
              <div key={i} className="cursor-pointer">
                <div>
                  <Image
                    src={item.image}
                    width={150}
                    height={150}
                    alt="clothing-type"
                  />
                </div>
                <h1>{item.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sectionTwo my-20">
        <h1 className="text-center text-4xl font-bold my-10">
          Have a look on New Arrivals
        </h1>
        <div className="flex justify-center items-start gap-4">
          <div className="w-[15vw]">
            <h1 className="text-2xl ">
              New <br />
              <span className=" mt-2 bg-primary text-background py-1 px-4 text-2xl">
                Arrivals
              </span>
            </h1>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptas voluptatibus iure ducimus quaerat dicta amet veniam et
              assumenda quas.
            </p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8">
            {newArrivals.map((item, i) => {
              return (
                <div key={i} className="cursor-pointer">
                  <div>
                    <Image
                      src={item.image}
                      width={240}
                      height={600}
                      alt="new-arrivals"
                    />
                  </div>
                  <h1>{item.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sectionThree my-20">
        <h1 className="text-center text-4xl font-bold my-10">
          Popular Collection
        </h1>
        <div className="flex justify-center gap-2 my-6">
          <Button variant={"outline"}>T-Shirts</Button>
          <Button variant={"outline"}>Pants</Button>
          <Button variant={"outline"}>Shorts</Button>
          <Button variant={"outline"}>Co-Ords</Button>
          <Button variant={"outline"}>Pygama</Button>
        </div>
        <div className="flex justify-center items-start gap-4">
          <div className="flex justify-center items-center flex-wrap gap-8">
            {newArrivals.map((item, i) => {
              return (
                <div key={i} className="cursor-pointer">
                  <div>
                    <Image
                      src={item.image}
                      width={240}
                      height={600}
                      alt="new-arrivals"
                    />
                  </div>
                  <h1>{item.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
