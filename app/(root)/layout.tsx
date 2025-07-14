'use client';
import Header from "@/components/reusable/Header";
import MobileNavBar from "@/components/reusable/MobileNavBar";
import { ThemeToggle } from "@/components/ui/mode-toggle";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})  {
  useEffect(() => {
      AOS.init({
          duration: 800,
          once: false,
      });
  }, []);
  return (
    <div className="flex flex-col">
      <Header />
      <MobileNavBar/>
      <main className="flex-1 w-full">
          {children}
      </main>
      <div className="fixed md:hidden bottom-5 right-5">
        <ThemeToggle/>
      </div>
    </div>
  );
}
