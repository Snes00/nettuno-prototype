"use client"

import * as React from "react"
import Link from "next/link"
import { 
  BookOpen, 
  Calendar as CalendarIcon, 
  GraduationCap, 
  Clock, 
  MapPin, 
  FileText, 
  CheckCircle2,
  Users,
  Plus,
  Download,
  ClipboardCheck,
  FileSignature,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Search,
  Bell,
  ArrowRight
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const DAYS_OF_WEEK = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
const CURRENT_MONTH = "Aprile 2026";

export default function DocenteDidatticaPage() {
  return (
    <div className="flex flex-col gap-8 pb-16 animate-in fade-in duration-500">
      {/* Header Didattica */}
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/docente/dashboard" className="h-12 w-12 rounded-full bg-muted/30 flex items-center justify-center hover:bg-muted/50 transition-all">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase">Didattica</h1>
        </div>
        <div className="h-12 w-12 rounded-full bg-muted/30 flex items-center justify-center">
           <Bell className="h-6 w-6" />
        </div>
      </section>

      <Tabs defaultValue="corsi" className="w-full">
        <TabsList className="flex w-full overflow-x-auto h-auto p-1.5 bg-muted/40 rounded-[1.5rem] mb-10 border-none no-scrollbar">
          <TabsTrigger value="corsi" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase transition-all">
            Corsi
          </TabsTrigger>
          <TabsTrigger value="orario" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase transition-all">
            Orario Lezioni
          </TabsTrigger>
          <TabsTrigger value="appelli" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase transition-all">
            Crea Appelli
          </TabsTrigger>
          <TabsTrigger value="esami" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase transition-all">
            Esami
          </TabsTrigger>
          <TabsTrigger value="tesi" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase transition-all">
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
              <div key={corso.id} className="bg-card rounded-[2rem] p-8 space-y-8 border-none shadow-none group relative overflow-hidden">
                <div className="space-y-1">
                   <h3 className="text-3xl font-black tracking-tighter leading-none uppercase">{corso.titolo}</h3>
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{corso.triennio}</p>
                </div>
                
                <div className="space-y-4">
                   <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase text-muted-foreground opacity-60">Studenti</p>
                      <p className="text-sm font-black">{corso.iscritti} Iscritti</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase text-muted-foreground opacity-60">Prossima Lezione</p>
                      <p className="text-sm font-black">{corso.lezione}</p>
                   </div>
                </div>

                <div className="flex justify-end pt-4">
                   <Link href={`/docente/didattica/${corso.id}`} className="text-xs font-black uppercase tracking-widest hover:underline flex items-center gap-2">
                      Vai al registro <ChevronRightIcon className="h-4 w-4" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Tab SITUAZIONE STUDENTI */}
        <TabsContent value="studenti" className="space-y-8 mt-0 focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-[1.5rem] p-8 border-none shadow-none space-y-4">
               <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Media Voti Classe</p>
               <h3 className="text-4xl font-black text-foreground tracking-tighter">27.4</h3>
               <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs">
                  <span>+1.2 rispetto a ieri</span>
               </div>
            </div>
            <div className="bg-card rounded-[1.5rem] p-8 border-none shadow-none space-y-4">
               <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Frequenza Media</p>
               <h3 className="text-4xl font-black text-foreground tracking-tighter">82%</h3>
               <Progress value={82} className="h-1.5" />
            </div>
            <div className="bg-card rounded-[1.5rem] p-8 border-none shadow-none space-y-4">
               <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Studenti a Rischio</p>
               <h3 className="text-4xl font-black text-red-500 tracking-tighter">3</h3>
               <p className="text-xs font-bold text-muted-foreground">Frequenza sotto il 75%</p>
            </div>
          </div>

          <div className="bg-card rounded-[1.5rem] p-8 space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-xl font-black tracking-tight uppercase">Elenco Studenti Attivi</h3>
                <div className="flex gap-2">
                   <Button variant="outline" size="sm" className="rounded-xl font-bold">Filtra per Corso</Button>
                   <Button variant="outline" size="sm" className="rounded-xl font-bold">Esporta Lista</Button>
                </div>
             </div>
             <div className="space-y-2">
                {[
                  { nome: "Marco Bianchi", corso: "Pittura I", media: 28.5, presenze: 90 },
                  { nome: "Sofia Rossi", media: 24.2, corso: "Anatomia II", presenze: 72 },
                  { nome: "Luca Verdi", media: 29.8, corso: "Pittura I", presenze: 95 },
                  { nome: "Elena Neri", media: 22.5, corso: "Anatomia II", presenze: 60 },
                ].map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-2xl hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center font-bold text-xs">
                        {s.nome.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-foreground leading-none mb-1">{s.nome}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">{s.corso}</p>
                      </div>
                    </div>
                    <div className="flex gap-8 items-center">
                       <div className="text-right hidden sm:block">
                          <p className="text-[10px] font-black uppercase text-muted-foreground">Media</p>
                          <p className="font-black text-foreground">{s.media}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] font-black uppercase text-muted-foreground">Presenze</p>
                          <p className={cn("font-black", s.presenze < 75 ? "text-red-500" : "text-foreground")}>{s.presenze}%</p>
                       </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </TabsContent>

        {/* Tab ESAMI */}
        <TabsContent value="esami" className="mt-0 focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Colonna Appelli */}
            <div className="md:col-span-7 bg-card rounded-[2rem] p-8 space-y-8">
               <h3 className="text-xl font-black tracking-tighter uppercase px-2">Appelli</h3>
               <div className="space-y-4">
                  {[
                    { id: "web-1", titolo: "Web 1", iscritti: 30, ora: "14:00", data: "15/05/2026", aula: "Aula 12" },
                    { id: "web-2", titolo: "Web 2", iscritti: 40, ora: "09:00", data: "16/05/2026", aula: "Aula 15" },
                  ].map((appello) => (
                    <div key={appello.id} className="p-6 bg-muted/30 rounded-2xl space-y-4 group cursor-pointer hover:bg-muted/50 transition-all">
                       <div className="flex justify-between items-start">
                          <h4 className="text-xl font-black uppercase tracking-tighter">{appello.titolo}</h4>
                          <span className="text-[10px] font-black uppercase opacity-40">{appello.aula}</span>
                       </div>
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                          <span>{appello.iscritti} Studenti prenotati</span>
                          <span>{appello.data} • {appello.ora}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Colonna Verbali */}
            <div className="md:col-span-5 bg-card rounded-[2rem] p-8 flex flex-col justify-between min-h-[400px]">
               <h3 className="text-3xl font-black tracking-tighter uppercase">Verbali</h3>
               <div className="flex justify-end">
                  <Link href="/docente/didattica/esami/verbali" className="text-xs font-black uppercase tracking-widest hover:underline flex items-center gap-2">
                    Vai ai verbali <ChevronRightIcon className="h-4 w-4" />
                  </Link>
               </div>
            </div>
          </div>
        </TabsContent>

        {/* Tab TESI */}
        <TabsContent value="tesi" className="mt-0 focus-visible:outline-none">
          <div className="bg-card rounded-[1.5rem] p-10 space-y-10 border-none shadow-none">
            <div className="flex justify-between items-center">
               <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Supervisione</span>
                  <h2 className="text-4xl font-black tracking-tighter text-foreground">Gestione Tesi</h2>
                  <p className="text-muted-foreground font-medium">Hai 5 tesisti in carico per la sessione estiva.</p>
               </div>
               <div className="h-20 w-20 rounded-3xl bg-[var(--bento-purple)] flex items-center justify-center shrink-0">
                  <GraduationCap className="h-10 w-10 text-foreground" />
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { nome: "Marco Bianchi", titolo: "L'uso della luce nel Caravaggio", progresso: 85, status: "Draft Finale" },
                { nome: "Sofia Rossi", titolo: "Scultura digitale e 3D printing", progresso: 40, status: "Capitolo 2" },
                { nome: "Luca Verdi", titolo: "L'estetica del frammento", progresso: 10, status: "Progetto" },
                { nome: "Elena Neri", titolo: "Videoarte contemporanea", progresso: 60, status: "Draft" },
                { nome: "Giulia Gialli", titolo: "Performance e corpo", progresso: 95, status: "Approvata" },
              ].map((tesi, idx) => (
                <div key={idx} className="p-6 rounded-[1.5rem] bg-muted/30 hover:bg-muted/50 transition-all space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-lg text-foreground leading-tight">{tesi.nome}</h5>
                      <p className="text-xs font-medium text-muted-foreground line-clamp-1">{tesi.titolo}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      <span>Progresso</span>
                      <span>{tesi.progresso}%</span>
                    </div>
                    <Progress value={tesi.progresso} className="h-1.5 rounded-full" />
                  </div>
                  <div className="flex justify-between items-center pt-2">
                     <Badge variant="outline" className="rounded-lg text-[10px] font-black py-1">{tesi.status}</Badge>
                     <Button variant="ghost" size="sm" className="rounded-lg font-bold text-xs h-8">Revisiona</Button>
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
              <div className="lg:col-span-8 bg-card rounded-[2rem] p-8 space-y-10 border-none shadow-none">
                 <div className="grid grid-cols-7 gap-2">
                    {DAYS_OF_WEEK.map((d) => (
                       <div key={d} className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground py-4">
                          {d}
                       </div>
                    ))}
                    {/* Griglia placeholder */}
                    {Array.from({ length: 35 }, (_, i) => (
                       <div key={i} className="aspect-square rounded-xl bg-muted/20 border border-muted/5 flex items-center justify-center relative">
                          {i === 17 && <div className="absolute inset-2 bg-foreground/10 rounded-lg animate-pulse" />}
                       </div>
                    ))}
                 </div>
              </div>

              {/* I Tuoi Impegni */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-card rounded-[2rem] p-8 space-y-8 min-h-[400px]">
                   <h3 className="text-xl font-black tracking-tighter uppercase px-2">I tuoi impegni</h3>
                   <div className="p-6 bg-muted/30 rounded-2xl space-y-4">
                      <div className="space-y-1">
                         <p className="text-[10px] font-black uppercase text-muted-foreground opacity-60">Materia</p>
                         <p className="text-sm font-black uppercase">Web Design 1</p>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-black uppercase text-muted-foreground opacity-60">Aula</p>
                         <p className="text-sm font-black uppercase">Aula 12</p>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-black uppercase text-muted-foreground opacity-60">Orario</p>
                         <p className="text-sm font-black uppercase">14:00 - 18:00</p>
                      </div>
                      <Button className="w-full rounded-xl bg-foreground text-background font-black text-[10px] uppercase h-10 shadow-none">Mappa</Button>
                   </div>
                </div>
              </div>
           </div>

           {/* Footer Orario */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-card rounded-2xl p-6 flex items-center justify-between">
                 <div className="space-y-1">
                    <p className="text-sm font-black uppercase tracking-tight">Calendario Didattico</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-50">PDF Scaricabile</p>
                 </div>
                 <Download className="h-5 w-5 text-muted-foreground" />
              </div>
              <button className="bg-card rounded-2xl p-6 flex items-center justify-center gap-4 hover:bg-muted/50 transition-all group">
                 <span className="text-sm font-black uppercase tracking-tight">Scarica report annuale</span>
                 <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </button>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
