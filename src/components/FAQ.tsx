import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      id: "faq-1",
      question: "시공 기간은 얼마나 걸리나요?",
      answer: "일반 아파트(30평 기준) 약 2-3일 소요됩니다. 현장 상황에 따라 달라질 수 있습니다."
    },
    {
      id: "faq-2",
      question: "시공 중 집에 있어야 하나요?",
      answer: "첫날과 마지막 날만 계시면 됩니다. 중간 과정은 전문가가 진행합니다."
    },
    {
      id: "faq-3",
      question: "견적은 어떻게 받나요?",
      answer: "방문 상담 신청 후, 현장 확인 후 정확한 견적서를 드립니다."
    },
    {
      id: "faq-4",
      question: "A/S는 어떻게 진행되나요?",
      answer: "전화 또는 카카오톡으로 접수하시면 24시간 내 방문 일정을 잡아드립니다."
    },
    {
      id: "faq-5",
      question: "보증 기간은 얼마나 되나요?",
      answer: "1년 품질 보증을 제공합니다. 보증 기간 내 하자는 무상으로 수리합니다."
    },
    {
      id: "faq-6",
      question: "가격은 얼마 정도 하나요?",
      answer: "자재 종류와 면적에 따라 다릅니다. 평당 15만원~40만원 (자재+시공). 정확한 견적은 상담 후 안내드립니다."
    }
  ];

  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#4A0E1A' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#F5E6D3] text-center mb-16 text-4xl" style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}>
          자주 묻는 질문
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-2 rounded-lg px-6"
              style={{ borderColor: '#C9A86A', backgroundColor: '#5C1626' }}
            >
              <AccordionTrigger className="text-[#F5E6D3] hover:text-[#C9A86A] transition-colors py-6 text-left">
                <span className="font-bold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-[#F5E6D3] opacity-80 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
