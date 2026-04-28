"use client";

import { Home, BookOpen, FolderOpen, Mail, User, Users, Calendar, ClipboardCheck, FileText, UserCheck, GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const studentItems = [
  { label: "Dashboard", href: "/studente/dashboard", icon: Home },
  { label: "Didattica", href: "/studente/didattica", icon: BookOpen },
  { label: "Amministrazione", href: "/studente/amministrazione", icon: FolderOpen },
  { label: "Messaggi", href: "/studente/messaggi", icon: Mail },
  { label: "Area Personale", href: "/studente/area-personale", icon: User },
];

const teacherItems = [
  { label: "Dashboard", href: "/docente/dashboard", icon: Home },
  { label: "Didattica", href: "/docente/didattica", icon: GraduationCap },
  { label: "Amministrazione", href: "/docente/amministrazione", icon: FolderOpen },
  { label: "Messaggi", href: "/docente/messaggi", icon: Mail },
  { label: "Area Personale", href: "/docente/area-personale", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();
  
  // Determina il ruolo in base al percorso
  const isDocente = pathname.startsWith("/docente");
  const items = isDocente ? teacherItems : studentItems;
  const roleLabel = isDocente ? "Docente" : "Studente";

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
      <nav className="hidden fixed left-6 top-28 bottom-6 w-24 md:w-72 bg-card border-none rounded-[1.5rem] md:flex flex-col p-6 gap-2 z-[60] transition-all shadow-none">
        <div className="mb-6 px-4 py-2 rounded-xl bg-muted/30 flex items-center gap-3">
          <div className={cn(
            "h-2 w-2 rounded-full animate-pulse",
            isDocente ? "bg-bento-pink" : "bg-bento-blue"
          )} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Portal {roleLabel}</span>
        </div>
        
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
                    ? "bg-foreground text-background font-bold" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className={cn("h-6 w-6 shrink-0 transition-transform group-hover:scale-110", isActive && "stroke-[2.5px]")} />
                <span className="hidden md:block text-sm font-bold tracking-tight">{item.label}</span>
              </Link>
            );
          })}
        </div>
        
        <div className="mt-auto hidden md:block p-8 rounded-2xl bg-muted/50 border-none transition-colors">
           <div className="flex justify-between items-center mb-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                {isDocente ? "Carico Didattico" : "Progresso"}
              </p>
              <span className="text-[10px] text-foreground font-black">{isDocente ? "60%" : "23%"}</span>
           </div>
           <div className="h-2 w-full bg-background rounded-full overflow-hidden border-none shadow-none">
              <div className={cn(
                "h-full transition-all duration-1000",
                isDocente ? "w-[60%] bg-foreground" : "w-[23%] bg-foreground"
              )} />
           </div>
           <p className="text-[10px] text-muted-foreground mt-4 font-bold uppercase tracking-tight opacity-50">
             {isDocente ? "3 / 5 Corsi Completati" : "42 / 180 CFU"}
           </p>
        </div>
      </nav>
    </>
  );
}
