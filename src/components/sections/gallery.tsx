
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Gallery() {
  const group1 = PlaceHolderImages.filter((img) => img.id.startsWith("gallery-1-"));
  const group2 = PlaceHolderImages.filter((img) => img.id.startsWith("gallery-2-"));
  const group3 = PlaceHolderImages.filter((img) => img.id.startsWith("gallery-3-"));

  const renderCarousel = (images: typeof group1) => (
    <div className="mb-12 last:mb-0">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto relative group"
      >
        <CarouselContent className="-ml-4">
          {images.map((img) => (
            <CarouselItem key={img.id} className="pl-4 basis-full md:basis-1/2">
              <div className="relative aspect-[1/1.4] bg-white rounded-xl shadow-xl overflow-hidden border border-zinc-200">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-contain p-4"
                  data-ai-hint={img.imageHint}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navegação Estilo Visualizador */}
        <div className="hidden md:block">
          <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 h-12 w-12 border-none bg-zinc-900/10 hover:bg-primary hover:text-white transition-all" />
          <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 h-12 w-12 border-none bg-zinc-900/10 hover:bg-primary hover:text-white transition-all" />
        </div>
        
        {/* Indicadores Mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          <CarouselPrevious className="static h-10 w-10 border-2 border-primary" />
          <CarouselNext className="static h-10 w-10 border-2 border-primary" />
        </div>
      </Carousel>
    </div>
  );

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tighter italic">
            Veja os projetos por dentro
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-medium text-lg max-w-2xl mx-auto">
            Folhas de projeto detalhadas, prontas para imprimir ou visualizar no celular na hora da fabricação.
          </p>
        </div>
        
        <div className="space-y-4">
          {renderCarousel(group1)}
          {renderCarousel(group2)}
          {renderCarousel(group3)}
        </div>
      </div>
    </section>
  );
}
