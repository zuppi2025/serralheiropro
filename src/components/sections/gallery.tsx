
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

  const renderCarousel = (images: typeof group1, title: string) => (
    <div className="mb-16 last:mb-0">
      <h3 className="text-xl font-black uppercase tracking-tight mb-6 text-zinc-800 dark:text-zinc-200 border-l-4 border-primary pl-4">
        {title}
      </h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((img) => (
            <CarouselItem key={img.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-sm border-2 border-zinc-200 dark:border-zinc-800 shadow-md bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={img.imageHint}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-bold uppercase bg-primary px-2 py-1">Modelo Real</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4 md:absolute md:top-1/2 md:-translate-y-1/2 md:w-full md:justify-between md:px-2 md:pointer-events-none md:mt-0">
          <CarouselPrevious className="static md:pointer-events-auto bg-white/90 dark:bg-zinc-900/90 border-2 border-primary hover:bg-primary hover:text-white transition-colors h-10 w-10 md:-left-12" />
          <CarouselNext className="static md:pointer-events-auto bg-white/90 dark:bg-zinc-900/90 border-2 border-primary hover:bg-primary hover:text-white transition-colors h-10 w-10 md:-right-12" />
        </div>
      </Carousel>
    </div>
  );

  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-headline uppercase mb-4 tracking-tighter italic">
            Veja os projetos por dentro
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-medium text-lg">
            Navegue pelos modelos reais que você terá acesso imediato
          </p>
        </div>
        
        <div className="space-y-12">
          {renderCarousel(group1, "Conjunto de Projetos 01")}
          {renderCarousel(group2, "Conjunto de Projetos 02")}
          {renderCarousel(group3, "Conjunto de Projetos 03")}
        </div>
      </div>
    </section>
  );
}
