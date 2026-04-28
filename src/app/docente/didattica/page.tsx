"use client"

import * as React from "react"
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
  Search
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
  const [selectedDay, setSelectedDay] = React.useState(16);

  return (
    <div className="flex flex-col gap-10 pb-16 animate-in fade-in duration-500">
      <section className="px-1 space-y-1">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">Didattica</h1>
        <p className="text-muted-foreground text-base md:text-lg font-medium tracking-tight">
          Gestione corsi, appelli d'esame e monitoraggio studenti.
        </p>
      </section>

      <Tabs defaultValue="corsi" className="w-full">
        <TabsList className="flex w-full overflow-x-auto h-auto p-1.5 bg-muted/40 rounded-[1.5rem] mb-10 border-none no-scrollbar">
          <TabsTrigger value="corsi" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm transition-all">
            Corsi
          </TabsTrigger>
          <TabsTrigger value="studenti" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm transition-all">
            Situazione Studenti
          </TabsTrigger>
          <TabsTrigger value="esami" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm transition-all">
            Esami
          </TabsTrigger>
          <TabsTrigger value="tesi" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm transition-all">
            Tesi
          </TabsTrigger>
          <TabsTrigger value="calendario" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm transition-all">
            Calendario
          </TabsTrigger>
        </TabsList>

        {/* Tab CORSI */}
        <TabsContent value="corsi" className="space-y-8 mt-0 focus-visible:outline-none">
          <div className="bg-[var(--bento-blue)] rounded-[1.5rem] p-8 flex flex-col md:flex-row gap-8 items-center justify-between border-none transition-colors">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-blue-900">
                <Users className="h-8 w-8" />
              </div>
              <div className="space-y-1 text-blue-900">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Status Cattedra</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-none">3 Corsi Attivi • 142 Studenti</h2>
              </div>
            </div>
            <div className="w-full md:w-64 space-y-2">
              <div className="flex justify-between text-xs font-bold text-blue-900">
                <span>Completamento programmi</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-3 bg-white/10 [&>div]:bg-blue-900 rounded-full" />
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { id: "anatomia-2", titolo: "Anatomia Artistica II", studenti: 45, orario: "Lun 14:00", aula: "Aula 12", completamento: 70 },
              { id: "disegno", titolo: "Disegno per la Scultura", studenti: 32, orario: "Mar 09:00", aula: "Laboratorio 3", completamento: 45 },
              { id: "morfologia", titolo: "Morfologia dei Componenti", studenti: 65, orario: "Ven 11:00", aula: "Aula Magno", completamento: 80 },
            ].map((corso) => (
              <AccordionItem key={corso.id} value={corso.id} className="border-none rounded-[1.5rem] bg-card overflow-hidden shadow-none">
                <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full pr-4 text-left gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-muted/50 flex items-center justify-center text-foreground">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground tracking-tight">{corso.titolo}</h4>
                        <p className="text-xs font-medium text-muted-foreground">{corso.studenti} Studenti iscritti</p>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-muted/20">
                    <div className="space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Logistica</p>
                      <div className="flex items-center gap-2 text-sm font-bold text-foreground"><Clock className="h-4 w-4 opacity-40" /> {corso.orario}</div>
                      <div className="flex items-center gap-2 text-sm font-bold text-foreground"><MapPin className="h-4 w-4 opacity-40" /> {corso.aula}</div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Avanzamento Programma</p>
                      <Progress value={corso.completamento} className="h-2 rounded-full" />
                      <p className="text-[10px] font-bold text-muted-foreground">{corso.completamento}% completato</p>
                    </div>
                    <div className="flex flex-col gap-2">
                       <Button className="rounded-xl font-black bg-foreground text-background shadow-none">Gestisci Registro</Button>
                       <Button variant="ghost" className="rounded-xl font-bold text-xs">Comunicazione alla classe</Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
        <TabsContent value="esami" className="mt-0 space-y-8 focus-visible:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[var(--bento-pink)] rounded-[1.5rem] p-8 flex flex-col justify-between border-none shadow-none min-h-[280px]">
               <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Nuovo Appello</span>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground leading-tight">Configura Esame</h2>
                  </div>
                  <Plus className="h-7 w-7 text-foreground" />
               </div>
               <Button className="w-full bg-foreground text-background rounded-xl h-14 font-black shadow-none text-base">Crea Appello</Button>
            </div>

            <div className="bg-card rounded-[1.5rem] p-8 flex flex-col justify-between border-none shadow-none min-h-[280px]">
               <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Firma Verbali</span>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground leading-tight">3 Verbali Pendenti</h2>
                  </div>
                  <FileSignature className="h-7 w-7 text-muted-foreground" />
               </div>
               <Button variant="outline" className="w-full rounded-xl h-14 font-black shadow-none text-base border-2">Firma Digitalmente</Button>
            </div>

            <div className="bg-card rounded-[1.5rem] p-8 flex flex-col justify-between border-none shadow-none min-h-[280px]">
               <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Appello in corso</span>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground leading-tight">Anatomia I</h2>
                    <p className="text-xs font-bold text-muted-foreground flex items-center gap-1.5"><Users className="h-3 w-3" /> 18 Studenti in attesa</p>
                  </div>
                  <Badge className="bg-bento-green text-foreground border-none font-black">LIVE</Badge>
               </div>
               <Button className="w-full bg-foreground text-background rounded-xl h-14 font-black shadow-none text-base">Inizia Appello</Button>
            </div>
          </div>

          <div className="bg-card rounded-[1.5rem] p-8 space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-xl font-black tracking-tight uppercase">Cronologia Appelli</h3>
                <div className="relative w-full max-w-xs">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground opacity-50" />
                  <Input placeholder="Cerca appello..." className="pl-10 rounded-xl h-10 bg-muted/30 border-none shadow-none text-sm font-medium" />
                </div>
             </div>
             <div className="space-y-2">
                {[
                  { titolo: "Estetica", data: "12 Mar 2026", iscritti: 45, status: "Verbalizzato" },
                  { titolo: "Storia dell'Arte", data: "05 Mar 2026", iscritti: 38, status: "Verbalizzato" },
                  { titolo: "Pittura II", data: "28 Feb 2026", iscritti: 12, status: "Verbalizzato" },
                ].map((esame, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-2xl hover:bg-muted/30 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground leading-none mb-1">{esame.titolo}</p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">{esame.data} • {esame.iscritti} Iscritti</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
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
                       const isSelected = selectedDay === day;
                       const hasEvents = [1, 5, 12, 16, 22, 28].includes(day);
                       
                       return (
                          <button
                             key={day}
                             onClick={() => setSelectedDay(day)}
                             className={cn(
                                "aspect-square rounded-full flex items-center justify-center transition-all relative border-none",
                                isSelected 
                                   ? "bg-foreground text-background scale-110 z-10 shadow-lg" 
                                   : hasEvents ? "bg-bento-blue text-foreground hover:bg-muted" : "bg-muted/10 text-foreground hover:bg-muted"
                             )}
                          >
                             <span className="text-sm font-bold tracking-tighter">{day}</span>
                             {hasEvents && !isSelected && (
                                <div className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
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
                    {[
                      { ora: "09:00 - 13:00", titolo: "Anatomia Artistica II", aula: "Aula 12", tipo: "Lezione" },
                      { ora: "15:00 - 17:00", titolo: "Ricevimento Tesisti", aula: "Studio Docenti", tipo: "Ricevimento" },
                    ].map((evento, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-muted/30 space-y-2">
                         <div className="flex justify-between items-center">
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{evento.ora}</span>
                            <Badge variant="outline" className="text-[10px] font-black">{evento.tipo}</Badge>
                         </div>
                         <h4 className="font-bold text-foreground">{evento.titolo}</h4>
                         <p className="text-xs font-medium text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {evento.aula}</p>
                      </div>
                    ))}
                 </div>

                 <div className="space-y-3">
                   <Button className="w-full bg-foreground text-background rounded-xl h-14 font-black text-base shadow-none">
                      <Download className="h-5 w-5 mr-2" /> Scarica Registro
                   </Button>
                   <Button variant="outline" className="w-full rounded-xl h-14 font-black text-base border-2">
                      <Plus className="h-5 w-5 mr-2" /> Segna Impegno
                   </Button>
                 </div>
              </div>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
