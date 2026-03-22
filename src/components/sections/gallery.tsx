
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter((img) => 
    ["gate-1", "grille-1", "door-1", "structure-1"].includes(img.id)
  );

  return (
    <section className="py-20 bg-zinc-100 dark:bg-zinc-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase mb-4">
            Veja alguns dos projetos disponíveis
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Projetos prontos para você usar como base no seu serviço
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img) => (
            <div key={img.id} className="group relative aspect-square overflow-hidden rounded-sm border-2 border-zinc-200 dark:border-zinc-800 shadow-lg">
              <Image
                src={img.imageUrl}
                alt={img.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                data-ai-hint={img.imageHint}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-sm">Exemplo Real</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
