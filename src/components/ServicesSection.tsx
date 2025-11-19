import { Hammer, MessageCircle, Shield, Package } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: MessageCircle,
      title: "전문 컨설팅",
      subtitle: "공간에 맞는 최적의 솔루션",
      description: "현장 방문 상담 · 공간 특성 분석 (습도, 온도, 용도) · 예산에 맞는 자재 추천 · 투명한 견적서 제공"
    },
    {
      id: 2,
      icon: Hammer,
      title: "프리미엄 시공",
      subtitle: "숙련된 기술로 완벽하게",
      description: "자체 시공팀 직접 시공 · 하자 없는 정밀 시공 · 친환경 자재 사용 · 철저한 먼지/소음 관리"
    },
    {
      id: 3,
      icon: Shield,
      title: "사후관리 (A/S)",
      subtitle: "시공 후에도 책임집니다",
      description: "10년 품질 보증 · 빠른 A/S 접수 대응 · 무상 보수 (보증 기간 내) · 평생 유지보수 상담"
    },
    {
      id: 4,
      icon: Package,
      title: "자재 공급",
      subtitle: "검증된 프리미엄 자재만",
      description: "수입 원목 마루 · 강마루 (국내외 인증) · 친환경 접착제/마감재 · 다양한 디자인 샘플"
    }
  ];

  return (
    <section id="services" className="py-24 px-4" style={{ backgroundColor: '#4A0E1A' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#F5E6D3] text-center mb-16 text-4xl" style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}>
          서비스
        </h2>

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
                <h3 className="text-[#F5E6D3] mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-[#C9A86A] mb-4 text-sm">{service.subtitle}</p>
                <p className="text-[#F5E6D3] opacity-80 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
