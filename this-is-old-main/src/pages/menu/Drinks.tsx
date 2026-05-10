import { colors } from "../../utils/colors";

export default function Drinks() {
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
        Drinks
      </h1>

      {/* Drinks Image */}
      <div className="w-full max-w-5xl mx-auto mb-10 overflow-hidden rounded-2xl shadow-lg">
        <img
          src="/food/pour-your-own-beer.jpg"
          alt="Pour Your Own Drink Wall"
          className="w-full object-cover rounded-2xl"
        />
      </div>

      {/* Main Card */}
      <div
        className="max-w-5xl mx-auto rounded-2xl p-10 shadow-lg text-center"
        style={cardStyle}
      >
        {/* Heading */}
        <h2
          className="text-4xl font-bold mb-6"
          style={textStyle}
        >
          Choice Is the Name of the Game
        </h2>

        {/* Paragraph 1 */}
        <p
          className="text-lg leading-relaxed"
          style={textStyle}
        >
          Whether you prefer to sit back and be served or take control of your
          own pour,{" "}
          <span
            className="font-semibold"
            style={{ color: colors.antique_gold }}
          >
            we’ve got you covered
          </span>
          .
        </p>

        {/* Paragraph 2 */}
        <p
          className="text-lg leading-relaxed mt-6"
          style={textStyle}
        >
          Downstairs, enjoy our{" "}
          <span
            className="font-semibold"
            style={{ color: colors.burnished_copper }}
          >
            full-service bar
          </span>{" "}
          — a lively space where our bartenders craft signature cocktails,
          local favorites, and seasonal specialties made just for you.
        </p>

        {/* Paragraph 3 */}
        <p
          className="text-lg leading-relaxed mt-6"
          style={textStyle}
        >
          Upstairs, discover our{" "}
          <span
            className="font-semibold"
            style={{ color: colors.antique_gold }}
          >
            Pour Your Own Drink Wall
          </span>{" "}
          — grab a bracelet, scan it on the drink you want, and pay only for
          the ounces you pour.
        </p>

        {/* Paragraph 4 */}
        <p
          className="text-lg leading-relaxed mt-6"
          style={mutedTextStyle}
        >
          Choose your drink, choose your vibe. Whether you’re relaxing at the
          bar or exploring the self-serve taps, the experience is yours to
          make.
        </p>
      </div>
    </section>
  );
}