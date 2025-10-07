import { Link } from "react-router-dom";
import MyButton from "../../components/MyButton";

export default function Food() {
    const handleAlert = () => {
        alert(
          `We are currently under construction. Check back soon for updates about our grand opening!\n\n` +
          `In the meantime, looking for a job? Submit a job application today: https://http://localhost:5173/jobs`
        );
      };

  return (
    <section
      className="relative bg-cover bg-center py-12"
      style={{ backgroundImage: "url('/brick.jpg')" }}
    >
      {/* Beef Image */}
      <div className="w-full max-w-3xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-md">
          <img
            src="/food/steak.jpg"
            alt="Angus Beef"
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 rounded-2xl"
            />
        </div>

      {/* Overlay container for text */}
      <div className="max-w-3xl mx-auto bg-brandSilver bg-opacity-95 rounded-2xl p-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4 text-brandBlack">Our Menu</h2>

        {/* Description */}
        <p className="text-lg text-brandBlack leading-relaxed">
          Our menu is still a work in progress as our new chef crafts a delicious
          lineup of dishes worth the wait. Expect mouthwatering meals served
          downstairs and a selection of apps and entrées available at the bar too.
        </p>

        <p className="text-lg text-brandBlack leading-relaxed mt-4">
          We’re proud to feature{" "}
          <span className="font-semibold text-brandBrick">
            dry-aged, locally raised Angus beef
          </span>
          , <span className="font-semibold text-brandTeal">locally sourced</span>{" "}
          buns for our burgers, and farm-fresh produce grown right here in the
          community. Good food, good drinks, and good company—coming together
          soon.
        </p>

        {/* Order Now / Explore Menu Button */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <MyButton label="Order Now!" onClick={handleAlert} />
        </div>
      </div>
    </section>
  );
}