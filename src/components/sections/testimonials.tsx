"use client";

import { Star, MessageCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const reviews = [
    {
      name: "Leandro Almeida",
      location: "Brasília – DF",
      photo: "https://i.imgur.com/cDaoidi.jpeg",
      text: "Antes eu fazia tudo no olho e perdia muito tempo. Agora abro o projeto, vejo as medidas e já vou direto pro corte. Já vendi prateleira, aparador e até suporte de bike com isso.",
    },
    {
      name: "João",
      location: "Belo Horizonte – MG",
      photo: "https://i.imgur.com/3CcwW2y.jpeg",
      text: "Montei minha primeira carretinha em poucos dias. Já recebi encomenda de mais duas aqui na região.",
    },
    {
      name: "André Rocha",
      location: "Porto Alegre – RS",
      photo: "https://i.imgur.com/bFDKYjz.jpeg",
      text: "Mostrei os projetos pra um cliente e ele fechou comigo pra montar a loja inteira. Foi a primeira vez que peguei um trabalho grande assim.",
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-zinc-950 text-white border-y border-zinc-900">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-5xl font-black font-headline uppercase text-center mb-12 md:mb-16 tracking-tighter italic">
          Feedback de quem já usou
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="relative p-6 md:p-8 bg-zinc-900/60 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col items-start transition-all hover:border-primary/40 hover:bg-zinc-900/80 group">
              <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-70 group-hover:opacity-100 transition-opacity">
                <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-[#25D366] fill-[#25D366]/10" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-base md:text-xl font-medium leading-relaxed mb-8 text-zinc-100 italic">
                "{review.text}"
              </blockquote>

              <div className="mt-auto flex items-center gap-4">
                <div className="relative h-12 w-12 md:h-14 md:w-14 shrink-0 overflow-hidden rounded-full border-2 border-zinc-700 group-hover:border-primary/60 transition-colors">
                  <Image
                    src={review.photo}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm md:text-base tracking-tight text-white leading-none mb-1">
                    {review.name}
                  </span>
                  <span className="text-[10px] md:text-xs text-zinc-500 font-medium mb-2">
                    {review.location}
                  </span>
                  <div className="flex items-center gap-1.5 text-[8px] md:text-[10px] uppercase font-black text-green-500 tracking-wider bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    Cliente Verificado
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
