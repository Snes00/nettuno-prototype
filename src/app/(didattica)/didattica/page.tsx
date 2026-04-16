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
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// Mock Data Evoluti per il Calendario
const DAYS_OF_WEEK = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
const CURRENT_MONTH = "Aprile 2026";

const EVENTI_CALENDARIO: Record<number, { tipo: 'lezione' | 'esame' | 'vacanza' | 'nota', titolo: string, dettagli: string, icona: any, colorClass: string, bgClass: string, textClass: string }> = {
  1: { tipo: 'lezione', titolo: "Pittura I", dettagli: "09:00 - 13:00 • Aula Magno", icona: BookOpen, colorClass: "bg-[#DCFCE7]", bgClass: "bg-[#DCFCE7]", textClass: "text-[#166534]" },
  5: { tipo: 'lezione', titolo: "Anatomia Artistica", dettagli: "11:00 - 14:00 • Aula 4", icona: BookOpen, colorClass: "bg-[#DCFCE7]", bgClass: "bg-[#DCFCE7]", textClass: "text-[#166534]" },
  6: { tipo: 'vacanza', titolo: "Pasquetta", dettagli: "Sospensione Didattica", icona: CalendarIcon, colorClass: "bg-[#FEF9C3]", bgClass: "bg-[#FEF9C3]", textClass: "text-amber-700" },
  8: { tipo: 'lezione', titolo: "Estetica", dettagli: "14:00 - 17:00 • Aula Magna", icona: BookOpen, colorClass: "bg-[#DCFCE7]", bgClass: "bg-[#DCFCE7]", textClass: "text-[#166534]" },
  12: { tipo: 'lezione', titolo: "Pittura I", dettagli: "09:00 - 13:00 • Aula Magno", icona: BookOpen, colorClass: "bg-[#DCFCE7]", bgClass: "bg-[#DCFCE7]", textClass: "text-[#166534]" },
  15: { tipo: 'lezione', titolo: "Tecniche Incisione", dettagli: "10:00 - 13:00 • Lab 2", icona: BookOpen, colorClass: "bg-[#DCFCE7]", bgClass: "bg-[#DCFCE7]", textClass: "text-[#166534]" },
  16: { tipo: 'nota', titolo: "Revisione Progetto", dettagli: "Incontro Prof. Rossi ore 15:00", icona: Plus, colorClass: "bg-[#DBEAFE]", bgClass: "bg-[#DBEAFE]", textClass: "text-blue-700" },
  22: { tipo: 'esame', titolo: "Esame Anatomia", dettagli: "Appello Scritto • Aula 4", icona: GraduationCap, colorClass: "bg-[#F3E8FF]", bgClass: "bg-[#F3E8FF]", textClass: "text-[#7c3aed]" },
  25: { tipo: 'vacanza', titolo: "Festa Liberazione", dettagli: "Accademia Chiusa", icona: CalendarIcon, colorClass: "bg-[#FEF9C3]", bgClass: "bg-[#FEF9C3]", textClass: "text-amber-700" },
};

