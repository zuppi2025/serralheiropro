
"use client";

import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrollToPricing = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Lado Esquerdo: Identidade */}
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-xl font-black uppercase tracking-tighter text-white">
            🔧 PACK <span className="text-primary">SERRALHEIRO PRO</span>
          </span>
        </div>
        
        {/* Lado Direito: CTA */}
        <div className="flex flex-col items-end gap-0.5">
          <Button 
            size="sm"
            className="bg-primary hover:bg-orange-600 text-primary-foreground font-black uppercase text-[10px] md:text-xs tracking-widest rounded-none border-b-2 border-orange-800 active:border-b-0 h-8 md:h-10 px-4 md:px-8 transition-all"
            onClick={scrollToPricing}
          >
            ACESSAR AGORA
          </Button>
          <span className="text-[8px] md:text-[9px] font-black uppercase text-zinc-500 tracking-[0.2em] leading-none mr-1 italic">
            válido hoje
          </span>
        </div>
      </div>
    </header>
  );
}
