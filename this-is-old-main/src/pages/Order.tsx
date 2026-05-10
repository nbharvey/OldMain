import { BsFacebook, BsInstagram } from "react-icons/bs";
import { colors } from "../utils/colors";

export default function Order() {
  const cardStyle = {
    backgroundColor: colors.walnut_brown,
    border: `1px solid ${colors.antique_gold}`,
  };

  const textStyle = {
    color: colors.vintage_linen,
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

      {/* Top Image */}
      <div className="w-full max-w-5xl mx-auto mb-10 overflow-hidden rounded-2xl shadow-lg">
        <img
          src="/renovations.png"
          alt="Order at Old Main"
          className="w-full object-cover rounded-2xl"
        />
      </div>

      {/* Main Card */}
      <div
        className="max-w-5xl mx-auto rounded-2xl p-10 text-center shadow-lg"
        style={cardStyle}
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
    (531) 739-6218
  </span>{" "}
  to place a pickup order.
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
              e.currentTarget.style.color = colors.burnished_copper;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = colors.antique_gold;
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
              e.currentTarget.style.color = colors.burnished_copper;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = colors.antique_gold;
            }}
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}