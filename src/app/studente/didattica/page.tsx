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

type Evento = {
  tipo: 'lezione' | 'esame' | 'vacanza' | 'nota';
  titolo: string;
  dettagli: string;
  ora: string;
  icona: LucideIcon;
  roleClass: string;
};

const DAYS_OF_WEEK = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
const CURRENT_MONTH = "Aprile 2026";

const EVENTI_CALENDARIO: Record<number, Evento[]> = {
  1: [{ tipo: 'lezione', titolo: "Pittura I", dettagli: "Aula Magno", ora: "09:00 - 13:00", icona: BookOpen, roleClass: "bg-role-success text-role-success-fg" }],
  5: [{ tipo: 'lezione', titolo: "Anatomia Artistica", dettagli: "Aula 4", ora: "11:00 - 14:00", icona: BookOpen, roleClass: "bg-role-success text-role-success-fg" }],
  6: [{ tipo: 'vacanza', titolo: "Pasquetta", dettagli: "Sospensione Didattica", ora: "Tutto il giorno", icona: CalendarIcon, roleClass: "bg-role-warning text-role-warning-fg" }],
  16: [
    { tipo: 'lezione', titolo: "Pittura I", dettagli: "Aula Magno", ora: "09:00 - 13:00", icona: BookOpen, roleClass: "bg-role-success text-role-success-fg" },
    { tipo: 'nota', titolo: "Revisione Progetto", dettagli: "Studio Prof. Rossi", ora: "15:30", icona: Plus, roleClass: "bg-role-info text-role-info-fg" }
  ],
  22: [{ tipo: 'esame', titolo: "Esame Anatomia", dettagli: "Appello Scritto • Aula 4", ora: "09:00", icona: GraduationCap, roleClass: "bg-role-accent text-role-accent-fg" }],
};

