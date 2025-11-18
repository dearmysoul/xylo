import { Instagram, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-4" style={{ backgroundColor: '#4A0E1A' }}>
      <div className="max-w-7xl mx-auto">
        {/* Contact Form Section */}
        <div className="mb-16">
          <h2 className="text-[#F5E6D3] text-center mb-8 text-4xl" style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}>
            문의하기
          </h2>
          <div className="max-w-2xl mx-auto p-8 rounded-lg" style={{ backgroundColor: '#5C1626' }}>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="이름 *"
                  className="px-4 py-3 rounded-lg"
                  style={{ backgroundColor: '#4A0E1A', color: '#F5E6D3', border: '1px solid #C9A86A' }}
                  required
                />
                <input
                  type="tel"
                  placeholder="연락처 *"
                  className="px-4 py-3 rounded-lg"
                  style={{ backgroundColor: '#4A0E1A', color: '#F5E6D3', border: '1px solid #C9A86A' }}
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="지역 *"
                  className="px-4 py-3 rounded-lg"
                  style={{ backgroundColor: '#4A0E1A', color: '#F5E6D3', border: '1px solid #C9A86A' }}
                  required
                />
                <input
                  type="text"
                  placeholder="면적 (평)"
                  className="px-4 py-3 rounded-lg"
                  style={{ backgroundColor: '#4A0E1A', color: '#F5E6D3', border: '1px solid #C9A86A' }}
                />
              </div>
              <textarea
                placeholder="문의 내용"
                rows={4}
                className="w-full px-4 py-3 rounded-lg"
                style={{ backgroundColor: '#4A0E1A', color: '#F5E6D3', border: '1px solid #C9A86A' }}
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#C9A86A', color: '#4A0E1A' }}
              >
                무료 상담 신청하기
              </button>
            </form>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-[#F5E6D3] mb-4 text-2xl" style={{ fontFamily: 'serif', letterSpacing: '0.1em' }}>
              XYLO
            </h3>
            <p className="text-[#F5E6D3] opacity-80 mb-4">
              상담부터 사후관리까지,<br />신뢰로 함께합니다
            </p>
            <div className="space-y-2 text-[#F5E6D3] opacity-60 text-sm">
              <p>사업자등록번호: XXX-XX-XXXXX</p>
              <p>대표: ○○○</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F5E6D3] mb-4 font-bold">연락처</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9A86A]" />
                <span className="text-[#F5E6D3] opacity-80">02-XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#C9A86A]" />
                <span className="text-[#F5E6D3] opacity-80">@xylo_floor</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A86A]" />
                <span className="text-[#F5E6D3] opacity-80">info@xylo-flooring.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#C9A86A]" />
                <span className="text-[#F5E6D3] opacity-80">서울특별시 ○○구 ○○로 ○○</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C9A86A]" />
                <span className="text-[#F5E6D3] opacity-80">평일 09:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#F5E6D3] mb-4 font-bold">SNS</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: '#C9A86A' }}
              >
                <Instagram className="w-5 h-5" style={{ color: '#4A0E1A' }} />
              </a>
            </div>
            <p className="text-[#F5E6D3] opacity-80 text-sm">
              📷 Instagram: @xylo_flooring_official
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-2 border-[#C9A86A]/30 text-center">
          <p className="text-[#F5E6D3] opacity-60">
            © 2025 XYLO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}