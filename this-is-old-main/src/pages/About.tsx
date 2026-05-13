import { colors } from "../utils/colors";

export default function About() {
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
      className="relative py-8 min-h-screen px-4"
      style={{ backgroundColor: colors.espresso_black }}
    >
      <h1 className="text-5xl font-bold text-center mb-10" style={textStyle}>
        About Us
      </h1>

      <div className="max-w-2xl mx-auto">
  <img
    src="/optimized-pics/aboutus/our-story.webp"
    alt="Our Story at Old Main"
    className="w-full rounded-2xl shadow-lg"
  />
</div>

      <div className="max-w-5xl mx-auto mt-10">
        <div className="rounded-2xl p-8 shadow-lg text-center" style={cardStyle}>
          <h2 className="text-3xl font-bold mb-4" style={textStyle}>
            Featured on KLKN News
          </h2>

          <p className="leading-relaxed text-lg" style={textStyle}>
            In 2024, a devastating kitchen fire temporarily shut down Old Main
            Restaurant + Bar. Despite the challenges, the team worked tirelessly
            to rebuild and reopen, bringing the community back to the heart of
            Crete.
          </p>

          <p className="mt-4 leading-relaxed" style={mutedTextStyle}>
            Watch the full story of Old Main’s rebuilding journey featured on
            KLKN News.
          </p>

          <div className="mt-6">
            <a
              href="https://www.klkntv.com/we-had-a-mess-crete-restaurant-rebuilding-community-staple-after-kitchen-fire-in-2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold px-6 py-3 rounded-xl transition"
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.burnished_copper;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.antique_gold;
              }}
            >
              Watch the Story
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <div className="rounded-2xl overflow-hidden shadow-lg" style={cardStyle}>
          <div
            className="px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
            style={{ borderBottom: `1px solid ${colors.antique_gold}` }}
          >
            <h2 className="text-4xl font-bold" style={textStyle}>
              Our Chef
            </h2>

            <h4 className="text-xl font-bold" style={mutedTextStyle}>
              Rebecca Myles — Executive Chef & General Manager
            </h4>
          </div>

          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <img
                src="/optimized-pics/staff/our-chef.webp"
                alt="Our Chef"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-1">
              <img
                src="/optimized-pics/staff/rebecca_myles.webp"
                alt="Rebecca Myles"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="px-8 py-6">
            <p className="leading-relaxed" style={textStyle}>
              At Old Main, our team is built on hospitality, collaboration, and
              a shared passion for creating memorable guest experiences. From
              the kitchen to the dining room, every team member plays an
              important role in bringing warmth, quality, and energy to the
              restaurant each day.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
  {[
    {
      image: "staff1",
      name: "Will Guerra",
      title: "Front of House Manager",
    },
    {
      image: "staff2",
      name: "John Elwwod",
      title: "Bar Lead",
    },
    // {
    //   image: "staff3",
    //   name: "Staff Name",
    //   title: "Kitchen Staff",
    // },
    // {
    //   image: "staff4",
    //   name: "Staff Name",
    //   title: "Host",
    // },
  ].map((staff) => (
    <div
      key={staff.image}
      className="overflow-hidden rounded-xl"
      style={{
        border: `1px solid ${colors.antique_gold}`,
        backgroundColor: colors.walnut_brown,
      }}
    >
      <img
        src={`/optimized-pics/staff/${staff.image}.webp`}
        alt={staff.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-3 text-center">
        <h5
          className="text-lg font-semibold"
          style={{ color: colors.vintage_linen }}
        >
          {staff.name}
        </h5>

        <p
          className="text-sm mt-1"
          style={{ color: colors.muted_gold }}
        >
          {staff.title}
        </p>
      </div>
    </div>
  ))}
</div>
                </div>
            
            </div>
          </div>

          <p className="mt-3" style={textStyle}>
  Want your picture here? Visit our{" "}

  <a
    href="/jobs"
    className="inline-block font-semibold px-3 py-1 rounded-lg transition ml-1"
    style={{
      backgroundColor: colors.antique_gold,
      color: colors.espresso_black,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = colors.burnished_copper;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = colors.antique_gold;
    }}
  >
    CAREERS
  </a>

  {" "}page to learn more about joining the Old Main team.
</p>
    </section>
  );
}