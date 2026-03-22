
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroBg = PlaceHolderImages.find((img) => img.id === "hero-bg");
  const heroMain = PlaceHolderImages.find((img) => img.id === "hero-main");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
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
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>
      )}
      
      <div className="container relative z-10 px-4 py-20 text-center max-w-5xl">
        <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 font-headline uppercase leading-none">
          Projetos prontos de serralheria para você usar no dia a dia
        </h1>
        
        {heroMain && (
          <div className="relative w-full max-w-2xl mx-auto mb-10">
            <Image
              src={heroMain.imageUrl}
              alt={heroMain.description}
              width={800}
              height={1000}
              className="w-full h-auto rounded-sm shadow-2xl"
              data-ai-hint={heroMain.imageHint}
              priority
            />
          </div>
        )}

        <p className="text-lg md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto font-medium">
          Tenha acesso a vários modelos de portões, grades e estruturas para facilitar seu trabalho e ganhar mais dinheiro.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <Button 
            size="lg" 
            className="h-16 px-12 text-xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground border-b-4 border-orange-700 rounded-none"
            onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            QUERO ACESSAR OS PROJETOS
          </Button>
          <div className="flex items-center gap-2 text-sm text-zinc-400 font-bold uppercase tracking-tighter">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Acesso imediato após o pagamento
          </div>
        </div>
      </div>
    </section>
  );
}
