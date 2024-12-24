import "@/app/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaSphere",
  description:
    "Streamline your SaaS ecosystem with our comprehensive management platform",
  openGraph: {
    title: "SaaSphere",
    description:
      "Streamline your SaaS ecosystem with our comprehensive management platform",
    url: "https://saas-sphere.vercel.app/",
    siteName: "SaaSphere",
    images: [
      {
        url: "/social.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSphere",
    description:
      "Streamline your SaaS ecosystem with our comprehensive management platform",
    images: ["/social.png"],
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
