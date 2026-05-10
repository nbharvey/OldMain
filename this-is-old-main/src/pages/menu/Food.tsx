import { useState } from "react";
import { colors } from "../../utils/colors";

const menus = [
  { title: "Lunch Menu", image: "/optimized-pics/menu/lunch-menu.webp" },
  { title: "Dinner Menu", image: "/optimized-pics/menu/dinner-menu.webp" },
  { title: "Fine Dining Menu", image: "/optimized-pics/menu/fine-dining.webp" },
  { title: "Kids Menu", image: "/optimized-pics/menu/kids-menu.webp" },
];

export default function Food() {
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
        Food
      </h1>

      {/* Smaller Hero Image */}
      <div className="w-full max-w-xl mx-auto mb-10 rounded-2xl shadow-lg overflow-hidden">
  <img
    src="/optimized-pics/food/aged-steak.webp"
    alt="Angus Beef"
    className="w-full max-h-[400px] object-contain rounded-2xl"
    style={{
      backgroundColor: colors.espresso_black,
    }}
  />
</div>

      {/* Main Card */}
      <div
        className="max-w-5xl mx-auto rounded-2xl p-10 text-center shadow-lg"
        style={cardStyle}
      >
        {/* Heading */}
        <h2
          className="text-4xl font-bold mb-6"
          style={textStyle}
        >
          Our Menu
        </h2>

        {/* Description */}
        <p
          className="text-lg leading-relaxed"
          style={textStyle}
        >
          We’re proud to feature{" "}
          <span
            className="font-semibold"
            style={{ color: colors.antique_gold }}
          >
            dry-aged, locally raised Angus beef
          </span>
          ,{" "}
          <span
            className="font-semibold"
            style={{ color: colors.burnished_copper }}
          >
            locally sourced
          </span>{" "}
          buns for our burgers, and farm-fresh produce grown right here in the
          community.
        </p>

        <p
          className="text-lg leading-relaxed mt-6"
          style={mutedTextStyle}
        >
          Good food, good drinks, and good company.
        </p>

        {/* Hours & Dining Info */}
        <div
          className="mt-8 rounded-2xl p-6 text-left"
          style={{
            backgroundColor: colors.espresso_black,
            border: `1px solid ${colors.antique_gold}`,
          }}
        >
          <h3
            className="text-2xl font-bold mb-4 text-center"
            style={textStyle}
          >
            Hours & Dining Information
          </h3>

          <div className="space-y-5">

            <div>
              <h4
                className="text-xl font-semibold"
                style={{ color: colors.antique_gold }}
              >
                Restaurant + Bar Hours
              </h4>

              <p style={textStyle}>
                Monday – Thursday: 11:00 AM – 11:00 PM
              </p>

              <p style={textStyle}>
                Friday – Saturday: 11:00 AM – 12:00 AM
              </p>
            </div>

            <div>
              <h4
                className="text-xl font-semibold"
                style={{ color: colors.antique_gold }}
              >
                Lunch Service
              </h4>

              <p style={textStyle}>
                Served daily from 11:00 AM – 2:00 PM
              </p>

              <p style={mutedTextStyle}>
                No reservations required.
              </p>
            </div>

            <div>
              <h4
                className="text-xl font-semibold"
                style={{ color: colors.antique_gold }}
              >
                Dinner Service
              </h4>

              <p style={textStyle}>
                Served nightly from 5:00 PM – 10:00 PM
              </p>

              <p style={mutedTextStyle}>
                No reservations required.
              </p>
            </div>

            <div>
              <h4
                className="text-xl font-semibold"
                style={{ color: colors.antique_gold }}
              >
                Fine Dining Experience
              </h4>

              <p style={textStyle}>
                Available from 5:00 PM – 9:00 PM
              </p>

              <p style={mutedTextStyle}>
                Reservations required. Call (531) 739-6218 to reserve a
                table.
              </p>
            </div>

          </div>
        </div>

        {/* Menu Buttons */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {menus.map((menu) => (
            <button
              key={menu.title}
              onClick={() => setSelectedMenu(menu)}
              className="font-semibold px-5 py-3 rounded-xl transition"
              style={buttonStyle}
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

        {selectedMenu.title === "Fine Dining Menu" && (
          <p className="text-center mb-4" style={mutedTextStyle}>
            Note that the menu below is an example menu, as the fine dining menu
            changes weekly.
          </p>
        )}
      </div>

      <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
        <img
          src={selectedMenu.image}
          alt={selectedMenu.title}
          className="block max-w-full max-h-full object-contain rounded-xl"
          />
          </div>
        </div>
      </div>
    )}
  </section>
);
}