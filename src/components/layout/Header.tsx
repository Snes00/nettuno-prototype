"use client";

import { Bell, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SettingsDialog } from "@/components/layout/SettingsDialog";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-all">
      <div className="max-w-[1280px] mx-auto flex h-20 items-center justify-between px-6 md:px-8">
        {/* Logo - Allineato a sinistra con la sidebar */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:rotate-12">
               <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              Nettuno
            </span>
          </Link>
        </div>

        {/* Search Bar - Centrale */}
        <div className="hidden flex-1 items-center justify-center px-12 md:flex">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
            <Input
              placeholder="Cerca esami, materiali, avvisi..."
              className="w-full pl-12 h-12 bg-muted border-none rounded-xl focus-visible:ring-1 focus-visible:ring-primary transition-all font-medium"
            />
          </div>
        </div>

        {/* Action Icons - Allineate a destra con lo stesso stile della sidebar */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden rounded-xl h-11 w-11">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            className="h-12 w-12 rounded-xl text-[#1A1917]/40 hover:text-[#1A1917] hover:bg-muted relative transition-all"
          >
            <Bell className="h-6 w-6" />
            <span className="absolute top-3.5 right-3.5 h-2 w-2 rounded-full bg-primary border-2 border-background"></span>
          </Button>
          
          <div className="h-8 w-px bg-border mx-2 hidden sm:block" />
          
          <div className="hover:scale-105 transition-transform">
            <SettingsDialog />
          </div>
        </div>
      </div>
    </header>
  );
}
