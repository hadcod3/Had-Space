'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class" // Applies theme as a class on the <html> tag
      defaultTheme="system" // Uses system preference as the default
      enableSystem // Enables automatic system theme detection
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
