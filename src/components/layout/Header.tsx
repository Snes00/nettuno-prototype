"use client";

import { Bell, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SettingsDialog } from "@/components/layout/SettingsDialog";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-all h-24 flex items-center">
      <div className="w-full flex items-center justify-between px-6 md:px-10"> 
        
        {/* Logo - Posizionato esattamente per allinearsi alla Sidebar fixed */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="h-14 w-14 rounded-2xl bg-[#1A1917] flex items-center justify-center transition-transform group-hover:rotate-12 shadow-none shrink-0">
               <Sparkles className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col -space-y-1">
               <span className="text-2xl md:text-3xl font-black tracking-tighter leading-none">
                 Nettuno
               </span>
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1917]/30">ABA Portal</span>
            </div>
          </Link>
        </div>

        {/* Search Bar - Più snella e spostata a destra */}
        <div className="hidden flex-1 items-center justify-end px-12 lg:flex">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1A1917]/30" />
            <Input
              placeholder="Cerca..."
              className="w-full pl-12 h-12 bg-[#F1EFE9] border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/10 transition-all font-medium text-sm"
            />
          </div>
        </div>

        {/* Action Icons - Grandi come quelle della Sidebar (h-14) */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="lg:hidden rounded-2xl h-14 w-14 bg-[#F1EFE9]">
            <Search className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            className="h-14 w-14 rounded-2xl text-[#1A1917]/40 hover:text-[#1A1917] hover:bg-[#F1EFE9] relative transition-all flex items-center justify-center p-0"
          >
            <Bell className="h-7 w-7" />
            <span className="absolute top-4 right-4 h-2.5 w-2.5 rounded-full bg-primary border-2 border-white"></span>
          </Button>
          
          <div className="h-10 w-px bg-[#E5E2DA] mx-2 hidden sm:block" />
          
          <div className="h-14 w-14 flex items-center justify-center">
            <SettingsDialog />
          </div>
        </div>
      </div>
    </header>
  );
}
