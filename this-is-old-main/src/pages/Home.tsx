import HeroCarousel from "../components/HeroCarousel";
import FoodCarousel from "../components/FoodCarousel";
import OldMainMap from "../components/OldMainMap";
import { Link } from "react-router-dom";
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
    onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.currentTarget.style.backgroundColor = colors.burnished_copper;
    },
    onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.currentTarget.style.backgroundColor = colors.antique_gold;
    },
  };

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: colors.espresso_black }}
    >
      <HeroCarousel />

      <section className="px-4 py-12 space-y-8">
      <div
  className="max-w-5xl mx-auto rounded-2xl p-8 md:p-10 text-center shadow-lg"
  style={cardStyle}
>
  <h1 className="text-4xl md:text-5xl font-bold mb-6" style={textStyle}>
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
    <h2 className="text-2xl font-bold mb-4 text-center" style={textStyle}>
      Hours & Dining Information
    </h2>

    <div className="space-y-5">
      <div>
        <h3 className="text-xl font-semibold" style={{ color: colors.antique_gold }}>
          Restaurant + Bar Hours
        </h3>
        <p style={textStyle}>Tuesday – Friday: 11:00 AM – 10:00 PM</p>
        <p style={textStyle}>Saturday: 11:00 AM – 12:00 AM</p>
                <p style={textStyle}>Sunday: 8:00 AM – 2:00 PM</p>
                
      </div>
      
      <div>
        <h3 className="text-xl font-semibold" style={{ color: colors.antique_gold }}>
       Lunch Service
                </h3>
                <p style={mutedTextStyle}>Kitchen Open - Lunch Available to Order</p>
        <p style={textStyle}>11:00 AM – 2:00 PM</p>
        <p style={mutedTextStyle}>No reservations required.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold" style={{ color: colors.antique_gold }}>
          Appetizers and Drinks 
                </h3>
                <p style={mutedTextStyle}>Kitchen Open for Appetizers Only - Drinks Always Available</p>
                <p style={textStyle}>2:00 AM – 5:00 PM</p>
        <p style={textStyle}>2:00 AM – 5:00 PM</p>
        <p style={mutedTextStyle}>No reservations required.</p>
      </div>    
      <div>
        <h3 className="text-xl font-semibold" style={{ color: colors.antique_gold }}>
          Dinner Service
                </h3>
                <p style={mutedTextStyle}>Kitchen Open - Dinner Available to Order</p>
        <p style={textStyle}>11:00 AM – 2:00 PM</p>
        <p style={mutedTextStyle}>No reservations required.</p>
      </div>

      <div>
      <div
  className="mt-6 rounded-2xl p-5"
  style={{
    border: `2px solid ${colors.antique_gold}`,
    backgroundColor: "rgba(18,10,4,0.45)",
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
    <a
      href="/finedining"
      className="inline-block px-5 py-2 rounded-xl font-semibold transition"
      style={{
        backgroundColor: colors.antique_gold,
        color: colors.espresso_black,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor =
          colors.burnished_copper;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor =
          colors.antique_gold;
      }}
    >
      Reserve Fine Dining
    </a>
  </div>
</div>
</div>
</div>
  </div>

  {/* <div className="mt-6">
    <Link
      to="/about"
      className="inline-block font-semibold px-6 py-3 rounded-xl transition"
      style={buttonStyle}
      {...buttonHover}
    >
      About Us
    </Link>
  </div> */}
</div>
<section className="w-full py-12 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center" style={textStyle}>
          Food & Drinks
        </h2>

        <FoodCarousel images={foodImages} />
      </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <section className="rounded-2xl p-8 text-center shadow-lg" style={cardStyle}>
            <h2 className="text-3xl font-bold mb-4" style={textStyle}>
              Our Food
            </h2>

            <p className="text-lg leading-relaxed" style={textStyle}>
              Farm-to-table dishes, locally sourced Angus beef, dry-aged meats,
              and fresh regional ingredients.
            </p>

            <div className="mt-6">
              <Link
                to="/menu"
                className="inline-block font-semibold px-6 py-3 rounded-xl transition"
                style={buttonStyle}
                {...buttonHover}
              >
                Explore Our Menu
              </Link>
            </div>
          </section>

          <section className="rounded-2xl p-8 text-center shadow-lg" style={cardStyle}>
            <h2 className="text-3xl font-bold mb-4" style={textStyle}>
              The Bar
            </h2>

            <p className="text-lg leading-relaxed" style={textStyle}>
              Golf simulators, a pour-your-own drink wall, crafted cocktails,
              and a relaxed upstairs bar experience.
            </p>

            <div className="mt-6">
              <Link
                to="/menu/drinks"
                className="inline-block font-semibold px-6 py-3 rounded-xl transition"
                style={buttonStyle}
                {...buttonHover}
              >
                Explore Drinks
              </Link>
            </div>
          </section>
        </div>
      </section>

  

      <section className="w-full py-12 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8" style={textStyle}>
          Find Us Here
        </h2>

        <p className="mb-6 text-lg" style={mutedTextStyle}>
          1103 Main St, Crete, NE 68333
        </p>

        <div
          className="w-full max-w-6xl mx-auto h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
          style={{ border: `1px solid ${colors.antique_gold}` }}
        >
          <OldMainMap />
        </div>
      </section>
    </main>
  );
}