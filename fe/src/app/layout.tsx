import type { Metadata } from "next";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Guapi Papeis",
  description: "Teste para vaga FE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={poppins.className} suppressHydrationWarning>
      <body className="bg-white dark:bg-dark dark:text-white">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
