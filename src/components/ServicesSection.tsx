import { Hammer, Palette, Shield, Sparkles } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: Palette,
      title: "Design Consultation",
      description: "Personalized guidance to select the perfect wood species, finish, and pattern for your space."
    },
    {
      id: 2,
      icon: Hammer,
      title: "Expert Installation",
      description: "Professional installation by certified craftsmen using industry-leading techniques."
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Refinishing",
      description: "Restore the beauty of existing floors with our expert refinishing services."
    },
    {
      id: 4,
      icon: Shield,
      title: "Maintenance",
      description: "Ongoing care plans to keep your floors looking pristine for years to come."
    }
  ];

  return (
    <section id="services" className="py-24 px-4" style={{ backgroundColor: '#4A0E1A' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#F5E6D3] text-center mb-16">Our Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-8 rounded-lg border-2 transition-all duration-300 hover:translate-y-[-4px]"
                style={{ 
                  backgroundColor: '#5C1626',
                  borderColor: '#C9A86A'
                }}
              >
                <div className="w-12 h-12 mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A86A' }}>
                  <Icon className="w-6 h-6" style={{ color: '#4A0E1A' }} />
                </div>
                <h3 className="text-[#F5E6D3] mb-4">{service.title}</h3>
                <p className="text-[#F5E6D3] opacity-80">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}