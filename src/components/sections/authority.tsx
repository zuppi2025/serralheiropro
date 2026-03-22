
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
    <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">
            Quem está por trás dos projetos
          </h2>
          <div className="inline-block px-4 py-1 bg-primary/20 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest rounded-full">
            Projetos usados no dia a dia da serralheria
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-black uppercase mb-6 text-primary">
              Marcelo Rodrigues
            </h3>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed mb-8">
              <p>
                Trabalho com serralheria há anos, executando projetos reais como portões, estruturas metálicas e móveis industriais.
              </p>
              <p>
                Ao longo do tempo, reuni os modelos mais usados no dia a dia para facilitar o trabalho e ajudar outros profissionais a ganhar mais com menos esforço.
              </p>
            </div>
            
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl">
              {specialistImg && (
                <Image
                  src={specialistImg.imageUrl}
                  alt="Especialista em Serralheria"
                  fill
                  className="object-cover"
                  data-ai-hint={specialistImg.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
