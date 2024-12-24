import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function IndexPage() {
  return (
    <section className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 15 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.docs}
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Interactive Components</CardTitle>
            <CardDescription>
              Built-in form controls and interactive elements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://ui.shadcn.com"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              View all components →
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tabs Component</CardTitle>
            <CardDescription>
              Accessible tab interface for switching views
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="mt-2">
                Manage your account settings and preferences.
              </TabsContent>
              <TabsContent value="password" className="mt-2">
                Change your password and security settings.
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://ui.shadcn.com/docs/components/tabs"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Learn more about Tabs →
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Theme Support</CardTitle>
            <CardDescription>
              Light and dark mode with dynamic colors
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <div className="h-5 w-full rounded-lg bg-primary" />
                <div className="h-5 w-full rounded-lg bg-secondary" />
              </div>
              <div className="space-y-2">
                <div className="h-5 w-full rounded-lg bg-muted" />
                <div className="h-5 w-full rounded-lg bg-accent" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://ui.shadcn.com/themes"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Customize themes →
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center">
        <Link href="/dashboard" className={buttonVariants({ size: "lg" })}>
          Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
