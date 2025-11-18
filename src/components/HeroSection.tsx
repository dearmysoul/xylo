import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758448511348-54b10c30239f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kJTIwZmxvb3JpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM0NTAwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury wood flooring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-[#F5E6D3] mb-8" style={{ fontFamily: 'serif', fontSize: '8rem', letterSpacing: '0.1em' }}>
          BUNKR
        </h1>
        <p className="text-[#F5E6D3] max-w-2xl mx-auto opacity-90">
          Crafting timeless elegance through premium wood flooring solutions. 
          Transform your space with the warmth and beauty of natural wood.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#F5E6D3]" />
      </div>
    </section>
  );
}