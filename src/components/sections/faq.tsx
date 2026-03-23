import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "Como recebo?",
      a: "Assim que o pagamento for confirmado, você recebe um link de acesso no seu e-mail para baixar todos os arquivos imediatamente."
    },
    {
      q: "Precisa de experiência?",
      a: "Não, os desenhos são simples e fáceis de entender. Se você já trabalha com serralheria, vai tirar de letra."
    },
    {
      q: "Funciona no celular?",
      a: "Sim, você pode abrir todos os projetos e arquivos direto no seu celular na hora do serviço."
    },
    {
      q: "É pagamento único?",
      a: "Sim. Você paga uma única vez e o acesso é seu para sempre. Sem mensalidades."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white dark:bg-zinc-950">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold font-headline uppercase text-center mb-10">
          Dúvidas comuns
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm md:text-base font-bold uppercase tracking-tight">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg text-zinc-600 dark:text-zinc-400">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
