export default function Jobs() {
  return (
    <div
      className="flex justify-center items-center min-h-screen py-12 px-6 text-brandBlack"
      style={{
        backgroundImage: "url('/brick.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-xl bg-white p-4 md:p-6">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeHNtey9RPJtf6mKjIusRoNWyVk-_ECLrVEC8HMNKSrB1EbnA/viewform?embedded=true"
          className="w-full border-0 rounded-lg"
          style={{
            height: "75vh", 
            overflow: "hidden",
          }}
          title="Job Application Form"
          loading="lazy"
        />
      </div>

    </div>
  );
}