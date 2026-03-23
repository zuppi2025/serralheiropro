"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { PlaceHolderImages, ImagePlaceholder } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Maximize2, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Gallery() {
  const group1 = PlaceHolderImages.filter((img) => img.id.startsWith("gallery-1-"));
  const group2 = PlaceHolderImages.filter((img) => img.id.startsWith("gallery-2-"));
  const group3 = PlaceHolderImages.filter((img) => img.id.startsWith("gallery-3-"));

  const [api1, setApi1] = useState<CarouselApi>();
  const [current1, setCurrent1] = useState(0);
  const [api2, setApi2] = useState<CarouselApi>();
  const [current2, setCurrent2] = useState(0);
  const [api3, setApi3] = useState<CarouselApi>();
  const [current3, setCurrent3] = useState(0);

  const onSelect = useCallback((api: CarouselApi, setter: (val: number) => void) => {
    if (!api) return;
    setter(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api1) return;
    api1.on("select", () => onSelect(api1, setCurrent1));
    api1.on("reInit", () => onSelect(api1, setCurrent1));
  }, [api1, onSelect]);

  useEffect(() => {
    if (!api2) return;
    api2.on("select", () => onSelect(api2, setCurrent2));
    api2.on("reInit", () => onSelect(api2, setCurrent2));
  }, [api2, onSelect]);

  useEffect(() => {
    if (!api3) return;
    api3.on("select", () => onSelect(api3, setCurrent3));
    api3.on("reInit", () => onSelect(api3, setCurrent3));
  }, [api3, onSelect]);

  const renderCarousel = (
    images: ImagePlaceholder[], 
    setApi: (api: CarouselApi) => void, 
    current: number
  ) => (
    <div className="mb-12 last:mb-0">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto relative group"
      >
        <CarouselContent className="-ml-4">
          {images.map((img, index) => (
            <CarouselItem key={img.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-[1/1.4] bg-white rounded-xl shadow-xl overflow-hidden border border-zinc-200 cursor-zoom-in group/item">
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover/item:scale-[1.02]"
                      data-ai-hint={img.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover/item:opacity-100">
                      <div className="bg-white/90 p-3 rounded-full shadow-lg">
                        <Maximize2 className="w-6 h-6 text-zinc-900" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] h-[90vh] bg-zinc-950 border-zinc-800 p-0 overflow-hidden flex flex-col items-center justify-center">
                  <DialogTitle className="sr-only">Visualização de Projeto</DialogTitle>
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="hidden md:block">
          <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 h-12 w-12 border-none bg-zinc-900/10 hover:bg-primary hover:text-white transition-all shadow-none" />
          <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 h-12 w-12 border-none bg-zinc-900/10 hover:bg-primary hover:text-white transition-all shadow-none" />
        </div>
      </Carousel>

      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => (images === group1 ? api1 : images === group2 ? api2 : api3)?.scrollTo(i)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              current === i ? "bg-primary w-6" : "bg-zinc-300 dark:bg-zinc-800"
            )}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 text-zinc-400 text-sm font-bold uppercase tracking-widest opacity-60">
        <MousePointer2 className="w-4 h-4" />
        <span>Clique ou arraste para ver mais</span>
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-16 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-5xl font-black uppercase mb-3 tracking-tighter italic">
            Veja os projetos por dentro
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-medium text-base md:text-lg max-w-2xl mx-auto">
            Folhas de projeto detalhadas, prontas para imprimir ou visualizar no celular na hora da fabricação.
          </p>
        </div>
        
        <div className="space-y-8">
          {renderCarousel(group1, setApi1, current1)}
          {renderCarousel(group2, setApi2, current2)}
          {renderCarousel(group3, setApi3, current3)}
        </div>
      </div>
    </section>
  );
}
