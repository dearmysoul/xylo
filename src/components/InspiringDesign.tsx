export function InspiringDesign() {
  return (
    <section className="py-32 px-4 relative overflow-hidden" style={{ backgroundColor: '#1C2C1F' }}>
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#C9A86A] rotate-45" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-[#C9A86A] rotate-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#C9A86A] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-[#F5E6D3] mb-8">Inspiring Design</h2>
        <p className="text-[#F5E6D3] opacity-90 max-w-2xl mx-auto leading-relaxed">
          Every floor we create tells a story. From the grain of the wood to the 
          pattern of installation, we believe in designing spaces that inspire daily life. 
          Our approach combines traditional craftsmanship with contemporary vision, 
          creating floors that stand the test of time.
        </p>
      </div>
    </section>
  );
}
