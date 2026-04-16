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
        <div className="flex w-full h-14 items-center justify-around bg-[#1A1917] rounded-full px-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-center h-10 w-10 rounded-full transition-all",
                  isActive ? "bg-white text-[#1A1917] scale-110" : "text-white/40 hover:text-white"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "stroke-[2.5px]")} />
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sidebar - Bento Solid Block */}
      {/* top-24 per lasciare spazio all'header ed evitare overlap con il logo Nettuno */}
      <nav className="hidden fixed left-6 top-24 bottom-6 w-24 md:w-64 bg-[#1A1917] rounded-[2.5rem] md:flex flex-col p-6 gap-2 z-40 transition-all shadow-none">
        <div className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center justify-center md:justify-start gap-4 px-4 py-4 rounded-2xl transition-all",
                  isActive 
                    ? "bg-white text-[#1A1917] font-bold" 
                    : "text-white/40 hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon className={cn("h-6 w-6 shrink-0 transition-transform group-hover:scale-110", isActive && "stroke-[2.5px]")} />
                <span className="hidden md:block text-sm font-bold tracking-tight">{item.label}</span>
              </Link>
            );
          })}
        </div>
        
        <div className="mt-auto hidden md:block p-6 rounded-[2rem] bg-white/5 border border-white/5">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">Progresso</p>
           <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[23%] bg-white" />
           </div>
           <p className="text-[10px] text-white/60 mt-3 font-bold">42 / 180 CFU</p>
        </div>
      </nav>
    </>
  );
}