export default function DidatticaPage() {
  const [selectedDay, setSelectedDay] = React.useState(16);
  const eventiDelGiorno = EVENTI_CALENDARIO[selectedDay] || [];

  return (
    <div className="flex flex-col gap-6 pb-16 animate-in fade-in duration-500 pt-4">
      <Tabs defaultValue="corsi" className="w-full">
        <TabsList className="flex w-full overflow-x-auto h-auto p-1.5 bg-muted/40 rounded-[1.5rem] mb-12 border-none no-scrollbar">
          <TabsTrigger value="corsi" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Corsi
          </TabsTrigger>
          <TabsTrigger value="esami" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Esami
          </TabsTrigger>
          <TabsTrigger value="tesi" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Percorso Tesi
          </TabsTrigger>
          <TabsTrigger value="calendario" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
            Calendario
          </TabsTrigger>
        </TabsList>

        {/* Tab CORSI */}
        <TabsContent value="corsi" className="space-y-8 mt-0 focus-visible:outline-none">
          <div className="bg-role-accent rounded-[1.5rem] p-8 flex flex-col md:flex-row gap-8 items-center justify-between border border-role-accent-fg/10 transition-all hover:scale-[1.005]">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-role-accent-fg/10 flex items-center justify-center shrink-0">
                <History className="h-8 w-8 text-role-accent-fg" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-role-accent-fg/60">Status Presenze</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-role-accent-fg leading-none uppercase">Sei in regola</h2>
              </div>
            </div>
            <div className="w-full md:w-64 space-y-2">
              <div className="flex justify-between text-[10px] font-black text-role-accent-fg uppercase tracking-widest">
                <span>Media presenze</span>
                <span>84%</span>
              </div>
              <Progress value={84} className="h-3 bg-role-accent-fg/10 [&>div]:bg-role-accent-fg rounded-full" />
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { id: "pittura-1", titolo: "Pittura e Arti Visive I", docenza: "Prof. Alessandro Rossi", presenze: 82, soglia: 75, orario: "Mar 09:00", aula: "Aula Magno" },
              { id: "anatomia", titolo: "Anatomia Artistica", docenza: "Prof.ssa Elena Bianchi", presenze: 68, soglia: 75, orario: "Mer 11:00", aula: "Aula 4" },
              { id: "estetica", titolo: "Estetica", docenza: "Prof. Marco Verdi", presenze: 95, soglia: 75, orario: "Gio 14:00", aula: "Teatro" },
            ].map((corso) => (
              <AccordionItem key={corso.id} value={corso.id} className="border border-border/40 md:border-none rounded-[1.5rem] bg-card overflow-hidden shadow-none transition-all hover:border-border/60">
                <AccordionTrigger className="px-8 py-7 hover:no-underline group">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full pr-4 text-left gap-4">
                    <div className="flex items-center gap-5">
                      <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center shrink-0", corso.presenze < corso.soglia ? "bg-role-critical/10 text-role-critical-fg" : "bg-role-success text-role-success-fg")}>
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg text-foreground tracking-tight uppercase leading-tight">{corso.titolo}</h4>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-0.5">{corso.docenza}</p>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-border/20">
                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Dettagli Lezione</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm font-black uppercase"><Clock className="h-4 w-4 opacity-40" /> {corso.orario}</div>
                        <div className="flex items-center gap-3 text-sm font-black uppercase"><MapPin className="h-4 w-4 opacity-40" /> {corso.aula}</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Monitoraggio</p>
                      <div className="space-y-2">
                         <div className="flex justify-between items-end">
                            <span className="text-xs font-black uppercase">Presenze</span>
                            <span className={cn("text-xs font-black", corso.presenze < corso.soglia ? "text-role-critical-fg" : "text-role-success-fg")}>{corso.presenze}%</span>
                         </div>
                         <Progress value={corso.presenze} className="h-2 rounded-full" />
                         <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Soglia minima: {corso.soglia}%</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end">
                       <Button className="rounded-xl font-black bg-primary text-primary-foreground shadow-none h-12 uppercase tracking-widest text-[10px] active:scale-95 transition-all">Materiale Didattico</Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        {/* Tab ESAMI */}
        <TabsContent value="esami" className="mt-0 space-y-8 focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-role-success rounded-[1.5rem] p-8 md:p-10 flex flex-col justify-between border border-role-success-fg/10 shadow-none min-h-[280px] transition-all hover:scale-[1.01]">
               <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-role-success-fg/60">Prossimo Appello</span>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-role-success-fg leading-none uppercase">Anatomia Artistica</h2>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-role-success-fg/10 flex items-center justify-center text-role-success-fg">
                    <CalendarIcon className="h-7 w-7" />
                  </div>
               </div>
               <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
                  <div className="text-[10px] font-black text-role-success-fg uppercase tracking-[0.2em]">22 Aprile • 09:00 • Aula 4</div>
                  <Button className="w-full sm:w-auto bg-role-success-fg text-role-success rounded-xl px-10 h-14 font-black uppercase tracking-widest text-xs shadow-none active:scale-95 transition-all">Prenotati</Button>
               </div>
            </div>
            <div className="bg-card rounded-[1.5rem] p-8 md:p-10 flex justify-between items-center border border-border/40 md:border-none shadow-none transition-all hover:scale-[1.01]">
               <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Ultimo Esito</span>
                  <h2 className="text-3xl font-black tracking-tight text-foreground uppercase">Storia dell&apos;Arte</h2>
                  <p className="text-[10px] font-black text-role-success-fg flex items-center gap-2 uppercase tracking-widest">
                    <CheckCircle2 className="h-4 w-4" /> Verbalizzato il 12 Mar
                  </p>
               </div>
               <div className="h-20 w-20 rounded-full bg-role-success text-role-success-fg flex items-center justify-center font-black text-3xl shadow-none">30</div>
            </div>
          </div>
        </TabsContent>

        {/* Tab TESI */}
        <TabsContent value="tesi" className="mt-0 focus-visible:outline-none">
          <div className="bg-card rounded-[1.5rem] p-8 md:p-12 space-y-12 border border-border/40 md:border-none shadow-none transition-all hover:scale-[1.005]">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { step: 1, label: "Titolo", status: "completed", desc: "Approvata" },
                { step: 2, label: "Draft", status: "active", desc: "In corso" },
                { step: 3, label: "Approvazione", status: "pending", desc: "In attesa" },
                { step: 4, label: "Prenotazione", status: "pending", desc: "Bloccata" }
              ].map((s) => (
                <div key={s.step} className="flex flex-col gap-5">
                  <div className={cn(
                    "h-16 w-16 rounded-2xl flex items-center justify-center text-xl font-black transition-all shadow-none border",
                    s.status === "completed" ? "bg-foreground text-background border-transparent" : 
                    s.status === "active" ? "bg-role-accent text-role-accent-fg border-role-accent-fg/20" : 
                    "bg-muted/50 text-muted-foreground border-transparent"
                  )}>
                    {s.status === "completed" ? <FileCheck className="h-7 w-7" /> : s.step}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-black text-foreground uppercase tracking-tight leading-none">{s.label}</h5>
                    <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-border/20 flex justify-center md:justify-end">
               <Button className="w-full md:w-auto rounded-xl bg-foreground text-background px-12 h-16 font-black uppercase tracking-widest text-xs shadow-none active:scale-95 transition-all">Dettagli Burocratici</Button>
            </div>
          </div>
        </TabsContent>

        {/* Tab CALENDARIO */}
        <TabsContent value="calendario" className="mt-0 focus-visible:outline-none">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-card rounded-[1.5rem] p-8 md:p-10 space-y-10 border border-border/40 md:border-none shadow-none">
                 <div className="flex items-center justify-between px-2">
                    <h2 className="text-2xl font-black tracking-tight text-foreground uppercase">{CURRENT_MONTH}</h2>
                    <div className="flex gap-2">
                       <Button variant="outline" size="icon" className="rounded-xl h-12 w-12 bg-muted/30 border-none hover:bg-muted/50 transition-all">
                          <ChevronLeft className="h-5 w-5" />
                       </Button>
                       <Button variant="outline" size="icon" className="rounded-xl h-12 w-12 bg-muted/30 border-none hover:bg-muted/50 transition-all">
                          <ChevronRightIcon className="h-5 w-5" />
                       </Button>
                    </div>
                 </div>

                 <div className="grid grid-cols-7 gap-2 md:gap-4">
                    {DAYS_OF_WEEK.map((d) => (
                       <div key={d} className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 py-2">
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
                          statusClass = eventi[0].roleClass;
                       }
                       
                       return (
                          <button
                             key={day}
                             onClick={() => setSelectedDay(day)}
                             className={cn(
                                "aspect-square rounded-full flex items-center justify-center transition-all relative border-none",
                                isSelected 
                                   ? "bg-primary text-primary-foreground scale-110 z-10 shadow-xl shadow-primary/20" 
                                   : statusClass + " hover:opacity-80"
                             )}
                          >
                             <span className="text-sm font-black tracking-tighter">{day}</span>
                             {eventi && eventi.length > 1 && !isSelected && (
                                <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-role-critical-fg border-2 border-background" />
                             )}
                          </button>
                       );
                    })}
                 </div>
              </div>

              <div className="lg:col-span-4 bg-card rounded-[1.5rem] p-8 md:p-10 flex flex-col gap-10 border border-border/40 md:border-none shadow-none min-h-[500px]">
                 <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Programma Giorno</span>
                    <h3 className="text-3xl font-black tracking-tight text-foreground uppercase">{selectedDay} Aprile</h3>
                 </div>

                 <div className="flex-1 space-y-5">
                    {eventiDelGiorno.length > 0 ? (
                       eventiDelGiorno.map((evento, idx) => (
                          <div key={idx} className={cn(
                             "rounded-[1.5rem] p-6 transition-all border border-transparent shadow-none hover:scale-[1.02]",
                             evento.roleClass
                          )}>
                             <div className="flex justify-between items-start mb-3">
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                                   {evento.ora}
                                </span>
                                <evento.icona className="h-5 w-5 opacity-60" />
                             </div>
                             <h4 className="text-lg font-black uppercase tracking-tight leading-tight">{evento.titolo}</h4>
                             <p className="text-xs font-bold mt-1.5 opacity-60 uppercase tracking-widest">{evento.dettagli}</p>
                          </div>
                       ))
                    ) : (
                       <div className="h-full flex flex-col items-center justify-center text-center p-10 gap-5 opacity-10">
                          <CalendarIcon className="h-16 w-16 text-foreground" />
                          <p className="text-lg font-black text-foreground uppercase tracking-widest">Nessun Evento</p>
                       </div>
                    )}
                 </div>

                 <Button className="w-full bg-foreground text-background rounded-xl h-16 font-black uppercase tracking-widest text-[10px] shadow-none active:scale-95 transition-all">
                    <Plus className="h-5 w-5" /> Aggiungi Nota
                 </Button>
              </div>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
