"use client"

import * as React from "react"
import { 
  BookOpen, 
  Calendar as CalendarIcon, 
  GraduationCap, 
  Clock, 
  MapPin, 
  ChevronRight, 
  FileText, 
  Mail,
  CheckCircle2,
  AlertCircle,
  Trophy,
  History,
  FileCheck,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Plus
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
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
  icona: any;
  colorClass: string;
  bgClass: string;
  textClass: string;
};

const DAYS_OF_WEEK = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
const CURRENT_MONTH = "Aprile 2026";

const EVENTI_CALENDARIO: Record<number, Evento[]> = {
  1: [{ tipo: 'lezione', titolo: "Pittura I", dettagli: "Aula Magno", ora: "09:00 - 13:00", icona: BookOpen, colorClass: "bg-[#DCFCE7]", bgClass: "bg-[#DCFCE7]", textClass: "text-[#166534]" }],
  5: [{ tipo: 'lezione', titolo: "Anatomia Artistica", dettagli: "Aula 4", ora: "11:00 - 14:00", icona: BookOpen, colorClass: "bg-[#DCFCE7]", bgClass: "bg-[#DCFCE7]", textClass: "text-[#166534]" }],
  6: [{ tipo: 'vacanza', titolo: "Pasquetta", dettagli: "Sospensione Didattica", ora: "Tutto il giorno", icona: CalendarIcon, colorClass: "bg-[#FEF9C3]", bgClass: "bg-[#FEF9C3]", textClass: "text-amber-700" }],
  8: [{ tipo: 'lezione', titolo: "Estetica", dettagli: "Aula Magna", ora: "14:00 - 17:00", icona: BookOpen, colorClass: "bg-[#DCFCE7]", bgClass: "bg-[#DCFCE7]", textClass: "text-[#166534]" }],
  16: [
    { tipo: 'lezione', titolo: "Pittura I", dettagli: "Aula Magno", ora: "09:00 - 13:00", icona: BookOpen, colorClass: "bg-[#DCFCE7]", bgClass: "bg-[#DCFCE7]", textClass: "text-[#166534]" },
    { tipo: 'nota', titolo: "Revisione Progetto", dettagli: "Studio Prof. Rossi", ora: "15:30", icona: Plus, colorClass: "bg-[#DBEAFE]", bgClass: "bg-[#DBEAFE]", textClass: "text-blue-700" },
    { tipo: 'nota', titolo: "Palestra", dettagli: "Allenamento", ora: "18:00", icona: History, colorClass: "bg-[#F1EFE9]", bgClass: "bg-[#F1EFE9]", textClass: "text-[#4A4947]" }
  ],
  22: [{ tipo: 'esame', titolo: "Esame Anatomia", dettagli: "Appello Scritto • Aula 4", ora: "09:00", icona: GraduationCap, colorClass: "bg-[#F3E8FF]", bgClass: "bg-[#F3E8FF]", textClass: "text-[#7c3aed]" }],
  25: [{ tipo: 'vacanza', titolo: "Festa Liberazione", dettagli: "Accademia Chiusa", ora: "Tutto il giorno", icona: CalendarIcon, colorClass: "bg-[#FEF9C3]", bgClass: "bg-[#FEF9C3]", textClass: "text-amber-700" }],
};

