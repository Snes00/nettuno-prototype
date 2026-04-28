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
    color: "bg-bento-pink", 
    textColor: "text-foreground",
    href: "/docente/didattica" 
  },
  { 
    label: "Presenze", 
    icon: Users, 
    color: "bg-bento-green", 
    textColor: "text-foreground",
    href: "/docente/didattica" 
  },
  { 
    label: "Orario lezioni", 
    icon: Calendar, 
    color: "bg-bento-yellow", 
    textColor: "text-foreground",
    href: "/docente/didattica" 
  },
  { 
    label: "Profilo", 
    icon: User, 
    color: "bg-bento-blue", 
    textColor: "text-foreground",
    href: "/docente/area-personale" 
  },
  { 
    label: "Personalizza", 
    icon: Settings2, 
    color: "bg-bento-purple", 
    textColor: "text-foreground",
    href: "/docente/area-personale" 
  },
];

export function TeacherQuickActions() {
  return (
    <div className="grid grid-cols-1 gap-3">
      {ACTIONS.map((action) => {
        const Icon = action.icon;
        return (
          <Link
            key={action.label}
            href={action.href}
            className="group flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6", action.color)}>
                <Icon className={cn("h-5 w-5", action.textColor)} />
              </div>
              <span className="text-sm font-bold tracking-tight text-foreground">{action.label}</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </Link>
        );
      })}
    </div>
  );
}
