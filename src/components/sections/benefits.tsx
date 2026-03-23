import { CheckCircle2 } from "lucide-react";

export function Benefits() {
  const benefits = [
    "Pra quem perde tempo pensando em projeto toda hora",
    "Pra quem quer parar de improvisar e produzir mais",
    "Pra quem quer mais opções pra oferecer pro cliente",
    "Pra quem quer pegar mais serviço sem complicação"
  ];

  const features = [
    "Projetos prontos pra fabricar",
    "Modelos que clientes realmente pedem",
    "Arquivos organizados pro dia a dia",
    "Ideias pra vender mais sem precisar inventar"
  ];

  return (
    <section className="py-10 md:py-16 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black font-headline uppercase leading-tight max-w-3xl mx-auto italic tracking-tighter">
            ⚠️ SE VOCÊ TRABALHA COM SERRALHERIA, ISSO AQUI É PRA VOCÊ
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6">
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-base md:text-lg font-medium text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-10 border-l-4 border-primary rounded-r-2xl shadow-sm">
            <h3 className="text-xl md:text-2xl font-black uppercase mb-6 tracking-tight">
              O QUE VOCÊ VAI TER NA MÃO
            </h3>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-base font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-4 md:p-6 bg-zinc-950 dark:bg-zinc-900 rounded-xl border border-zinc-800 shadow-xl">
            <p className="text-lg md:text-2xl font-black uppercase italic tracking-tighter text-white">
              💰 Isso aqui é pra quem quer trabalhar mais rápido e ganhar mais com o que já sabe fazer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
