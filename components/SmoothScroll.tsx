// components/SmoothScroll.tsx
"use client"; // Mark this as a Client Component

import useLenis from '../hooks/useLenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useLenis(); // Use the Lenis hook here

  return <>{children}</>;
}