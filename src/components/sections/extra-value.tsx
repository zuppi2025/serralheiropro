import { Lightbulb, DollarSign, Presentation, Wrench } from "lucide-react";

export function ExtraValue() {
  const items = [
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Dicas de preço",
      desc: "Sugestões simples de como cobrar por cada tipo de serviço sem ter prejuízo."
    },
    {
      icon: <Presentation className="h-8 w-8 text-primary" />,
      title: "Como apresentar",
      desc: "O jeito certo de mostrar os modelos para o cliente fechar o serviço na hora."
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Serviços em alta",
      desc: "Lista dos modelos de portões e grades que as pessoas mais estão pedindo hoje."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container px-4 mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold font-headline uppercase text-center mb-10">
          Além dos projetos
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm shadow-sm hover:border-primary transition-colors">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 uppercase">{item.title}</h3>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
