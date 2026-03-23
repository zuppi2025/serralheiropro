"use client";

import { useState, useEffect, useRef } from "react";
import { Wrench, Home, Truck, Layout, TrendingUp, Zap, MousePointer2 } from "lucide-react";
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
    icon: <Wrench className="h-6 w-6 md:h-8 md:w-8" />,
    profit: 550,
    weekly: 1100,
    monthly: 4400,
  },
  {
    id: "grade",
    name: "Grade residencial",
    icon: <Home className="h-6 w-6 md:h-8 md:w-8" />,
    profit: 350,
    weekly: 700,
    monthly: 2800,
  },
  {
    id: "carretinha",
    name: "Carretinha",
    icon: <Truck className="h-6 w-6 md:h-8 md:w-8" />,
    profit: 1200,
    weekly: 2400,
    monthly: 9600,
  },
  {
    id: "mesa",
    name: "Mesa industrial",
    icon: <Layout className="h-6 w-6 md:h-8 md:w-8" />,
    profit: 600,
    weekly: 1200,
    monthly: 4800,
  },
];

export function ProfitSimulator() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [animatedProfit, setAnimatedProfit] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const selectedService = services.find(s => s.id === selectedId);

  const playSound = () => {
    const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2014/2014-preview.mp3");
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setHasInteracted(true);
    playSound();
    
    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  useEffect(() => {
    if (!selectedService) return;

    let start = 0;
    const end = selectedService.profit;
    const duration = 600;
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
  }, [selectedId, selectedService]);

  return (
    <section className="py-10 md:py-16 bg-zinc-950 text-white overflow-hidden relative border-y border-zinc-900 w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0,transparent_70%)] pointer-events-none" />
      
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xl md:text-5xl lg:text-6xl font-black font-headline uppercase mb-4 leading-tight tracking-tighter italic text-balance px-2">
            💰 VEJA QUANTO UM PROJETO PODE TE DAR
          </h2>
          <p className="text-zinc-400 text-sm md:text-2xl font-medium px-4">
            Escolha um tipo de projeto abaixo para simular o lucro na prática 👇
          </p>
        </div>

        <div className={cn(
          "grid gap-6 md:gap-8 items-start transition-all duration-700 w-full",
          hasInteracted ? "lg:grid-cols-12" : "max-w-3xl mx-auto"
        )}>
          <div className={cn(
            "grid grid-cols-2 gap-3 md:gap-4 transition-all duration-500 w-full",
            hasInteracted ? "lg:col-span-7" : "w-full"
          )}>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleSelect(service.id)}
                className={cn(
                  "p-3 md:p-8 flex flex-col items-center justify-center gap-2 md:gap-5 rounded-xl md:rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden w-full",
                  selectedId === service.id
                    ? "bg-primary border-primary text-primary-foreground scale-105 shadow-[0_0_40px_rgba(249,115,22,0.4)] z-20"
                    : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-primary/50 hover:bg-zinc-900"
                )}
              >
                {!hasInteracted && (
                  <div className="absolute top-1 right-1 md:top-2 md:right-2 opacity-20">
                    <MousePointer2 className="h-3 w-3 md:h-4 md:w-4" />
                  </div>
                )}
                <div className={cn(
                  "transition-transform duration-500 group-hover:scale-110 shrink-0",
                  selectedId === service.id ? "text-primary-foreground" : "text-primary"
                )}>
                  {service.icon}
                </div>
                <span className="font-black uppercase text-[10px] md:text-xl tracking-tighter text-center leading-tight">
                  {service.name}
                </span>
                
                {selectedId === service.id && (
                  <div className="absolute inset-0 bg-white/10 animate-pulse pointer-events-none" />
                )}
              </button>
            ))}
          </div>

          {hasInteracted && selectedService && (
            <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-10 duration-700 w-full" ref={resultRef}>
              <div className="bg-gradient-to-b from-zinc-900 to-black p-6 md:p-12 border-2 border-primary rounded-2xl md:rounded-3xl text-center shadow-[0_20px_80px_rgba(249,115,22,0.25)] relative group/card w-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 md:px-6 md:py-2 rounded-full font-black uppercase text-[10px] md:text-lg shadow-xl animate-bounce whitespace-nowrap z-30">
                  💸 LUCRO REAL 👇
                </div>

                <div className="mb-6 md:mb-10 mt-2 overflow-hidden">
                  <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-zinc-300 leading-none block mb-3 md:mb-4">
                    💰 LUCRO LIVRE POR PROJETO:
                  </span>
                  <div className="flex items-center justify-center gap-1 md:gap-2 relative">
                    <span className="text-xl md:text-4xl font-black text-primary italic">R$</span>
                    <span className="text-4xl md:text-8xl lg:text-9xl font-black text-white tabular-nums tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      {animatedProfit.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4 pt-6 md:pt-10 border-t border-zinc-800">
                  <div className="flex justify-between items-center bg-zinc-950/80 p-3 md:p-5 rounded-lg md:rounded-xl border border-zinc-800 transition-all hover:bg-zinc-900">
                    <div className="flex items-center gap-2 md:gap-3">
                      <TrendingUp className="h-5 w-5 md:h-7 md:w-7 text-primary" />
                      <div className="text-left">
                        <span className="text-[8px] md:text-xs font-black uppercase text-zinc-400 leading-none block">Fazendo apenas</span>
                        <span className="text-[10px] md:text-base font-black uppercase text-white tracking-tight">2 por semana</span>
                      </div>
                    </div>
                    <span className="text-xl md:text-3xl font-black text-green-500 whitespace-nowrap">R$ {selectedService.weekly.toLocaleString('pt-BR')}</span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-primary/10 p-4 md:p-7 rounded-lg md:rounded-xl border border-primary/40 shadow-[inset_0_0_20px_rgba(249,115,22,0.1)] transition-all hover:bg-primary/20">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Zap className="h-5 w-5 md:h-8 md:w-8 text-primary fill-primary animate-pulse" />
                      <div className="text-left">
                        <span className="text-[8px] md:text-xs font-black uppercase text-primary leading-none block">Resultado extra</span>
                        <span className="text-[10px] md:text-lg font-black uppercase text-white tracking-tight">No final do mês</span>
                      </div>
                    </div>
                    <span className="text-2xl md:text-5xl font-black text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.3)] whitespace-nowrap">
                      R$ {selectedService.monthly.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {hasInteracted && (
          <div className="mt-10 md:mt-20 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000 px-4">
            <h3 className="text-lg md:text-4xl font-black uppercase mb-4 leading-tight max-w-3xl mx-auto italic tracking-tighter text-balance">
              Agora imagina ter vários projetos como esse prontos pra usar no seu dia a dia…
            </h3>
            <p className="text-xs md:text-lg text-zinc-400 font-bold uppercase tracking-tight mb-4 md:mb-6">
              É exatamente isso que você recebe no pack 👇
            </p>
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <p className="text-primary font-black uppercase tracking-widest text-[10px] md:text-sm italic text-balance">
                "Um único serviço já paga 10x o valor do seu investimento."
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}