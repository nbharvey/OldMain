import { BsFacebook, BsInstagram } from "react-icons/bs";
import { colors } from "../utils/colors";

export default function Events() {
  // const cardStyle = {
  //   backgroundColor: colors.walnut_brown,
  //   border: `1px solid ${colors.antique_gold}`,
  // };

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
        Events
      </h1>

   {/* Image + Overlay Card Container */}
<div className="relative max-w-5xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg min-h-[950px]">
  
  {/* Background Image */}
  <img
    src="/optimized-pics/remodel/bar-at-old-main.webp"
    alt="Events at Old Main"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Main Overlay Card */}
  <div
    className="absolute inset-x-4 md:inset-x-16 top-1/2 -translate-y-1/2 rounded-2xl p-8 md:p-10 text-center shadow-2xl backdrop-blur-sm overflow-y-auto max-h-[88%]"
    style={{
      backgroundColor: "rgba(64, 44, 32, 0.68)",
      border: `1px solid ${colors.antique_gold}`,
    }}
  >
    <h2
      className="text-4xl font-bold mb-6"
      style={textStyle}
    >
      Events at Old Main
    </h2>

    <p
      className="text-lg leading-relaxed"
      style={textStyle}
    >
      Old Main Restaurant + Bar is now open! Stay tuned for updates on
      upcoming events, special nights, and more.
    </p>

    <p
      className="text-lg leading-relaxed mt-6"
      style={textStyle}
    >
      Our bar features{" "}
      <span style={{ color: colors.antique_gold }}>
        golf simulators
      </span>
      ,{" "}
      <span style={{ color: colors.burnished_copper }}>
        pool tables
      </span>
      , and{" "}
      <span style={{ color: colors.antique_gold }}>
        live music on the patio
      </span>
      .
    </p>

    {/* Featured Event */}
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
        Featured Event — May 30th
      </h3>

      <p className="text-lg" style={textStyle}>
        Live Band on the Patio
      </p>

      <p className="mt-2" style={mutedTextStyle}>
        Friday, May 30th • 8:00 PM – 11:00 PM
      </p>

      <p className="mt-2" style={textStyle}>
        $10 Cover Charge
      </p>

      <div className="mt-4">
        <a
          href="https://www.facebook.com/photo.php?fbid=815980388249270&set=a.107874285726554&type=3&mibextid=wwXIfr&rdid=D6lyFkcjozdQ2tMl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Cm7UYxWGR%2F%3Fmibextid%3DwwXIfr#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-3 rounded-xl font-semibold transition"
          style={{
            backgroundColor: colors.antique_gold,
            color: colors.espresso_black,
          }}
        >
          View Event on Facebook
        </a>
      </div>
    </div>

    {/* Everyday Activities */}
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
        Everyday Activities
      </h3>

      <p className="text-lg" style={textStyle}>
        Pool & Golf Simulators
      </p>

      <p className="mt-2" style={mutedTextStyle}>
        Upstairs at Old Main
      </p>

      <p className="mt-4" style={textStyle}>
        Golf simulators can be reserved online or by phone.
      </p>

      <div className="mt-4 flex flex-wrap gap-4">
        <a
          href="https://clients.uschedule.com/oldmain"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-3 rounded-xl font-semibold transition"
          style={{
            backgroundColor: colors.antique_gold,
            color: colors.espresso_black,
          }}
        >
          Reserve Golf Simulators
        </a>

      
      </div>
    </div>

    <p
      className="text-lg mt-6"
      style={mutedTextStyle}
    >
      Follow our updates on Facebook and Instagram:
    </p>

    {/* Social Icons */}
    <div className="flex justify-center gap-6 text-3xl mt-8">
      <a
        href="https://www.facebook.com/ombgcrete/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition"
        style={{ color: colors.antique_gold }}
      >
        <BsFacebook />
      </a>

      <a
        href="https://www.instagram.com/oldmainrestaurantcretene/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition"
        style={{ color: colors.antique_gold }}
      >
        <BsInstagram />
      </a>
    </div>
  </div>
      </div>
    </section>
  );
}