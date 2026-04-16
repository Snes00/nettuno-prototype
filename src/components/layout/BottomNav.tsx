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
      {/* Mobile Floating Bottom Nav */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-6 md:hidden">
        <nav className="flex h-16 w-full max-w-md items-center justify-around gap-1 rounded-[2rem] border border-white/10 bg-background/60 px-4 shadow-2xl backdrop-blur-2xl transition-all duration-500">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex flex-col items-center justify-center h-12 w-12 rounded-2xl transition-all duration-300",
                  isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-6 w-6 transition-transform duration-300", isActive && "scale-110 stroke-[2.5px]")} />
                {isActive && (
                  <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Desktop Side Dock */}
      <nav className="hidden fixed left-8 top-24 bottom-8 w-64 rounded-[2.5rem] border border-white/5 bg-card/50 shadow-2xl backdrop-blur-xl md:flex flex-col p-6 gap-3 z-40">
        <div className="px-4 mb-6">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">Menu Principale</p>
        </div>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]" 
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5 transition-transform group-hover:scale-110", isActive && "stroke-[2.5px]")} />
              <span className="text-sm font-bold tracking-tight">{item.label}</span>
              {isActive && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary-foreground" />
              )}
            </Link>
          );
        })}
        
        <div className="mt-auto p-4 rounded-[2rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/10">
           <p className="text-[11px] font-bold text-primary mb-1">Status Carriera</p>
           <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[23%] bg-primary" />
           </div>
           <p className="text-[9px] text-muted-foreground mt-2">42 / 180 CFU acquisiti</p>
        </div>
      </nav>
    </>
  );
}
