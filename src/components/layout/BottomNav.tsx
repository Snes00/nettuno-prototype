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
      {/* Mobile Bottom Nav - Flat Style */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background md:hidden shadow-none">
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
                "px-4 py-1 rounded-full transition-colors",
                isActive ? "bg-primary/10" : "bg-transparent"
              )}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider">{item.label.split(' ')[0]}</span>
            </Link>
          );
        })}
      </nav>

      {/* Desktop Sidebar - Flat Style */}
      <nav className="hidden fixed left-0 top-16 bottom-0 w-64 border-r bg-background md:flex flex-col p-4 gap-1 z-40">
        <div className="px-4 py-4">
           <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Menu</p>
        </div>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                isActive 
                  ? "bg-primary text-primary-foreground font-bold" 
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-bold tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
