"use client";

import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SettingsDialog } from "@/components/layout/SettingsDialog";
import { NotificationsDialog } from "@/components/layout/NotificationsDialog";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
      {/* Area Interattiva Solida */}
      <div className="bg-background h-24 w-full pointer-events-auto flex items-center border-none transition-colors">
        <div className="w-full flex items-center justify-between px-6 md:px-10"> 
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="h-14 w-14 rounded-2xl bg-foreground text-background flex items-center justify-center transition-transform group-hover:rotate-12 shadow-none shrink-0">
                 <Sparkles className="h-7 w-7" />
              </div>
              <div className="flex flex-col -space-y-1">
                 <span className="text-2xl md:text-3xl font-black tracking-tighter leading-none text-foreground">
                   Nettuno
                 </span>
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-50">ABA Portal</span>
              </div>
            </Link>
          </div>

          {/* Search Bar - Borderless & Adaptive */}
          <div className="hidden flex-1 items-center justify-end px-12 lg:flex">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground opacity-50" />
              <Input
                placeholder="Cerca..."
                className="w-full pl-12 h-12 bg-card dark:bg-white/5 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/10 transition-all font-medium text-sm shadow-none text-foreground"
              />
            </div>
          </div>

          {/* Action Icons - Borderless & Adaptive */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="lg:hidden rounded-2xl h-14 w-14 bg-card dark:bg-white/5 border-none shadow-none text-foreground">
              <Search className="h-6 w-6" />
            </Button>
            
            <NotificationsDialog />
            
            <div className="h-10 w-px bg-border mx-2 hidden sm:block" />
            
            <div className="h-14 w-14 flex items-center justify-center">
              <SettingsDialog />
            </div>
          </div>
        </div>
      </div>

      {/* Sfumatura Gradiente */}
      <div className="h-16 w-full bg-gradient-to-b from-background to-transparent" />
    </header>
  );
}
