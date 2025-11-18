export function WhyWorkWithUs() {
  const reasons = [
    {
      title: "투명한 프로세스",
      items: [
        "숨은 비용 없음",
        "단계별 진행 상황 공유",
        "계약서 명확히 작성"
      ]
    },
    {
      title: "검증된 전문성",
      items: [
        "15년 경력 전문가",
        "5,000건 이상 시공 실적",
        "고객 만족도 99%"
      ]
    },
    {
      title: "품질 보증",
      items: [
        "10년 무상 보증",
        "빠른 A/S 대응",
        "평생 유지보수 상담"
      ]
    },
    {
      title: "합리적인 가격",
      items: [
        "자체 시공팀으로 비용 절감",
        "투명한 견적",
        "가성비 최고의 자재"
      ]
    },
    {
      title: "맞춤형 솔루션",
      items: [
        "공간별 특성 분석",
        "라이프스타일 고려",
        "예산 맞춤 제안"
      ]
    }
  ];

  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#FFDDD0' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-16 text-4xl" style={{ color: '#4A0E1A', fontFamily: 'serif', letterSpacing: '0.05em' }}>
          왜 XYLO를 선택해야 할까요?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-2"
              style={{
                backgroundColor: 'white',
                borderColor: '#C9A86A'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: '#C9A86A' }}
                >
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#4A0E1A' }}>{reason.title}</h3>
              </div>
              <ul className="space-y-2">
                {reason.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <span style={{ color: '#C9A86A' }}>•</span>
                    <span style={{ color: '#4A0E1A' }} className="opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#4A0E1A',
              color: '#F5E6D3'
            }}
          >
            무료 상담 신청하기
          </button>
        </div>
      </div>
    </section>
  );
}
