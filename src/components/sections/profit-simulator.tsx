
"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Wrench, Home, Truck, Layout, TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceData {
  id: string;
  name: string;
  icon: React.ReactNode;
  profit: number;
  weekly: number;
  monthly: number;
}

const services: ServiceData[] = [
  {
    id: "portao",
    name: "Portão simples",
    icon: <Wrench className="h-8 w-8" />,
    profit: 400,
    weekly: 800,
    monthly: 3200,
  },
  {
    id: "grade",
    name: "Grade residencial",
    icon: <Home className="h-8 w-8" />,
    profit: 250,
    weekly: 500,
    monthly: 2000,
  },
  {
    id: "carretinha",
    name: "Carretinha",
    icon: <Truck className="h-8 w-8" />,
    profit: 800,
    weekly: 1600,
    monthly: 6400,
  },
  {
    id: "mesa",
    name: "Mesa industrial",
    icon: <Layout className="h-8 w-8" />,
    profit: 300,
    weekly: 600,
    monthly: 2400,
  },
];

export function ProfitSimulator() {
  const [selectedId, setSelectedId] = useState<string>("portao");
  const [animatedProfit, setAnimatedProfit] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const selectedService = services.find(s => s.id === selectedId) || services[0];

  useEffect(() => {
    // Efeito de contador
    let start = 0;
    const end = selectedService.profit;
    const duration = 500;
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

    return () => clearInterval(timer);
  }, [selectedId, selectedService.profit]);

  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden relative border-y border-zinc-900">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0,transparent_70%)] pointer-events-none" />
      
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-headline uppercase mb-4 leading-tight tracking-tighter italic">
            💰 VEJA QUANTO UM SERVIÇO PODE TE DAR
          </h2>
          <p className="text-zinc-400 text-xl md:text-2xl font-medium">
            Escolha um tipo de serviço e veja o lucro médio na prática 👇
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Selection Side */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={cn(
                  "p-6 flex flex-col items-center justify-center gap-4 rounded-xl border-2 transition-all duration-300 group",
                  selectedId === service.id
                    ? "bg-primary border-primary text-primary-foreground scale-105 shadow-[0_0_30px_rgba(249,115,22,0.3)]"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-primary/50 hover:bg-zinc-800"
                )}
              >
                <div className={cn(
                  "transition-transform duration-300 group-hover:scale-110",
                  selectedId === service.id ? "text-primary-foreground" : "text-primary"
                )}>
                  {service.icon}
                </div>
                <span className="font-black uppercase text-sm md:text-base tracking-tight text-center">
                  {service.name}
                </span>
              </button>
            ))}
          </div>

          {/* Result Side */}
          <div className="lg:col-span-5" ref={resultRef}>
            <div className="bg-gradient-to-b from-zinc-900 to-black p-8 md:p-10 border-2 border-primary rounded-2xl text-center shadow-[0_20px_60px_rgba(249,115,22,0.2)] relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-8 py-2 rounded-full font-black uppercase text-lg shadow-lg animate-bounce whitespace-nowrap">
                💸 OLHA ISSO 👇
              </div>

              <div className="mb-8 mt-4">
                <span className="text-lg font-black uppercase tracking-[0.2em] text-zinc-500 leading-none">Lucro médio:</span>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="text-3xl font-black text-primary italic">R$</span>
                  <span className="text-7xl md:text-8xl font-black text-white tabular-nums tracking-tighter">
                    {animatedProfit.toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-zinc-800">
                <div className="flex justify-between items-center bg-zinc-950/50 p-4 rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-zinc-500" />
                    <span className="text-xs font-black uppercase text-zinc-500 text-left leading-tight">Fazendo 2 por <br/>semana</span>
                  </div>
                  <span className="text-2xl font-black text-green-500">R$ {selectedService.weekly.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between items-center bg-primary/10 p-5 rounded-lg border border-primary/30 shadow-inner">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-primary fill-primary" />
                    <span className="text-sm font-black uppercase text-primary text-left leading-tight">Resultado <br/>no mês</span>
                  </div>
                  <span className="text-4xl font-black text-green-400">R$ {selectedService.monthly.toLocaleString('pt-BR')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion Block */}
        <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 leading-tight max-w-3xl mx-auto">
            Agora imagina ter vários projetos como esse prontos pra usar no seu dia a dia…
          </h3>
          <p className="text-lg text-zinc-400 font-bold uppercase tracking-tight mb-10">
            É exatamente isso que você recebe no pack 👇
          </p>
          <Button 
            size="lg"
            className="h-20 px-16 text-2xl font-black uppercase tracking-widest bg-white hover:bg-zinc-200 text-black rounded-none border-b-8 border-zinc-400 active:border-b-0 active:translate-y-2 transition-all shadow-2xl group"
            onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VER TODOS OS PROJETOS <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Button>
          <p className="mt-6 text-primary font-black uppercase tracking-widest text-sm italic">
            "Alguns projetos podem se pagar já no primeiro serviço."
          </p>
        </div>
      </div>
    </section>
  );
}
