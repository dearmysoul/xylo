import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function WorkingProcess() {
  const steps = [
    {
      id: "step-1",
      question: "Initial Consultation",
      answer: "We begin with a comprehensive consultation to understand your vision, assess your space, and discuss wood options, patterns, and finishes that align with your style and budget."
    },
    {
      id: "step-2",
      question: "Design & Planning",
      answer: "Our design team creates detailed plans and provides samples. We'll guide you through material selection and help you visualize the final result through mockups and references."
    },
    {
      id: "step-3",
      question: "Site Preparation",
      answer: "We meticulously prepare your space, ensuring proper subfloor conditions, humidity levels, and environmental factors are optimal for installation."
    },
    {
      id: "step-4",
      question: "Professional Installation",
      answer: "Our certified craftsmen install your flooring with precision and care, using industry-best practices to ensure a flawless finish that will last for decades."
    },
    {
      id: "step-5",
      question: "Finishing Touches",
      answer: "We complete the project with finishing, sealing, and a thorough quality inspection. You'll receive maintenance guidelines to keep your floors beautiful for years."
    }
  ];

  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#5C1626' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#F5E6D3] text-center mb-16">What Does Working With Us Look Like?</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {steps.map((step) => (
            <AccordionItem 
              key={step.id} 
              value={step.id}
              className="border-b-2 border-[#C9A86A]/30"
            >
              <AccordionTrigger className="text-[#F5E6D3] hover:text-[#C9A86A] transition-colors py-6">
                {step.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#F5E6D3] opacity-80 pb-6">
                {step.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
