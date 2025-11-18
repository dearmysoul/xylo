import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PortfolioGallery() {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1690310588514-511dfaf88e3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kJTIwZmxvb3IlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MzQ1MDAwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Modern Living Space",
      description: "Oak hardwood with natural finish"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd29vZCUyMGZsb29yaW5nJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc2MzQ0MzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Expert Installation",
      description: "Precision craftsmanship"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1690310588789-8fcee016f619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29vZCUyMGZsb29yJTIwYmVkcm9vbXxlbnwxfHx8fDE3NjM0NTAwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Elegant Bedroom",
      description: "Walnut parquet flooring"
    }
  ];

  return (
    <section id="gallery" className="py-24" style={{ backgroundColor: '#5C1626' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[#F5E6D3] text-center mb-16">Our Work</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-[#F5E6D3] mb-2">{project.title}</h3>
                  <p className="text-[#F5E6D3] opacity-80">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}