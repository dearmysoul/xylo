export function WorkingProcess() {
  const steps = [
    {
      id: 1,
      icon: "📞",
      title: "상담 신청",
      description: "전화, 카카오톡, 홈페이지 문의"
    },
    {
      id: 2,
      icon: "🏠",
      title: "무료 방문 상담",
      description: "현장 방문 → 공간 측정 → 상담"
    },
    {
      id: 3,
      icon: "💰",
      title: "견적 제시",
      description: "투명한 견적서 제공 → 자재 샘플 확인"
    },
    {
      id: 4,
      icon: "📝",
      title: "계약 및 일정 조율",
      description: "계약서 작성 → 시공 일정 협의"
    },
    {
      id: 5,
      icon: "🔨",
      title: "시공 진행",
      description: "준비 → 철거 → 바닥 정리 → 시공 → 마감"
    },
    {
      id: 6,
      icon: "✅",
      title: "최종 점검",
      description: "고객 확인 → 청소 → 사용 방법 안내"
    },
    {
      id: 7,
      icon: "🛠️",
      title: "사후관리",
      description: "점검 → A/S 대응 → 상담"
    }
  ];

  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#5C1626' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#F5E6D3] text-center mb-16 text-4xl" style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}>
          신뢰할 수 있는 시공 과정
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              <div className="text-center">
                <div
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                  style={{ backgroundColor: '#C9A86A' }}
                >
                  {step.icon}
                </div>
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: '#4A0E1A', border: '2px solid #C9A86A' }}
                >
                  {step.id}
                </div>
                <h3 className="text-[#F5E6D3] mb-3 font-bold text-lg">
                  STEP {step.id}: {step.title}
                </h3>
                <p className="text-[#F5E6D3] opacity-80 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
