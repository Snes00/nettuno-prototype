"use client";

import { Home, BookOpen, FolderOpen, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  {
    label: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    label: "Didattica",
    href: "/didattica",
    icon: BookOpen,
  },
  {
    label: "Amministrazione",
    href: "/amministrazione",
    icon: FolderOpen,
  },
  {
    label: "Messaggi",
    href: "/messaggi",
    icon: Mail,
  },
  {
    label: "Area Personale",
    href: "/area-personale",
    icon: User,
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Bottom Nav - Bento Flat */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around bg-white md:hidden px-4">
        <div className="flex w-full h-14 items-center justify-around bg-white border border-[#E5E2DA] rounded-full px-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-center h-10 w-10 rounded-full transition-all",
                  isActive ? "bg-[#1A1917] text-white scale-110" : "text-[#1A1917]/30 hover:text-[#1A1917]"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "stroke-[2.5px]")} />
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sidebar - Bento White Mode */}
      <nav className="hidden fixed left-6 top-28 bottom-6 w-24 md:w-72 bg-white border border-[#E5E2DA] rounded-[1.5rem] md:flex flex-col p-6 gap-2 z-[60] transition-all shadow-none">
        <div className="space-y-3">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center justify-center md:justify-start gap-4 px-4 py-5 rounded-2xl transition-all",
                  isActive 
                    ? "bg-[#1A1917] text-white font-bold" 
                    : "text-[#1A1917]/40 hover:bg-[#F1EFE9] hover:text-[#1A1917]"
                )}
              >
                <Icon className={cn("h-6 w-6 shrink-0 transition-transform group-hover:scale-110", isActive && "stroke-[2.5px]")} />
                <span className="hidden md:block text-sm font-bold tracking-tight">{item.label}</span>
              </Link>
            );
          })}
        </div>
        
        <div className="mt-auto hidden md:block p-8 rounded-2xl bg-[#F8F5F0] border border-[#E5E2DA]/50">
           <div className="flex justify-between items-center mb-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1917]/30">Progresso</p>
              <span className="text-[10px] text-[#1A1917] font-black">23%</span>
           </div>
           <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-[#E5E2DA]">
              <div className="h-full w-[23%] bg-[#1A1917]" />
           </div>
           <p className="text-[10px] text-[#1A1917]/50 mt-4 font-bold uppercase tracking-tight">42 / 180 CFU</p>
        </div>
      </nav>
    </>
  );
}
