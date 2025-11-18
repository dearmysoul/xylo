import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="partner" className="py-16 px-4" style={{ backgroundColor: '#4A0E1A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-[#F5E6D3] mb-4" style={{ fontFamily: 'serif', letterSpacing: '0.1em' }}>
              XYLO
            </h3>
            <p className="text-[#F5E6D3] opacity-80">
              Premium wood flooring crafted with passion and precision since 1998.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F5E6D3] mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9A86A]" />
                <span className="text-[#F5E6D3] opacity-80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A86A]" />
                <span className="text-[#F5E6D3] opacity-80">info@xyloflooring.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#C9A86A]" />
                <span className="text-[#F5E6D3] opacity-80">123 Wood Street, Portland, OR</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#F5E6D3] mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: '#C9A86A' }}
              >
                <Instagram className="w-5 h-5" style={{ color: '#4A0E1A' }} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: '#C9A86A' }}
              >
                <Facebook className="w-5 h-5" style={{ color: '#4A0E1A' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-2 border-[#C9A86A]/30 text-center">
          <p className="text-[#F5E6D3] opacity-60">
            © 2025 XYLO Flooring. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}