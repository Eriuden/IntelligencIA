import { Inter } from "next/font/google";
import "./globals.css";

import { NavBar } from "@/components/NavBar";
import { Provider } from "@/components/Provider";
import { Searcher } from "@/components/Searcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IntelligencIA",
  description: "Génération de prompt par l'IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main>
            <NavBar/>
            <Searcher/>
            {children}
          </main> 
        </Provider>        
      </body>
    </html>
  );
}
