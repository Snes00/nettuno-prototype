import {
  AlertCircle,
  BookOpen,
  Clock,
  MapPin,
  Calendar,
  Bell,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Plus,
  Pencil
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const AVVISI = [
  { id: 1, titolo: "Tassa da pagare", descrizione: "Seconda rata entro il 30 Aprile.", ora: "11:15", icon: AlertCircle, color: "text-role-critical-fg" },
  { id: 2, titolo: "Seminario Erasmus", descrizione: "Incontro informativo ore 15:00.", ora: "09:31", icon: Bell, color: "text-role-warning-fg" },
  { id: 3, titolo: "Esame Anatomia", descrizione: "22 Aprile / 09:00 / Aula 4", ora: "18:10", icon: GraduationCap, color: "text-role-info-fg" },
  { id: 4, titolo: "Variazione Aula", descrizione: "Pittura I spostata in Aula 4.", ora: "18:10", icon: MapPin, color: "text-role-accent-fg" },
];

const LEZIONI_OGGI = [
  { id: 1, materia: "Web Design 1", stato: "IN CORSO", orario: "14:00 / 18:00", aula: "Aula 12", statusClass: "bg-role-success text-role-success-fg", badgeBg: "bg-role-success-fg text-role-success" },
  { id: 2, materia: "Design Grafico", stato: "TERMINATA", orario: "08:00 / 12:00", aula: "Aula 15", statusClass: "bg-muted/50 text-muted-foreground", badgeBg: "bg-muted-foreground/20 text-muted-foreground" },
];

const AZIONI_RAPIDE = [
  { label: "Appelli", icon: GraduationCap, href: "/studente/didattica" },
  { label: "Orario", icon: Calendar, href: "/studente/didattica" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-500 text-foreground pb-12 pt-4">
      <section className="px-1">
        <p className="text-muted-foreground text-base md:text-xl font-medium tracking-tight">
          Benvenuto, <span className="text-foreground font-black uppercase tracking-tight">Mario Rossi</span>. Ecco il tuo riepilogo di oggi.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

        {/* Colonna Sinistra: Comunicazioni + Lezioni di Oggi */}
        <div className="md:col-span-8 space-y-8">

          {/* Comunicazioni */}
          <section className="bg-card rounded-[2rem] p-8 md:p-10 border border-border/40 md:border-none shadow-none space-y-6 transition-all hover:scale-[1.005]">
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
                <div key={avviso.id} className="group flex items-center justify-between p-5 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-all cursor-pointer border border-transparent hover:border-border/20">
                  <div className="flex items-center gap-4">
                    <avviso.icon className={cn("h-5 w-5 shrink-0", avviso.color)} />
                    <div>
                      <p className={cn("font-black text-sm uppercase tracking-tight leading-none mb-1", avviso.color)}>{avviso.titolo}</p>
                      <p className="text-xs font-medium text-muted-foreground">{avviso.descrizione}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest shrink-0 ml-4">{avviso.ora}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Button variant="link" className="text-[10px] font-black uppercase tracking-widest text-primary gap-1 p-0 h-auto">
                Vedi Tutte <ArrowRight className="h-3 w-3" />
              </Button>
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
                    <div className="h-10 w-10 rounded-xl bg-background/20 flex items-center justify-center">
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
        <div className="md:col-span-4 bg-card rounded-[2rem] p-8 md:p-10 flex flex-col gap-6 border border-border/40 md:border-none shadow-none">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Azioni Rapide</span>
          <div className="relative flex-1">
            <div className="grid grid-cols-2 gap-3">
              {AZIONI_RAPIDE.map((azione) => {
                const Icon = azione.icon;
                return (
                  <a
                    key={azione.label}
                    href={azione.href}
                    className="group aspect-square flex flex-col items-center justify-center p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all active:scale-[0.95]"
                  >
                    <Icon className="h-8 w-8 text-foreground mb-3" />
                    <span className="text-[10px] font-black uppercase tracking-tighter text-center leading-tight">{azione.label}</span>
                  </a>
                );
              })}
              <div className="aspect-square rounded-2xl border-2 border-dashed border-muted-foreground/20 hover:border-foreground/20 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer">
                <div className="h-8 w-8 rounded-xl bg-muted/30 flex items-center justify-center">
                  <Plus className="h-5 w-5 text-muted-foreground/60" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">Aggiungi</span>
              </div>
            </div>
            <button className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-90">
              <Pencil className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
