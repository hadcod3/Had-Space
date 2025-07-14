import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";

const archivo = Archivo({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-archivo'
});

export const metadata: Metadata = {
  title: "Had Space",
  description: "Developed by had code",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} antialiased`}
      >
      <ThemeProvider>
        <SmoothScroll>
          {children}
          <Toaster richColors position="top-center" />
        </SmoothScroll>
      </ThemeProvider>
      </body>
    </html>
  );
}