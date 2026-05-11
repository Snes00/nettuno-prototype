"use client";

import { 
  PlusCircle, 
  Users, 
  Calendar, 
  User, 
  Settings2,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ACTIONS = [
  { 
    label: "Crea appelli", 
    icon: PlusCircle, 
    color: "bg-muted/30", 
    href: "/docente/didattica" 
  },
  { 
    label: "Orario lezioni", 
    icon: Calendar, 
    color: "bg-muted/30", 
    href: "/docente/didattica" 
  },
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
              className="group aspect-square flex flex-col items-center justify-center p-4 rounded-2xl bg-card border-none hover:bg-muted/50 transition-all active:scale-[0.95]"
            >
              <Icon className="h-8 w-8 text-foreground mb-3" />
              <span className="text-[10px] font-black uppercase tracking-tighter text-center leading-tight">
                {action.label}
              </span>
            </Link>
          );
        })}
        
        {/* Slot Vuoto */}
        <div className="aspect-square rounded-2xl border-2 border-dashed border-muted flex items-center justify-center opacity-40">
           {/* Empty slot as per wireframe */}
        </div>
      </div>
      
      {/* Icona Matita per Modifica */}
      <button className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
         <Settings2 className="h-5 w-5" />
      </button>
    </div>
  );
}
