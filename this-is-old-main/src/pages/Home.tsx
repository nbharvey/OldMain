import type { MouseEvent } from "react";
import { Link } from "react-router-dom";

import HeroCarousel from "../components/HeroCarousel";
import FoodCarousel from "../components/FoodCarousel";
import OldMainMap from "../components/OldMainMap";
import { colors } from "../utils/colors";

const foodImages = [
  "/optimized-pics/food/aged-steak.webp",
  "/optimized-pics/food/cheese-board.webp",
  "/optimized-pics/food/berry-cheesecake.webp",
  "/optimized-pics/food/chocolate-cheesecake.webp",
  "/optimized-pics/food/creme-brulee.webp",
  "/optimized-pics/food/dessert-cookie.webp",
  "/optimized-pics/food/onion.webp",
  "/optimized-pics/food/tomatoes.webp",
  "/optimized-pics/food/herbs.webp",
  "/optimized-pics/food/veggies.webp",
  "/optimized-pics/food/cocktail.webp",
  "/optimized-pics/food/beer.webp",
];

export default function Home() {
  const cardStyle = {
    backgroundColor: colors.walnut_brown,
    border: `1px solid ${colors.antique_gold}`,
  };

  const textStyle = {
    color: colors.vintage_linen,
  };

  const mutedTextStyle = {
    color: colors.muted_gold,
  };

  const buttonStyle = {
    backgroundColor: colors.antique_gold,
    color: colors.espresso_black,
  };

  const buttonHover = {
    onMouseEnter: (event: MouseEvent<HTMLAnchorElement>) => {
      event.currentTarget.style.backgroundColor = colors.burnished_copper;
    },
    onMouseLeave: (event: MouseEvent<HTMLAnchorElement>) => {
      event.currentTarget.style.backgroundColor = colors.antique_gold;
    },
  };

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: colors.espresso_black }}
    >
      <HeroCarousel />

      <section className="space-y-8 px-4 py-12">
        <div
          className="mx-auto max-w-5xl rounded-2xl p-8 text-center shadow-lg md:p-10"
          style={cardStyle}
        >
          <h1
            className="mb-6 text-4xl font-bold md:text-5xl"
            style={textStyle}
          >
            From upscale to easygoing, Old Main is where Crete gathers.
          </h1>

          <p className="text-lg leading-relaxed" style={textStyle}>
            Come for the food, stay for the feeling.
          </p>

          <div
            className="mt-8 rounded-2xl p-6 text-left"
            style={{
              backgroundColor: colors.espresso_black,
              border: `1px solid ${colors.antique_gold}`,
            }}
          >
            <h2
              className="mb-6 text-center text-2xl font-bold"
              style={textStyle}
            >
              Hours &amp; Dining Information
            </h2>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: colors.antique_gold }}
                >
                  Restaurant + Bar Hours
                </h3>

                <p className="mb-2" style={mutedTextStyle}>
                  During operating hours, drinks and appetizers are always
                  available.
                </p>

                <p style={textStyle}>
                  Tuesday – Friday: 11:00 AM – 10:00 PM
                </p>
                <p style={textStyle}>Saturday: 5:00 PM – 12:00 AM</p>
                <p style={textStyle}>Sunday: 8:00 AM – 2:00 PM</p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: colors.antique_gold }}
                >
                  Kitchen Open for Meal Service
                </h3>

                <p style={textStyle}>
                  Tuesday – Friday Lunch: 11:00 AM – 2:00 PM
                </p>
                <p style={textStyle}>
                  Tuesday – Friday Dinner: 5:00 PM – 9:00 PM
                </p>
                <p style={textStyle}>Saturday: 5:00 PM – 9:00 PM</p>
                <p style={textStyle}>Sunday: 8:00 AM – 2:00 PM</p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: colors.antique_gold }}
                >
                  Bar Open, Kitchen Open for Appetizer Service
                </h3>

                <p style={textStyle}>
                  Tuesday – Friday: 2:00 PM – 5:00 PM
                </p>
                <p style={textStyle}>
                  Tuesday – Friday: 9:00 PM – 10:00 PM
                </p>
                <p style={textStyle}>Saturday: 9:00 PM – 12:00 AM</p>
              </div>

              <div
                className="rounded-2xl p-5"
                style={{
                  border: `2px solid ${colors.antique_gold}`,
                  backgroundColor: "rgba(18, 10, 4, 0.45)",
                }}
              >
                <h3
                  className="text-xl font-semibold"
                  style={{ color: colors.antique_gold }}
                >
                  Fine Dining Experience
                </h3>

                <p className="mt-2" style={textStyle}>
                  5:00 PM – 9:00 PM
                </p>

                <p className="mt-2 font-medium" style={mutedTextStyle}>
                  Reservations are recommended for fine dining only.
                </p>

                <div className="mt-4 flex justify-center">
                  <Link
                    to="/finedining"
                    className="inline-block rounded-xl px-5 py-2 font-semibold transition"
                    style={buttonStyle}
                    {...buttonHover}
                  >
                    Reserve Fine Dining
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full px-4 py-12">
          <h2
            className="mb-8 text-center text-4xl font-bold"
            style={textStyle}
          >
            Food &amp; Drinks
          </h2>

          <FoodCarousel images={foodImages} />
        </section>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <section
            className="rounded-2xl p-8 text-center shadow-lg"
            style={cardStyle}
          >
            <h2 className="mb-4 text-3xl font-bold" style={textStyle}>
              Our Food
            </h2>

            <p className="text-lg leading-relaxed" style={textStyle}>
              Farm-to-table dishes, locally sourced Angus beef, dry-aged meats,
              and fresh regional ingredients.
            </p>

            <div className="mt-6">
              <Link
                to="/menu"
                className="inline-block rounded-xl px-6 py-3 font-semibold transition"
                style={buttonStyle}
                {...buttonHover}
              >
                Explore Our Menu
              </Link>
            </div>
          </section>

          <section
            className="rounded-2xl p-8 text-center shadow-lg"
            style={cardStyle}
          >
            <h2 className="mb-4 text-3xl font-bold" style={textStyle}>
              The Bar
            </h2>

            <p className="text-lg leading-relaxed" style={textStyle}>
              Golf simulators, a pour-your-own drink wall, crafted cocktails,
              and a relaxed upstairs bar experience.
            </p>

            <div className="mt-6">
              <Link
                to="/menu/drinks"
                className="inline-block rounded-xl px-6 py-3 font-semibold transition"
                style={buttonStyle}
                {...buttonHover}
              >
                Explore Drinks
              </Link>
            </div>
          </section>
        </div>
      </section>

      <section className="w-full px-4 py-12 text-center">
        <h2 className="mb-8 text-4xl font-bold" style={textStyle}>
          Find Us Here
        </h2>

        <p className="mb-6 text-lg" style={mutedTextStyle}>
          1103 Main St, Crete, NE 68333
        </p>

        <div
          className="mx-auto h-[350px] w-full max-w-6xl overflow-hidden rounded-2xl shadow-lg md:h-[500px]"
          style={{ border: `1px solid ${colors.antique_gold}` }}
        >
          <OldMainMap />
        </div>
      </section>
    </main>
  );
}