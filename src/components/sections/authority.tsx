
"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Authority() {
  const specialistImg = PlaceHolderImages.find((img) => img.id === "specialist");

  const highlights = [
    "Mais de 15 anos de experiência prática",
    "Projetos testados no dia a dia da serralheria",
    "Foco em execução simples e rápida",
    "Modelos que os clientes realmente pedem"
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Elemento de brilho sutil ao fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0,transparent_70%)] pointer-events-none" />

      <div className="container px-4 mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">
            Quem está por trás dos projetos
          </h2>
          <div className="inline-block px-4 py-1 bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest rounded-full">
            Projetos usados no dia a dia da serralheria
          </div>
        </div>

        {/* Card Interno para maior contraste */}
        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-[2rem] p-8 md:p-16 shadow-2xl backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 text-primary tracking-tighter">
                Lucas Almeida
              </h3>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-8">
                Especialista em Serralheria
              </p>
              
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed mb-10">
                <p>
                  Trabalho com serralheria há anos, executando projetos reais como portões, estruturas metálicas e móveis industriais.
                </p>
                <p>
                  Ao longo do tempo, reuni os modelos mais usados no dia a dia para facilitar o trabalho e ajudar outros profissionais a ganhar mais com menos esforço.
                </p>
              </div>
              
              <ul className="grid gap-4">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight text-zinc-400">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
                
                <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-500 group-hover:scale-[1.02]">
                  {specialistImg && (
                    <Image
                      src={specialistImg.imageUrl}
                      alt="Lucas Almeida - Especialista em Serralheria"
                      fill
                      className="object-cover"
                      data-ai-hint={specialistImg.imageHint}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
