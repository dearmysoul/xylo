import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram } from "lucide-react";

export function SocialFeed() {
  const images = [
    "https://images.unsplash.com/photo-1758448511348-54b10c30239f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    "https://images.unsplash.com/photo-1690310588514-511dfaf88e3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    "https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    "https://images.unsplash.com/photo-1690310588789-8fcee016f619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    "https://images.unsplash.com/photo-1642942552674-8302b1123460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    "https://images.unsplash.com/photo-1693722232517-9c19a620258c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
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
