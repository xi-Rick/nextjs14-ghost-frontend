// /app/layout.tsx
import { Footer } from "@/components/footer";
import { navItems } from '@/components/navbar';
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Suspense } from 'react';
import "./globals.css";

const APP_NAME = "Ghost Frontend";
const APP_DEFAULT_TITLE = "Ghost Frontend";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "../manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <main className="flex-grow">
              {children}
            </main>
            <FloatingNav navItems={navItems} />
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
