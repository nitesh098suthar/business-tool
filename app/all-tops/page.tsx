import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { topapi } from "./components/api";
import ListingCard from "@/components/ui/myComponents/ListingCard";
export default function page() {
  return (
    <div className="flex">
      <div className="w-[300px] h-screen overflow-scroll bg-secondary p-4">
        <h1>Filter</h1>
        <p>Filter out your products</p>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="flex p-4 flex-start">
        {topapi.map((topapi) => (
          <ListingCard key={topapi._id} topapi={topapi} />
        ))}
      </div>
    </div>
  );
}
