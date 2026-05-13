import { BsFacebook, BsInstagram } from "react-icons/bs";
import { colors } from "../utils/colors";

export default function Contact() {
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
        Contact Old Main
      </h1>

      {/* Main Card */}
      <div
        className="max-w-5xl mx-auto rounded-2xl p-10 text-center shadow-lg"
        style={cardStyle}
      >
        <p
          className="text-lg leading-relaxed"
          style={textStyle}
        >
          Have questions, inquiries, or want to say hello? Reach out to us and
          we’ll get back to you as soon as possible.
        </p>

        <p
          className="text-lg mt-6"
          style={mutedTextStyle}
        >
          Follow our progress and updates on Facebook and Instagram:
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

        {/* Contact Info */}
        <div
          className="mt-10 pt-8"
          style={{
            borderTop: `1px solid ${colors.antique_gold}`,
          }}
        >
          <p
            className="text-lg"
            style={textStyle}
          >
            Email:{" "}
            <a
              href="mailto:manager@oldmain.net"
              className="font-semibold transition"
              style={{ color: colors.antique_gold }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  colors.burnished_copper;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  colors.antique_gold;
              }}
            >
              manager@oldmain.net
            </a>
          </p>

          <p
            className="text-lg mt-4"
            style={textStyle}
          >
            Phone:{" "}
            <span
              className="font-semibold"
              style={{ color: colors.antique_gold }}
            >
              (402) 418-7101
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}