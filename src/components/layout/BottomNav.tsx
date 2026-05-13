"use client";

import { Home, BookOpen, FolderOpen, Mail, User, GraduationCap, Settings, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-24 items-center justify-around bg-background md:hidden px-6">
        <div className="flex w-full h-14 items-center justify-around bg-card border border-border/20 rounded-full px-2 shadow-none transition-all">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-center h-10 w-10 rounded-full transition-all",
                  isActive ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "stroke-[2.5px]")} />
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sidebar - Full Height & Integrated Logo */}
      <nav className="hidden fixed left-0 top-0 bottom-0 w-72 lg:w-80 bg-card border-r border-border/10 md:flex flex-col z-[60] transition-all shadow-none overflow-hidden">
        
        {/* Logo Section inside Sidebar */}
        <div className="p-10 pb-6">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center transition-all group-hover:rotate-12 shadow-lg shadow-primary/20 shrink-0">
               <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex flex-col -space-y-1">
               <span className="text-2xl font-black tracking-tighter leading-none text-foreground uppercase">
                 Nettuno
               </span>
               <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-40">ABA Portal</span>
            </div>
          </Link>
        </div>

        <ScrollArea className="flex-1 px-6">
          <div className="space-y-2 py-4">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-4 px-5 py-4.5 rounded-2xl transition-all",
                    isActive 
                      ? "bg-primary text-primary-foreground font-bold shadow-xl shadow-primary/10" 
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  <Icon className={cn("h-5.5 w-5.5 shrink-0 transition-transform group-hover:scale-110", isActive && "stroke-[2.5px]")} />
                  <span className="text-[11px] font-black tracking-widest uppercase">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </ScrollArea>
        
        {/* Footer Sidebar */}
        <div className="p-6 border-t border-border/5">
           <div className="bg-muted/30 rounded-2xl p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                 <User className="h-5 w-5" />
              </div>
              <div className="flex flex-col overflow-hidden">
                 <span className="text-[10px] font-black uppercase tracking-widest truncate">{isDocente ? "Prof. Rossi" : "Area Studente"}</span>
                 <span className="text-[9px] text-muted-foreground font-black uppercase tracking-widest opacity-40">v2.0 Strato</span>
              </div>
           </div>
        </div>
      </nav>
    </>
  );
}
