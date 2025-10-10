export default function Drinks() {
  return (
    <section
      className="relative bg-cover bg-center py-12"
      style={{ backgroundImage: "url('/brick.jpg')" }}
    >
      {/* Drinks Image */}
      <div className="w-full max-w-3xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-md">
        <img
          src="/food/pour-your-own-beer.jpg"
          alt="Pour Your Own Drink Wall"
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 rounded-2xl"
        />
      </div>

      {/* Overlay container for text */}
      <div className="max-w-3xl mx-auto bg-brandSilver bg-opacity-95 rounded-2xl p-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4 text-brandBlack">
          Choice Is the Name of the Game
        </h2>

        {/* Description */}
        <p className="text-lg text-brandBlack leading-relaxed">
          Whether you prefer to sit back and be served or take control of your own pour,{" "}
          <span className="font-semibold text-brandBrick">we’ve got you covered</span>.
        </p>

        <p className="text-lg text-brandBlack leading-relaxed mt-4">
          Downstairs, enjoy our <span className="font-semibold text-brandTeal">full-service bar</span> — a lively space where our bartenders craft signature cocktails, local favorites, and seasonal specialties made just for you.
        </p>

        <p className="text-lg text-brandBlack leading-relaxed mt-4">
          Upstairs, discover our <span className="font-semibold text-brandBrick">Pour Your Own Drink Wall</span> — grab a bracelet, scan it on the drink you want, and pay only for the ounces you pour. Fun, flexible, and totally in your control.
        </p>

        <p className="text-lg text-brandBlack leading-relaxed mt-4">
          Choose your drink, choose your vibe. Whether you’re relaxing at the bar or exploring the self-serve taps, the experience is yours to make.
        </p>
      </div>
    </section>
  );
}