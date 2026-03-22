
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProfitSimulator() {
  const [project, setProject] = useState<string>("portao");
  const [cost, setCost] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [animatedProfit, setAnimatedProfit] = useState(0);

  const calculate = () => {
    const c = parseFloat(cost) || 0;
    const p = parseFloat(price) || 0;
    const profit = p - c;
    
    if (profit > 0) {
      setShowResult(true);
      // Simulação simples de som de confirmação (visual)
      // Efeito de contador
      let start = 0;
      const end = profit;
      const duration = 1000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setAnimatedProfit(end);
          clearInterval(timer);
        } else {
          setAnimatedProfit(Math.floor(start));
        }
      }, 16);
    }
  };

  const weeklyScale = animatedProfit * 2;
  const monthlyScale = animatedProfit * 8;

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black font-headline uppercase mb-4 leading-tight">
            Veja quanto você pode ganhar com um único serviço
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Simule um projeto simples e veja o lucro estimado que você pode ter.
          </p>
        </div>

        <Card className="border-2 border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden rounded-sm bg-white dark:bg-zinc-950">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-black uppercase tracking-widest text-zinc-500">
                    Escolha um tipo de projeto
                  </Label>
                  <Select value={project} onValueChange={setProject}>
                    <SelectTrigger className="h-12 border-2 rounded-none focus:ring-primary">
                      <SelectValue placeholder="Selecione um projeto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="portao">Portão simples</SelectItem>
                      <SelectItem value="grade">Grade residencial</SelectItem>
                      <SelectItem value="carretinha">Carretinha de reboque</SelectItem>
                      <SelectItem value="mesa">Mesa industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-black uppercase tracking-widest text-zinc-500">
                    Quanto você gastaria nesse projeto? (material + luz)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 font-bold">R$</span>
                    <Input 
                      type="number" 
                      placeholder="Ex: 300" 
                      className="pl-10 h-12 border-2 rounded-none focus:ring-primary"
                      value={cost}
                      onChange={(e) => setCost(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-black uppercase tracking-widest text-zinc-500">
                    Quanto você cobraria do cliente?
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 font-bold">R$</span>
                    <Input 
                      type="number" 
                      placeholder="Ex: 800" 
                      className="pl-10 h-12 border-2 rounded-none focus:ring-primary"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculate}
                  className="w-full h-14 text-lg font-black uppercase tracking-widest bg-zinc-950 hover:bg-zinc-900 text-white rounded-none border-b-4 border-zinc-800 transition-transform active:scale-95"
                >
                  <Calculator className="mr-2 h-5 w-5" /> CALCULAR LUCRO
                </Button>
              </div>

              <div className={cn(
                "flex flex-col h-full justify-center transition-all duration-500",
                showResult ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none md:block hidden"
              )}>
                <div className="bg-primary/5 dark:bg-primary/10 p-8 border-2 border-primary border-dashed rounded-sm text-center">
                  <div className="mb-4">
                    <span className="text-sm font-black uppercase tracking-widest text-primary leading-none">Lucro estimado</span>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <span className="text-2xl font-black text-primary">R$</span>
                      <span className="text-6xl font-black text-zinc-950 dark:text-white tabular-nums">
                        {animatedProfit.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex justify-between items-center bg-white dark:bg-zinc-900 p-3 rounded-none border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <span className="text-xs font-black uppercase text-zinc-500">2 serviços por semana</span>
                      <span className="font-black text-green-600 dark:text-green-500">R$ {weeklyScale.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white dark:bg-zinc-900 p-3 rounded-none border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <span className="text-xs font-black uppercase text-zinc-500">Resultado em 1 mês</span>
                      <span className="text-lg font-black text-green-600 dark:text-green-500">R$ {monthlyScale.toLocaleString('pt-BR')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {showResult && (
          <div className="mt-12 text-center animate-in fade-in slide-in-from-top-4 duration-700">
            <p className="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Isso é apenas um exemplo simples. Dentro do pack você encontra vários projetos prontos como esse para usar no seu dia a dia.
            </p>
            <p className="text-sm font-bold uppercase tracking-tight text-primary mb-8">
              "Alguns projetos podem se pagar já no primeiro serviço."
            </p>
            <Button 
              size="lg"
              className="h-16 px-12 text-xl font-black uppercase tracking-widest bg-primary hover:bg-orange-500 text-primary-foreground rounded-none border-b-4 border-orange-700 animate-bounce"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VER OS PROJETOS AGORA <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
