import { Inter } from "next/font/google";
import "./globals.css";

import { NavBar } from "@/components/NavBar";
import { Provider } from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IntelligencIA",
  description: "Génération de prompt par l'IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <NavBar/>
          {children}
        </main>         
      </body>
    </html>
  );
}