export default function DidatticaPage() {
  const [selectedDay, setSelectedDay] = React.useState(16);
  const eventiDelGiorno = EVENTI_CALENDARIO[selectedDay] || [];

  return (
    <div className="flex flex-col gap-10 pb-16 animate-in fade-in duration-500">
      <section className="px-1 space-y-1">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1917]">Didattica</h1>
        <p className="text-[#7C7A77] text-base md:text-lg font-medium">
          Gestisci i tuoi corsi, segui il tuo piano di studi e monitora il percorso tesi.
        </p>
      </section>

      <Tabs defaultValue="corsi" className="w-full">
        <TabsList className="bg-white border border-[#E5E2DA] p-1 h-14 rounded-full mb-10 w-full md:w-auto flex overflow-x-auto no-scrollbar justify-start md:justify-center">
          <TabsTrigger value="corsi" className="rounded-full px-6 font-bold data-[state=active]:bg-[#1A1917] data-[state=active]:text-white">Corsi</TabsTrigger>
          <TabsTrigger value="esami" className="rounded-full px-6 font-bold data-[state=active]:bg-[#1A1917] data-[state=active]:text-white">Esami</TabsTrigger>
          <TabsTrigger value="tesi" className="rounded-full px-6 font-bold data-[state=active]:bg-[#1A1917] data-[state=active]:text-white">Percorso Tesi</TabsTrigger>
          <TabsTrigger value="calendario" className="rounded-full px-6 font-bold data-[state=active]:bg-[#1A1917] data-[state=active]:text-white">Calendario</TabsTrigger>
        </TabsList>

        <TabsContent value="calendario" className="mt-0 focus-visible:outline-none">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Calendario Principale */}
              <div className="lg:col-span-8 bg-white border border-[#E5E2DA] rounded-[2.5rem] p-8 space-y-10 shadow-none">
                 <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-[#1A1917]">{CURRENT_MONTH}</h2>
                    <div className="flex gap-2">
                       <Button variant="outline" size="icon" className="rounded-xl h-10 w-10 border-[#E5E2DA]">
                          <ChevronLeft className="h-4 w-4" />
                       </Button>
                       <Button variant="outline" size="icon" className="rounded-xl h-10 w-10 border-[#E5E2DA]">
                          <ChevronRightIcon className="h-4 w-4" />
                       </Button>
                    </div>
                 </div>

                 <div className="grid grid-cols-7 gap-2 md:gap-4">
                    {DAYS_OF_WEEK.map((d) => (
                       <div key={d} className="text-center text-[10px] font-black uppercase tracking-widest text-[#4A4947]/40 py-2">
                          {d}
                       </div>
                    ))}
                    <div className="aspect-square" />
                    <div className="aspect-square" />
                    
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                       const eventi = EVENTI_CALENDARIO[day];
                       const isSelected = selectedDay === day;
                       
                       let statusClass = "bg-white border-[#F1EFE9] text-[#1A1917]";
                       if (eventi) {
                          if (eventi.some(e => e.tipo === 'esame')) statusClass = "bg-[#F3E8FF] border-transparent text-[#7c3aed]";
                          else if (eventi.some(e => e.tipo === 'lezione')) statusClass = "bg-[#DCFCE7] border-transparent text-[#166534]";
                          else if (eventi.some(e => e.tipo === 'vacanza')) statusClass = "bg-[#FEF9C3] border-transparent text-amber-700";
                          else statusClass = "bg-[#DBEAFE] border-transparent text-blue-700";
                       }
                       
                       return (
                          <button
                             key={day}
                             onClick={() => setSelectedDay(day)}
                             className={cn(
                                "aspect-square rounded-full flex items-center justify-center transition-all relative border-2",
                                isSelected 
                                   ? "bg-[#1A1917] border-[#1A1917] text-white scale-110 z-10 shadow-lg" 
                                   : statusClass + " hover:border-[#1A1917]/20"
                             )}
                          >
                             <span className="text-sm font-bold tracking-tighter">{day}</span>
                             {eventi && eventi.length > 1 && !isSelected && (
                                <div className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-red-500 border border-white" />
                             )}
                          </button>
                       );
                    })}
                 </div>

                 <div className="flex flex-wrap gap-6 pt-6 border-t border-[#F1EFE9]">
                    <div className="flex items-center gap-2">
                       <div className="h-3 w-3 rounded-full bg-[#DCFCE7]" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A4947]/60">Lezione</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="h-3 w-3 rounded-full bg-[#F3E8FF]" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A4947]/60">Esame</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="h-3 w-3 rounded-full bg-[#FEF9C3]" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A4947]/60">Vacanza</span>
                    </div>
                 </div>
              </div>

              {/* Dettagli Giorno (Bento White - Clean Timeline) */}
              <div className="lg:col-span-4 bg-white border border-[#E5E2DA] rounded-[2.5rem] p-8 flex flex-col gap-8 shadow-none min-h-[500px]">
                 <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]/40">Programma del giorno</span>
                    <h3 className="text-3xl font-bold tracking-tight text-[#1A1917]">{selectedDay} Aprile 2026</h3>
                 </div>

                 <div className="flex-1 space-y-4">
                    {eventiDelGiorno.length > 0 ? (
                       eventiDelGiorno.map((evento, idx) => (
                          <div key={idx} className={cn(
                             "rounded-2xl p-5 transition-all hover:scale-[1.02] cursor-pointer border border-transparent shadow-none",
                             evento.bgClass
                          )}>
                             <div className="flex justify-between items-start mb-2">
                                <span className={cn("text-[10px] font-black uppercase tracking-widest opacity-60", evento.textClass)}>
                                   {evento.ora}
                                </span>
                                <evento.icona className={cn("h-4 w-4", evento.textClass)} />
                             </div>
                             <h4 className={cn("text-base font-bold leading-snug", evento.textClass)}>{evento.titolo}</h4>
                             <p className={cn("text-xs font-medium mt-1 opacity-70", evento.textClass)}>{evento.dettagli}</p>
                          </div>
                       ))
                    ) : (
                       <div className="h-full flex flex-col items-center justify-center text-center p-10 gap-4 opacity-20">
                          <CalendarIcon className="h-12 w-12 text-[#1A1917]" />
                          <p className="text-sm font-bold text-[#1A1917] uppercase tracking-widest">Nessun impegno</p>
                       </div>
                    )}
                 </div>

                 <Button className="w-full bg-[#1A1917] text-white rounded-full h-14 font-bold shadow-none hover:bg-black gap-2 mt-4">
                    <Plus className="h-5 w-5" /> Aggiungi Nota
                 </Button>
              </div>
           </div>
        </TabsContent>

        {/* CONTENUTI CORSI, ESAMI, TESI */}
        <TabsContent value="corsi" className="space-y-8 mt-0 focus-visible:outline-none">
          <div className="bg-[#F3E8FF] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-[#7c3aed]/10 flex items-center justify-center shrink-0">
                <History className="h-8 w-8 text-[#7c3aed]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#7c3aed]/60">Status Presenze</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#7c3aed]">Sei in regola con la frequenza</h2>
              </div>
            </div>
            <div className="w-full md:w-64 space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#7c3aed]">
                <span>Media presenze</span>
                <span>84%</span>
              </div>
              <Progress value={84} className="h-3 bg-[#7c3aed]/10 [&>div]:bg-[#7c3aed] rounded-full" />
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { id: "pittura-1", titolo: "Pittura e Arti Visive I", docenza: "Prof. Alessandro Rossi", presenze: 82, soglia: 75, orario: "Mar 09:00", aula: "Aula Magno" },
              { id: "anatomia", titolo: "Anatomia Artistica", docenza: "Prof.ssa Elena Bianchi", presenze: 68, soglia: 75, orario: "Mer 11:00", aula: "Aula 4" },
              { id: "estetica", titolo: "Estetica", docenza: "Prof. Marco Verdi", presenze: 95, soglia: 75, orario: "Gio 14:00", aula: "Teatro" },
            ].map((corso) => (
              <AccordionItem key={corso.id} value={corso.id} className="border border-[#E5E2DA] rounded-[2rem] bg-white overflow-hidden shadow-none transition-all data-[state=open]:border-[#1A1917]/20">
                <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full pr-4 text-left gap-4">
                    <div className="flex items-center gap-4">
                      <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center", corso.presenze < corso.soglia ? "bg-red-50 text-red-600" : "bg-[#DCFCE7] text-[#166534]")}>
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#1A1917] tracking-tight">{corso.titolo}</h4>
                        <p className="text-xs font-medium text-[#7C7A77]">{corso.docenza}</p>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E5E2DA]">
                    <div className="space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]/40">Dettagli</p>
                      <div className="flex items-center gap-2 text-sm font-bold text-[#1A1917]"><Clock className="h-4 w-4" /> {corso.orario}</div>
                      <div className="flex items-center gap-2 text-sm font-bold text-[#1A1917]"><MapPin className="h-4 w-4" /> {corso.aula}</div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]/40">Presenze</p>
                      <Progress value={corso.presenze} className="h-2 rounded-full" />
                      <p className="text-[10px] font-bold text-[#7C7A77]">Soglia: {corso.soglia}%</p>
                    </div>
                    <div className="flex flex-col gap-2">
                       <Button className="rounded-xl font-bold bg-[#1A1917] text-white shadow-none">Materiali</Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="esami" className="mt-0 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#DCFCE7] rounded-[2.5rem] p-8 flex flex-col justify-between border-none">
               <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold tracking-tight text-[#166534]">Anatomia Artistica</h2>
                  <CalendarIcon className="h-6 w-6 text-[#166534]" />
               </div>
               <Button className="bg-[#166534] text-white rounded-full px-6 h-12 font-bold shadow-none mt-10">Prenotati</Button>
            </div>
            <div className="bg-white border border-[#E5E2DA] rounded-[2.5rem] p-8 flex justify-between items-center">
               <h2 className="text-3xl font-bold tracking-tight text-[#1A1917]">Storia dell'Arte</h2>
               <div className="h-14 w-14 rounded-full bg-[#DCFCE7] flex items-center justify-center font-black text-[#166534] text-xl">30</div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tesi" className="mt-0">
          <div className="bg-white border border-[#E5E2DA] rounded-[2.5rem] p-10 space-y-10">
            <h2 className="text-4xl font-bold tracking-tight text-[#1A1917]">Percorso Tesi</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {[{ step: 1, label: "Titolo", status: "completed" }, { step: 2, label: "Draft", status: "active" }, { step: 3, label: "Approvazione", status: "pending" }, { step: 4, label: "Prenotazione", status: "pending" }].map((s) => (
                <div key={s.step} className="flex flex-col items-center md:items-start gap-4">
                  <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center border-4 border-white transition-all shadow-none", s.status === "completed" ? "bg-[#1A1917] text-white" : s.status === "active" ? "bg-white border-[#1A1917] text-[#1A1917]" : "bg-[#F1EFE9] text-[#7C7A77]")}>
                    {s.status === "completed" ? <FileCheck className="h-5 w-5" /> : s.step}
                  </div>
                  <h5 className="font-bold text-[#1A1917]">{s.label}</h5>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
