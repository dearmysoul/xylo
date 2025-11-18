import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "김○○",
      location: "서울 강남구 ○○아파트",
      content: "20년 된 아파트 마루를 교체했는데, 처음부터 끝까지 꼼꼼하게 진행해주셔서 너무 만족스러웠어요. 시공 후 2년이 지났는데도 하자 하나 없이 깨끗합니다!",
      rating: 5
    },
    {
      id: 2,
      name: "이○○",
      location: "경기 성남시 ○○빌라",
      content: "여러 업체 상담받았는데 XYLO가 가장 투명하고 신뢰가 갔어요. 견적도 합리적이고, 시공 품질도 최고! A/S도 빠르게 대응해주셔서 추천합니다.",
      rating: 5
    },
    {
      id: 3,
      name: "박○○",
      location: "서울 홍대 ○○카페",
      content: "카페 리모델링으로 마루 시공했는데 완성도가 정말 높아요. 손님들도 인테리어 칭찬 많이 하세요.",
      rating: 5
    }
  ];

  const stats = [
    { label: "누적 시공 건수", value: "5,000+" },
    { label: "고객 만족도", value: "99%" },
    { label: "A/S 평균 대응", value: "12시간" },
    { label: "재시공률", value: "0.1%" }
  ];

  return (
    <section id="testimonials" className="py-24 px-4" style={{ backgroundColor: '#1C2C1F' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#F5E6D3] text-center mb-6 text-4xl" style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}>
          고객 후기
        </h2>
        <p className="text-[#F5E6D3] text-center mb-16 opacity-80 text-lg">
          고객님들의 신뢰가 곧 우리의 자부심입니다
        </p>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-lg"
              style={{ backgroundColor: '#2A3D2E' }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#C9A86A' }} />
                ))}
              </div>
              <p className="text-[#F5E6D3] mb-6 leading-relaxed opacity-90">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4" style={{ borderColor: '#C9A86A' }}>
                <p className="text-[#C9A86A] font-bold">{testimonial.name}</p>
                <p className="text-[#F5E6D3] opacity-60 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg" style={{ backgroundColor: '#2A3D2E' }}>
              <div className="text-[#C9A86A] text-3xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-[#F5E6D3] opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
