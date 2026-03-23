import { CheckCircle2, XCircle } from "lucide-react";

export function Benefits() {
  const pains = [
    "Fica quebrando cabeça pra criar projeto do zero",
    "Perde serviço por não ter ideia na hora",
    "Demora mais do que deveria pra produzir",
    "Acaba improvisando e perdendo tempo"
  ];

  const solutions = [
    "Você abre e já sabe o que fazer",
    "Tem opções prontas pra oferecer",
    "Produz mais rápido",
    "Consegue pegar mais serviço"
  ];

  return (
    <section className="py-10 md:py-16 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-black uppercase leading-tight italic tracking-tighter text-zinc-900 dark:text-white">
            A MAIORIA DOS SERRALHEIROS <span className="text-primary">PERDE DINHEIRO</span> POR NÃO TER ISSO
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Coluna de Dores */}
          <div className="space-y-6">
            <ul className="space-y-4">
              {pains.map((pain, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-lg font-medium text-zinc-500 dark:text-zinc-400">
                  <XCircle className="h-5 w-5 md:h-6 md:w-6 text-destructive shrink-0 mt-0.5" />
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna de Soluções */}
          <div className="bg-zinc-50 dark:bg-zinc-900/40 p-6 md:p-8 border-l-4 border-primary rounded-r-2xl shadow-sm">
            <h3 className="text-xs md:text-sm font-black uppercase mb-6 tracking-widest text-primary">
              O QUE MUDA COM ISSO
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-lg font-bold text-zinc-800 dark:text-zinc-200">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-green-500 shrink-0 mt-0.5" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-4 md:p-6 bg-zinc-950 dark:bg-zinc-900 rounded-xl border border-zinc-800 shadow-xl transform -rotate-1">
            <p className="text-base md:text-2xl font-black uppercase italic tracking-tighter text-white">
              🚀 Quem tem isso na mão, trabalha mais rápido e fatura mais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
