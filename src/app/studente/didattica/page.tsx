"use client"

import * as React from "react"
import { 
  BookOpen, 
  Calendar as CalendarIcon, 
  GraduationCap, 
  Clock, 
  MapPin, 
  CheckCircle2,
  History,
  FileCheck,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Plus,
  type LucideIcon
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// Struttura dati multi-evento
type Evento = {
  tipo: 'lezione' | 'esame' | 'vacanza' | 'nota';
  titolo: string;
  dettagli: string;
  ora: string;
  icona: LucideIcon;
  colorClass: string;
  bgClass: string;
  textClass: string;
};

const DAYS_OF_WEEK = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
const CURRENT_MONTH = "Aprile 2026";

const EVENTI_CALENDARIO: Record<number, Evento[]> = {
  1: [{ tipo: 'lezione', titolo: "Pittura I", dettagli: "Aula Magno", ora: "09:00 - 13:00", icona: BookOpen, colorClass: "text-emerald-700 dark:text-foreground", bgClass: "bg-[var(--bento-green)]", textClass: "text-emerald-900 dark:text-foreground" }],
  5: [{ tipo: 'lezione', titolo: "Anatomia Artistica", dettagli: "Aula 4", ora: "11:00 - 14:00", icona: BookOpen, colorClass: "text-emerald-700 dark:text-foreground", bgClass: "bg-[var(--bento-green)]", textClass: "text-emerald-900 dark:text-foreground" }],
  6: [{ tipo: 'vacanza', titolo: "Pasquetta", dettagli: "Sospensione Didattica", ora: "Tutto il giorno", icona: CalendarIcon, colorClass: "text-amber-700 dark:text-foreground", bgClass: "bg-[var(--bento-yellow)]", textClass: "text-amber-900 dark:text-foreground" }],
  16: [
    { tipo: 'lezione', titolo: "Pittura I", dettagli: "Aula Magno", ora: "09:00 - 13:00", icona: BookOpen, colorClass: "text-emerald-700 dark:text-foreground", bgClass: "bg-[var(--bento-green)]", textClass: "text-emerald-900 dark:text-foreground" },
    { tipo: 'nota', titolo: "Revisione Progetto", dettagli: "Studio Prof. Rossi", ora: "15:30", icona: Plus, colorClass: "text-blue-700 dark:text-foreground", bgClass: "bg-[var(--bento-blue)]", textClass: "text-blue-900 dark:text-foreground" }
  ],
  22: [{ tipo: 'esame', titolo: "Esame Anatomia", dettagli: "Appello Scritto • Aula 4", ora: "09:00", icona: GraduationCap, colorClass: "text-purple-700 dark:text-foreground", bgClass: "bg-[var(--bento-purple)]", textClass: "text-purple-900 dark:text-foreground" }],
};

export default function DidatticaPage() {
  const [selectedDay, setSelectedDay] = React.useState(16);
  const eventiDelGiorno = EVENTI_CALENDARIO[selectedDay] || [];

  return (
    <div className="flex flex-col gap-10 pb-16 animate-in fade-in duration-500">
      <section className="px-1 space-y-1">
        <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-foreground">Didattica</h1>
        <p className="text-muted-foreground text-base md:text-lg font-medium tracking-tight">
          Gestisci i tuoi corsi, segui il tuo piano di studi e monitora il percorso tesi.
        </p>
      </section>

      <Tabs defaultValue="corsi" className="w-full">
        <TabsList className="flex w-full overflow-x-auto h-auto p-1.5 bg-muted/40 rounded-[1.5rem] mb-10 border-none no-scrollbar">
          <TabsTrigger value="corsi" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm transition-all">
            Corsi
          </TabsTrigger>
          <TabsTrigger value="esami" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm transition-all">
            Esami
          </TabsTrigger>
          <TabsTrigger value="tesi" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm transition-all">
            Percorso Tesi
          </TabsTrigger>
          <TabsTrigger value="calendario" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm transition-all">
            Calendario
          </TabsTrigger>
        </TabsList>

        {/* Tab CORSI */}
        <TabsContent value="corsi" className="space-y-8 mt-0 focus-visible:outline-none">
          <div className="bg-[var(--bento-purple)] rounded-[1.5rem] p-8 flex flex-col md:flex-row gap-8 items-center justify-between border-none transition-colors">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <History className="h-8 w-8 text-foreground" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Status Presenze</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-none">Sei in regola con la frequenza</h2>
              </div>
            </div>
            <div className="w-full md:w-64 space-y-2">
              <div className="flex justify-between text-xs font-bold text-foreground">
                <span>Media presenze</span>
                <span>84%</span>
              </div>
              <Progress value={84} className="h-3 bg-white/10 [&>div]:bg-foreground rounded-full" />
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { id: "pittura-1", titolo: "Pittura e Arti Visive I", docenza: "Prof. Alessandro Rossi", presenze: 82, soglia: 75, orario: "Mar 09:00", aula: "Aula Magno" },
              { id: "anatomia", titolo: "Anatomia Artistica", docenza: "Prof.ssa Elena Bianchi", presenze: 68, soglia: 75, orario: "Mer 11:00", aula: "Aula 4" },
              { id: "estetica", titolo: "Estetica", docenza: "Prof. Marco Verdi", presenze: 95, soglia: 75, orario: "Gio 14:00", aula: "Teatro" },
            ].map((corso) => (
              <AccordionItem key={corso.id} value={corso.id} className="border-none rounded-[1.5rem] bg-card overflow-hidden shadow-none">
                <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full pr-4 text-left gap-4">
                    <div className="flex items-center gap-4">
                      <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center", corso.presenze < corso.soglia ? "bg-red-500/20 text-red-500" : "bg-[var(--bento-green)] text-foreground")}>
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground tracking-tight">{corso.titolo}</h4>
                        <p className="text-xs font-medium text-muted-foreground">{corso.docenza}</p>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-muted/20">
                    <div className="space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Dettagli</p>
                      <div className="flex items-center gap-2 text-sm font-bold text-foreground"><Clock className="h-4 w-4 opacity-40" /> {corso.orario}</div>
                      <div className="flex items-center gap-2 text-sm font-bold text-foreground"><MapPin className="h-4 w-4 opacity-40" /> {corso.aula}</div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Monitoraggio</p>
                      <Progress value={corso.presenze} className="h-2 rounded-full" />
                      <p className="text-[10px] font-bold text-muted-foreground">Soglia: {corso.soglia}%</p>
                    </div>
                    <div className="flex flex-col gap-2">
                       <Button className="rounded-xl font-black bg-foreground text-background shadow-none">Materiali</Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        {/* Tab ESAMI - RIPRISTINATA */}
        <TabsContent value="esami" className="mt-0 space-y-8 focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--bento-green)] rounded-[1.5rem] p-8 flex flex-col justify-between border-none shadow-none min-h-[240px]">
               <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Prossimo Appello</span>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground leading-tight">Anatomia Artistica</h2>
                  </div>
                  <CalendarIcon className="h-7 w-7 text-foreground" />
               </div>
               <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-foreground opacity-80">22 Aprile • 09:00</div>
                  <Button className="bg-foreground text-background rounded-full px-8 h-12 font-black shadow-none">Prenotati</Button>
               </div>
            </div>
            <div className="bg-card rounded-[1.5rem] p-8 flex justify-between items-center border-none shadow-none">
               <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Ultimo Esito</span>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">Storia dell&apos;Arte</h2>
                  <p className="text-xs font-bold text-muted-foreground flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-[var(--bento-green)]" /> Verbalizzato il 12 Mar</p>
               </div>
               <div className="h-16 w-16 rounded-full bg-[var(--bento-green)] flex items-center justify-center font-black text-foreground text-2xl">30</div>
            </div>
          </div>
        </TabsContent>

        {/* Tab TESI - RIPRISTINATA */}
        <TabsContent value="tesi" className="mt-0 focus-visible:outline-none">
          <div className="bg-card rounded-[1.5rem] p-10 space-y-10 border-none shadow-none">
            <div className="flex justify-between items-center">
               <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status Laurea</span>
                  <h2 className="text-4xl font-black tracking-tighter text-foreground">Percorso Tesi</h2>
                  <p className="text-muted-foreground font-medium">Sessione Estiva • Luglio 2026</p>
               </div>
               <div className="h-20 w-20 rounded-3xl bg-[var(--bento-purple)] flex items-center justify-center shrink-0">
                  <GraduationCap className="h-10 w-10 text-foreground" />
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, label: "Titolo", status: "completed", desc: "Approvata" },
                { step: 2, label: "Draft", status: "active", desc: "In corso" },
                { step: 3, label: "Approvazione", status: "pending", desc: "In attesa" },
                { step: 4, label: "Prenotazione", status: "pending", desc: "Bloccata" }
              ].map((s) => (
                <div key={s.step} className="flex flex-col gap-4">
                  <div className={cn(
                    "h-14 w-14 rounded-2xl flex items-center justify-center text-lg font-black transition-all shadow-none",
                    s.status === "completed" ? "bg-foreground text-background" : 
                    s.status === "active" ? "bg-[var(--bento-purple)] text-foreground" : 
                    "bg-muted/50 text-muted-foreground"
                  )}>
                    {s.status === "completed" ? <FileCheck className="h-6 w-6" /> : s.step}
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground leading-none mb-1">{s.label}</h5>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-muted/20 flex justify-end">
               <Button className="rounded-full bg-foreground text-background px-10 h-14 font-black shadow-none">Dettagli Burocratici</Button>
            </div>
          </div>
        </TabsContent>

        {/* Tab CALENDARIO */}
        <TabsContent value="calendario" className="mt-0 focus-visible:outline-none">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-card rounded-[1.5rem] p-8 space-y-10 border-none shadow-none">
                 <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">{CURRENT_MONTH}</h2>
                    <div className="flex gap-2">
                       <Button variant="outline" size="icon" className="rounded-xl h-10 w-10 bg-muted/20 border-none">
                          <ChevronLeft className="h-4 w-4" />
                       </Button>
                       <Button variant="outline" size="icon" className="rounded-xl h-10 w-10 bg-muted/20 border-none">
                          <ChevronRightIcon className="h-4 w-4" />
                       </Button>
                    </div>
                 </div>

                 <div className="grid grid-cols-7 gap-2 md:gap-4">
                    {DAYS_OF_WEEK.map((d) => (
                       <div key={d} className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground py-2">
                          {d}
                       </div>
                    ))}
                    <div className="aspect-square" />
                    <div className="aspect-square" />
                    
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                       const eventi = EVENTI_CALENDARIO[day];
                       const isSelected = selectedDay === day;
                       
                       let statusClass = "bg-muted/10 text-foreground";
                       if (eventi) {
                          if (eventi.some(e => e.tipo === 'esame')) statusClass = "bg-[var(--bento-purple)] text-foreground";
                          else if (eventi.some(e => e.tipo === 'lezione')) statusClass = "bg-[var(--bento-green)] text-foreground";
                          else if (eventi.some(e => e.tipo === 'vacanza')) statusClass = "bg-[var(--bento-yellow)] text-foreground";
                          else statusClass = "bg-[var(--bento-blue)] text-foreground";
                       }
                       
                       return (
                          <button
                             key={day}
                             onClick={() => setSelectedDay(day)}
                             className={cn(
                                "aspect-square rounded-full flex items-center justify-center transition-all relative border-none",
                                isSelected 
                                   ? "bg-foreground text-background scale-110 z-10 shadow-lg" 
                                   : statusClass + " hover:bg-muted"
                             )}
                          >
                             <span className="text-sm font-bold tracking-tighter">{day}</span>
                             {eventi && eventi.length > 1 && !isSelected && (
                                <div className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                             )}
                          </button>
                       );
                    })}
                 </div>
              </div>

              <div className="lg:col-span-4 bg-card rounded-[1.5rem] p-8 flex flex-col gap-8 border-none shadow-none min-h-[500px]">
                 <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Programma</span>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground">{selectedDay} Aprile</h3>
                 </div>

                 <div className="flex-1 space-y-4">
                    {eventiDelGiorno.length > 0 ? (
                       eventiDelGiorno.map((evento, idx) => (
                          <div key={idx} className={cn(
                             "rounded-2xl p-5 transition-all border-none shadow-none",
                             evento.bgClass
                          )}>
                             <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                                   {evento.ora}
                                </span>
                                <evento.icona className="h-4 w-4" />
                             </div>
                             <h4 className="text-base font-bold leading-snug">{evento.titolo}</h4>
                             <p className="text-xs font-medium mt-1 opacity-70">{evento.dettagli}</p>
                          </div>
                       ))
                    ) : (
                       <div className="h-full flex flex-col items-center justify-center text-center p-10 gap-4 opacity-20">
                          <CalendarIcon className="h-12 w-12 text-foreground" />
                          <p className="text-sm font-bold text-foreground uppercase tracking-widest">Libero</p>
                       </div>
                    )}
                 </div>

                 <Button className="w-full bg-foreground text-background rounded-full h-14 font-black text-base shadow-none">
                    <Plus className="h-5 w-5" /> Aggiungi Nota
                 </Button>
              </div>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
