import { Carousel } from "flowbite-react";
import { colors } from "../utils/colors";

const slides = [
  {
    image: "/optimized-pics/remodel/storefront.webp",
    title: "Now Open",
  },
  {
    image: "/optimized-pics/remodel/fine-dining.webp",
    title: "Craft & Social",
    paragraph: "Walk-Ins Welcome",
  },
  {
    image:"/optimized-pics/remodel/downstairs.webp",
    title: "Fine Dining",
    paragraph: "Reserve Online",
    link: "/finedining",  },
  {
    image: "/optimized-pics/remodel/bar-at-old-main.webp",
    title: "Craft Cocktails at Old Main",
  },
  {
    image: "/optimized-pics/remodel/draft-beer.webp",
    title: "Draft Beer at Old Main",
  },
  {
    image: "/optimized-pics/remodel/upstairs.webp",
    title: "Pool & Golf Simulators Upstairs",
    paragraph: "Reserve Online",
    link: "/events",
  },
  {
    image: "/optimized-pics/food/aged-steak.webp",
    title: "Burgers and Steaks with Local Angus Beef",
  },
];

export default function HeroCarousel() {
  const controlStyle = {
    color: colors.vintage_linen,
    backgroundColor: "rgba(18,10,4,0.8)",
    border: `1px solid ${colors.antique_gold}`,
  };

  return (
    <div
      className="overflow-hidden shadow-2xl"
      style={{
        borderBottom: `1px solid ${colors.antique_gold}`,
      }}
    >
      <Carousel
        slide={true}
        className="h-[420px] md:h-[650px]"
        leftControl={
          <span
            className="rounded-full px-3 py-2 transition"
            style={controlStyle}
          >
            &#10094;
          </span>
        }
        rightControl={
          <span
            className="rounded-full px-3 py-2 transition"
            style={controlStyle}
          >
            &#10095;
          </span>
        }
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          >
            {/* Dark Overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center px-6 text-center"
              style={{
                background:
                  "linear-gradient(to top, rgba(18,10,4,0.8), rgba(18,10,4,0.25))",
              }}
            >
              <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
                {slide.title && (
                  <h2
                    className="text-3xl md:text-6xl font-bold text-center"
                    style={{
                      color: colors.vintage_linen,
                      textShadow: "0px 2px 12px rgba(0,0,0,0.6)",
                    }}
                  >
                    {slide.title}
                  </h2>
                )}

                {slide.paragraph &&
                  (slide.link ? (
                    <a
                      href={slide.link}
                      className="mt-4 text-xl md:text-3xl font-semibold text-center underline transition hover:opacity-80"
                      style={{
                        color: colors.vintage_linen,
                        textShadow: "0px 2px 12px rgba(0,0,0,0.6)",
                      }}
                    >
                      {slide.paragraph}
                    </a>
                  ) : (
                    <p
                      className="mt-4 text-xl md:text-3xl font-semibold text-center"
                      style={{
                        color: colors.vintage_linen,
                        textShadow: "0px 2px 12px rgba(0,0,0,0.6)",
                      }}
                    >
                      {slide.paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}