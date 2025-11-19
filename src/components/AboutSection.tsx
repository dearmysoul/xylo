export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4" style={{ backgroundColor: '#4A0E1A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#F5E6D3] text-4xl mb-6" style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}>
            신뢰를 쌓아온 15년, XYLO
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-[#F5E6D3] text-lg mb-6 opacity-90">
              XYLO는 2011년부터 우드플로링 전문 기업으로<br />
              고객의 공간에 가치를 더해왔습니다.
            </p>
            <p className="text-[#C9A86A] text-xl mb-8 font-bold">
              "한 번 맡기면 평생 책임진다"는 신념으로<br />
              상담부터 시공, 사후관리까지 투명하게 진행합니다.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A86A' }}>
              <span className="text-2xl">✦</span>
            </div>
            <h3 className="text-[#F5E6D3] mb-4 font-bold">15년 이상 경력</h3>
            <p className="text-[#F5E6D3] opacity-80">
              전문 컨설턴트의<br />풍부한 경험
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A86A' }}>
              <span className="text-2xl">◆</span>
            </div>
            <h3 className="text-[#F5E6D3] mb-4 font-bold">자체 시공팀</h3>
            <p className="text-[#F5E6D3] opacity-80">
              숙련된 기술자의<br />직접 시공
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A86A' }}>
              <span className="text-2xl">✧</span>
            </div>
            <h3 className="text-[#F5E6D3] mb-4 font-bold">품질 보증</h3>
            <p className="text-[#F5E6D3] opacity-80">
              확실한 보증으로<br />안심 시공
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C9A86A' }}>
              <span className="text-2xl">★</span>
            </div>
            <h3 className="text-[#F5E6D3] mb-4 font-bold">신속한 A/S</h3>
            <p className="text-[#F5E6D3] opacity-80">
              빠른 대응으로<br />평생 관리
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
