
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck } from "lucide-react";

export function Pricing() {
  return (
    <section id="planos" className="py-24 bg-zinc-100 dark:bg-zinc-950">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black font-headline uppercase mb-4">
            Escolha seu acesso
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            Pagamento único e acesso imediato. Sem mensalidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 flex flex-col">
            <h3 className="text-2xl font-bold uppercase mb-2">Plano Básico</h3>
            <div className="mb-6">
              <span className="text-4xl font-black">R$ 10,00</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-zinc-400" />
                <span>Acesso a parte dos projetos</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-zinc-400" />
                <span>Formatos padrão</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full h-12 font-bold uppercase border-2">
              ACESSAR AGORA
            </Button>
          </div>

          {/* Complete Plan */}
          <div className="relative bg-zinc-950 dark:bg-zinc-900 p-8 border-2 border-primary ring-4 ring-primary/10 flex flex-col text-white shadow-2xl scale-105 md:scale-110">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-black uppercase tracking-tighter -translate-y-1/2 translate-x-4">
              Mais Escolhido
            </div>
            <h3 className="text-2xl font-bold uppercase mb-2 text-primary">Plano Completo</h3>
            <div className="mb-6">
              <span className="text-5xl font-black">R$ 27,00</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="font-bold">Todos os projetos liberados</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Conteúdo completo de dicas</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Atualizações futuras inclusas</span>
              </li>
            </ul>
            <Button className="w-full h-14 font-black uppercase text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              PEGAR ACESSO COMPLETO
            </Button>
          </div>
        </div>

        <div className="mt-20 max-w-lg mx-auto bg-zinc-200 dark:bg-zinc-900/80 p-6 rounded-sm flex items-center gap-4 border border-zinc-300 dark:border-zinc-800">
          <ShieldCheck className="h-12 w-12 text-zinc-600 dark:text-zinc-400 shrink-0" />
          <div>
            <p className="font-bold text-lg uppercase leading-none mb-1">Garantia Total</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              7 dias de garantia. Se não gostar, devolvemos seu dinheiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
