import { CheckCircle } from "lucide-react";

export function WhyWorkWithUs() {
  const benefits = [
    "Over 25 years of experience in premium wood flooring",
    "Eco-friendly materials sourced from sustainable forests",
    "Lifetime warranty on all installations",
    "Transparent pricing with no hidden costs",
    "Dedicated project manager for seamless communication",
    "Post-installation support and maintenance guidance",
    "Fully licensed, bonded, and insured professionals",
    "Commitment to completing projects on time and on budget"
  ];

  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#FFDDD0' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ color: '#4A0E1A' }}>Why Work With Us?</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#C9A86A' }} />
              <p style={{ color: '#4A0E1A' }}>{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            className="px-12 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#4A0E1A',
              color: '#F5E6D3'
            }}
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
