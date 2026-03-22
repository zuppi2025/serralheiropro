
import { CheckCircle2 } from "lucide-react";

export function Benefits() {
  const benefits = [
    "Pra quem perde tempo pensando em projeto",
    "Pra quem quer mais ideias pra oferecer pro cliente",
    "Pra quem quer agilizar o serviço",
    "Pra quem quer aumentar o faturamento"
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline uppercase mb-8">
              Pra quem isso é útil?
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-900 p-8 border-l-4 border-primary">
            <h3 className="text-xl font-bold uppercase mb-4">O que você recebe</h3>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li>• Projetos variados de serralheria</li>
              <li>• Modelos prontos para uso</li>
              <li>• Ideias para diferentes tipos de cliente</li>
              <li>• Arquivos organizados</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
