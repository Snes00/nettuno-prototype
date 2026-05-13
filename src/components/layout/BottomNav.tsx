"use client";

import { Home, BookOpen, FolderOpen, Mail, User, GraduationCap, Settings, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

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

      {/* Desktop Sidebar - Floating Rounded Box with Integrated Logo */}
      <nav className="hidden fixed left-6 top-6 bottom-6 w-72 lg:w-80 bg-card border border-border/10 rounded-[2.5rem] md:flex flex-col z-[60] transition-all shadow-none overflow-hidden hover:border-border/20">
        
        {/* Logo Section inside the rounded Sidebar Box */}
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
        
        {/* Footer Sidebar - Academic Progress summary restored */}
        <div className="p-8 border-t border-border/5 space-y-6">
           {!isDocente ? (
             <div className="space-y-4">
                <div className="flex justify-between items-end">
                   <div className="space-y-1">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Percorso</p>
                      <p className="text-xs font-black uppercase tracking-tight text-foreground">42 / 180 CFU</p>
                   </div>
                   <span className="text-[10px] font-black text-primary">23%</span>
                </div>
                <Progress value={23} className="h-1.5 bg-muted/40 [&>div]:bg-primary rounded-full" />
             </div>
           ) : (
             <div className="flex items-center gap-4 bg-muted/20 p-4 rounded-2xl">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                   <User className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                   <p className="text-[10px] font-black uppercase tracking-widest text-foreground">A. Rossi</p>
                   <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest opacity-60">Docente</p>
                </div>
             </div>
           )}
           
           <div className="flex items-center justify-center gap-2 text-[8px] font-black uppercase tracking-[0.3em] text-muted-foreground/30">
              Nettuno v4.2.0 • ABA Ecosystem
           </div>
        </div>
      </nav>
    </>
  );
}
