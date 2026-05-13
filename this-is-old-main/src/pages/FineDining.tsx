import { BsFacebook, BsInstagram } from "react-icons/bs";
import { colors } from "../utils/colors";

export default function FineDining() {
  const textStyle = {
    color: colors.vintage_linen,
  };

  const buttonStyle = {
    backgroundColor: colors.antique_gold,
    color: colors.espresso_black,
  };

  return (
    <section
      className="relative py-12 px-4 min-h-screen"
      style={{ backgroundColor: colors.espresso_black }}
    >
      <h1 className="text-5xl font-bold text-center mb-10" style={textStyle}>
        Fine Dining
      </h1>

      <div className="relative max-w-5xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg min-h-[720px]">
        <img
          src="/optimized-pics/remodel/fine-dining.webp"
          alt="Fine Dining at Old Main"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div
          className="absolute inset-x-4 md:inset-x-16 top-1/2 -translate-y-1/2 rounded-2xl p-8 md:p-10 text-center shadow-2xl backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(64, 44, 32, 0.68)",
            border: `1px solid ${colors.antique_gold}`,
          }}
        >
          <p className="text-lg leading-relaxed" style={textStyle}>
            Experience elevated dining at{" "}
            <span
              className="font-semibold"
              style={{ color: colors.antique_gold }}
            >
              Old Main Restaurant + Bar
            </span>
            .
            <br />
            <br />
            Our fine dining experience features thoughtfully crafted dishes,
            premium cocktails, and an upscale atmosphere perfect for date
            nights, celebrations, and special occasions.
            <br />
            <br />
            Reservations are recommended but not required.
            <br />
            <br />
            Smart casual attire is encouraged in our fine dining space. Guests
            are welcome to enjoy a more relaxed atmosphere upstairs at the bar
            or on the patio.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://www.opentable.com/r/old-main-restaurant-and-bar-crete"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-4 rounded-xl font-semibold text-lg transition"
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  colors.burnished_copper;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.antique_gold;
              }}
            >
              Reserve Now
            </a>
          </div>

          <div className="flex justify-center gap-6 text-3xl mt-8">
            <a
              href="https://www.facebook.com/ombgcrete/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
              style={{ color: colors.antique_gold }}
            >
              <BsFacebook />
            </a>

            <a
              href="https://www.instagram.com/oldmainrestaurantcretene/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
              style={{ color: colors.antique_gold }}
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}