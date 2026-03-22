
"use client";

import { Star, MessageCircle } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const reviews = [
    {
      name: "João Silva",
      photo: "https://i.imgur.com/cDaoidi.jpeg",
      text: "Me ajudou a ter mais ideias pro serviço",
    },
    {
      name: "Carlos Mendes",
      photo: "https://i.imgur.com/3CcwW2y.jpeg",
      text: "Facilitou muito no dia a dia",
    },
    {
      name: "Roberto Alves",
      photo: "https://i.imgur.com/bFDKYjz.jpeg",
      text: "Já usei alguns modelos e deu certo",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white border-y border-zinc-900">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-black font-headline uppercase text-center mb-16 tracking-tight">
          Feedback de quem já usou
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="relative p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl shadow-xl flex flex-col items-start transition-all hover:border-primary/30 group">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl font-medium leading-relaxed italic mb-8 text-zinc-200">
                "{review.text}"
              </blockquote>

              {/* Profile info */}
              <div className="mt-auto flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-zinc-800 group-hover:border-primary/50 transition-colors">
                  <Image
                    src={review.photo}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base tracking-tight">{review.name}</span>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-black text-zinc-500 tracking-widest mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Cliente Verificado
                  </div>
                </div>
              </div>
              
              {/* Subtle Icon Decoration */}
              <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <MessageCircle className="h-10 w-10 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
