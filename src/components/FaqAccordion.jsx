"use client";

import React from "react";
import faq from "@/app/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faq.map((fq, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>{fq.question}</AccordionTrigger>
          <AccordionContent>{fq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
