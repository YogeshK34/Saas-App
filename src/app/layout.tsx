import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS Management App",
  description:
    "Efficiently manage and optimize your SaaS subscriptions and usage.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-saas-management-app.vercel.app",
    siteName: "SaaS Management App",
    title: "SaaS Management App",
    description:
      "Efficiently manage and optimize your SaaS subscriptions and usage.",
    images: [
      {
        url: "https://your-saas-management-app.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "SaaS Management App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Management App",
    description:
      "Efficiently manage and optimize your SaaS subscriptions and usage.",
    images: ["https://your-saas-management-app.vercel.app/og-image.png"],
    creator: "@YogeshK34",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
