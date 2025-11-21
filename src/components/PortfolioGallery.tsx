import { ImageWithFallback } from "./ImageWithFallback";

export function PortfolioGallery() {
  const projects = [
    {
      id: 1,
      image: "/img/portfolio/paulbasset.png",
      title: "강남 아파트 리모델링",
      location: "서울 강남구",
      area: "35평",
      material: "유럽산 오크 원목 마루",
      type: "주거 공간"
    },
    {
      id: 2,
      image: "/img/portfolio/jaju.png",
      title: "홍대 카페 시공",
      location: "서울 마포구",
      area: "25평",
      material: "강화 마루 (내구성 강화)",
      type: "상업 공간"
    },
    {
      id: 3,
      image: "/img/about/1.jpg",
      title: "판교 단독주택",
      location: "경기 성남시",
      area: "50평",
      material: "월넛 파케트 마루",
      type: "주거 공간"
    }
  ];

  return (
    <section id="portfolio" className="py-24" style={{ backgroundColor: '#5C1626' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[#F5E6D3] text-center mb-6 text-4xl" style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}>
          시공 사례
        </h2>
        <p className="text-[#F5E6D3] text-center mb-16 opacity-80">
          XYLO의 시공 사례를 확인해보세요
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs mb-3" style={{ backgroundColor: '#C9A86A', color: '#4A0E1A' }}>
                    {project.type}
                  </div>
                  <h3 className="text-[#F5E6D3] mb-2 font-bold text-xl">{project.title}</h3>
                  <div className="text-[#F5E6D3] opacity-80 text-sm space-y-1">
                    <p>📍 {project.location}</p>
                    <p>📐 {project.area}</p>
                    <p>🌳 {project.material}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}