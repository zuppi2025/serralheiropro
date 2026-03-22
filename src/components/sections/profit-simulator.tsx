
"use client";

import { useState, useEffect, useRef } from "react";
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
import { Calculator, TrendingUp, DollarSign, ArrowRight, Zap, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProfitSimulator() {
  const [project, setProject] = useState<string>("portao");
  const [cost, setCost] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [animatedProfit, setAnimatedProfit] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const calculate = () => {
    const c = parseFloat(cost) || 0;
    const p = parseFloat(price) || 0;
    const profit = p - c;
    
    if (profit > 0) {
      setShowResult(true);
      
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

      // Scroll suave para o resultado em mobile
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  const weeklyScale = animatedProfit * 2;
  const monthlyScale = animatedProfit * 8;

  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0,transparent_70%)] pointer-events-none" />
      
      <div className="container px-4 mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-black font-headline uppercase mb-4 leading-tight tracking-tighter">
            💰 DESCUBRA QUANTO VOCÊ PODE GANHAR EM UM SERVIÇO
          </h2>
          <p className="text-zinc-400 text-xl md:text-2xl font-medium">
            Simule em segundos e veja quanto pode sobrar no seu bolso 👇
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <Card className="border-2 border-primary/30 bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden">
              <CardContent className="p-8 space-y-8">
                <div className="space-y-3">
                  <Label className="text-base font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <Wrench className="h-5 w-5" /> 🔧 Escolha o tipo de serviço
                  </Label>
                  <Select value={project} onValueChange={setProject}>
                    <SelectTrigger className="h-14 border-2 border-zinc-800 bg-zinc-950 rounded-lg focus:ring-primary text-lg font-bold">
                      <SelectValue placeholder="Selecione um projeto" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                      <SelectItem value="portao">Portão simples</SelectItem>
                      <SelectItem value="grade">Grade residencial</SelectItem>
                      <SelectItem value="carretinha">Carretinha de reboque</SelectItem>
                      <SelectItem value="mesa">Mesa industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <DollarSign className="h-5 w-5" /> 💸 Quanto você gastaria nesse serviço?
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-black text-xl">R$</span>
                    <Input 
                      type="number" 
                      placeholder="Ex: 300" 
                      className="pl-14 h-14 border-2 border-zinc-800 bg-zinc-950 rounded-lg focus:ring-primary text-xl font-black"
                      value={cost}
                      onChange={(e) => setCost(e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-zinc-500 font-bold uppercase">(Material + Luz + Consumíveis)</p>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <Zap className="h-5 w-5" /> 💰 Quanto você cobraria do cliente?
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-black text-xl">R$</span>
                    <Input 
                      type="number" 
                      placeholder="Ex: 800" 
                      className="pl-14 h-14 border-2 border-zinc-800 bg-zinc-950 rounded-lg focus:ring-primary text-xl font-black"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculate}
                  className="w-full h-20 text-2xl font-black uppercase tracking-tighter bg-primary hover:bg-orange-500 text-primary-foreground rounded-lg shadow-[0_10px_30px_rgba(249,115,22,0.3)] transition-all active:scale-95 group"
                >
                  💰 CALCULAR MEU LUCRO <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Result Side */}
          <div className="lg:col-span-5 flex flex-col justify-center" ref={resultRef}>
            <div className={cn(
              "transition-all duration-700 ease-out",
              showResult ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none lg:block hidden"
            )}>
              <div className="bg-gradient-to-b from-zinc-900 to-black p-10 border-2 border-primary rounded-xl text-center shadow-[0_20px_60px_rgba(249,115,22,0.15)] relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-8 py-2 rounded-full font-black uppercase text-lg shadow-lg animate-bounce">
                  💸 OLHA ISSO 👇
                </div>

                <div className="mb-8 mt-4">
                  <span className="text-lg font-black uppercase tracking-[0.2em] text-zinc-500 leading-none">Você pode lucrar:</span>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-3xl font-black text-primary">R$</span>
                    <span className="text-7xl md:text-8xl font-black text-white tabular-nums tracking-tighter">
                      {animatedProfit.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t border-zinc-800">
                  <div className="flex justify-between items-center bg-zinc-950/50 p-4 rounded-lg border border-zinc-800">
                    <span className="text-xs font-black uppercase text-zinc-500 text-left">2 serviços por <br/>semana</span>
                    <span className="text-2xl font-black text-green-500">R$ {weeklyScale.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="flex justify-between items-center bg-primary/10 p-5 rounded-lg border border-primary/30 shadow-inner">
                    <span className="text-sm font-black uppercase text-primary text-left">Resultado <br/>no mês</span>
                    <span className="text-4xl font-black text-green-400">R$ {monthlyScale.toLocaleString('pt-BR')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showResult && (
          <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 leading-tight max-w-3xl mx-auto">
              Agora imagina ter vários projetos prontos como esse na mão todos os dias…
            </h3>
            <p className="text-lg text-zinc-400 font-bold uppercase tracking-tight mb-10">
              É exatamente isso que você recebe no pack 👇
            </p>
            <Button 
              size="lg"
              className="h-20 px-16 text-2xl font-black uppercase tracking-widest bg-white hover:bg-zinc-200 text-black rounded-none border-b-8 border-zinc-400 active:border-b-0 active:translate-y-2 transition-all shadow-2xl"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VER OS PROJETOS AGORA
            </Button>
            <p className="mt-6 text-primary font-black uppercase tracking-widest text-sm italic">
              "Alguns projetos podem se pagar já no primeiro serviço."
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
