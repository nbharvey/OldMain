import React from "react";
import { Carousel } from "flowbite-react";

export default function HeroCarousel() {
  return (
    <Carousel slide={true} className="h-[500px] md:h-[600px]">
      <div className="relative h-full bg-cover bg-center"   style={{ backgroundImage: "url('/brick.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold text-center">Old Main Restaurant and Grill</h2>
        </div>
      </div>

      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: "url('/farm-to-table.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold text-center">Locally Sourced, Farm to Table</h2>
        </div>
      </div>

      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: "url('/whiskey-steak.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold text-center">Relax, Eat, Enjoy!</h2>
        </div>
      </div>
    </Carousel>
  );
}