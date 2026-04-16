"use client";

import { Bell, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SettingsDialog } from "@/components/layout/SettingsDialog";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-all h-24 flex items-center">
      <div className="w-full flex items-center justify-between px-6 md:px-8 md:pl-[288px]"> 
        {/* pl-[288px] corrisponde a pl-72 per allinearsi perfettamente dopo la sidebar */}
        
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-12 w-12 rounded-2xl bg-[#1A1917] flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-105 shadow-none">
               <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col -gap-1">
               <span className="text-2xl font-black tracking-tighter leading-none">
                 Nettuno
               </span>
               <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1917]/30">ABA Portal</span>
            </div>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-center px-12 lg:flex">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1A1917]/30" />
            <Input
              placeholder="Cerca qualsiasi cosa..."
              className="w-full pl-12 h-12 bg-[#F1EFE9] border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/10 transition-all font-medium text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="lg:hidden rounded-2xl h-12 w-12 bg-[#F1EFE9]">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            className="h-12 w-12 rounded-2xl text-[#1A1917]/40 hover:text-[#1A1917] hover:bg-[#F1EFE9] relative transition-all flex items-center justify-center p-0"
          >
            <Bell className="h-6 w-6" />
            <span className="absolute top-3.5 right-3.5 h-2 w-2 rounded-full bg-primary border-2 border-white"></span>
          </Button>
          
          <div className="h-8 w-px bg-[#E5E2DA] mx-2 hidden sm:block" />
          
          <div className="hover:scale-105 transition-transform">
            <SettingsDialog />
          </div>
        </div>
      </div>
    </header>
  );
}
