import { useState } from "react";
import { colors } from "../../utils/colors";

const menus = [
  {
    title: "Draft Beer",
    image: "/optimized-pics/drinks/beers.webp",
  },
  {
    title: "Cocktails",
    image: "/optimized-pics/drinks/cocktails.webp",
  },
  {
    title: "Mocktails & Espresso Drinks",
    image: "/optimized-pics/drinks/mocktails.webp",
  },
  {
    title: "Wine",
    images: [
      "/optimized-pics/drinks/wine1.webp",
      "/optimized-pics/drinks/wine2.webp",
      "/optimized-pics/drinks/wine3.webp",
    ],
  },
];

export default function Drinks() {
  const [selectedMenu, setSelectedMenu] =
    useState<(typeof menus)[number] | null>(null);

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
          src="/optimized-pics/food/cocktail.webp"
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

        {/* Menu Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">          {menus.map((menu) => (
            <button
              key={menu.title}
              onClick={() => setSelectedMenu(menu)}
              className="font-semibold px-5 py-3 rounded-xl transition min-w-[240px]"              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  colors.burnished_copper;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  colors.antique_gold;
              }}
            >
              {menu.title}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {selectedMenu && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
          style={{ backgroundColor: "rgba(18,10,4,0.9)" }}
          onClick={() => setSelectedMenu(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[92vh] rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col"
            style={cardStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMenu(null)}
              className="absolute top-3 right-3 z-10 px-3 py-1 rounded-lg font-bold"
              style={buttonStyle}
            >
              X
            </button>

            <div className="shrink-0 pr-10">
              <h3
                className="text-3xl font-bold text-center mb-3"
                style={textStyle}
              >
                {selectedMenu.title}
              </h3>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden pr-2">
  <div className="space-y-6">
    {selectedMenu.images ? (
      selectedMenu.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${selectedMenu.title} ${index + 1}`}
          className="block w-full rounded-xl"
        />
      ))
    ) : (
      <img
        src={selectedMenu.image}
        alt={selectedMenu.title}
        className="block max-w-full max-h-full object-contain rounded-xl mx-auto"
      />
    )}
  </div>
</div>
          </div>
        </div>
      )}
    </section>
  );
}