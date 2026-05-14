"use client";

import {
  PlusCircle,
  Calendar,
  Pencil,
  Plus
} from "lucide-react";
import Link from "next/link";

const ACTIONS = [
  { label: "Appelli", icon: PlusCircle, href: "/docente/didattica" },
  { label: "Orario", icon: Calendar, href: "/docente/didattica" },
];

export function TeacherQuickActions() {
  return (
    <div className="relative h-full">
      <div className="grid grid-cols-2 gap-3">
        {ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              href={action.href}
              className="group aspect-square flex flex-col items-center justify-center p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all active:scale-[0.95]"
            >
              <Icon className="h-8 w-8 text-foreground mb-3" />
              <span className="text-[10px] font-black uppercase tracking-tighter text-center leading-tight">
                {action.label}
              </span>
            </Link>
          );
        })}
        
        {/* Slot Aggiungi */}
        <div className="aspect-square rounded-2xl border-2 border-dashed border-muted-foreground/20 hover:border-foreground/20 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer group">
          <div className="h-8 w-8 rounded-xl bg-muted/30 flex items-center justify-center">
            <Plus className="h-5 w-5 text-muted-foreground/60" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">Aggiungi</span>
        </div>
      </div>
      
      {/* Icona Matita per Modifica */}
      <button className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
         <Pencil className="h-5 w-5" />
      </button>
    </div>
  );
}
