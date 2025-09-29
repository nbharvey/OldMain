import MyButton from "../components/MyButton";
import HeroCarousel from "../components/HeroCarousel";
import FoodCarousel from "../components/FoodCarousel";
import OldMainMap from "../components/OldMainMap";

const foodImages = [
"/food/burger-beer.jpg",
"/food/frenchfries.jpg",
"/food/onion.jpg",
"/food/anguscow.jpg",
"/food/beefcooking.jpg",
"/food/downtown-crete.jpeg",
"/food/field.jpg",
"/food/herbs.jpg",
"/food/merrill-bell-tower.jpg",
"/food/nebraska.jpg",
"/food/pour-your-own-beer.jpg",
"/food/steak.jpg",
"/food/tomatoes.jpg",
"/food/welcometocrete.png",
"/food/golf-sims.jpg",
];

export default function Home() {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="space-y-16 flex-grow">
          <HeroCarousel />
  
          {/* About Us */}
          <section className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Welcome to Old Main Bar and Grill!</h2>
            <p className="mb-2">
              We are a locally owned restaurant and bar located on Main Street in Crete, Nebraska.
              Our vision is to provide a farm-to-table experience using local businesses and our
              own resources, creating a fun and relaxing atmosphere.
            </p>
            <p className="mb-2">
              We are currently renovating and hope to be open before the end of 2025. Please check
              out our social media for updates on our Grand Opening!
            </p>
            <p className="mb-2">
              Interested in joining our team? Visit the Jobs page to fill out an application.
            </p>
            <p className="font-semibold">Address: 1103 Main St, Crete, NE 68333</p>
          </section>
  
          {/* Our Food */}
          <section className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Our Food</h2>
            <p className="mb-2">
              We specialize in farm-to-table dishes with locally sourced Angus beef, dry-aged meats,
              and fresh herbs grown in the region. Every dish is crafted with care and attention to
              flavor.
            </p>
          </section>
  
          {/* The Bar */}
          <section className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">The Bar at Old Main</h2>
            <p className="mb-2">
              Upstairs features golf simulators and a “pour your own drink” wall for a fun and unique
              experience. Enjoy our carefully crafted cocktails or your favorite brews in a relaxed
              setting.
            </p>
          </section>
  
          {/* Food & Drinks Carousel */}
          <section className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Food & Drinks</h2>
            <FoodCarousel images={foodImages} />
          </section>
  
          {/* Map */}
          <section className="max-w-6xl mx-auto px-4 h-[400px] mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Find Us Here</h2>
            <OldMainMap />
          </section>
        </div>
      </div>
    );
  }