export default function DidatticaPage() {
  const [selectedDay, setSelectedDay] = React.useState(16);

  const eventoDelGiorno = EVENTI_CALENDARIO[selectedDay];

  return (
    <div className="flex flex-col gap-10 pb-16 animate-in fade-in duration-500">
      {/* Intestazione */}
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

        {/* CONTENUTI CORSI, ESAMI, TESI (Invariati per brevità ma preservati) */}
        <TabsContent value="corsi" className="space-y-8 mt-0 focus-visible:outline-none">
           {/* ... Contenuto Corsi già implementato ... */}
           <div className="bg-[#F3E8FF] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-center justify-between border-none">
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-12 space-y-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#4A4947] px-2">I tuoi corsi del semestre</h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { id: "pittura-1", titolo: "Pittura e Arti Visive I", docenza: "Prof. Alessandro Rossi", presenze: 82, soglia: 75, orario: "Mar 09:00", aula: "Aula Magno" },
                  { id: "anatomia", titolo: "Anatomia Artistica", docenza: "Prof.ssa Elena Bianchi", presenze: 68, soglia: 75, orario: "Mer 11:00", aula: "Aula 4" },
                  { id: "estetica", titolo: "Estetica", docenza: "Prof. Marco Verdi", presenze: 95, soglia: 75, orario: "Gio 14:00", aula: "Teatro" },
                ].map((corso) => (
                  <AccordionItem 
                    key={corso.id} 
                    value={corso.id} 
                    className="border border-[#E5E2DA] rounded-[2rem] bg-white overflow-hidden shadow-none transition-all data-[state=open]:border-[#1A1917]/20"
                  >
                    <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full pr-4 text-left gap-4 md:gap-0">
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "h-12 w-12 rounded-2xl flex items-center justify-center shrink-0",
                            corso.presenze < corso.soglia ? "bg-red-50 text-red-600" : "bg-[#DCFCE7] text-[#166534]"
                          )}>
                            <BookOpen className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-[#1A1917] tracking-tight leading-none mb-1">{corso.titolo}</h4>
                            <p className="text-xs font-medium text-[#7C7A77]">{corso.docenza}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-8 w-full md:w-auto">
                           <div className="hidden md:block text-right">
                              <p className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]/40 mb-1">Presenze</p>
                              <span className={cn(
                                "text-sm font-bold",
                                corso.presenze < corso.soglia ? "text-red-600" : "text-[#166534]"
                              )}>{corso.presenze}%</span>
                           </div>
                           <ChevronRight className="h-5 w-5 text-[#4A4947]/20 transition-transform group-data-[state=open]:rotate-90" />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8 pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E5E2DA]">
                        <div className="space-y-4">
                          <p className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]/40">Dettagli Lezione</p>
                          <div className="space-y-3">
                             <div className="flex items-center gap-2 text-sm font-bold text-[#1A1917]">
                                <Clock className="h-4 w-4 text-[#4A4947]/40" /> {corso.orario}
                             </div>
                             <div className="flex items-center gap-2 text-sm font-bold text-[#1A1917]">
                                <MapPin className="h-4 w-4 text-[#4A4947]/40" /> {corso.aula}
                             </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <p className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]/40">Monitoraggio Presenze</p>
                          <div className="space-y-2">
                             <Progress value={corso.presenze} className={cn(
                               "h-2 rounded-full",
                               corso.presenze < corso.soglia ? "[&>div]:bg-red-500 bg-red-100" : "[&>div]:bg-[#166534] bg-[#DCFCE7]"
                             )} />
                             <p className="text-[10px] font-bold text-[#7C7A77]">Soglia minima richiesta: {corso.soglia}%</p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 justify-end">
                           <Button variant="outline" className="rounded-xl font-bold h-11 border-[#E5E2DA] text-[#1A1917] hover:bg-[#F1EFE9]">
                              <Mail className="h-4 w-4 mr-2" /> Contatta Docente
                           </Button>
                           <Button className="rounded-xl font-bold h-11 bg-[#1A1917] text-white hover:bg-[#1A1917]/90">
                              <FileText className="h-4 w-4 mr-2" /> Materiali Corso
                           </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="esami" className="mt-0 focus-visible:outline-none space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#DCFCE7] rounded-[2.5rem] p-8 flex flex-col justify-between border-none">
                 <div className="flex justify-between items-start">
                    <div className="space-y-1">
                       <span className="text-[10px] font-black uppercase tracking-widest text-[#166534]/60">Prossimo Appello</span>
                       <h2 className="text-3xl font-bold tracking-tight text-[#166534]">Anatomia Artistica</h2>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-[#166534]/10 flex items-center justify-center">
                       <CalendarIcon className="h-6 w-6 text-[#166534]" />
                    </div>
                 </div>
                 <div className="mt-10 flex items-center justify-between">
                    <div className="space-y-1">
                       <p className="text-sm font-bold text-[#166534]/70">Mercoledì 22 Aprile • 09:00</p>
                       <p className="text-xs font-medium text-[#166534]/50">Aula 4, Padiglione B</p>
                    </div>
                    <Button className="bg-[#166534] text-white rounded-full px-6 h-12 font-bold shadow-none hover:bg-[#166534]/90">Prenotati</Button>
                 </div>
              </div>

              <div className="bg-white border border-[#E5E2DA] rounded-[2.5rem] p-8 flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <div className="space-y-1">
                       <span className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]/40">Ultimo Esito</span>
                       <h2 className="text-3xl font-bold tracking-tight text-[#1A1917]">Storia dell'Arte</h2>
                    </div>
                    <div className="h-14 w-14 rounded-full bg-[#DCFCE7] flex items-center justify-center font-black text-[#166534] text-xl">
                       30
                    </div>
                 </div>
                 <div className="mt-10 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#166534]" />
                    <span className="text-sm font-bold text-[#166534]">Esame verbalizzato il 12 Mar 2026</span>
                 </div>
              </div>
           </div>
        </TabsContent>

        <TabsContent value="tesi" className="mt-0 focus-visible:outline-none">
          <div className="bg-white border border-[#E5E2DA] rounded-[2.5rem] p-10 space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]/40">Status Laurea</span>
                <h2 className="text-4xl font-bold tracking-tight text-[#1A1917]">Percorso Tesi</h2>
                <p className="text-muted-foreground font-medium">Sessione Estiva - Luglio 2026</p>
              </div>
              <div className="h-20 w-20 rounded-3xl bg-[#F3E8FF] flex items-center justify-center shrink-0">
                <GraduationCap className="h-10 w-10 text-[#7c3aed]" />
              </div>
            </div>

            <div className="relative pt-10 pb-4">
              <div className="absolute top-[5.5rem] left-0 w-full h-1 bg-[#F1EFE9] rounded-full hidden md:block" />
              <div className="absolute top-[5.5rem] left-0 w-[45%] h-1 bg-[#1A1917] rounded-full hidden md:block transition-all duration-1000" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {[
                  { step: 1, label: "Richiesta Titolo", desc: "Approvata", status: "completed" },
                  { step: 2, label: "Caricamento Draft", desc: "In corso", status: "active" },
                  { step: 3, label: "Approvazione", desc: "In attesa", status: "pending" },
                  { step: 4, label: "Prenotazione", desc: "Bloccata", status: "pending" },
                ].map((s) => (
                  <div key={s.step} className="relative flex md:flex-col items-center md:items-start gap-4 md:gap-6 group">
                    <div className={cn(
                      "h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 z-10 border-4 border-white transition-all",
                      s.status === "completed" ? "bg-[#1A1917] text-white" : 
                      s.status === "active" ? "bg-white border-[#1A1917] text-[#1A1917]" : 
                      "bg-[#F1EFE9] text-[#7C7A77]"
                    )}>
                      {s.status === "completed" ? <FileCheck className="h-5 w-5" /> : <span className="font-black">{s.step}</span>}
                    </div>
                    <div>
                      <h5 className="font-bold text-[#1A1917] tracking-tight leading-none mb-1">{s.label}</h5>
                      <p className="text-xs font-medium text-[#7C7A77]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-6 border-t border-[#E5E2DA] flex justify-end">
               <Button className="rounded-full bg-[#1A1917] text-white px-8 h-12 font-bold shadow-none hover:bg-[#1A1917]/90">
                 Dettagli Burocratici
               </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="calendario" className="mt-0 focus-visible:outline-none">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Calendario "Pallini" (Bento White) */}
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
                    {/* Padding per l'inizio del mese */}
                    <div className="aspect-square" />
                    <div className="aspect-square" />
                    
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                       const evento = EVENTI_CALENDARIO[day];
                       const isSelected = selectedDay === day;
                       
                       return (
                          <button
                             key={day}
                             onClick={() => setSelectedDay(day)}
                             className={cn(
                                "aspect-square rounded-full flex items-center justify-center transition-all relative border-2",
                                isSelected 
                                   ? "bg-[#1A1917] border-[#1A1917] text-white scale-110 z-10 shadow-lg" 
                                   : evento 
                                      ? `${evento.bgClass} border-transparent ${evento.textClass}` 
                                      : "bg-white border-[#F1EFE9] text-[#1A1917] hover:border-[#1A1917]/20"
                             )}
                          >
                             <span className="text-sm font-bold tracking-tighter">{day}</span>
                          </button>
                       );
                    })}
                 </div>

                 {/* Legenda Pallini */}
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
                    <div className="flex items-center gap-2">
                       <div className="h-3 w-3 rounded-full bg-[#DBEAFE]" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A4947]/60">Nota</span>
                    </div>
                 </div>
              </div>

              {/* Dettagli Giorno (Bento Yellow) */}
              <div className="lg:col-span-4 bg-[#FEF9C3] rounded-[2.5rem] p-8 flex flex-col gap-8 border-none min-h-[400px]">
                 <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-700/60">Giorno Selezionato</span>
                    <h3 className="text-3xl font-bold tracking-tight text-amber-700">{selectedDay} Aprile 2026</h3>
                 </div>

                 <div className="flex-1 flex flex-col gap-4">
                    {eventoDelGiorno ? (
                       <div className="bg-white/60 rounded-3xl p-6 flex flex-col gap-6 animate-in slide-in-from-bottom-2 duration-300">
                          <div className="flex items-center gap-4">
                             <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center shrink-0", eventoDelGiorno.bgClass)}>
                                <eventoDelGiorno.icona className={cn("h-6 w-6", eventoDelGiorno.textClass)} />
                             </div>
                             <div>
                                <p className={cn("text-xs font-black uppercase tracking-widest opacity-60", eventoDelGiorno.textClass)}>
                                   {eventoDelGiorno.tipo}
                                </p>
                                <h4 className="text-xl font-bold text-amber-950 leading-tight">{eventoDelGiorno.titolo}</h4>
                             </div>
                          </div>
                          
                          <div className="space-y-4">
                             <div className="h-px bg-amber-900/10 w-full" />
                             <div className="flex items-center gap-2 text-sm font-bold text-amber-900/80">
                                <Clock className="h-4 w-4 opacity-40" />
                                {eventoDelGiorno.dettagli}
                             </div>
                          </div>
                       </div>
                    ) : (
                       <div className="flex-1 flex flex-col items-center justify-center text-center p-10 gap-4 opacity-40">
                          <div className="h-20 w-20 rounded-full border-2 border-dashed border-amber-900/20 flex items-center justify-center">
                             <CalendarIcon className="h-8 w-8 text-amber-900" />
                          </div>
                          <p className="text-sm font-bold text-amber-900 uppercase tracking-widest">Libero</p>
                       </div>
                    )}
                 </div>

                 <Button className="w-full bg-amber-600 text-white rounded-full h-14 font-bold shadow-none hover:bg-amber-700 gap-2">
                    <Plus className="h-5 w-5" /> Aggiungi Nota
                 </Button>
              </div>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
