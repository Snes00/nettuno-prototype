"use client"

import * as React from "react"
import Link from "next/link"
import { 
  GraduationCap, 
  Download,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Bell,
  ArrowRight,
  BookOpen,
  Users,
  Calendar,
  FileText,
  Clock,
  MapPin,
  Plus
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const DAYS_OF_WEEK = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

export default function DocenteDidatticaPage() {
  return (
    <div className="flex flex-col gap-10 pb-16 animate-in fade-in duration-500">
      {/* Header Didattica */}
      <section className="flex items-center justify-between px-1">
        <div className="flex items-center gap-5">
          <Link href="/docente/dashboard" className="h-12 w-12 rounded-full bg-muted/30 flex items-center justify-center hover:bg-muted/50 transition-all active:scale-90 shadow-none border border-transparent hover:border-border/20">
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </Link>
          <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-foreground uppercase leading-none">Didattica</h1>
        </div>
        <div className="h-12 w-12 rounded-full bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
           <Bell className="h-6 w-6" />
        </div>
      </section>

      <Tabs defaultValue="corsi" className="w-full">
        <TabsList className="flex w-full overflow-x-auto h-auto p-1.5 bg-muted/40 rounded-[1.5rem] mb-10 border-none no-scrollbar">
          <TabsTrigger value="corsi" className="flex-1 rounded-xl py-3.5 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Corsi
          </TabsTrigger>
          <TabsTrigger value="studenti" className="flex-1 rounded-xl py-3.5 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Studenti
          </TabsTrigger>
          <TabsTrigger value="orario" className="flex-1 rounded-xl py-3.5 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Orario
          </TabsTrigger>
          <TabsTrigger value="esami" className="flex-1 rounded-xl py-3.5 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Esami
          </TabsTrigger>
          <TabsTrigger value="tesi" className="flex-1 rounded-xl py-3.5 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
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

        {/* Tab SITUAZIONE STUDENTI */}
        <TabsContent value="studenti" className="space-y-10 mt-0 focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-[2rem] p-8 border border-border/40 md:border-none shadow-none space-y-6 transition-all hover:scale-[1.02]">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Media Voti Classe</p>
               <div className="flex items-end justify-between">
                  <h3 className="text-5xl font-black text-foreground tracking-tighter">27.4</h3>
                  <Badge className="bg-role-success text-role-success-fg border-none rounded-lg px-2 h-6 font-black text-[9px] uppercase mb-2">+1.2</Badge>
               </div>
            </div>
            <div className="bg-card rounded-[2rem] p-8 border border-border/40 md:border-none shadow-none space-y-6 transition-all hover:scale-[1.02]">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Frequenza Media</p>
               <h3 className="text-5xl font-black text-foreground tracking-tighter">82%</h3>
               <Progress value={82} className="h-2 bg-muted/30 [&>div]:bg-primary rounded-full" />
            </div>
            <div className="bg-card rounded-[2rem] p-8 border border-border/40 md:border-none shadow-none space-y-6 transition-all hover:scale-[1.02]">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Studenti a Rischio</p>
               <h3 className="text-5xl font-black text-role-critical-fg tracking-tighter">3</h3>
               <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60">Sotto la soglia del 75%</p>
            </div>
          </div>

          <div className="bg-card rounded-[2.5rem] p-8 md:p-10 space-y-10 border border-border/40 md:border-none shadow-none">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h3 className="text-2xl font-black tracking-tighter uppercase text-foreground">Elenco Studenti Attivi</h3>
                <div className="flex gap-3">
                   <Button variant="outline" className="rounded-xl font-black text-[9px] uppercase tracking-widest h-11 px-6 border-border/40 hover:bg-muted/30">Filtra Corso</Button>
                   <Button variant="outline" className="rounded-xl font-black text-[9px] uppercase tracking-widest h-11 px-6 border-border/40 hover:bg-muted/30">Esporta CSV</Button>
                </div>
             </div>
             <div className="space-y-4">
                {[
                  { nome: "Marco Bianchi", corso: "Pittura I", media: 28.5, presenze: 90 },
                  { nome: "Sofia Rossi", media: 24.2, corso: "Anatomia II", presenze: 72 },
                  { nome: "Luca Verdi", media: 29.8, corso: "Pittura I", presenze: 95 },
                  { nome: "Elena Neri", media: 22.5, corso: "Anatomia II", presenze: 60 },
                ].map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-6 rounded-[1.5rem] bg-muted/20 hover:bg-muted/40 transition-all cursor-pointer group">
                    <div className="flex items-center gap-5">
                      <div className="h-14 w-14 rounded-2xl bg-background flex items-center justify-center font-black text-xs text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all shadow-none border border-border/5">
                        {s.nome.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-black text-lg text-foreground tracking-tight uppercase leading-none mb-1.5">{s.nome}</p>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{s.corso}</p>
                      </div>
                    </div>
                    <div className="flex gap-10 md:gap-16 items-center">
                       <div className="text-right hidden sm:block space-y-1">
                          <p className="text-[10px] font-black uppercase text-muted-foreground/60 tracking-widest">Media</p>
                          <p className="font-black text-foreground text-lg">{s.media}</p>
                       </div>
                       <div className="text-right space-y-1">
                          <p className="text-[10px] font-black uppercase text-muted-foreground/60 tracking-widest">Presenze</p>
                          <p className={cn("font-black text-lg", s.presenze < 75 ? "text-role-critical-fg" : "text-role-success-fg")}>{s.presenze}%</p>
                       </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </TabsContent>

        {/* Tab ESAMI */}
        <TabsContent value="esami" className="mt-0 focus-visible:outline-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-card rounded-[2.5rem] p-10 space-y-10 border border-border/40 md:border-none shadow-none">
               <div className="flex items-center justify-between px-2">
                  <h3 className="text-2xl font-black tracking-tighter uppercase text-foreground">Appelli Sessione</h3>
                  <Button variant="ghost" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:bg-primary/10 rounded-xl px-5 h-11 transition-all">Nuovo Appello <Plus className="ml-2 h-4 w-4" /></Button>
               </div>
               <div className="space-y-5">
                  {[
                    { id: "web-1", titolo: "Web 1", iscritti: 30, ora: "14:00", data: "15 Mag 2026", aula: "Aula 12", role: "bg-role-info" },
                    { id: "web-2", titolo: "Web 2", iscritti: 42, ora: "09:00", data: "16 Mag 2026", aula: "Aula 15", role: "bg-role-accent" },
                  ].map((appello) => (
                    <div key={appello.id} className="p-8 bg-muted/20 rounded-[2rem] space-y-6 group cursor-pointer hover:bg-muted/40 transition-all border border-transparent hover:border-border/10">
                       <div className="flex justify-between items-start">
                          <div className="flex items-center gap-5">
                             <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center text-foreground shadow-none", appello.role)}>
                                <Calendar className="h-7 w-7" />
                             </div>
                             <div>
                                <h4 className="text-2xl font-black uppercase tracking-tighter leading-none mb-1">{appello.titolo}</h4>
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{appello.aula}</p>
                             </div>
                          </div>
                          <Badge variant="outline" className="border-border/40 rounded-full px-4 h-8 font-black text-[10px] uppercase tracking-widest">{appello.data}</Badge>
                       </div>
                       <div className="flex justify-between items-center pt-2">
                          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                             <Users className="h-4 w-4" /> {appello.iscritti} Studenti prenotati
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                             <Clock className="h-4 w-4" /> {appello.ora}
                          </div>
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
        </TabsContent>

        {/* Tab TESI */}
        <TabsContent value="tesi" className="mt-0 focus-visible:outline-none">
          <div className="bg-card rounded-[2.5rem] p-10 md:p-12 space-y-12 border border-border/40 md:border-none shadow-none">
            <div className="flex justify-between items-center px-2">
               <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Supervisione Accademica</span>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase leading-none">Gestione Tesi</h2>
                  <p className="text-muted-foreground font-medium text-lg mt-2 tracking-tight">Sessione Estiva • 5 Tesisti attivi</p>
               </div>
               <div className="h-24 w-24 rounded-3xl bg-role-accent flex items-center justify-center shrink-0">
                  <GraduationCap className="h-12 w-12 text-role-accent-fg" />
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { nome: "Marco Bianchi", titolo: "L'uso della luce nel Caravaggio", progresso: 85, status: "Draft Finale" },
                { nome: "Sofia Rossi", titolo: "Scultura digitale e 3D printing", progresso: 40, status: "Capitolo 2" },
                { nome: "Luca Verdi", titolo: "L'estetica del frammento", progresso: 10, status: "Progetto" },
                { nome: "Elena Neri", titolo: "Videoarte contemporanea", progresso: 60, status: "Draft" },
                { nome: "Giulia Gialli", titolo: "Performance e corpo", progresso: 95, status: "Approvata" },
              ].map((tesi, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] bg-muted/20 hover:bg-muted/40 transition-all space-y-6 group cursor-pointer border border-transparent hover:border-border/10">
                  <div className="space-y-2">
                    <h5 className="font-black text-xl text-foreground uppercase tracking-tight leading-none">{tesi.nome}</h5>
                    <p className="text-xs font-medium text-muted-foreground line-clamp-1 italic">{tesi.titolo}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                      <span>Progresso</span>
                      <span>{tesi.progresso}%</span>
                    </div>
                    <Progress value={tesi.progresso} className="h-1.5 rounded-full bg-muted/40 [&>div]:bg-primary transition-all" />
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-border/5">
                     <Badge variant="outline" className="rounded-lg text-[9px] font-black px-3 py-1.5 uppercase tracking-widest border-border/40 text-muted-foreground">{tesi.status}</Badge>
                     <Button variant="ghost" size="sm" className="rounded-xl font-black text-[10px] uppercase tracking-widest h-10 px-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">Revisiona</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
