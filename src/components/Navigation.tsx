import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(74, 14, 26, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-[#F5E6D3] transition-opacity hover:opacity-80"
          style={{ fontFamily: 'serif', fontSize: '2rem', letterSpacing: '0.1em' }}
        >
          XYLO
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-[#F5E6D3] transition-colors hover:text-[#C9A86A]"
          >
            회사소개
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-[#F5E6D3] transition-colors hover:text-[#C9A86A]"
          >
            서비스
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-[#F5E6D3] transition-colors hover:text-[#C9A86A]"
          >
            시공사례
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-[#F5E6D3] transition-colors hover:text-[#C9A86A]"
          >
            고객후기
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#C9A86A',
              color: '#4A0E1A'
            }}
          >
            문의하기
          </button>
        </div>
      </div>
    </nav>
  );
}
