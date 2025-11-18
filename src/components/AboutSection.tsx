export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4" style={{ backgroundColor: '#4A0E1A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A86A' }}>
              <span className="text-2xl">✦</span>
            </div>
            <h3 className="text-[#F5E6D3] mb-4">Premium Quality</h3>
            <p className="text-[#F5E6D3] opacity-80">
              We source only the finest hardwoods from sustainable forests, ensuring lasting beauty and durability.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A86A' }}>
              <span className="text-2xl">◆</span>
            </div>
            <h3 className="text-[#F5E6D3] mb-4">Expert Craftsmanship</h3>
            <p className="text-[#F5E6D3] opacity-80">
              Our master craftsmen bring decades of experience to every installation, guaranteeing perfection.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A86A' }}>
              <span className="text-2xl">✧</span>
            </div>
            <h3 className="text-[#F5E6D3] mb-4">Timeless Design</h3>
            <p className="text-[#F5E6D3] opacity-80">
              From classic to contemporary, we create floors that complement your unique aesthetic vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}