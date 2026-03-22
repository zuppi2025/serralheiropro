
import { MessageSquareQuote } from "lucide-react";

export function Testimonials() {
  const quotes = [
    "Me ajudou a ter mais ideias pro serviço",
    "Facilitou muito no dia a dia",
    "Já usei alguns modelos e deu certo"
  ];

  return (
    <section className="py-20 bg-zinc-950 text-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold font-headline uppercase text-center mb-12">
          Quem já usa recomenda
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {quotes.map((quote, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <MessageSquareQuote className="h-10 w-10 text-primary mb-6 opacity-50" />
              <p className="text-xl italic font-medium leading-relaxed">
                "{quote}"
              </p>
              <div className="mt-6 w-12 h-1 bg-primary/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
