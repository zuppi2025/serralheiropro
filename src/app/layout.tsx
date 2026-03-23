
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Serralheiro Pro - Projetos e Modelos Prontos',
  description: 'Projetos prontos de serralheria para agilizar seu trabalho e aumentar seu faturamento.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-zinc-950 text-white">{children}</body>
    </html>
  );
}
