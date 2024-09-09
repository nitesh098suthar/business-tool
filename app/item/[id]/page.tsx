import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const itemData = {
  productCode: "sd323",
  itemName: "Product One",
  productImages: [
    {
      image: "/images/main-image-shirt.jpg",
      color: "white",
    },
    {
      image: "/images/main-image-shirt.jpg",
      color: "black",
    },
    {
      image: "/images/main-image-shirt.jpg",
      color: "brown",
    },
    {
      image: "/images/main-image-shirt.jpg",
      color: "gray",
    },
  ],
  price: "234",
  des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitisorem ipsum dolor sit amet consectetur, adipisicing elit. Debitisorem ipsum dolor sit amet consectetur, adipisicing elit. Debitisorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis architecto rem itaque pariatur laborum!",
  size: ["xxs", "xs", "s", "M", "xl", "xxl"],
  paymentPolicy:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis architecto rem itaque pariatur laborum!",
  returnPolicy:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis architecto rem itaque pariatur laborum!",
  recommandedItems: [{}],
};
const Item = () => {
  return (
    <div className="p-10">
      <p className="text-gray-500 my-10">Home/Men/T-shirt</p>
      <div className="flex my-10 gap-8">
        <div className="">
          <div className="w-[30vw] rounded-xl overflow-hidden">
            <Image
              src={itemData.productImages[0].image}
              alt="item-preview-image"
              width={400}
              height={400}
              className="object"
            />
          </div>
          <div className="my-4">
            <p className="my-2">Colors</p>
            <div>
              <div className="flex w-[30vw] gap-2">
                {itemData.productImages.map((item, i) => {
                  return (
                    <div key={i} className="oveflow-hidden w-[200px]">
                      <Image
                        src={item.image}
                        alt="item-preview-sub-image"
                        width={200}
                        height={200}
                        className="rounded-md"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-4xl font-bold pb-5">{itemData.itemName}</h1>
          <h1 className="text-xl font-semibold pb-5">Only ${itemData.price}</h1>
          <h1 className="pb-5 text-sm">{itemData.des}</h1>
          <h1 className="text-xl font-semibold pb-5">
            Product Code :{" "}
            <span className=" uppercase">{itemData.productCode}</span>
          </h1>
          <Separator className="my-6" />

          <div className="mb-6">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold mb-2">Size</p>{" "}
              <Button variant={"outline"}>Size Chart</Button>
            </div>
            <div className="flex gap-2">
              {itemData.size.map((item, i) => (
                <Button
                  variant={"outline"}
                  key={i}
                  className="uppercase font-semibold"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold mb-2">Add to cart this </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Button variant={"outline"}>-</Button>
                <span className="p-2 px-4 font-semibold">3</span>

                <Button variant={"outline"}>+</Button>
              </div>
              <Button variant={"default"}>Add to cart</Button>
            </div>
            <div className="my-4">
              <h1 className="text-xl font-semibold mb-2">Payment Policy</h1>
              <p>{itemData.paymentPolicy}</p>
            </div>
            <div className="mb-4">
              <h1 className="text-xl font-semibold mb-2">Return Policy</h1>
              <p>{itemData.returnPolicy}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
