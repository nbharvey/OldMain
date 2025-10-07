import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Order() {
  return (
    <section
      className="relative bg-cover bg-center py-12"
      style={{ backgroundImage: "url('/brick.jpg')" }}
    >
      {/* Top Image */}
      <div className="w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-md">
        <img
          src="/renovations.png" 
          alt="Order at Old Main"
          className="w-full h-64 object-cover rounded-2xl"
        />
      </div>

      {/* Overlay container for text */}
      <div className="max-w-4xl mx-auto bg-brandSilver bg-opacity-90 rounded-2xl p-10 text-center space-y-6">
        <h1 className="text-4xl font-bold text-brandBlack">Order at Old Main</h1>
        <p className="text-lg text-brandBlack">
          Old Main Restaurant and Grill is opening <span className="font-semibold">December 2025</span>!  
          Stay tuned for updates on ordering online and in-person.
        </p>
        <p className="text-lg text-brandBlack">
          In the meantime, follow our progress and upcoming menu updates on Facebook and Instagram:
        </p>
        <div className="flex justify-center gap-6 text-2xl mt-4">
          <a
            href="https://www.facebook.com/ombgcrete/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brandBrick hover:text-brandBlack"
          >
            <BsFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brandBrick hover:text-brandBlack"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}