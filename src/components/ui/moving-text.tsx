
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
    progress.set((time / 40) % 100); // controla velocidade
  });

  // O efeito de gradiente animado que passa pelo texto
  const background = useMotionTemplate`
    linear-gradient(
      90deg,
      #FFFFFF 0%,
      #FFFFFF ${progress}%,
      #F97316 ${progress + 5}%,
      #FFFFFF ${progress + 15}%
    )
  `;

  return (
    <motion.h2
      style={{
        backgroundImage: background,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className={cn("text-4xl font-bold", className)}
    >
      {children}
    </motion.h2>
  );
}
