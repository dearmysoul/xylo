import { ImageWithFallback } from "./ImageWithFallback";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/img/main_02.png"
          alt="Luxury wood flooring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-[#F5E6D3] mb-6" style={{ fontFamily: 'serif', fontSize: '4rem', letterSpacing: '0.1em', lineHeight: '1.2' }}>
          신뢰할 수 있는 우드플로링 파트너
        </h1>
        <p className="text-[#F5E6D3] text-3xl mb-8 font-bold">
          XYLO와 함께 공간의 가치를 높이세요
        </p>
        <p className="text-[#F5E6D3] max-w-2xl mx-auto opacity-90 text-xl">
          15년 경력의 전문 컨설턴트가<br />
          상담부터 시공, 사후관리까지 책임집니다
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#F5E6D3]" />
      </div>
    </section>
  );
}