import { colors } from "../utils/colors";

export default function Golf() {
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
      <h1 className="text-5xl font-bold text-center mb-10" style={textStyle}>
        Golf Simulators
      </h1>

      <div className="relative max-w-5xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg min-h-[720px]">
        <img
          src="/optimized-pics/remodel/upstairs.webp"
          alt="Golf Simulators at Old Main"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div
          className="absolute inset-x-4 md:inset-x-16 top-1/2 -translate-y-1/2 rounded-2xl p-8 md:p-10 text-center shadow-2xl backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(64, 44, 32, 0.68)",
            border: `1px solid ${colors.antique_gold}`,
          }}
        >
          <h2 className="text-4xl font-bold mb-6" style={textStyle}>
            Golf Simulators at Old Main
          </h2>

          <p className="text-lg leading-relaxed" style={textStyle}>
            Enjoy indoor golf upstairs at{" "}
            <span
              className="font-semibold"
              style={{ color: colors.antique_gold }}
            >
              Old Main Restaurant + Bar
            </span>
            .
          </p>

          <p className="text-lg leading-relaxed mt-6" style={textStyle}>
            Our golf simulators are perfect for casual play, groups, date
            nights, practice sessions, and friendly competition.
          </p>

          <p className="text-lg leading-relaxed mt-6" style={mutedTextStyle}>
            Reserve your simulator online or call us to book your time.
          </p>

          <div
            className="mt-8 rounded-2xl p-6 text-left"
            style={{
              backgroundColor: "rgba(18, 10, 4, 0.72)",
              border: `1px solid ${colors.antique_gold}`,
            }}
          >
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: colors.antique_gold }}
            >
              Book a Simulator
            </h3>

            <p className="text-lg" style={textStyle}>
              Golf simulators are located upstairs at Old Main.
            </p>

            <p className="mt-2" style={mutedTextStyle}>
              Online reservations available through our scheduler.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://clients.uschedule.com/oldmain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 rounded-xl font-semibold transition"
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
                Reserve Golf Simulators
              </a>

              {/* <div
                className="inline-block px-5 py-3 rounded-xl font-semibold"
                style={{
                  backgroundColor: colors.walnut_brown,
                  color: colors.vintage_linen,
                  border: `1px solid ${colors.antique_gold}`,
                }}
              >
                Call to Reserve: (531) 739-6218
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}