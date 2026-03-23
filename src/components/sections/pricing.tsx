import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Sparkles, Star } from "lucide-react";

export function Pricing() {
  return (
    <section id="planos" className="py-10 md:py-16 bg-zinc-100 dark:bg-zinc-950 w-full overflow-hidden px-4">
      <div className="container px-0 mx-auto max-w-5xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-black font-headline uppercase mb-3 px-2 tracking-tighter italic">
            Escolha seu acesso
          </h2>
          <p className="text-sm md:text-lg text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto font-bold uppercase tracking-tight px-4">
            Pagamento único. Acesso vitalício para sempre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch max-w-4xl mx-auto w-full">
          {/* Plano Básico */}
          <div className="bg-white dark:bg-zinc-900 p-6 md:p-10 border border-zinc-200 dark:border-zinc-800 flex flex-col rounded-xl shadow-sm w-full transition-all hover:border-zinc-300 dark:hover:border-zinc-700">
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-zinc-500 mb-4">Plano Básico</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-xl md:text-2xl font-black">R$</span>
                <span className="text-5xl md:text-7xl font-black tracking-tighter">17,00</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg font-medium text-zinc-700 dark:text-zinc-300"><b>300 projetos</b> de serralheria</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg font-medium text-zinc-700 dark:text-zinc-300">Planilha automática de precificação</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg font-medium text-zinc-700 dark:text-zinc-300">Lista de fornecedores</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg font-medium text-zinc-700 dark:text-zinc-300">Guia: quanto cobrar sem perder serviço</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg font-bold italic text-zinc-800 dark:text-zinc-200">Acesso vitalício</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full h-14 md:h-16 text-base md:text-xl font-black uppercase border-2 border-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all rounded-none">
              ACESSAR AGORA
            </Button>
          </div>

          {/* Plano Completo */}
          <div className="relative bg-zinc-950 dark:bg-zinc-900 p-6 md:p-10 border-4 border-primary flex flex-col text-white shadow-[0_30px_60px_rgba(249,115,22,0.3)] z-10 rounded-xl w-full md:scale-[1.05]">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 md:px-6 py-1.5 md:py-2 text-[10px] md:text-xs font-black uppercase tracking-widest -translate-y-1/2 translate-x-0 md:translate-x-4 shadow-xl z-20">
              OFERTA LIMITADA
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                PLANO COMPLETO <Star className="h-5 w-5 md:h-6 md:w-6 fill-primary" />
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-xl md:text-2xl font-black text-primary">R$</span>
                <span className="text-6xl md:text-8xl font-black tracking-tighter">27,00</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5 fill-primary/20" />
                <span className="text-sm md:text-lg font-black text-white"><b>+1000 projetos</b> completos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg font-medium">Portões, móveis e estruturas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg font-bold text-orange-200">Projetos de carretinhas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg font-medium">Modelos mais pedidos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg font-bold text-green-400">Planilha de precificação</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg font-bold italic">Acesso vitalício</span>
              </li>
            </ul>

            <Button className="w-full h-16 md:h-20 text-lg md:text-2xl font-black uppercase bg-primary hover:bg-orange-500 text-primary-foreground shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all rounded-none border-b-8 border-orange-700 active:border-b-0 active:translate-y-2">
              PEGAR ACESSO COMPLETO
            </Button>
          </div>
        </div>

        <div className="mt-12 md:mt-20 max-w-xl mx-auto bg-zinc-200 dark:bg-zinc-900/80 p-6 md:p-8 rounded-xl flex items-center gap-6 border border-zinc-300 dark:border-zinc-800 shadow-sm w-full">
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
