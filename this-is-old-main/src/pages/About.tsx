import MyButton from "../components/MyButton";

const teamMembers = [
  {
    name: "Becka Flodman",
    role: "Executive Chef and Manager",
    bio: "Meet Becka, our Executive Chef and General Manager. She’s been in the restaurant world since 2012, working just about every position you can think of. Becka brings a personal touch to every plate and every guest interaction, blending her love of cooking with her passion for creating memorable experiences.",
    image: "/employees/Becka.jpeg",
  },
  {
    name: "John Smith",
    role: "Bar Manager",
    bio: "Want your picture here? We are hiring! Head to our JOBS tab for more information.",
    image: "/employees/hiring.jpg",
  },

];

export default function About() {
  return (
    <section className="relative bg-cover bg-center py-8" style={{ backgroundImage: "url('/brick.jpg')" }}>
      {/* About overlay */}
      <div className="bg-brandSilver bg-opacity-90 rounded-2xl p-10 max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-brandBlack">About Old Main</h1>
        <p className="text-lg text-brandBlack">
          Old Main Restaurant + Bar is a locally owned restaurant and bar located on Main Street in Crete, Nebraska. We focus on delivering a farm-to-table experience, sourcing fresh ingredients from local farms and purveyors.
        </p>
        <p className="text-lg text-brandBlack">
          Our kitchen specializes in locally sourced Angus beef, dry-aged meats, and herbs grown nearby. Every dish reflects our commitment to quality and flavor.
        </p>
        <p className="text-lg text-brandBlack">
          Upstairs, our bar offers golf simulators and a pour-your-own drink wall. Whether you’re here for food, drinks, or events, Old Main aims to provide a fun and relaxing atmosphere.
        </p> //trying to get this thing deployed!!!
      </div>

{/* Our Story Card */}
<div className="bg-brandSilver bg-opacity-90 rounded-2xl p-10 max-w-5xl mx-auto mt-12 text-center space-y-6">
  <h2 className="text-3xl font-bold text-brandBlack">Check Out Our Story</h2>
  <p className="text-lg text-brandBlack">
    In 2024, a devastating kitchen fire temporarily shut down Old Main Restaurant + Bar. Despite the challenges, our dedicated team worked tirelessly to rebuild and reopen, bringing the community back to the heart of Crete.
  </p>
  <p className="text-lg text-brandBlack">
    Watch the full story of our journey on KLKN News:
  </p>
  <div className="mt-4">
    <MyButton
      label="Watch Our Story"
      onClick={() =>
        window.open(
          "https://www.klkntv.com/we-had-a-mess-crete-restaurant-rebuilding-community-staple-after-kitchen-fire-in-2024/",
          "_blank"
        )
      }
    />
  </div>
</div>

      {/* Our Team Section */}
      <div className="bg-brandSilver bg-opacity-90 rounded-2xl p-10 max-w-6xl mx-auto mt-12 text-center">
        <h2 className="text-3xl font-bold text-brandBlack mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-brandBlack text-brandSilver rounded-2xl overflow-hidden shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brandBlack">{member.name}</h3>
                <p className="text-brandSilver text-sm mt-2 font-bold">{member.role}</p>
                <p className="text-brandSilver text-sm mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}