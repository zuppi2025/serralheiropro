
"use client";

import { Star, MessageCircle, CheckCircle2 } from "lucide-react";
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
        <h2 className="text-3xl md:text-5xl font-black font-headline uppercase text-center mb-20 tracking-tighter italic">
          Feedback de quem já usou
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="relative p-10 bg-zinc-900/60 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col items-start transition-all hover:border-primary/40 hover:bg-zinc-900/80 group">
              {/* Stars */}
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl font-semibold leading-snug mb-10 text-white italic">
                "{review.text}"
              </blockquote>

              {/* Profile info */}
              <div className="mt-auto flex items-center gap-5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-zinc-700 group-hover:border-primary/60 transition-colors">
                  <Image
                    src={review.photo}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-tight text-zinc-100">{review.name}</span>
                  <div className="flex items-center gap-2 text-[11px] uppercase font-black text-green-500 tracking-wider mt-1 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Cliente Verificado
                  </div>
                </div>
              </div>
              
              {/* Subtle Icon Decoration */}
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageCircle className="h-12 w-12 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
