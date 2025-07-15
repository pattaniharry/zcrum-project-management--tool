"use client";

import React from "react";
import companies from "@/app/data/companies.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const CompanyCarousel = () => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className={"w-full py-10"}
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center justify-center">
          {companies.map(({ name, path, id }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/5 mx-auto">
                <Image
                  src={path}
                  alt={id}
                  width={200}
                  height={56}
                  className="h-9 sm:h-14 w-auto object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CompanyCarousel;
