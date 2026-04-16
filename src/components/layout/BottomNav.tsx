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
      {/* Mobile Bottom Nav - Material 3 Flat */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background md:hidden">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 w-full h-full transition-colors",
                isActive ? "text-primary font-bold" : "text-muted-foreground"
              )}
            >
              <div className={cn(
                "px-5 py-1 rounded-full transition-colors",
                isActive ? "bg-primary/10" : "bg-transparent"
              )}>
                <Icon className={cn("h-5 w-5", isActive && "stroke-[2.5px]")} />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider">{item.label.split(' ')[0]}</span>
            </Link>
          );
        })}
      </nav>

      {/* Desktop Floating Side Dock - Adjusted Top to avoid Header overlap */}
      <nav className="hidden fixed left-4 top-20 bottom-4 w-64 rounded-[2rem] bg-secondary md:flex flex-col p-6 gap-2 z-40">
        <div className="px-4 py-4 mb-2">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Menu Principale</p>
        </div>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all",
                isActive 
                  ? "bg-primary text-primary-foreground font-bold" 
                  : "text-muted-foreground hover:bg-black/5 dark:hover:bg-white/5"
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
        
        <div className="mt-auto p-5 rounded-[1.5rem] bg-primary/5 border border-primary/10">
           <p className="text-[11px] font-bold text-primary mb-2">Status Carriera</p>
           <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[23%] bg-primary" />
           </div>
           <p className="text-[9px] text-muted-foreground mt-2 font-medium">42 / 180 CFU acquisiti</p>
        </div>
      </nav>
    </>
  );
}
