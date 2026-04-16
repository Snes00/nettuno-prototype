"use client";

import { Bell, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SettingsDialog } from "@/components/layout/SettingsDialog";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
               <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-2xl font-black tracking-tighter bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
              Nettuno
            </span>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-center px-10 md:flex">
          <div className="relative w-full max-w-lg group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              placeholder="Cerca qualsiasi cosa..."
              className="w-full pl-12 h-11 bg-muted/30 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all placeholder:text-muted-foreground/60"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden touch-target rounded-2xl hover:bg-muted/50">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative touch-target rounded-2xl hover:bg-muted/50">
            <Bell className="h-5 w-5" />
            <span className="absolute top-3 right-3 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          </Button>
          <div className="h-8 w-px bg-border/50 mx-1 hidden sm:block" />
          <SettingsDialog />
        </div>
      </div>
    </header>
  );
}
