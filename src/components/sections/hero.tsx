
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
      {heroImg && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg.imageUrl}
            alt={heroImg.description}
            fill
            className="object-cover opacity-30 grayscale"
            priority
            data-ai-hint={heroImg.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>
      )}
      
      <div className="container relative z-10 px-4 py-20 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 font-headline uppercase">
          Projetos prontos de serralheria para você usar no dia a dia
        </h1>
        <p className="text-lg md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto">
          Tenha acesso a vários modelos de portões, grades e estruturas para facilitar seu trabalho e ganhar mais dinheiro.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button 
            size="lg" 
            className="h-14 px-10 text-lg font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground border-b-4 border-orange-700"
            onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VER OS PROJETOS
          </Button>
          <span className="text-sm text-zinc-400 font-medium">
            Acesso imediato após o pagamento
          </span>
        </div>
      </div>
    </section>
  );
}
