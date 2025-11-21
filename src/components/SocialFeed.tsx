import { ImageWithFallback } from "./ImageWithFallback";
import { Instagram } from "lucide-react";

export function SocialFeed() {
  const images = [
    "/img/portfolio/paulbasset-thumbnail.png",
    "/img/portfolio/jaju-thumbnail.png",
    "/img/portfolio/IMG_7559-thumbnail.jpg",
    "/img/about/1.jpg",
    "/img/about/2.jpg",
    "/img/about/3.jpg"
  ];

  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#1C2C1F' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-[#F5E6D3]" />
            <h2 className="text-[#F5E6D3]">Follow Our Journey</h2>
          </div>
          <p className="text-[#F5E6D3] opacity-80">@xylo_flooring</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <ImageWithFallback
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
