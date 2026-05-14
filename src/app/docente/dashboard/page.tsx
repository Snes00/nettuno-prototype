"use client"

import {
  AlertCircle,
  BookOpen,
  Clock,
  MapPin,
  ChevronRight,
  Calendar,
  Bell,
  Users,
  PlusCircle,
  FileText,
  GraduationCap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { QuickActionsWidget, type QuickAction } from "@/components/dashboard/QuickActionsWidget";
import { cn } from "@/lib/utils";

const AVVISI = [
  { id: 1, titolo: "Appello Straordinario", descrizione: "Richiesta apertura appello per Pittura II.", ora: "11:15", icon: AlertCircle, iconColor: "text-role-critical-fg", iconBg: "bg-role-critical" },
  { id: 2, titolo: "Verbale da firmare", descrizione: "3 verbali in attesa di firma digitale.", ora: "Oggi", icon: Bell, iconColor: "text-role-warning-fg", iconBg: "bg-role-warning" },
  { id: 3, titolo: "Ricevimento Studenti", descrizione: "Marco Bianchi ha prenotato per domani.", ora: "Ieri", icon: Users, iconColor: "text-role-info-fg", iconBg: "bg-role-info" },
  { id: 4, titolo: "Consiglio Accademico", descrizione: "Convocazione per il 15 Maggio.", ora: "3gg fa", icon: Calendar, iconColor: "text-role-accent-fg", iconBg: "bg-role-accent" },
];

const DOCENTE_ALL_ACTIONS: QuickAction[] = [
  { id: "appelli", label: "Appelli", icon: PlusCircle, href: "/docente/didattica", tileClass: "bg-role-info", iconClass: "text-role-info-fg" },
  { id: "orario", label: "Orario", icon: Calendar, href: "/docente/didattica", tileClass: "bg-role-accent", iconClass: "text-role-accent-fg" },
  { id: "verbali", label: "Verbali", icon: FileText, href: "/docente/didattica", tileClass: "bg-role-warning", iconClass: "text-role-warning-fg" },
  { id: "ricevimento", label: "Ricevimento", icon: Users, href: "/docente/studenti", tileClass: "bg-role-success", iconClass: "text-role-success-fg" },
  { id: "tesi", label: "Tesi", icon: GraduationCap, href: "/docente/studenti", tileClass: "bg-role-critical", iconClass: "text-role-critical-fg" },
];

export default function DocenteDashboardPage() {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-500 pb-12 pt-4">
      {/* Header Benvenuto */}
      <section className="px-1">
        <p className="text-muted-foreground text-base md:text-xl font-medium tracking-tight">
          Bentornato, <span className="text-foreground font-black uppercase tracking-tight">Prof. Rossi</span>. Ecco il tuo riepilogo di oggi.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Colonna Sinistra: Comunicazioni + Attività */}
        <div className="md:col-span-8 space-y-12">
          
          {/* Sezione Comunicazioni */}
          <section className="bg-card rounded-[2rem] p-8 md:p-10 border border-border/40 md:border-none shadow-none space-y-8 transition-all hover:scale-[1.005]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-black tracking-tighter uppercase">Comunicazioni</h2>
                <Badge className="bg-role-critical-fg text-role-critical border-none rounded-full px-4 h-7 font-black text-[10px] uppercase tracking-widest">
                  2 Urgenti
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              {AVVISI.slice(0, 3).map((avviso) => (
                <div key={avviso.id} className="group flex items-center justify-between p-6 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-all cursor-pointer border border-transparent hover:border-border/20">
                  <div className="flex items-center gap-5">
                    <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center shrink-0", avviso.iconBg)}>
                      <avviso.icon className={cn("h-6 w-6", avviso.iconColor)} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-black text-sm uppercase tracking-tight text-foreground">{avviso.titolo}</p>
                      <p className="text-xs font-bold text-muted-foreground">{avviso.descrizione}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">{avviso.ora}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:opacity-80 flex items-center gap-2 transition-all">
                Vedi tutte <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </section>

          {/* Sezione Attività di Oggi */}
          <section className="space-y-6">
            <h2 className="text-xl font-black tracking-tighter uppercase px-2">Attività di oggi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Lezione In Corso */}
              <div className="bg-role-success rounded-[2rem] p-8 space-y-8 relative group cursor-pointer border border-role-success-fg/10 transition-all hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <Badge className="bg-role-success-fg text-role-success border-none rounded-full px-3 h-6 font-black text-[9px] uppercase tracking-widest">
                    In Corso
                  </Badge>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-black tracking-tighter leading-none uppercase text-role-success-fg">Web Design 1</h3>
                  <p className="text-[10px] font-black text-role-success-fg/60 uppercase tracking-[0.2em]">Triennio · Aula 12</p>
                </div>
                <div className="flex flex-col gap-2">
                   <div className="flex items-center gap-2 text-xs font-black text-role-success-fg/80">
                      <Clock className="h-4 w-4" /> 14:00 / 18:00
                   </div>
                </div>
                <div className="absolute bottom-8 right-8 h-10 w-10 rounded-xl bg-role-success-fg/10 flex items-center justify-center text-role-success-fg">
                   <BookOpen className="h-5 w-5" />
                </div>
              </div>

              {/* Lezione Terminata */}
              <div className="bg-muted/50 rounded-[2rem] p-8 space-y-8 relative group cursor-pointer border border-border/20 transition-all hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <Badge className="bg-muted-foreground/20 text-muted-foreground border-none rounded-full px-3 h-6 font-black text-[9px] uppercase tracking-widest">
                    Terminata
                  </Badge>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-black tracking-tighter leading-none uppercase text-foreground">Web Design</h3>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Biennio · Aula 15</p>
                </div>
                <div className="flex flex-col gap-2">
                   <div className="flex items-center gap-2 text-xs font-black text-muted-foreground">
                      <Clock className="h-4 w-4" /> 08:00 / 12:00
                   </div>
                   <div className="flex items-center gap-2 text-xs font-black text-muted-foreground">
                      <MapPin className="h-4 w-4" /> Aula 15
                   </div>
                </div>
                <div className="absolute bottom-8 right-8 h-10 w-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
                   <BookOpen className="h-5 w-5" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Colonna Destra: Azioni Rapide */}
        <div className="md:col-span-4 sticky top-32">
          <section className="bg-card rounded-[2rem] p-8 md:p-10 space-y-8 min-h-[400px] flex flex-col border border-border/40 md:border-none shadow-none transition-all hover:scale-[1.005]">
            <h2 className="text-xl font-black tracking-tighter uppercase">Azioni Rapide</h2>
            <div className="flex-1">
              <QuickActionsWidget
                storageKey="nettuno_quick_actions_docente"
                allActions={DOCENTE_ALL_ACTIONS}
                defaultActionIds={["appelli", "orario"]}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
