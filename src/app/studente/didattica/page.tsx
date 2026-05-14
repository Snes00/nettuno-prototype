"use client"

import * as React from "react"
import {
  BookOpen,
  Clock,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Download,
  Plus,
  Pencil,
  X,
  FileCheck,
  Send,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const CORSI = [
  { id: "pittura-1", titolo: "Pittura e Arti Visive I", docenza: "Prof. Alessandro Rossi", presenze: 82, soglia: 75, prossimaLezione: "Mar 09:00", aula: "Aula Magno", codiceClassroom: "ABA-PIT-2026" },
  { id: "anatomia", titolo: "Anatomia Artistica", docenza: "Prof.ssa Elena Bianchi", presenze: 68, soglia: 75, prossimaLezione: "Mer 11:00", aula: "Aula 4", codiceClassroom: "ABA-ANT-2026" },
  { id: "estetica", titolo: "Estetica", docenza: "Prof. Marco Verdi", presenze: 95, soglia: 75, prossimaLezione: "Gio 14:00", aula: "Teatro", codiceClassroom: "ABA-EST-2026" },
];

const APPELLI_APERTI = [
  { id: 1, materia: "Anatomia Artistica", data: "22 Aprile", orario: "09:00", docente: "Prof.ssa Elena Bianchi", commissario: "Prof. Marco Verdi", cfa: 6, prenotato: false },
  { id: 2, materia: "Estetica", data: "05 Maggio", orario: "14:00", docente: "Prof. Marco Verdi", commissario: "Prof. Luigi Bruno", cfa: 8, prenotato: true },
];

const ESITI = [
  { id: 3, materia: "Storia dell'Arte Moderna", data: "05 Feb", voto: "26", stato: "verbalizzato" },
  { id: 4, materia: "Inglese", data: "15 Gen", voto: "IDONEO", stato: "verbalizzato" },
  { id: 5, materia: "Pittura II", data: "12 Mar", voto: "30L", stato: "da_accettare" },
];

const DAYS_OF_WEEK = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
const ORARIO_SETTIMANALE: Record<string, { materia: string; orario: string; aula: string }[]> = {
  "Mar": [{ materia: "Pittura I", orario: "09:00-13:00", aula: "Aula Magno" }],
  "Mer": [{ materia: "Anatomia Artistica", orario: "11:00-14:00", aula: "Aula 4" }],
  "Gio": [{ materia: "Estetica", orario: "14:00-17:00", aula: "Teatro" }],
};

export default function DidatticaPage() {
  const [prenotazioni, setPrenotazioni] = React.useState<Record<number, boolean>>({ 2: true });
  const [dialogAperto, setDialogAperto] = React.useState<number | null>(null);
  const [dialogRinuncia, setDialogRinuncia] = React.useState<number | null>(null);
  const [dialogAccettazione, setDialogAccettazione] = React.useState<number | null>(null);
  const [nuovaRichiesta, setNuovaRichiesta] = React.useState(false);

  const togglePrenotazione = (id: number) => {
    setPrenotazioni(prev => ({ ...prev, [id]: true }));
    setDialogAperto(null);
  };
  const rinuncia = (id: number) => {
    setPrenotazioni(prev => { const n = { ...prev }; delete n[id]; return n; });
    setDialogRinuncia(null);
  };

  return (
    <div className="flex flex-col gap-6 pb-16 animate-in fade-in duration-500 pt-4">
      <Tabs defaultValue="corsi" className="w-full">
        <TabsList className="flex w-full overflow-x-auto h-auto p-1.5 bg-muted/40 rounded-[1.5rem] mb-12 border-none no-scrollbar">
          <TabsTrigger value="corsi" className="flex-1 rounded-xl py-3 font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Corsi
          </TabsTrigger>
          <TabsTrigger value="orario" className="flex-1 rounded-xl py-3 font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Orario Lezioni
          </TabsTrigger>
          <TabsTrigger value="esami" className="flex-1 rounded-xl py-3 font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Esami
          </TabsTrigger>
          <TabsTrigger value="tesi" className="flex-1 rounded-xl py-3 font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Tesi
          </TabsTrigger>
        </TabsList>

        {/* Tab CORSI */}
        <TabsContent value="corsi" className="mt-0 focus-visible:outline-none space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORSI.map((corso) => (
              <div key={corso.id} className="bg-card rounded-[2rem] p-8 space-y-8 border border-border/40 md:border-none shadow-none transition-all hover:scale-[1.01]">
                <div className="space-y-1">
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0 mb-4" style={{ background: corso.presenze < corso.soglia ? "var(--role-critical)" : "var(--role-success)" }}>
                    <BookOpen className="h-6 w-6" style={{ color: corso.presenze < corso.soglia ? "var(--role-critical-fg)" : "var(--role-success-fg)" }} />
                  </div>
                  <h3 className="text-xl font-black tracking-tight uppercase leading-tight text-foreground">{corso.titolo}</h3>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{corso.docenza}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-muted-foreground">Presenze</span>
                    <span className={corso.presenze < corso.soglia ? "text-role-critical-fg" : "text-role-success-fg"}>{corso.presenze}%</span>
                  </div>
                  <Progress value={corso.presenze} className="h-2 rounded-full" />
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Soglia minima: {corso.soglia}%</p>
                </div>

                <div className="flex items-center gap-2 text-xs font-black text-muted-foreground uppercase">
                  <Clock className="h-3.5 w-3.5 opacity-60" />
                  <span>Prossima: {corso.prossimaLezione} • {corso.aula}</span>
                </div>

                <div className="pt-4 border-t border-border/10 flex justify-end">
                  <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:opacity-80 flex items-center gap-2 transition-all">
                    Vai al Corso <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Tab ORARIO LEZIONI */}
        <TabsContent value="orario" className="mt-0 focus-visible:outline-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Griglia Settimanale */}
            <div className="lg:col-span-7 bg-card rounded-[2rem] p-8 md:p-10 space-y-8 border border-border/40 md:border-none shadow-none">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black tracking-tight text-foreground uppercase">Settimana Corrente</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-xl h-10 w-10 bg-muted/30 border-none hover:bg-muted/50">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl h-10 w-10 bg-muted/30 border-none hover:bg-muted/50">
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {DAYS_OF_WEEK.map((d) => {
                  const lezioni = ORARIO_SETTIMANALE[d] || [];
                  return (
                    <div key={d} className="space-y-2">
                      <div className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 py-2">{d}</div>
                      <div className="min-h-[120px] rounded-2xl bg-muted/10 p-2 space-y-2">
                        {lezioni.map((l, i) => (
                          <div key={i} className="rounded-xl bg-primary/10 p-2 text-center">
                            <p className="text-[9px] font-black uppercase text-primary leading-tight">{l.materia}</p>
                            <p className="text-[8px] font-bold text-muted-foreground mt-0.5">{l.orario}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* I Tuoi Impegni Oggi */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-card rounded-[2rem] p-8 space-y-6 border border-border/40 md:border-none shadow-none">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">I Tuoi Impegni Oggi</h3>
                <div className="bg-role-success rounded-2xl p-6 space-y-4">
                  <div className="space-y-1">
                    <p className="text-xl font-black uppercase text-role-success-fg tracking-tight leading-none">Pittura I</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs font-black uppercase text-role-success-fg/80">
                      <MapPin className="h-4 w-4" /> Aula Magno
                    </div>
                    <div className="flex items-center gap-3 text-xs font-black uppercase text-role-success-fg/80">
                      <Clock className="h-4 w-4" /> 09:00 - 13:00
                    </div>
                  </div>
                  <div className="h-24 rounded-xl bg-background/30 flex items-center justify-center border border-role-success-fg/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-role-success-fg/60">Mappa Aula</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <button className="bg-card rounded-2xl p-6 flex items-center justify-between border border-border/40 md:border-none shadow-none hover:bg-muted/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-muted/30 flex items-center justify-center">
                      <Download className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-black uppercase tracking-tight text-foreground">Calendario Didattico PDF</p>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </button>
                <button className="bg-card rounded-2xl p-6 flex items-center justify-between border border-border/40 md:border-none shadow-none hover:bg-muted/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-muted/30 flex items-center justify-center">
                      <Download className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-black uppercase tracking-tight text-foreground">Scarica Report Annuale</p>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tab ESAMI */}
        <TabsContent value="esami" className="mt-0 space-y-10 focus-visible:outline-none">

          {/* Appelli Aperti */}
          <section className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-1">Appelli Aperti</h2>
            <div className="bg-card rounded-[2rem] overflow-hidden border border-border/40 md:border-none shadow-none">
              <div className="divide-y divide-border/20">
                {APPELLI_APERTI.map((appello) => {
                  const isPrenotato = prenotazioni[appello.id];
                  return (
                    <div key={appello.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 hover:bg-muted/20 transition-colors">
                      <div className="flex items-center gap-5">
                        {/* Pulsante + / spunta */}
                        {isPrenotato ? (
                          <div className="h-10 w-10 rounded-full bg-role-success flex items-center justify-center shrink-0">
                            <CheckCircle2 className="h-5 w-5 text-role-success-fg" />
                          </div>
                        ) : (
                          <Dialog open={dialogAperto === appello.id} onOpenChange={(o) => setDialogAperto(o ? appello.id : null)}>
                            <DialogTrigger asChild>
                              <button className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all shrink-0 group active:scale-90">
                                <Plus className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md rounded-[2rem] border-none bg-card shadow-none">
                              <DialogHeader className="p-8 pb-0">
                                <DialogTitle className="text-2xl font-black tracking-tighter uppercase">Conferma Prenotazione</DialogTitle>
                              </DialogHeader>
                              <div className="p-8 space-y-4">
                                <p className="text-muted-foreground font-medium">Sicuro di volerti prenotare per</p>
                                <p className="text-xl font-black text-foreground uppercase tracking-tight">{appello.materia}</p>
                                <div className="text-xs font-black text-muted-foreground uppercase tracking-widest space-y-1">
                                  <p>{appello.data} • {appello.orario}</p>
                                  <p>{appello.docente}</p>
                                  <p>Commissario: {appello.commissario}</p>
                                  <p>CFA: {appello.cfa}</p>
                                </div>
                              </div>
                              <DialogFooter className="p-8 pt-0 flex gap-3">
                                <Button variant="outline" onClick={() => setDialogAperto(null)} className="flex-1 rounded-xl h-12 border-border/40 font-black uppercase tracking-widest text-[10px]">Annulla</Button>
                                <Button onClick={() => togglePrenotazione(appello.id)} className="flex-1 rounded-xl h-12 bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] shadow-none">Prenotati</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        )}
                        <div>
                          <p className="font-black text-foreground uppercase tracking-tight">{appello.materia}</p>
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-0.5">{appello.data} • {appello.orario} • {appello.docente}</p>
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Commissario: {appello.commissario} • CFA: {appello.cfa}</p>
                        </div>
                      </div>
                      {isPrenotato && (
                        <Dialog open={dialogRinuncia === appello.id} onOpenChange={(o) => setDialogRinuncia(o ? appello.id : null)}>
                          <DialogTrigger asChild>
                            <button className="h-9 w-9 rounded-xl bg-muted/30 hover:bg-role-critical/20 flex items-center justify-center transition-all shrink-0 active:scale-90">
                              <Pencil className="h-4 w-4 text-muted-foreground" />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md rounded-[2rem] border-none bg-card shadow-none">
                            <DialogHeader className="p-8 pb-0">
                              <DialogTitle className="text-2xl font-black tracking-tighter uppercase">Rinuncia Appello</DialogTitle>
                            </DialogHeader>
                            <div className="p-8 space-y-4">
                              <p className="text-muted-foreground font-medium">Vuoi disiscriverti davvero da</p>
                              <p className="text-xl font-black text-foreground uppercase tracking-tight">{appello.materia}</p>
                            </div>
                            <DialogFooter className="p-8 pt-0 flex gap-3">
                              <Button variant="outline" onClick={() => setDialogRinuncia(null)} className="flex-1 rounded-xl h-12 border-border/40 font-black uppercase tracking-widest text-[10px]">Mantieni</Button>
                              <Button onClick={() => rinuncia(appello.id)} className="flex-1 rounded-xl h-12 bg-role-critical-fg text-role-critical font-black uppercase tracking-widest text-[10px] shadow-none">Rinuncia</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Esiti */}
          <section className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-1">Esiti</h2>
            <div className="bg-card rounded-[2rem] overflow-hidden border border-border/40 md:border-none shadow-none">
              <div className="divide-y divide-border/20">
                {ESITI.map((esito) => (
                  <div key={esito.id} className="flex items-center justify-between p-6 hover:bg-muted/20 transition-colors">
                    <div>
                      <p className="font-black text-foreground uppercase tracking-tight">{esito.materia}</p>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-0.5">{esito.data}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {esito.stato === "da_accettare" ? (
                        <>
                          <div className="h-12 w-12 rounded-full bg-role-warning flex items-center justify-center font-black text-role-warning-fg text-sm">{esito.voto}</div>
                          <Dialog open={dialogAccettazione === esito.id} onOpenChange={(o) => setDialogAccettazione(o ? esito.id : null)}>
                            <DialogTrigger asChild>
                              <button className="h-9 w-9 rounded-xl bg-role-warning/30 flex items-center justify-center transition-all active:scale-90">
                                <CheckCircle2 className="h-4 w-4 text-role-warning-fg" />
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md rounded-[2rem] border-none bg-card shadow-none">
                              <DialogHeader className="p-8 pb-0">
                                <DialogTitle className="text-2xl font-black tracking-tighter uppercase">Accettazione Voto</DialogTitle>
                              </DialogHeader>
                              <div className="p-8 space-y-6">
                                <div className="space-y-1">
                                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Materia</p>
                                  <p className="text-xl font-black uppercase">{esito.materia}</p>
                                </div>
                                <div className="flex items-center justify-center">
                                  <div className="h-24 w-24 rounded-3xl bg-role-success flex items-center justify-center">
                                    <span className="text-4xl font-black text-role-success-fg">{esito.voto}</span>
                                  </div>
                                </div>
                              </div>
                              <DialogFooter className="p-8 pt-0 flex gap-3">
                                <Button variant="outline" onClick={() => setDialogAccettazione(null)} className="flex-1 rounded-xl h-12 border-border/40 font-black uppercase tracking-widest text-[10px]">Rifiuta</Button>
                                <Button onClick={() => setDialogAccettazione(null)} className="flex-1 rounded-xl h-12 bg-role-success-fg text-role-success font-black uppercase tracking-widest text-[10px] shadow-none">Accetta</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </>
                      ) : (
                        <>
                          <div className="h-12 w-12 rounded-full bg-role-success flex items-center justify-center font-black text-role-success-fg text-sm">{esito.voto}</div>
                          <Badge className="bg-role-success-fg/10 text-role-success-fg border-none text-[9px] font-black uppercase tracking-widest">Verbalizzato</Badge>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Tab TESI */}
        <TabsContent value="tesi" className="mt-0 focus-visible:outline-none">
          {!nuovaRichiesta ? (
            <div className="space-y-10">
              {/* Stato: nessuna tesi avviata o monitoraggio */}
              <div className="bg-card rounded-[2rem] p-10 md:p-12 space-y-12 border border-border/40 md:border-none shadow-none">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Status Laurea</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase leading-none">Percorso Tesi</h2>
                    <p className="text-muted-foreground font-medium text-lg tracking-tight mt-2">Sessione Estiva • Luglio 2026</p>
                  </div>
                  <div className="h-24 w-24 rounded-3xl bg-role-accent flex items-center justify-center shrink-0 shadow-none">
                    <GraduationCap className="h-12 w-12 text-role-accent-fg" />
                  </div>
                </div>

                {/* Fasi Tesi */}
                <div className="space-y-3">
                  {[
                    { n: 1, label: "Capitolo 1", stato: "Approvato", status: "completed" },
                    { n: 2, label: "Capitolo 2", stato: "Da approvare", status: "active" },
                    { n: 3, label: "Capitolo 3", stato: "In attesa", status: "pending" },
                    { n: 4, label: "Prenotazione", stato: "Bloccata", status: "pending" },
                  ].map((s) => (
                    <div key={s.n} className={cn(
                      "flex items-center gap-5 p-5 rounded-2xl transition-all",
                      s.status === "completed" ? "bg-role-success/20" :
                      s.status === "active" ? "bg-role-accent/40" :
                      "bg-muted/20"
                    )}>
                      <div className={cn(
                        "h-10 w-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0",
                        s.status === "completed" ? "bg-foreground text-background" :
                        s.status === "active" ? "bg-role-accent-fg text-white" :
                        "bg-muted text-muted-foreground"
                      )}>
                        {s.status === "completed" ? <FileCheck className="h-5 w-5" /> : s.n}
                      </div>
                      <div className="flex-1">
                        <p className="font-black uppercase tracking-tight text-foreground">{s.label}</p>
                        <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{s.stato}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-border/20 flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setNuovaRichiesta(true)}
                    className="rounded-xl bg-primary text-primary-foreground px-10 h-14 font-black uppercase tracking-widest text-xs shadow-none active:scale-95 transition-all"
                  >
                    <Plus className="h-4 w-4 mr-2" /> Nuova Richiesta
                  </Button>
                  <Button variant="outline" className="rounded-xl px-10 h-14 font-black uppercase tracking-widest text-xs border-border/40 active:scale-95 transition-all">
                    Carica File
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-card rounded-[2rem] p-8 md:p-12 space-y-10 border border-border/40 md:border-none shadow-none animate-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setNuovaRichiesta(false)}
                  className="h-10 w-10 rounded-full bg-muted/30 flex items-center justify-center hover:bg-muted transition-all active:scale-90"
                >
                  <ChevronLeft className="h-5 w-5 text-muted-foreground" />
                </button>
                <h2 className="text-3xl font-black tracking-tighter uppercase text-foreground">Nuova Richiesta Tesi</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Docente Relatore</Label>
                  <Input placeholder="es. Prof. Alessandro Rossi" className="h-14 rounded-2xl bg-muted/20 border-none focus-visible:ring-primary/20 font-bold" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Docente Correlatore</Label>
                  <Input placeholder="es. Prof.ssa Elena Bianchi" className="h-14 rounded-2xl bg-muted/20 border-none focus-visible:ring-primary/20 font-bold" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Titolo Provvisorio</Label>
                  <Input placeholder="es. L'uso della luce nel Caravaggio..." className="h-14 rounded-2xl bg-muted/20 border-none focus-visible:ring-primary/20 font-bold" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Breve Descrizione</Label>
                  <textarea
                    placeholder="Descrivi brevemente il tuo progetto di tesi..."
                    className="w-full min-h-[120px] rounded-2xl bg-muted/20 border-none p-4 font-medium text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="flex gap-4 justify-end pt-4 border-t border-border/20">
                <Button variant="outline" onClick={() => setNuovaRichiesta(false)} className="rounded-xl h-14 px-10 font-black uppercase tracking-widest text-xs border-border/40">Annulla</Button>
                <Button className="rounded-xl h-14 px-10 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs shadow-none active:scale-95">
                  <Send className="h-4 w-4 mr-2" /> Invia Richiesta
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
