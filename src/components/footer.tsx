import Link from "next/link";
import { Github, Twitter } from "lucide-react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex items-center justify-between md:h-24">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="pl-20 text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <Link
              href={siteConfig.links.portfolio}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Yogesh Khutwad
            </Link>
            . The source code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="mr-4"
          >
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
