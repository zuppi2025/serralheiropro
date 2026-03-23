import { CheckCircle2 } from "lucide-react";

export function Benefits() {
  const benefits = [
    "Perde tempo pensando em projeto",
    "Quer produzir mais sem improvisar",
    "Quer pegar mais serviço"
  ];

  const features = [
    "Projetos prontos pra fabricar",
    "Modelos que clientes pedem",
    "Arquivos organizados",
    "Ideias pra vender mais"
  ];

  return (
    <section className="py-10 md:py-16 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl md:text-3xl font-black uppercase leading-tight italic tracking-tighter">
            ⚠️ Se você trabalha com serralheria, isso aqui é pra você
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4">
            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-base font-bold text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8 border-l-4 border-primary rounded-r-xl shadow-sm">
            <h3 className="text-sm md:text-base font-black uppercase mb-4 tracking-widest text-zinc-500">
              O QUE VOCÊ VAI TER NA MÃO
            </h3>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-xs md:text-sm font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-tight">
                  <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-block p-4 bg-zinc-950 dark:bg-zinc-900 rounded-lg border border-zinc-800 shadow-lg">
            <p className="text-sm md:text-lg font-black uppercase italic tracking-tighter text-white">
              💰 Pra produzir mais e ganhar mais com o que você já faz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
