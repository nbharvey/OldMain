import { Carousel } from "flowbite-react";
import { colors } from "../utils/colors";

type FoodCarouselProps = {
  images: string[];
};

export default function FoodCarousel({ images }: FoodCarouselProps) {
  const chunkSize = 3;
  const slides = [];

  for (let i = 0; i < images.length; i += chunkSize) {
    slides.push(images.slice(i, i + chunkSize));
  }

  const controlStyle = {
    color: colors.vintage_linen,
    backgroundColor: colors.espresso_black,
    border: `1px solid ${colors.antique_gold}`,
  };

  return (
    <div
      className="max-w-6xl mx-auto rounded-2xl p-4 shadow-lg"
      style={{
        backgroundColor: colors.walnut_brown,
        border: `1px solid ${colors.antique_gold}`,
      }}
    >
      <Carousel
        slide={true}
        className="h-[230px] md:h-[290px]"
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
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="grid grid-cols-3 gap-3 px-4 place-items-center"
          >
            {slide.map((img, i) => (
              <img
                key={img}
                src={img}
                alt={`Old Main food and drink ${i + 1}`}
                loading="lazy"
                className="h-44 md:h-64 w-full object-cover rounded-xl shadow-md"
                style={{ border: `1px solid ${colors.antique_gold}` }}
              />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}