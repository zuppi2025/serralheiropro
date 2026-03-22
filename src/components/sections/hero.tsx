
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
        <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-12 font-headline uppercase leading-none">
          Projetos prontos de serralheria para você usar no dia a dia
        </h1>
        
        {heroMain && (
          <div className="relative w-full max-w-4xl mx-auto mb-12">
            <Image
              src={heroMain.imageUrl}
              alt={heroMain.description}
              width={1200}
              height={800}
              className="w-full h-auto rounded-sm shadow-2xl block mx-auto"
              data-ai-hint={heroMain.imageHint}
              priority
            />
          </div>
        )}

        <div className="flex flex-col items-center gap-6">
          <Button 
            size="lg" 
            className="h-16 px-12 text-xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground border-b-4 border-orange-700 rounded-none"
            onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            QUERO ACESSAR OS PROJETOS
          </Button>
          <div className="flex items-center gap-3 text-sm md:text-base text-zinc-400 font-bold uppercase tracking-tighter">
            <span className="w-4 h-4 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            Acesso imediato após o pagamento
          </div>
        </div>
      </div>
    </section>
  );
}
