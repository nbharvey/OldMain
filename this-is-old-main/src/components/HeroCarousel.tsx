import { Carousel } from "flowbite-react";

export default function HeroCarousel() {
  return (
    <Carousel slide={true} className="h-[500px] md:h-[600px]">
      <div className="relative h-full bg-cover bg-center"   style={{ backgroundImage: "url('/SVGLogo.svg')" }}
      >
        <div className="absolute inset-0 bg-brandBlack bg-opacity-40 flex items-center justify-center">
        </div>
      </div>
      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: "url('/renovations.png')" }}>
       </div>
      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: "url('/farm-to-table.jpg')" }}>
        <div className="absolute inset-0 bg-brandBlack bg-opacity-40 flex items-center justify-center">
          <h2 className="text-brandSilver text-4xl md:text-6xl font-bold text-center">Locally Sourced, Farm to Table</h2>
        </div>
      </div>
      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: "url('/food/anguscow.jpg')" }}>
        <div className="absolute inset-0 bg-brandBlack bg-opacity-40 flex items-center justify-center">
          <h2 className="text-brandSilver text-4xl md:text-6xl font-bold text-center">Burgers and steaks with local, farm-raised, Angus Beef</h2>
        </div>
      </div>
    
      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: "url('/food/golf-sims.jpg')" }}>
        <div className="absolute inset-0 bg-brandBlack bg-opacity-40 flex items-center justify-center">
          <h2 className="text-brandSilver text-4xl md:text-6xl font-bold text-center">A Place to Play and Relax</h2>
        </div>
      </div>

      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: "url('/food/pour-your-own-beer.jpg')" }}>
        <div className="absolute inset-0 bg-brandBlack bg-opacity-40 flex items-center justify-center">
          <h2 className="text-brandSilver text-4xl md:text-6xl font-bold text-center">The Bar at Old Main</h2>

        </div>
      </div>

      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: "url('/food/oldmain-front.jpg')" }}>
        <div className="absolute inset-0 bg-brandBlack bg-opacity-40 flex items-center justify-center">
          <h2 className="text-brandSilver text-4xl md:text-6xl font-bold text-center">Opening December 2025</h2>
        </div>
      </div>
    </Carousel>
  );
}