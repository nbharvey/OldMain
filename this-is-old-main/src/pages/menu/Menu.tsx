import { Link } from "react-router-dom";
import { colors } from "../../utils/colors";

export default function Menu() {
  const textStyle = {
    color: colors.vintage_linen,
  };

  const cardStyle = {
    border: `1px solid ${colors.antique_gold}`,
    backgroundColor: colors.walnut_brown,
  };

  return (
    <section
      className="min-h-screen py-12 px-6"
      style={{ backgroundColor: colors.espresso_black }}
    >
      {/* Page Title */}
      <h1
        className="text-5xl font-bold text-center mb-12"
        style={textStyle}
      >
        Explore Our Menu
      </h1>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center">

        {/* Food Card */}
        <Link
          to="/menu/food"
          className="group relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg transition"
          style={cardStyle}
        >
          <div className="overflow-hidden">
            <img
              src="/optimized-pics/food/veggies.webp"
              alt="Explore our food menu"
              className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center transition"
            style={{
              background:
                "linear-gradient(to top, rgba(18,10,4,0.75), rgba(18,10,4,0.2))",
            }}
          >
            <span
              className="text-3xl font-bold tracking-wide"
              style={{ color: colors.vintage_linen }}
            >
              Explore Food
            </span>
          </div>
        </Link>

        {/* Drinks Card */}
        <Link
          to="/menu/drinks"
          className="group relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg transition"
          style={cardStyle}
        >
          <div className="overflow-hidden">
            <img
              src="/optimized-pics/food/cocktail.webp"
              alt="Explore our drinks menu"
              className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center transition"
            style={{
              background:
                "linear-gradient(to top, rgba(18,10,4,0.75), rgba(18,10,4,0.2))",
            }}
          >
            <span
              className="text-3xl font-bold tracking-wide"
              style={{ color: colors.vintage_linen }}
            >
              Explore Drinks
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}