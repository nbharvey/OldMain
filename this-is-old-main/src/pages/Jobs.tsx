import { colors } from "../utils/colors";

export default function Jobs() {
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
      className="min-h-screen py-12 px-4"
      style={{ backgroundColor: colors.espresso_black }}
    >
      {/* Page Title */}
      <h1
        className="text-5xl font-bold text-center mb-10"
        style={textStyle}
      >
        Join Our Team
      </h1>

      {/* Intro Card */}
      <div
        className="max-w-4xl mx-auto rounded-2xl p-8 text-center shadow-lg mb-8"
        style={cardStyle}
      >
        <p
          className="text-lg leading-relaxed"
          style={textStyle}
        >
          Old Main Restaurant + Bar is looking for passionate team members who
          value hospitality, teamwork, and creating memorable guest experiences.
        </p>

        <p
          className="text-lg mt-4"
          style={mutedTextStyle}
        >
          Fill out the application below and we’ll be in touch.
        </p>
      </div>

      {/* Form Container */}
      <div
        className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl p-4 md:p-6"
        style={cardStyle}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeHNtey9RPJtf6mKjIusRoNWyVk-_ECLrVEC8HMNKSrB1EbnA/viewform?embedded=true"
          className="w-full border-0 rounded-xl"
          style={{
            height: "75vh",
            overflow: "hidden",
            backgroundColor: "white",
          }}
          title="Job Application Form"
          loading="lazy"
        />
      </div>
    </section>
  );
}