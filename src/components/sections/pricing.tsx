import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Wrench, Package, Layout, Clock, Sparkles } from "lucide-react";

export function Pricing() {
  return (
    <section id="planos" className="py-24 bg-zinc-100 dark:bg-zinc-950">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black font-headline uppercase mb-4">
            Escolha seu acesso
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto font-medium">
            Pagamento único. Você paga uma vez e o acesso é seu para sempre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Plano Essencial */}
          <div className="bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 flex flex-col rounded-sm shadow-sm">
            <div className="mb-6">
              <h3 className="text-2xl font-black uppercase leading-none mb-2">Plano Essencial</h3>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-tighter">O básico para começar a usar no dia a dia</p>
            </div>
            
            <div className="mb-8">
              <span className="text-zinc-400 line-through text-lg font-bold block leading-none">De R$ 97,00</span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold">R$</span>
                <span className="text-5xl font-black">17,00</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-zinc-700 dark:text-zinc-300"><b>+300 projetos</b> de serralheria prontos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-zinc-700 dark:text-zinc-300">Modelos de portões, grades e estruturas simples</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-zinc-700 dark:text-zinc-300">Projetos diretos para execução</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-zinc-700 dark:text-zinc-300">Arquivos organizados e fáceis de acessar</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-zinc-700 dark:text-zinc-300 font-bold italic">Acesso imediato e vitalício</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full h-14 text-lg font-black uppercase border-2 border-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all rounded-none">
              ACESSAR AGORA
            </Button>
          </div>

          {/* Plano Completo */}
          <div className="relative bg-zinc-950 dark:bg-zinc-900 p-8 border-4 border-primary flex flex-col text-white shadow-[0_20px_50px_rgba(249,115,22,0.2)] scale-100 md:scale-105 z-10 rounded-sm">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 text-sm font-black uppercase tracking-tighter -translate-y-1/2 translate-x-0 md:translate-x-4 shadow-lg">
              Mais Escolhido
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-black uppercase leading-none mb-2 text-primary flex items-center gap-2">
                Plano Completo <Sparkles className="h-6 w-6 fill-primary" />
              </h3>
              <p className="text-zinc-400 text-sm font-bold uppercase tracking-tighter">Mais projetos + mais opções para ganhar dinheiro</p>
            </div>

            <div className="mb-8">
              <span className="text-zinc-500 line-through text-lg font-bold block leading-none">De R$ 147,00</span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-primary">R$</span>
                <span className="text-6xl font-black">27,00</span>
              </div>
              <p className="text-primary text-xs font-black uppercase mt-1 tracking-widest">Oferta por tempo limitado</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Wrench className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-bold text-white leading-tight"><b>+650 projetos</b> completos de serralheria</span>
              </li>
              <li className="flex items-start gap-3">
                <Layout className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Portões, grades e estruturas modernas</span>
              </li>
              <li className="flex items-start gap-3">
                <Package className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-bold text-orange-200">+20 projetos de carretinhas de reboque</span>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Móveis industriais (mesas, bancadas, estantes)</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>+100 ideias de projetos simples e rápidos</span>
              </li>
              
              <div className="pt-4 border-t border-zinc-800 mt-4">
                <p className="text-xs font-black uppercase text-zinc-500 mb-3 tracking-widest">Bônus Inclusos:</p>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">Dicas simples de preço para não ter prejuízo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">Os serviços que mais saem hoje</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">Como mostrar os modelos para o cliente fechar</span>
                </li>
              </div>

              <li className="mt-6 p-3 bg-primary/10 border border-primary/20 rounded-sm text-center">
                <span className="text-sm font-black uppercase text-primary leading-tight">
                  "Inclui projetos que podem se pagar no primeiro serviço"
                </span>
              </li>
            </ul>

            <Button className="w-full h-16 text-xl font-black uppercase bg-primary hover:bg-orange-500 text-primary-foreground shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all rounded-none border-b-4 border-orange-700 active:border-b-0 active:translate-y-1">
              PEGAR ACESSO COMPLETO
            </Button>
          </div>
        </div>

        {/* Garantia */}
        <div className="mt-20 max-w-lg mx-auto bg-zinc-200 dark:bg-zinc-900/80 p-6 rounded-sm flex items-center gap-4 border border-zinc-300 dark:border-zinc-800 shadow-sm">
          <ShieldCheck className="h-12 w-12 text-zinc-600 dark:text-zinc-400 shrink-0" />
          <div>
            <p className="font-bold text-lg uppercase leading-none mb-1">Garantia Total de 7 Dias</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-tight">
              Acesse tudo agora. Se você não gostar ou achar que não é pra você, devolvemos seu dinheiro na hora. Sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
