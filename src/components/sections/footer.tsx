
"use client";

import { useState, useEffect } from "react";

export function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-10 bg-zinc-950 text-zinc-500 border-t border-zinc-900 text-center">
      <div className="container px-4 mx-auto">
        <p className="text-sm opacity-80 uppercase tracking-widest font-bold">
          © {year} Serralheiro Pro - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
