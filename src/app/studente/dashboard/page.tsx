"use client"

import {
  AlertCircle,
  BookOpen,
  Clock,
  MapPin,
  Calendar,
  Bell,
  ChevronRight,
  GraduationCap,
  CreditCard,
  FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { QuickActionsWidget, type QuickAction } from "@/components/dashboard/QuickActionsWidget";
import { cn } from "@/lib/utils";

const AVVISI = [
  { id: 1, titolo: "Tassa da pagare", descrizione: "Seconda rata entro il 30 Aprile.", ora: "11:15", icon: AlertCircle, iconColor: "text-role-critical-fg", iconBg: "bg-role-critical" },
  { id: 2, titolo: "Seminario Erasmus", descrizione: "Incontro informativo ore 15:00.", ora: "09:31", icon: Bell, iconColor: "text-role-warning-fg", iconBg: "bg-role-warning" },
  { id: 3, titolo: "Esame Anatomia", descrizione: "22 Aprile / 09:00 / Aula 4", ora: "18:10", icon: GraduationCap, iconColor: "text-role-info-fg", iconBg: "bg-role-info" },
  { id: 4, titolo: "Variazione Aula", descrizione: "Pittura I spostata in Aula 4.", ora: "18:10", icon: MapPin, iconColor: "text-role-accent-fg", iconBg: "bg-role-accent" },
];

const LEZIONI_OGGI = [
  { id: 1, materia: "Web Design 1", stato: "IN CORSO", orario: "14:00 / 18:00", aula: "Aula 12", statusClass: "bg-role-success text-role-success-fg", badgeBg: "bg-role-success-fg text-role-success" },
  { id: 2, materia: "Design Grafico", stato: "TERMINATA", orario: "08:00 / 12:00", aula: "Aula 15", statusClass: "bg-muted/50 text-muted-foreground", badgeBg: "bg-muted-foreground/20 text-muted-foreground" },
];

const STUDENTE_ALL_ACTIONS: QuickAction[] = [
  { id: "appelli", label: "Appelli", icon: GraduationCap, href: "/studente/didattica", tileClass: "bg-role-info", iconClass: "text-role-info-fg" },
  { id: "orario", label: "Orario", icon: Calendar, href: "/studente/didattica", tileClass: "bg-role-accent", iconClass: "text-role-accent-fg" },
  { id: "tasse", label: "Tasse", icon: CreditCard, href: "/studente/segreteria", tileClass: "bg-role-warning", iconClass: "text-role-warning-fg" },
  { id: "corsi", label: "Corsi", icon: BookOpen, href: "/studente/didattica", tileClass: "bg-role-success", iconClass: "text-role-success-fg" },
  { id: "certificati", label: "Certificati", icon: FileText, href: "/studente/segreteria", tileClass: "bg-role-critical", iconClass: "text-role-critical-fg" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 text-foreground pb-12 pt-4">
      <section className="px-1">
        <p className="text-muted-foreground text-base md:text-xl font-medium tracking-tight">
          Benvenuto, <span className="text-foreground font-black uppercase tracking-tight">Mario Rossi</span>. Ecco il tuo riepilogo di oggi.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">

        {/* Colonna Sinistra: Comunicazioni + Lezioni di Oggi */}
        <div className="md:col-span-8 space-y-8">

          {/* Comunicazioni */}
          <section className="bg-card rounded-[2rem] p-5 md:p-6 border border-border/40 md:border-none shadow-none space-y-6 transition-all hover:scale-[1.005]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-black tracking-tighter uppercase">Comunicazioni</h2>
                <Badge className="bg-role-critical-fg text-role-critical border-none rounded-full px-4 h-7 font-black text-[10px] uppercase tracking-widest">
                  2 Urgenti
                </Badge>
              </div>
            </div>
            <div className="space-y-3">
              {AVVISI.map((avviso) => (
                <div key={avviso.id} className="group flex items-center justify-between p-5 bg-muted/30 rounded-[1.5rem] hover:bg-muted/50 transition-all cursor-pointer border border-transparent hover:border-border/20">
                  <div className="flex items-center gap-5">
                    <div className={cn("h-12 w-12 rounded-full flex items-center justify-center shrink-0", avviso.iconBg)}>
                      <avviso.icon className={cn("h-6 w-6", avviso.iconColor)} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-black text-sm uppercase tracking-tight text-foreground">{avviso.titolo}</p>
                      <p className="text-xs font-medium text-muted-foreground">{avviso.descrizione}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest shrink-0 ml-4">{avviso.ora}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:opacity-80 flex items-center gap-2 transition-all">
                Vedi tutte <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </section>

          {/* Lezioni di Oggi */}
          <section className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-1">Lezioni di Oggi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {LEZIONI_OGGI.map((lezione) => (
                <div key={lezione.id} className={cn(
                  "rounded-[2rem] p-8 flex flex-col justify-between gap-8 transition-all hover:scale-[1.02] border border-transparent",
                  lezione.statusClass
                )}>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <Badge className={cn("border-none rounded-full px-4 h-7 font-black text-[10px] uppercase tracking-widest", lezione.badgeBg)}>
                        {lezione.stato}
                      </Badge>
                      <h3 className="text-2xl font-black tracking-tighter uppercase leading-none">{lezione.materia}</h3>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-background/20 flex items-center justify-center">
                      <BookOpen className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-black uppercase opacity-70">
                      <Clock className="h-3.5 w-3.5" /> {lezione.orario}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-black uppercase opacity-70">
                      <MapPin className="h-3.5 w-3.5" /> {lezione.aula}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Colonna Destra: Azioni Rapide */}
        <div className="md:col-span-4 bg-card rounded-[2rem] p-5 md:p-6 flex flex-col gap-6 border border-border/40 md:border-none shadow-none">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Azioni Rapide</span>
          <div className="flex-1">
            <QuickActionsWidget
              storageKey="nettuno_quick_actions_studente"
              allActions={STUDENTE_ALL_ACTIONS}
              defaultActionIds={["appelli", "orario"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
