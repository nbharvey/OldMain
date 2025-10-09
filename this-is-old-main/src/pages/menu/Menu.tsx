import { Link } from "react-router-dom";

export default function Menu() {
    return (
      <div className="bg-brandBlack">
        
    <section className="max-w-5xl mx-auto px-6 py-12 bg-brandBlack">
      <h2 className="text-3xl font-semibold text-center mb-10 text-brandSilver">Explore Our Menu</h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Food Card */}
        <Link
          to="/food"
          className="group relative w-full md:w-1/2 cursor-pointer"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/food/frenchfries.jpg"
              alt="Explore our food menu"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
            <span className="text-brandBlack text-2xl font-semibold">Explore Food</span>
          </div>
        </Link>

        {/* Drinks Card */}
        <Link
          to="/drinks"
          className="group relative w-full md:w-1/2 cursor-pointer"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/food/pour-your-own-beer.jpg"
              alt="Explore our drinks menu"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
            <span className="text-brandBlack text-2xl font-semibold">Explore Drinks</span>
          </div>
        </Link>
      </div>
        </section>
        </div>
  );
}