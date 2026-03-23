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
    <section className="py-12 md:py-24 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase leading-[0.9] italic tracking-tighter text-zinc-900 dark:text-white max-w-4xl mx-auto">
            A MAIORIA DOS SERRALHEIROS <span className="text-primary">PERDE DINHEIRO</span> POR NÃO TER ISSO
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Coluna de Dores */}
          <div className="space-y-8">
            <ul className="space-y-6 md:space-y-8">
              {pains.map((pain, i) => (
                <li key={i} className="flex items-start gap-4 text-base md:text-xl font-medium text-zinc-500 dark:text-zinc-400">
                  <XCircle className="h-6 w-6 md:h-7 md:w-7 text-destructive shrink-0 mt-0.5" />
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna de Soluções */}
          <div className="bg-zinc-50 dark:bg-zinc-900/40 p-8 md:p-14 border-l-8 border-primary rounded-r-[2rem] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors" />
            
            <h3 className="text-sm md:text-lg font-black uppercase mb-8 md:mb-12 tracking-[0.2em] text-primary">
              O QUE MUDA COM ISSO
            </h3>
            <ul className="space-y-6 md:space-y-8 relative z-10">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-4 text-base md:text-2xl font-black text-zinc-800 dark:text-zinc-100 tracking-tight">
                  <CheckCircle2 className="h-6 w-6 md:h-8 md:w-8 text-green-500 shrink-0 mt-0.5" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block p-6 md:p-10 bg-zinc-950 dark:bg-zinc-900 rounded-2xl border-2 border-zinc-800 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <p className="text-xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-white leading-none">
              🚀 QUEM TEM ISSO NA MÃO, TRABALHA MAIS RÁPIDO E <span className="text-primary underline decoration-primary/30">FATURA MAIS</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
