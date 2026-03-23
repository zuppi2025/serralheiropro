import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Sparkles, Star } from "lucide-react";

export function Pricing() {
  return (
    <section id="planos" className="py-10 md:py-16 bg-zinc-100 dark:bg-zinc-950 w-full overflow-hidden px-4">
      <div className="container px-0 mx-auto max-w-5xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-black uppercase mb-3 px-2 tracking-tighter italic">
            Escolha seu acesso
          </h2>
          <p className="text-sm md:text-lg text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto font-bold uppercase tracking-tight px-4">
            Pagamento único. Acesso vitalício para sempre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch max-w-4xl mx-auto w-full pt-8">
          {/* Plano Essencial */}
          <div className="bg-white dark:bg-zinc-900 p-6 md:p-10 border border-zinc-200 dark:border-zinc-800 flex flex-col rounded-2xl shadow-sm w-full transition-all hover:border-zinc-300 dark:hover:border-zinc-700">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-zinc-900 dark:text-zinc-100 mb-2">Plano Essencial</h3>
              <p className="text-xs md:text-sm font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">O básico para começar</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium text-zinc-700 dark:text-zinc-300"><b>300 projetos</b> de serralheria</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium text-zinc-700 dark:text-zinc-300">Planilha automática de precificação</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium text-zinc-700 dark:text-zinc-300">Lista de fornecedores</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium text-zinc-700 dark:text-zinc-300">Guia de cobrança estratégica</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-bold italic text-zinc-800 dark:text-zinc-200">Acesso vitalício</span>
              </li>
            </ul>

            <div className="mb-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-1">Pagamento único de:</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black">R$</span>
                <span className="text-5xl md:text-7xl font-black tracking-tighter">17,00</span>
              </div>
            </div>

            <Button variant="outline" className="w-full h-14 md:h-16 text-base md:text-xl font-black uppercase border-2 border-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all rounded-xl">
              ACESSAR AGORA
            </Button>
          </div>

          {/* Plano Completo */}
          <div className="relative bg-zinc-950 dark:bg-zinc-900 p-6 md:p-10 border-4 border-primary flex flex-col text-white shadow-[0_30px_60px_rgba(249,115,22,0.3)] z-10 rounded-2xl w-full md:scale-[1.05]">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2.5 text-xs md:text-sm font-black uppercase tracking-widest rounded-full shadow-[0_10px_20px_rgba(249,115,22,0.4)] z-20 whitespace-nowrap border-2 border-orange-400 flex items-center gap-2">
              🔥 MAIS ESCOLHIDO
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-primary mb-1 flex items-center gap-2">
                PLANO COMPLETO <Star className="h-6 w-6 fill-primary" />
              </h3>
              <p className="text-xs font-bold text-primary/70 uppercase tracking-widest">Acesso total e imediato</p>
            </div>

            <ul className="grid grid-cols-1 gap-2.5 mb-8 flex-grow">
              <li className="flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mt-0.5 fill-primary/20" />
                <span className="text-sm md:text-base font-black text-white">+ de 1000 projetos</span>
              </li>
              {[
                "Planilha automática de precificação",
                "Lista de fornecedores",
                "Guia de cobrança estratégica",
                "Projetos cidades pequenas",
                "300 Projetos de portões",
                "100 Projetos de carretinhas",
                "100 Projetos de reboques",
                "100 Projetos automotivos",
                "600 Projetos de móveis",
                "500 Estruturas rápidas",
                "50 Churrasqueiras",
                "100 Projetos academia",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm font-medium opacity-90">{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-sm font-bold uppercase italic text-green-400">Certificado + Vitalício</span>
              </li>
            </ul>

            <div className="mb-8 pt-6 border-t border-white/10">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-1">Pagamento único de:</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl md:text-3xl font-black text-primary">R$</span>
                <span className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">27,00</span>
              </div>
            </div>

            <Button className="w-full h-16 md:h-20 text-lg md:text-2xl font-black uppercase bg-primary hover:bg-orange-500 text-primary-foreground shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all rounded-xl border-b-8 border-orange-700 active:border-b-0 active:translate-y-2">
              PEGAR ACESSO COMPLETO
            </Button>
          </div>
        </div>

        <div className="mt-12 md:mt-20 max-w-xl mx-auto bg-zinc-200 dark:bg-zinc-900/80 p-6 md:p-8 rounded-2xl flex items-center gap-6 border border-zinc-300 dark:border-zinc-800 shadow-sm w-full">
          <ShieldCheck className="h-12 w-12 md:h-16 md:w-16 text-zinc-600 dark:text-zinc-400 shrink-0" />
          <div>
            <p className="font-black text-lg md:text-2xl uppercase tracking-tighter leading-none mb-2">Garantia Total de 7 Dias</p>
            <p className="text-xs md:text-base text-zinc-600 dark:text-zinc-400 font-medium leading-tight">
              Acesse tudo agora. Se não gostar, devolvemos seu dinheiro na hora. Sem burocracia e sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
