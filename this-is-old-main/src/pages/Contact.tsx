import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Contact() {
  return (
    <section
      className="relative bg-cover bg-center py-8"
      style={{ backgroundImage: "url('/brick.jpg')" }}
    >
      {/* Contact overlay */}
      <div className="bg-brandSilver bg-opacity-90 rounded-2xl p-10 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-brandBlack">Contact Old Main</h1>
        <p className="text-lg text-brandBlack">
          Have questions, inquiries, or want to say hello? Reach out to us and we’ll get back to you as soon as possible!
        </p>
        <p className="text-lg text-brandBlack">
          You can also follow our progress and updates on Facebook and Instagram:
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
        <p className="text-lg text-brandBlack mt-4">
          Email: <a href="mailto:info@oldmain.com" className="font-semibold text-brandBrick hover:text-brandBlack">manager@oldmain.net</a>
        </p>
        <p className="text-lg text-brandBlack">
          Phone: <span className="font-semibold text-brandBrick">(531) 739-6218</span>
        </p>
      </div>
    </section>
  );
}