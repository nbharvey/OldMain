import { Carousel } from "flowbite-react";

type FoodCarouselProps = {
  images: string[];
};

export default function FoodCarousel({ images }: FoodCarouselProps) {
  // Split images into chunks of 3
  const chunkSize = 3;
  const slides = [];
  for (let i = 0; i < images.length; i += chunkSize) {
    slides.push(images.slice(i, i + chunkSize));
  }

  return (
<Carousel
  slide={true}
  className="h-[200px] md:h-[250px]"
  leftControl={
    <span className="text-brandSilver bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80">
      &#10094;
    </span>
  }
  rightControl={
    <span className="text-brandSilver bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80">
      &#10095;
    </span>
  }
>
  {slides.map((slide, idx) => (
    <div key={idx} className="flex justify-center items-center space-x-2 px-4">
      {slide.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Food ${i}`}
          className="h-60 md:h-68 w-60 md:w-68 object-cover rounded-lg shadow-md"
        />
      ))}
    </div>
  ))}
</Carousel>
  );
}