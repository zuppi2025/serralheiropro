"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function FooterCTA() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

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
        <footer className="mt-20 pt-10 border-t border-orange-400/30 text-sm opacity-80 uppercase tracking-widest font-bold">
          © {year} Serralheiro Pro - Todos os direitos reservados
        </footer>
      </div>
    </section>
  );
}
