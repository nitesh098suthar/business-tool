'use client';

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ListingCard from "@/components/ui/myComponents/ListingCard";
import { useGetTopssQuery } from "../services/api";

export default function Page() {
  // Fetch data using the client-side query hook
  const { data: topsData, error, isLoading } = useGetTopssQuery();

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  // Check if the data contains the "tops" array
  const tops = topsData?.tops || [];

  return (
    <div className="flex">
      {/* Sidebar Filter */}
      <aside className="w-[300px] h-screen overflow-scroll bg-secondary p-4">
        <h1 className="text-xl font-bold">Filter</h1>
        <p className="text-sm">Filter out your products</p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          {/* Add more Accordion items here if needed */}
        </Accordion>
      </aside>

      {/* Listings Section */}
      <main className="flex flex-wrap p-4 gap-4 flex-start">
        {tops.length > 0 ? (
          tops.map((top: any) => (
            <ListingCard key={top._id} topapi={top} />
          ))
        ) : (
          <div>No data available</div>
        )}
      </main>
    </div>
  );
}
