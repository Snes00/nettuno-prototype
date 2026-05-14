"use client"

import * as React from "react"
import Link from "next/link"
import {
  GraduationCap,
  Download,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ArrowRight,
  BookOpen,
  Users,
  Calendar,
  FileText,
  Clock,
  MapPin,
  Plus,
  Search,
  CheckCircle2,
  X,
  MessageSquare,
  AlertTriangle,
  PenLine,
  Send,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
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

const DAYS_OF_WEEK = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

export default function DocenteDidatticaPage() {
  const [creaAppello, setCreaAppello] = React.useState(false)
  return (
    <div className="flex flex-col gap-6 pb-16 animate-in fade-in duration-500 pt-4">
      <Tabs defaultValue="corsi" className="w-full">
        <TabsList className="flex w-full overflow-x-auto h-auto p-1.5 bg-muted/40 rounded-[1.5rem] mb-12 border-none no-scrollbar">
          <TabsTrigger value="corsi" className="flex-1 rounded-xl py-3.5 gap-2 font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Corsi
          </TabsTrigger>
          <TabsTrigger value="orario" className="flex-1 rounded-xl py-3.5 gap-2 font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Orario Lezioni
          </TabsTrigger>
<TabsTrigger value="esami" className="flex-1 rounded-xl py-3.5 gap-2 font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Esami
          </TabsTrigger>
          <TabsTrigger value="tesi" className="flex-1 rounded-xl py-3.5 gap-2 font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Tesi
          </TabsTrigger>
        </TabsList>

        {/* Tab CORSI */}
        <TabsContent value="corsi" className="mt-0 focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: "web-1", titolo: "Web Design 1", triennio: "Triennio", iscritti: 30, lezione: "Lunedì / 14:00" },
              { id: "web-2", titolo: "Web Design 2", triennio: "Triennio", iscritti: 40, lezione: "Martedì / 09:00" },
            ].map((corso) => (
              <div key={corso.id} className="bg-card rounded-[2rem] p-10 space-y-10 border border-border/40 md:border-none shadow-none group relative overflow-hidden transition-all hover:scale-[1.01] hover:border-border/60">
                <div className="space-y-2">
                   <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-none uppercase text-foreground">{corso.titolo}</h3>
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{corso.triennio} • ABA Portal</p>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                   <div className="space-y-1.5">
                      <p className="text-[10px] font-black uppercase text-muted-foreground/60 tracking-widest">Studenti</p>
                      <p className="text-lg font-black text-foreground">{corso.iscritti} Iscritti</p>
                   </div>
                   <div className="space-y-1.5">
                      <p className="text-[10px] font-black uppercase text-muted-foreground/60 tracking-widest">Prossima Lezione</p>
                      <p className="text-lg font-black text-foreground">{corso.lezione}</p>
                   </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-border/10">
                   <Link href={`/docente/didattica/${corso.id}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:opacity-80 flex items-center gap-2 transition-all">
                      Vai al registro <ChevronRightIcon className="h-4 w-4" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Tab ESAMI */}
        <TabsContent value="esami" className="mt-0 focus-visible:outline-none">
          {creaAppello ? (
            <div className="bg-card rounded-[2rem] p-8 md:p-12 space-y-10 border border-border/40 md:border-none shadow-none">
              <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => setCreaAppello(false)} className="rounded-xl h-11 px-5 font-black uppercase tracking-widest text-[10px] text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all">
                  <ChevronLeft className="h-4 w-4 mr-2" /> Torna agli Appelli
                </Button>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-black tracking-tighter uppercase text-foreground">Crea Nuovo Appello</h2>
                <p className="text-muted-foreground font-medium">Compila tutti i campi per pubblicare l&apos;appello agli studenti.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Livello</Label>
                  <select className="w-full h-14 rounded-2xl bg-muted/20 border-none px-4 font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>Triennio</option>
                    <option>Biennio</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Sessione</Label>
                  <select className="w-full h-14 rounded-2xl bg-muted/20 border-none px-4 font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>Estiva</option>
                    <option>Invernale</option>
                    <option>Straordinaria</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Materia</Label>
                  <select className="w-full h-14 rounded-2xl bg-muted/20 border-none px-4 font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>Web Design 1</option>
                    <option>Web Design 2</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Aula</Label>
                  <Input placeholder="es. Aula 12" className="h-14 rounded-2xl bg-muted/20 border-none focus-visible:ring-primary/20 font-bold" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Data</Label>
                  <Input type="date" className="h-14 rounded-2xl bg-muted/20 border-none focus-visible:ring-primary/20 font-bold" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Orario</Label>
                  <Input type="time" className="h-14 rounded-2xl bg-muted/20 border-none focus-visible:ring-primary/20 font-bold" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Commissione</Label>
                  <Input placeholder="es. Prof.ssa Elena Bianchi, Prof. Marco Verdi" className="h-14 rounded-2xl bg-muted/20 border-none focus-visible:ring-primary/20 font-bold" />
                </div>
              </div>
              <div className="flex gap-4 justify-end pt-4 border-t border-border/20">
                <Button variant="outline" onClick={() => setCreaAppello(false)} className="rounded-xl h-14 px-10 font-black uppercase tracking-widest text-xs border-border/40 text-role-critical-fg hover:bg-role-critical/10">
                  <X className="h-4 w-4 mr-2" /> Annulla
                </Button>
                <Button className="rounded-xl h-14 px-10 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs shadow-none active:scale-95">
                  <Send className="h-4 w-4 mr-2" /> Pubblica
                </Button>
              </div>
            </div>
          ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-card rounded-[2.5rem] p-10 space-y-10 border border-border/40 md:border-none shadow-none">
               <div className="flex items-center justify-between px-2">
                  <h3 className="text-2xl font-black tracking-tighter uppercase text-foreground">Appelli Sessione</h3>
                  <Button variant="ghost" onClick={() => setCreaAppello(true)} className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:bg-primary/10 rounded-xl px-5 h-11 transition-all">Nuovo Appello <Plus className="ml-2 h-4 w-4" /></Button>
               </div>
               <div className="space-y-5">
                  {[
                    { id: "web-1", titolo: "Web Design 1", sessione: "Sessione Estiva", iscritti: 30, ora: "14:00", data: "15 Mag 2026", aula: "Aula 12", role: "bg-role-info", stato: "pubblicato" },
                    { id: "web-2", titolo: "Web Design 2", sessione: "Sessione Estiva", iscritti: 42, ora: "09:00", data: "16 Mag 2026", aula: "Aula 15", role: "bg-role-accent", stato: "bozza" },
                  ].map((appello) => (
                    <div key={appello.id} className="p-8 bg-muted/20 rounded-[2rem] space-y-6 group hover:bg-muted/40 transition-all border border-transparent hover:border-border/10">
                       <div className="flex justify-between items-start">
                          <div className="flex items-center gap-5">
                             <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center text-foreground shadow-none", appello.role)}>
                                <Calendar className="h-7 w-7" />
                             </div>
                             <div>
                                <h4 className="text-2xl font-black uppercase tracking-tighter leading-none mb-1">{appello.titolo}</h4>
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{appello.sessione} • {appello.aula}</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {appello.stato === "bozza" && (
                              <Badge className="bg-role-warning text-role-warning-fg border-none rounded-full px-3 h-7 font-black text-[9px] uppercase tracking-widest">Bozza</Badge>
                            )}
                            <Badge variant="outline" className="border-border/40 rounded-full px-4 h-8 font-black text-[10px] uppercase tracking-widest">{appello.data}</Badge>
                          </div>
                       </div>
                       <div className="flex justify-between items-center pt-2">
                          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                             <span className="flex items-center gap-2"><Users className="h-4 w-4" /> {appello.iscritti} Iscritti</span>
                             <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {appello.ora}</span>
                          </div>
                          <Button className="rounded-xl bg-foreground text-background h-10 px-6 font-black text-[10px] uppercase tracking-widest shadow-none active:scale-95 transition-all">
                            Apri Verbale
                          </Button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="lg:col-span-4 bg-role-accent rounded-[2.5rem] p-10 flex flex-col justify-between border border-role-accent-fg/10 shadow-none min-h-[400px] transition-all hover:scale-[1.01]">
               <div className="space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-role-accent-fg/10 flex items-center justify-center text-role-accent-fg">
                     <FileText className="h-8 w-8" />
                  </div>
                  <h3 className="text-4xl font-black tracking-tighter uppercase text-role-accent-fg leading-[0.9]">Gestione Verbali</h3>
                  <p className="text-sm font-black text-role-accent-fg/60 uppercase tracking-widest mt-4">Hai 8 verbali pronti per la firma digitale.</p>
               </div>
               <div className="flex flex-col gap-4">
                  <Button className="w-full bg-role-accent-fg text-role-accent rounded-xl h-16 font-black uppercase tracking-widest text-xs shadow-none hover:opacity-90 transition-all active:scale-95">Vai ai verbali</Button>
                  <Button variant="ghost" className="w-full text-role-accent-fg font-black uppercase tracking-widest text-[10px] h-12 hover:bg-role-accent-fg/5 transition-all">Archivio Storico</Button>
               </div>
            </div>
          </div>
          )}
        </TabsContent>

        {/* Tab TESI */}
        <TabsContent value="tesi" className="mt-0 focus-visible:outline-none space-y-10">
          {/* KPI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-role-accent rounded-[2rem] p-8 flex flex-col gap-4 cursor-pointer hover:scale-[1.02] transition-all border border-role-accent-fg/10">
              <div className="h-14 w-14 rounded-2xl bg-role-accent-fg/10 flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-role-accent-fg" />
              </div>
              <div>
                <p className="text-5xl font-black tracking-tighter text-role-accent-fg">10</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-role-accent-fg/60 mt-1">Tesisti</p>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-role-accent-fg/60">Clicca per vedere l&apos;elenco →</p>
            </div>
            <div className="bg-role-warning rounded-[2rem] p-8 flex flex-col gap-4 cursor-pointer hover:scale-[1.02] transition-all border border-role-warning-fg/10">
              <div className="h-14 w-14 rounded-2xl bg-role-warning-fg/10 flex items-center justify-center">
                <FileText className="h-7 w-7 text-role-warning-fg" />
              </div>
              <div>
                <p className="text-5xl font-black tracking-tighter text-role-warning-fg">5</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-role-warning-fg/60 mt-1">Da Revisionare</p>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-role-warning-fg/60">Documenti in attesa di feedback →</p>
            </div>
          </div>

          {/* Nuove Richieste */}
          <section className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-1">Nuove Richieste</h2>
            <div className="space-y-4">
              {[
                { studente: "Giulia Romano", titolo: "Arte generativa e intelligenza artificiale", descrizione: "Un'analisi dell'arte prodotta con algoritmi generativi nel contesto della contemporaneità." },
              ].map((req, i) => (
                <div key={i} className="bg-card rounded-[2rem] p-8 space-y-6 border border-border/40 md:border-none shadow-none">
                  <div className="space-y-1">
                    <p className="font-black text-xl uppercase text-foreground tracking-tight">{req.studente}</p>
                    <p className="text-sm font-bold text-muted-foreground italic">{req.titolo}</p>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed">{req.descrizione}</p>
                  <div className="flex gap-4">
                    <Button className="rounded-xl h-12 px-8 bg-role-success-fg text-role-success font-black uppercase tracking-widest text-[10px] shadow-none active:scale-95">
                      <CheckCircle2 className="h-4 w-4 mr-2" /> Approva
                    </Button>
                    <Button variant="outline" className="rounded-xl h-12 px-8 border-role-critical-fg/30 text-role-critical-fg hover:bg-role-critical/10 font-black uppercase tracking-widest text-[10px] active:scale-95">
                      <X className="h-4 w-4 mr-2" /> Rifiuta
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Elenco Tesisti */}
          <section className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Elenco Tesisti</h2>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:opacity-80">Storico Tesi →</button>
            </div>
            <div className="bg-card rounded-[2rem] overflow-hidden border border-border/40 md:border-none shadow-none">
              <div className="divide-y divide-border/20">
                {[
                  { nome: "Marco Bianchi", percorso: "Tesi 1", progresso: 85 },
                  { nome: "Sofia Rossi", percorso: "Tesi 2", progresso: 40 },
                  { nome: "Luca Verdi", percorso: "Tesi 1", progresso: 10 },
                  { nome: "Elena Neri", percorso: "Tesi 2", progresso: 60 },
                  { nome: "Giulia Gialli", percorso: "Tesi 1", progresso: 95 },
                ].map((t, i) => (
                  <div key={i} className="flex items-center justify-between p-6 hover:bg-muted/20 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-5">
                      <div className="h-12 w-12 rounded-2xl bg-muted/30 flex items-center justify-center font-black text-xs text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all">
                        {t.nome.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-black text-foreground uppercase tracking-tight">{t.nome}</p>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t.percorso} • {t.progresso}%</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground/30 group-hover:translate-x-2 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Tab ORARIO LEZIONI */}
        <TabsContent value="orario" className="mt-0 focus-visible:outline-none">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Griglia Oraria */}
              <div className="lg:col-span-8 bg-card rounded-[2.5rem] p-8 md:p-10 space-y-10 border border-border/40 md:border-none shadow-none">
                 <div className="grid grid-cols-7 gap-3">
                    {DAYS_OF_WEEK.map((d) => (
                       <div key={d} className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 py-6">
                          {d}
                       </div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => (
                       <div key={i} className="aspect-square rounded-2xl bg-muted/20 border border-muted/5 flex items-center justify-center relative transition-colors hover:bg-muted/30 cursor-pointer">
                          {i === 17 && <div className="absolute inset-2.5 bg-primary/20 rounded-xl border border-primary/20 animate-pulse" />}
                       </div>
                    ))}
                 </div>
              </div>

              {/* I Tuoi Impegni */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-card rounded-[2.5rem] p-10 space-y-10 border border-border/40 md:border-none shadow-none min-h-[400px]">
                   <h3 className="text-2xl font-black tracking-tighter uppercase text-foreground px-2">Agenda Odierna</h3>
                   <div className="p-8 bg-muted/20 rounded-[2rem] space-y-8 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-2 h-full bg-primary opacity-20" />
                      <div className="space-y-1.5">
                         <p className="text-[10px] font-black uppercase text-muted-foreground/60 tracking-widest">In Corso</p>
                         <p className="text-xl font-black uppercase text-foreground tracking-tight leading-none">Web Design 1</p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center shadow-none border border-border/5">
                              <MapPin className="h-5 w-5 text-muted-foreground" />
                           </div>
                           <p className="text-sm font-black uppercase">Aula 12 • Piano 2</p>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center shadow-none border border-border/5">
                              <Clock className="h-5 w-5 text-muted-foreground" />
                           </div>
                           <p className="text-sm font-black uppercase">14:00 - 18:00</p>
                        </div>
                      </div>
                      <Button className="w-full rounded-xl bg-foreground text-background font-black text-[10px] uppercase h-14 shadow-none tracking-[0.2em] active:scale-95 transition-all">Visualizza Mappa</Button>
                   </div>
                </div>
              </div>
           </div>

           {/* Footer Orario */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-card rounded-[1.5rem] p-8 flex items-center justify-between border border-border/40 md:border-none shadow-none transition-all hover:scale-[1.01]">
                 <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-xl bg-muted/30 flex items-center justify-center text-muted-foreground">
                       <FileText className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-base font-black uppercase tracking-tight text-foreground">Calendario Accademico</p>
                       <p className="text-[9px] font-black text-muted-foreground/60 uppercase tracking-widest">PDF Scaricabile • Agg. Mar 2026</p>
                    </div>
                 </div>
                 <Download className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              </div>
              <button className="bg-card rounded-[1.5rem] p-8 flex items-center justify-center gap-5 hover:bg-muted/40 transition-all group border border-border/40 md:border-none shadow-none hover:scale-[1.01]">
                 <span className="text-base font-black uppercase tracking-tight text-foreground">Report Annuale Attività</span>
                 <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-3" />
              </button>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
