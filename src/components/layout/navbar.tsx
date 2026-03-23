"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const scrollToPricing = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-900">
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        {/* Lado Esquerdo: Identidade */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image 
              src="https://i.imgur.com/pR3yPWN.png" 
              alt="Logo Serralheiro Pro" 
              fill
              className="object-contain"
            />
          </div>
          <span className="text-base md:text-2xl font-black uppercase tracking-tighter text-white leading-none">
            PACK <span className="text-primary">SERRALHEIRO PRO</span>
          </span>
        </div>
        
        {/* Lado Direito: CTA */}
        <div className="flex items-center">
          <Button 
            className="bg-primary hover:bg-orange-600 text-white font-black uppercase text-xs md:text-sm tracking-widest rounded-none border-b-4 border-orange-800 active:border-b-0 h-10 md:h-12 px-4 md:px-6 transition-all shadow-lg"
            onClick={scrollToPricing}
          >
            VÁLIDO HOJE
          </Button>
        </div>
      </div>
    </header>
  );
}