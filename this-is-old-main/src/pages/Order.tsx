import { BsFacebook, BsInstagram } from "react-icons/bs";
import { colors } from "../utils/colors";

export default function Order() {
  const textStyle = {
    color: colors.vintage_linen,
  };

  const mutedTextStyle = {
    color: colors.muted_gold,
  };

  return (
    <section
      className="relative py-12 px-4 min-h-screen"
      style={{ backgroundColor: colors.espresso_black }}
    >
      {/* Page Title */}
      <h1
        className="text-5xl font-bold text-center mb-10"
        style={textStyle}
      >
        Order Online
      </h1>

      {/* Image + Overlay Card Container */}
      <div className="relative max-w-5xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg min-h-[720px]">
        
        {/* Background Image */}
        <img
          src="/optimized-pics/food/cheese-board.webp"
          alt="Order at Old Main"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Main Overlay Card */}
        <div
          className="absolute inset-x-4 md:inset-x-16 top-1/2 -translate-y-1/2 rounded-2xl p-8 md:p-10 text-center shadow-2xl backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(64, 44, 32, 0.68)",
            border: `1px solid ${colors.antique_gold}`,
          }}
        >
          <p
            className="text-lg leading-relaxed"
            style={textStyle}
          >
            Old Main Restaurant + Bar is{" "}
            <span
              className="font-semibold"
              style={{ color: colors.antique_gold }}
            >
              OPEN
            </span>
            ! We are now serving guests for in-person dining.

            <br />
            <br />

            Online ordering is coming soon. In the meantime, please call{" "}
            <span
              className="font-semibold"
              style={{ color: colors.antique_gold }}
            >
              (402) 418-7101
            </span>{" "}
            to place a pickup order.
          </p>

          <p
            className="text-lg mt-6"
            style={mutedTextStyle}
          >
            Follow our updates on Facebook and Instagram:
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-3xl mt-8">
            <a
              href="https://www.facebook.com/ombgcrete/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
              style={{ color: colors.antique_gold }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  colors.burnished_copper;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  colors.antique_gold;
              }}
            >
              <BsFacebook />
            </a>

            <a
              href="https://www.instagram.com/oldmainrestaurantcretene/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
              style={{ color: colors.antique_gold }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  colors.burnished_copper;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  colors.antique_gold;
              }}
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}