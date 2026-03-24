
"use client";
import React from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingText({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    // Controla a velocidade conforme a lógica enviada (time / 40)
    progress.set((time / 40) % 100);
  });

  // Gradiente conforme a lógica enviada: white -> orange -> white
  const background = useMotionTemplate`
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) ${progress}%,
      #F97316 ${progress + 5}%,
      rgba(255, 255, 255, 0) ${progress + 15}%
    )
  `;

  return (
    <div className="relative inline-block w-full">
      {/* Texto Base: Mantém as cores originais (como o laranja de 'dentro') */}
      <h2 className={cn("relative z-10 text-white", className)}>
        {children}
      </h2>
      
      {/* Camada de Brilho: Aplica o gradiente animado por cima sem esconder o texto */}
      <motion.h2
        style={{
          backgroundImage: background,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "200% 100%",
        }}
        className={cn(
          "absolute inset-0 z-20 pointer-events-none select-none brightness-150 mix-blend-screen",
          className
        )}
        aria-hidden="true"
      >
        {children}
      </motion.h2>
    </div>
  );
}
