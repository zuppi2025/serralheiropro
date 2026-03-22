
"use client";

import { Button } from "@/components/ui/button";

export function FooterCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground border-t-8 border-orange-700">
      <div className="container px-4 mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">
          Se você quer facilitar seu trabalho e ter mais opções de serviço, pode acessar agora
        </h2>
        <Button 
          size="lg" 
          className="h-16 px-12 text-xl font-black uppercase bg-zinc-950 hover:bg-zinc-900 text-white rounded-none border-b-4 border-zinc-800"
          onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
        >
          QUERO ACESSAR
        </Button>
      </div>
    </section>
  );
}
