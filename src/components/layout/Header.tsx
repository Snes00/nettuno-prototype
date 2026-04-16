"use client";

import { Bell, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SettingsDialog } from "@/components/layout/SettingsDialog";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background transition-all">
      <div className="container flex h-16 items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center transition-transform">
               <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              Nettuno
            </span>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-center px-10 md:flex">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Cerca qualsiasi cosa..."
              className="w-full pl-12 h-10 bg-muted border-none rounded-lg focus-visible:ring-1 focus-visible:ring-primary transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden rounded-lg">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative rounded-lg">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-primary border-2 border-background"></span>
          </Button>
          <div className="h-6 w-px bg-border mx-1 hidden sm:block" />
          <SettingsDialog />
        </div>
      </div>
    </header>
  );
}
