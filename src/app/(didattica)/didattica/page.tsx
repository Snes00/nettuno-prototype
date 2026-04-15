import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Download, 
  Mail, 
  GraduationCap, 
  AlertCircle,
  FileText,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Info,
  Scroll,
  PenTool,
  ClipboardCheck,
  UploadCloud,
  FileSearch,
  X
} from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function DidatticaPage() {
  const corsi = [
    {
      id: "corso-1",
      titolo: "Pittura e Arti Visive I",
      docente: "Alessandro Rossi",
      presenze: 85,
      materiali: 12,
      stato: "Ammesso",
      cfu: 12
    },
    {
      id: "corso-2",
      titolo: "Anatomia Artistica",
      docente: "Maria Bianchi",
      presenze: 68,
      materiali: 8,
      stato: "A rischio",
      cfu: 6
    },
    {
      id: "corso-3",
      titolo: "Fotografia Digitale",
      docente: "Giorgio Neri",
      presenze: 92,
      materiali: 15,
      stato: "Ammesso",
      cfu: 8
    }
  ];

  const lezioniOggi = [
    { ora: "09:00 - 13:00", materia: "Pittura e Arti Visive I", aula: "Laboratorio 4", docente: "Rossi" },
    { ora: "14:00 - 16:00", materia: "Teoria del Colore", aula: "Aula Magna", docente: "Verdi" }
  ];

  const appelli = [
    { id: 1, materia: "Anatomia Artistica", data: "15 Giugno 2026", ora: "09:30", aula: "Aula 2B", stato: "Prenotabile" },
    { id: 2, materia: "Storia dell'Arte Moderna", data: "18 Giugno 2026", ora: "11:00", aula: "Aula Magna", stato: "Già Prenotato" },
    { id: 3, materia: "Fotografia Digitale", data: "22 Giugno 2026", ora: "10:00", aula: "Studio Luce", stato: "Non Prenotabile" }
  ];

  const calendario = [
    { data: "25 Apr", evento: "Festa della Liberazione", tipo: "Chiusura Accademia", color: "bg-red-500" },
    { data: "30 Apr", evento: "Scadenza Seconda Rata Tasse", tipo: "Amministrazione", color: "bg-amber-500" },
    { data: "15 Mag", evento: "Fine Lezioni Secondo Semestre", tipo: "Didattica", color: "bg-blue-500" }
  ];

  const tesiSteps = [
    { id: 1, titolo: "Assegnazione Titolo", desc: "Approvazione del docente relatore", stato: "completato" },
    { id: 2, titolo: "Deposito Modulistica", desc: "Consegna documenti in segreteria", stato: "completato" },
    { id: 3, titolo: "Prenotazione Sessione", desc: "Scelta della data di discussione", stato: "corrente" },
    { id: 4, titolo: "Caricamento Elaborato", desc: "Upload del PDF definitivo", stato: "attesa" },
  ];

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Intestazione */}
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Didattica</h1>
        <p className="text-muted-foreground mt-1">Gestisci i tuoi corsi, controlla l'orario e prenota i tuoi esami.</p>
      </section>

      <Tabs defaultValue="corsi" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 h-auto p-1 bg-muted/50 rounded-2xl mb-6">
          <TabsTrigger value="corsi" className="rounded-xl py-2 gap-2 transition-all">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Corsi</span>
          </TabsTrigger>
          <TabsTrigger value="orario" className="rounded-xl py-2 gap-2 transition-all">
            <Clock className="h-4 w-4" />
            <span className="hidden sm:inline">Orario</span>
          </TabsTrigger>
          <TabsTrigger value="esami" className="rounded-xl py-2 gap-2 transition-all">
            <GraduationCap className="h-4 w-4" />
            <span className="hidden sm:inline">Esami</span>
          </TabsTrigger>
          <TabsTrigger value="tesi" className="rounded-xl py-2 gap-2 transition-all">
            <Scroll className="h-4 w-4" />
            <span className="hidden sm:inline">Tesi</span>
          </TabsTrigger>
          <TabsTrigger value="calendario" className="rounded-xl py-2 gap-2 transition-all">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Agenda</span>
          </TabsTrigger>
        </TabsList>

        {/* --- TAB CORSI --- */}
        <TabsContent value="corsi" className="space-y-4 outline-none">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-1">I Miei Corsi</h2>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {corsi.map((corso) => (
              <AccordionItem 
                key={corso.id} 
                value={corso.id} 
                className="border rounded-2xl bg-card overflow-hidden transition-all data-[state=open]:shadow-md data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/30 transition-colors">
                  <div className="flex flex-col items-start gap-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base md:text-lg">{corso.titolo}</span>
                      <Badge 
                        variant={corso.stato === "Ammesso" ? "secondary" : "destructive"} 
                        className="text-[10px] h-5"
                      >
                        {corso.stato}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">Prof. {corso.docente} • {corso.cfu} CFU</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-2">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium flex items-center gap-1.5">
                          Tracker Presenze 
                          {corso.presenze < 75 && <AlertCircle className="h-3.5 w-3.5 text-destructive" />}
                        </span>
                        <span className={`font-bold ${corso.presenze < 75 ? "text-destructive" : "text-primary"}`}>
                          {corso.presenze}%
                        </span>
                      </div>
                      <Progress value={corso.presenze} className="h-2.5" />
                      <p className="text-[11px] text-muted-foreground">
                        Minimo richiesto: 75%. {corso.presenze < 75 ? `Ti mancano ${75 - corso.presenze}% per l'ammissione.` : "Sei in regola per l'esame."}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="h-11 rounded-xl gap-2 text-sm justify-start font-medium bg-background">
                        <Download className="h-4 w-4 text-primary" />
                        Materiali ({corso.materiali})
                      </Button>
                      <Button variant="outline" className="h-11 rounded-xl gap-2 text-sm justify-start font-medium bg-background">
                        <Mail className="h-4 w-4 text-primary" />
                        Contatta
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        {/* --- TAB ORARIO --- */}
        <TabsContent value="orario" className="space-y-6 outline-none">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Lezioni di Oggi</h2>
            <Badge variant="outline" className="font-mono">Mar 14 Aprile</Badge>
          </div>
          
          <div className="space-y-3">
            {lezioniOggi.map((lezione, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl border bg-card relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:w-2 transition-all" />
                <div className="flex flex-col justify-center items-center bg-muted/50 rounded-xl px-3 py-2 min-w-[80px]">
                  <span className="text-xs font-bold text-primary">{lezione.ora.split(' ')[0]}</span>
                  <div className="h-px w-4 bg-muted-foreground/30 my-1" />
                  <span className="text-[10px] text-muted-foreground">{lezione.ora.split(' ')[2]}</span>
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <h3 className="font-bold text-base leading-tight">{lezione.materia}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {lezione.aula}</span>
                    <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> Prof. {lezione.docente}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <Card className="rounded-2xl border-dashed border-2 bg-muted/5">
            <CardContent className="p-6 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-bold">Domani, 15 Aprile</p>
                <p className="text-xs text-muted-foreground">Hai 3 lezioni in programma dalle 10:00.</p>
              </div>
              <Button variant="secondary" size="sm" className="rounded-lg">Vedi Orario Completo</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- TAB ESAMI --- */}
        <TabsContent value="esami" className="space-y-6 outline-none">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-1">Prenotazione Appelli</h2>
          
          <div className="grid gap-4">
            {appelli.map((appello) => (
              <Card key={appello.id} className="rounded-2xl overflow-hidden border-muted-foreground/10 shadow-sm">
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{appello.materia}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" /> {appello.data} alle {appello.ora}
                      </CardDescription>
                    </div>
                    <Badge variant={appello.stato === "Prenotabile" ? "default" : appello.stato === "Già Prenotato" ? "secondary" : "outline"}>
                      {appello.stato}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-xs text-muted-foreground flex items-center gap-2">
                   <MapPin className="h-3 w-3" /> Sede Centrale, {appello.aula}
                </CardContent>
                <CardFooter className="p-4 bg-muted/30 flex gap-2">
                  {appello.stato === "Prenotabile" ? (
                    <Button className="w-full rounded-xl gap-2 font-bold shadow-sm">
                      <CheckCircle2 className="h-4 w-4" /> Prenota Esame
                    </Button>
                  ) : appello.stato === "Già Prenotato" ? (
                    <Button variant="outline" className="w-full rounded-xl gap-2 font-bold text-destructive hover:bg-destructive/5 hover:text-destructive border-destructive/20">
                      <X className="h-4 w-4" /> Cancella Prenotazione
                    </Button>
                  ) : (
                    <Button disabled className="w-full rounded-xl gap-2">
                      <Clock className="h-4 w-4" /> Chiuso
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* --- TAB TESI (NUOVA) --- */}
        <TabsContent value="tesi" className="space-y-8 outline-none">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Percorso Laurea</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-none">In Corso</Badge>
          </div>

          {/* Stepper Percorso Tesi */}
          <div className="relative space-y-6 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-muted">
            {tesiSteps.map((step) => (
              <div key={step.id} className="relative flex gap-6 pl-1 items-start group">
                <div className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-background transition-colors shadow-sm",
                  step.stato === "completato" ? "bg-emerald-500 text-white" : 
                  step.stato === "corrente" ? "bg-primary text-white animate-pulse" : 
                  "bg-muted text-muted-foreground"
                )}>
                  {step.stato === "completato" ? <CheckCircle2 className="h-5 w-5" /> : <span className="text-xs font-bold">{step.id}</span>}
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <h3 className={cn(
                    "font-bold leading-none",
                    step.stato === "attesa" ? "text-muted-foreground" : "text-foreground"
                  )}>
                    {step.titolo}
                  </h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
                {step.stato === "corrente" && (
                  <Button size="sm" className="ml-auto rounded-xl h-8 px-3 text-[10px] font-bold">
                    Gestisci
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sezione Modulistica */}
            <Card className="rounded-2xl border-none shadow-sm bg-muted/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileSearch className="h-4 w-4 text-primary" /> Modulistica Tesi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-between h-auto py-3 rounded-xl hover:bg-background group">
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-xs font-bold">Richiesta Relatore</span>
                    <span className="text-[9px] text-muted-foreground">Formato PDF • 1.2MB</span>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Button>
                <Button variant="ghost" className="w-full justify-between h-auto py-3 rounded-xl hover:bg-background group">
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-xs font-bold">Dichiarazione Etica</span>
                    <span className="text-[9px] text-muted-foreground">Formato PDF • 800KB</span>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Button>
              </CardContent>
            </Card>

            {/* Sezione Prenotazione Sessione */}
            <Card className="rounded-2xl border-primary/20 shadow-md bg-primary/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Scroll className="h-20 w-20 rotate-12" />
               </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <PenTool className="h-4 w-4 text-primary" /> Sessione Laurea
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded-xl bg-background/80 border border-primary/10">
                  <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">Prossima Disponibile</p>
                  <p className="text-sm font-bold">Sessione Estiva 2026</p>
                  <p className="text-xs text-muted-foreground">Discussioni dal 12 al 15 Luglio</p>
                </div>
                <Button className="w-full rounded-xl gap-2 font-bold shadow-lg shadow-primary/20">
                  <ClipboardCheck className="h-4 w-4" /> Prenota Discussione
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="p-6 rounded-2xl border-2 border-dashed flex flex-col items-center text-center gap-4 bg-muted/5">
            <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center border shadow-sm">
              <UploadCloud className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold">Caricamento Elaborato Finale</p>
              <p className="text-xs text-muted-foreground max-w-[240px]">L'upload sarà disponibile 15 giorni prima della data di discussione prenotata.</p>
            </div>
            <Button disabled variant="outline" className="rounded-xl px-8 border-muted-foreground/20">
              Upload PDF (Sola Lettura)
            </Button>
          </div>
        </TabsContent>

        {/* --- TAB CALENDARIO --- */}
        <TabsContent value="calendario" className="space-y-6 outline-none">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-1">Prossimi Eventi & Scadenze</h2>
          
          <div className="space-y-4">
            {calendario.map((evento, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="flex flex-col items-center min-w-[50px] pt-1">
                  <span className="text-sm font-bold text-foreground">{evento.data.split(' ')[0]}</span>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">{evento.data.split(' ')[1]}</span>
                  <div className={`h-1.5 w-1.5 rounded-full mt-2 ${evento.color}`} />
                </div>
                <div className="flex-1 p-4 rounded-2xl bg-muted/30 border border-transparent group-hover:border-primary/20 group-hover:bg-muted/50 transition-all">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold leading-tight">{evento.evento}</h3>
                    <Badge variant="outline" className="text-[9px] px-1.5 py-0 h-4 bg-background">
                      {evento.tipo}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Tutto il giorno • Accademia di Belle Arti</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex gap-3 items-center">
            <Info className="h-5 w-5 text-primary shrink-0" />
            <p className="text-xs font-medium text-primary-foreground/80 leading-snug">
              Il calendario esatto delle sessioni estive sarà pubblicato il 1° Maggio 2026.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
