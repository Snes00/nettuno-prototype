"use client";

import { Home, BookOpen, FolderOpen, Mail, User, GraduationCap, Sparkles, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const studentItems = [
  { label: "Dashboard", href: "/studente/dashboard", icon: Home },
  { label: "Didattica", href: "/studente/didattica", icon: BookOpen },
  { label: "Amministrazione", href: "/studente/amministrazione", icon: FolderOpen },
  { label: "Messaggi", href: "/studente/messaggi", icon: Mail },
  { label: "Area Personale", href: "/studente/area-personale", icon: User },
  { label: "Impostazioni", href: "/studente/impostazioni", icon: Settings },
];

const teacherItems = [
  { label: "Dashboard", href: "/docente/dashboard", icon: Home },
  { label: "Didattica", href: "/docente/didattica", icon: GraduationCap },
  { label: "Area Personale", href: "/docente/area-personale", icon: User },
  { label: "Impostazioni", href: "/docente/impostazioni", icon: Settings },
];

export function BottomNav() {
  const pathname = usePathname();
  
  // Determina il ruolo in base al percorso
  const isDocente = pathname.startsWith("/docente");
  const items = isDocente ? teacherItems : studentItems;

  return (
    <>
      {/* Mobile Bottom Nav - Borderless & Adaptive */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around bg-background md:hidden px-4">
        <div className="flex w-full h-14 items-center justify-around bg-card border-none rounded-full px-2 shadow-none transition-colors">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-center h-10 w-10 rounded-full transition-all",
                  isActive ? "bg-foreground text-background scale-110" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "stroke-[2.5px]")} />
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sidebar - Borderless & Adaptive Mode */}
      <nav className="hidden fixed left-6 top-28 bottom-6 w-24 md:w-72 bg-card border-none rounded-[1.5rem] md:flex flex-col p-6 gap-2 z-[60] transition-all shadow-none overflow-hidden">
        <div className="space-y-3 pt-4">
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
                    ? "bg-foreground text-background font-bold shadow-lg shadow-foreground/10" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <Icon className={cn("h-6 w-6 shrink-0 transition-transform group-hover:scale-110", isActive && "stroke-[2.5px]")} />
                <span className="hidden md:block text-sm font-black tracking-tighter uppercase">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
