
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { Cairo } from 'next/font/google';
import { FirebaseClientProvider } from '@/firebase';

const basePath = process.env.NODE_ENV === 'production' ? '/Alamal' : '';

export const metadata: Metadata = {
  title: 'نبض الملاعب',
  description: 'عالم كرة القدم بين يديك',
  manifest: `${basePath}/manifest.webmanifest`,
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
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FFFFFF" />
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
            </ThemeProvider>
        </body>
    </html>
  );
}
