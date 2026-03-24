
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
  const progress = useMotionValue(-100);

  useAnimationFrame((time) => {
    // Ciclo de -100 a 200 para garantir que o brilho atravesse todo o texto
    progress.set(((time / 20) % 300) - 100);
  });

  // Criamos um gradiente que funciona como uma máscara de brilho
  const maskImage = useMotionTemplate`
    linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0) ${progress}%,
      rgba(255, 255, 255, 1) ${progress + 20}%,
      rgba(255, 255, 255, 0) ${progress + 40}%,
      transparent 100%
    )
  `;

  return (
    <div className="relative inline-block w-full">
      {/* Texto Base: Sempre visível para evitar o bug de 'sumir' */}
      <h2 className={cn("relative z-10", className)}>
        {children}
      </h2>
      
      {/* Camada de Brilho: Sobreposta com a máscara animada */}
      <motion.h2
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
        className={cn(
          "absolute inset-0 z-20 pointer-events-none select-none brightness-150",
          className
        )}
        aria-hidden="true"
      >
        {children}
      </motion.h2>
    </div>
  );
}
