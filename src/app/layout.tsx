
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { Cairo } from 'next/font/google';
import { FirebaseClientProvider } from '@/firebase';
import { PwaInstaller } from '@/components/PwaInstaller';

export const metadata: Metadata = {
  title: 'نبض الملاعب',
  description: 'عالم كرة القدم بين يديك',
  manifest: '/manifest.webmanifest',
};

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-cairo',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className="h-full">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no, maximum-scale=1.0" />
          
          {/* PWA specific meta tags */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="نبض الملاعب" />
          
          {/* Theme color for browsers */}
          <meta name="theme-color" content="#000000" />
          
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        </head>
        <body className={`${cairo.variable} font-body antialiased h-full`}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
              <FirebaseClientProvider>
                  {children}
              </FirebaseClientProvider>
              <Toaster />
              <PwaInstaller />
            </ThemeProvider>
        </body>
    </html>
  );
}
