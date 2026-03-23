"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroBg = PlaceHolderImages.find((img) => img.id === "hero-bg");
  const heroMain = PlaceHolderImages.find((img) => img.id === "hero-main");

  return (
    <section className="relative min-h-[60vh] flex items-start justify-center overflow-hidden bg-zinc-950 text-white w-full pt-4 md:pt-6">
      {heroBg && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg.imageUrl}
            alt={heroBg.description}
            fill
            className="object-cover opacity-20 grayscale"
            priority
            data-ai-hint={heroBg.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        </div>
      )}
      
      <div className="container relative z-10 px-4 pt-4 pb-12 md:pb-20 text-center max-w-5xl mx-auto">
        <div className="mb-6 md:mb-10">
          <h1 className="flex flex-col gap-1 md:gap-2 mb-4 md:mb-6">
            <span className="text-base md:text-2xl font-black tracking-tighter text-white uppercase italic">
              PACK <span className="text-primary underline decoration-primary/30">SERRALHEIRO PRO</span>
            </span>
            <span className="text-3xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-balance">
              +1000 PROJETOS PRONTOS <br className="hidden md:block" />
              <span className="text-primary">PARA FABRICAR E VENDER</span>
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto px-2">
            <p className="text-xs md:text-lg text-zinc-300 font-bold uppercase tracking-tight leading-relaxed border-l-4 border-primary pl-4 md:pl-6 py-2 bg-primary/5 text-balance text-left md:text-center">
              NÃO É CURSO. SÃO PROJETOS USADOS NO DIA A DIA DA SERRALHERIA PARA <span className="text-white">GANHAR DINHEIRO</span>.
            </p>
          </div>
        </div>
        
        {heroMain && (
          <div className="relative w-full max-w-3xl mx-auto mb-6 md:mb-10 px-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-orange-600/50 rounded-sm blur opacity-25"></div>
            <Image
              src={heroMain.imageUrl}
              alt={heroMain.description}
              width={1000}
              height={600}
              className="relative w-full h-auto rounded-sm shadow-2xl block mx-auto border border-zinc-800 object-cover"
              data-ai-hint={heroMain.imageHint}
              priority
            />
          </div>
        )}

        <div className="flex flex-col items-center gap-4 w-full px-4">
          <Button 
            size="lg" 
            className="w-full max-w-sm md:max-w-md h-16 md:h-20 px-8 md:px-12 text-lg md:text-2xl font-black uppercase tracking-widest bg-primary hover:bg-orange-600 text-white border-b-8 border-orange-800 rounded-none transform transition-transform hover:scale-105 active:border-b-0 active:translate-y-2 whitespace-normal leading-tight py-4 shadow-[0_10px_40px_rgba(249,115,22,0.4)]"
            onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            QUERO ACESSAR OS PROJETOS
          </Button>
          <div className="flex items-center justify-center gap-2 md:gap-3 text-[10px] md:text-sm text-zinc-400 font-bold uppercase tracking-tighter">
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)] shrink-0" />
            <span>Acesso imediato e vitalício após o pagamento</span>
          </div>
        </div>
      </div>
    </section>
  );
}