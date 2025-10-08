

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
        <h2 className="text-3xl font-semibold mb-4 text-brandBlack">Our Drinks</h2>

        {/* Description */}
        <p className="text-lg text-brandBlack leading-relaxed">
          Experience our unique <span className="font-semibold text-brandBrick">Pour Your Own Drink Wall</span>! Grab a bracelet, scan it on the drink you want, and pay only for the ounces you pour.
        </p>

        <p className="text-lg text-brandBlack leading-relaxed mt-4">
          Choose from a variety of <span className="font-semibold text-brandTeal">craft beers</span> and <span className="font-semibold text-brandBrick">signature cocktails</span> to create your perfect drink experience. Fun, flexible, and totally in your control!
        </p>

        <p className="text-lg text-brandBlack leading-relaxed mt-4">
          Here’s how it works: purchase a bracelet at the bar, then scan it at any of the taps or cocktail stations. Your bracelet tracks exactly how much you pour, so you only pay for what you enjoy. It’s a fun, interactive way to explore new drinks, share with friends, and customize your experience exactly how you like.
        </p>

      </div>
    </section>
  );
}