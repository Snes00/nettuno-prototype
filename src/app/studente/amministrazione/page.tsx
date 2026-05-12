"use client"

import { 
  FileText, 
  CreditCard, 
  BookOpen, 
  GraduationCap, 
  Download, 
  AlertCircle, 
  ChevronRight,
  Calculator,
  History,
  ArrowRight
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function AmministrazionePage() {
  const libretto = [
    { materia: "Pittura I", voto: "30", lode: true, cfu: 12, data: "12/02/2026" },
    { materia: "Anatomia Artistica", voto: "28", lode: false, cfu: 6, data: "20/02/2026" },
    { materia: "Storia dell'Arte Moderna", voto: "26", lode: false, cfu: 8, data: "05/02/2026" },
    { materia: "Inglese", voto: "IDONEO", lode: false, cfu: 4, data: "15/01/2026" },
  ];

  const tasse = [
    { id: 1, rata: "1ª Rata", importo: "€ 456,00", scadenza: "Pagata", stato: "success", data: "15/10/2025" },
    { id: 2, rata: "2ª Rata", importo: "€ 380,00", scadenza: "20/04/2026", stato: "warning", data: "-" },
    { id: 3, rata: "Tassa Regionale", importo: "€ 140,00", scadenza: "30/05/2026", stato: "pending", data: "-" },
  ];

  const certificati = [
    { titolo: "Certificato di Iscrizione", desc: "Attesta l'iscrizione all'anno accademico corrente.", data: "2025/26" },
    { titolo: "Libretto Voti (Storico)", desc: "Elenco completo degli esami superati con votazione.", data: "Agg. Oggi" },
    { titolo: "Certificato Tasse Pagate", desc: "Dichiarazione utile per detrazioni fiscali.", data: "2025" },
  ];

  return (
    <div className="flex flex-col gap-8 pb-12 animate-in fade-in duration-500">
      {/* Intestazione */}
      <section className="px-1 space-y-1">
        <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-foreground">Amministrazione</h1>
        <p className="text-muted-foreground text-base md:text-lg font-medium tracking-tight">
          Gestisci la tua carriera, i pagamenti e la tua documentazione.
        </p>
      </section>

      <Tabs defaultValue="carriera" className="w-full">
        <TabsList className="flex w-full overflow-x-auto h-auto p-1.5 bg-muted/40 rounded-[1.5rem] mb-8 border-none no-scrollbar">
          <TabsTrigger value="carriera" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm">
            <GraduationCap className="h-4 w-4" />
            <span className="hidden sm:inline">Carriera</span>
          </TabsTrigger>
          <TabsTrigger value="tasse" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Tasse</span>
          </TabsTrigger>
          <TabsTrigger value="piano" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Piano</span>
          </TabsTrigger>
          <TabsTrigger value="certificati" className="flex-1 rounded-xl py-3 gap-2 data-[state=active]:bg-background data-[state=active]:shadow-none font-bold text-sm">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Certificati</span>
          </TabsTrigger>
        </TabsList>

        {/* --- CARRIERA --- */}
        <TabsContent value="carriera" className="space-y-8 outline-none focus-visible:ring-0">
          {/* Statistiche Rapide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--bento-blue)] rounded-[1.5rem] p-8 flex flex-col items-start gap-4 transition-all hover:scale-[1.02]">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 dark:bg-white/10 flex items-center justify-center">
                   <Calculator className="h-5 w-5 text-blue-600 dark:text-foreground" />
                </div>
                <div className="space-y-0.5">
                   <div className="text-4xl font-black tracking-tighter text-blue-700 dark:text-foreground">28.5</div>
                   <p className="text-[10px] uppercase font-black text-blue-700/60 dark:text-foreground/40 tracking-[0.2em]">Media Ponderata</p>
                </div>
            </div>
            <div className="bg-[var(--bento-yellow)] rounded-[1.5rem] p-8 flex flex-col items-start gap-4 transition-all hover:scale-[1.02]">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 dark:bg-white/10 flex items-center justify-center">
                   <GraduationCap className="h-5 w-5 text-amber-600 dark:text-foreground" />
                </div>
                <div className="space-y-0.5">
                   <div className="text-4xl font-black tracking-tighter text-amber-700 dark:text-foreground">42 / 180</div>
                   <p className="text-[10px] uppercase font-black text-amber-700/60 dark:text-foreground/40 tracking-[0.2em]">CFU Acquisiti</p>
                </div>
            </div>
            <div className="bg-[var(--bento-green)] rounded-[1.5rem] p-8 flex flex-col items-start gap-4 transition-all hover:scale-[1.02]">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 dark:bg-white/10 flex items-center justify-center">
                   <History className="h-5 w-5 text-emerald-600 dark:text-foreground" />
                </div>
                <div className="space-y-0.5">
                   <div className="text-4xl font-black tracking-tighter text-emerald-700 dark:text-foreground">23.3%</div>
                   <p className="text-[10px] uppercase font-black text-emerald-700/60 dark:text-foreground/40 tracking-[0.2em]">Progresso Carriera</p>
                </div>
            </div>
          </div>

          {/* Libretto */}
          <section className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Libretto Digitale</span>
              <Button variant="link" className="text-xs font-bold text-primary gap-1">Vedi Storico <ArrowRight className="h-3 w-3" /></Button>
            </div>
            <div className="bg-card rounded-[1.5rem] overflow-hidden border-none shadow-none">
              <Table>
                <TableHeader className="bg-muted/20">
                  <TableRow className="border-b border-border/40 hover:bg-transparent">
                    <TableHead className="px-8 font-black uppercase text-[10px] tracking-widest h-12">Materia</TableHead>
                    <TableHead className="text-center font-black uppercase text-[10px] tracking-widest h-12">Voto</TableHead>
                    <TableHead className="text-center font-black uppercase text-[10px] tracking-widest h-12">CFU</TableHead>
                    <TableHead className="text-right px-8 font-black uppercase text-[10px] tracking-widest h-12">Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {libretto.map((item, i) => (
                    <TableRow key={i} className="hover:bg-muted/20 border-b border-border/40 last:border-0 transition-colors">
                      <TableCell className="px-8 py-5 font-bold tracking-tight">{item.materia}</TableCell>
                      <TableCell className="text-center py-5">
                        <span className="text-lg font-black text-primary">{item.voto}</span>
                        {item.lode && <span className="text-primary text-xs ml-0.5 font-black italic">L</span>}
                      </TableCell>
                      <TableCell className="text-center py-5 font-bold text-muted-foreground">{item.cfu}</TableCell>
                      <TableCell className="text-right px-8 py-5 text-xs font-black text-muted-foreground/60">{item.data}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
        </TabsContent>

        {/* --- TASSE --- */}
        <TabsContent value="tasse" className="space-y-6 outline-none focus-visible:ring-0">
          <div className="px-1">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Situazione Pagamenti</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {tasse.map((tassa) => (
              <div key={tassa.id} className={cn(
                "rounded-[1.5rem] p-6 flex flex-col md:flex-row md:items-center gap-6 transition-all border-none",
                tassa.stato === "success" ? "bg-[var(--bento-green)]" : 
                tassa.stato === "warning" ? "bg-[var(--bento-pink)]" : 
                "bg-muted/50"
              )}>
                <div className={cn(
                  "h-14 w-14 rounded-2xl flex items-center justify-center shrink-0",
                  tassa.stato === "success" ? "bg-emerald-500/10 dark:bg-white/10" : 
                  tassa.stato === "warning" ? "bg-red-500/10 dark:bg-white/10" : 
                  "bg-muted dark:bg-white/5"
                )}>
                  <CreditCard className={cn(
                    "h-7 w-7",
                    tassa.stato === "success" ? "text-emerald-700 dark:text-foreground" : 
                    tassa.stato === "warning" ? "text-red-700 dark:text-foreground" : 
                    "text-muted-foreground dark:text-foreground/40"
                  )} />
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className={cn(
                      "text-xl font-black tracking-tight",
                      tassa.stato === "success" ? "text-emerald-900 dark:text-foreground" : 
                      tassa.stato === "warning" ? "text-red-900 dark:text-foreground" : 
                      "text-foreground"
                    )}>{tassa.rata}</h3>
                    <Badge className={cn(
                      "text-[9px] font-black uppercase tracking-widest border-none h-5 px-2",
                      tassa.stato === "success" ? "bg-emerald-600 dark:bg-foreground dark:text-background text-white" : 
                      tassa.stato === "warning" ? "bg-red-600 dark:bg-foreground dark:text-background text-white" : 
                      "bg-muted-foreground/20 text-muted-foreground"
                    )}>
                      {tassa.stato === "success" ? "Pagato" : "Da Pagare"}
                    </Badge>
                  </div>
                  <p className={cn(
                    "text-sm font-medium",
                    tassa.stato === "success" ? "text-emerald-800/60 dark:text-foreground/60" : 
                    tassa.stato === "warning" ? "text-red-800/60 dark:text-foreground/60" : 
                    "text-muted-foreground"
                  )}>
                    Importo: <span className="font-black text-current">{tassa.importo}</span> • Scadenza: <span className="font-black text-current">{tassa.scadenza}</span>
                  </p>
                </div>

                <div className="flex gap-2">
                  {tassa.stato === "success" ? (
                    <Button variant="outline" className="rounded-xl gap-2 font-bold bg-white/40 dark:bg-black/20 border-none hover:bg-white/60 dark:hover:bg-black/40 h-11 px-6 transition-all">
                      <Download className="h-4 w-4" /> Ricevuta
                    </Button>
                  ) : (
                    <Button className="rounded-xl gap-2 font-black bg-primary text-primary-foreground shadow-none h-11 px-6 hover:scale-[1.02] active:scale-95 transition-all">
                      Paga con <span className="bg-white/90 text-[#003366] px-1.5 py-0.5 rounded text-[9px] font-black italic">pagoPA</span>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-[var(--bento-blue)] rounded-[1.5rem] p-8 flex flex-col md:flex-row items-center gap-6 mt-8">
            <div className="h-12 w-12 rounded-full bg-blue-500/10 dark:bg-white/10 flex items-center justify-center shrink-0">
               <AlertCircle className="h-6 w-6 text-blue-600 dark:text-foreground" />
            </div>
            <div className="flex-1 text-center md:text-left">
               <h4 className="font-black text-blue-900 dark:text-foreground">Informazione Importante</h4>
               <p className="text-sm font-medium text-blue-800/60 dark:text-foreground/60">I pagamenti effettuati tramite PagoPA richiedono fino a 24 ore per essere visualizzati nel sistema.</p>
            </div>
            <Button variant="link" className="font-black text-blue-700 dark:text-foreground underline decoration-2 underline-offset-4">Guida ai Pagamenti</Button>
          </div>
        </TabsContent>

        {/* --- PIANO DI STUDI --- */}
        <TabsContent value="piano" className="space-y-6 outline-none focus-visible:ring-0">
          <div className="bg-card rounded-[1.5rem] overflow-hidden border-none shadow-none transition-all">
            <div className="bg-[var(--bento-purple)] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-700/60 dark:text-foreground/40">Anno Accademico 2025/2026</span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-purple-900 dark:text-foreground leading-none">Piano di Studi</h2>
                <p className="text-purple-700 dark:text-foreground/60 font-bold">Secondo anno - Pittura e Arti Visive</p>
              </div>
              <Badge className="bg-purple-600 dark:bg-foreground dark:text-background text-white border-none rounded-full px-4 h-8 font-black uppercase tracking-widest text-[10px]">Approvato</Badge>
            </div>
            <div className="p-8 md:p-10 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-black uppercase tracking-widest text-[10px] text-muted-foreground">Carico Didattico Annuale</span>
                  <span className="font-black text-lg">60 / 60 CFU</span>
                </div>
                <div className="h-4 bg-muted/30 rounded-full overflow-hidden">
                   <div className="h-full bg-purple-500 rounded-full w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-6 rounded-[1.25rem] bg-muted/20 flex items-center justify-between group cursor-pointer hover:bg-muted/40 transition-all border-none">
                    <div className="flex items-center gap-4">
                       <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center shadow-sm">
                          <BookOpen className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                       </div>
                       <span className="text-sm font-black tracking-tight">Vedi Materie Inserite</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </div>
                  <div className="p-6 rounded-[1.25rem] bg-muted/20 flex items-center justify-between group cursor-pointer hover:bg-muted/40 transition-all border-none">
                    <div className="flex items-center gap-4">
                       <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center shadow-sm">
                          <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                       </div>
                       <span className="text-sm font-black tracking-tight">Regolamento Didattico</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/20 p-6 flex justify-between items-center border-t border-border/20">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Ultima modifica: 12 Nov 2025</p>
              <Button size="sm" variant="ghost" disabled className="text-[10px] font-black uppercase tracking-widest gap-2">
                 Modifica Chiusa
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* --- CERTIFICATI --- */}
        <TabsContent value="certificati" className="space-y-6 outline-none focus-visible:ring-0">
          <div className="px-1">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Download Documentazione</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificati.map((cert, i) => (
              <div key={i} className="bg-card rounded-[1.5rem] p-8 flex flex-col gap-6 transition-all hover:scale-[1.02] group border-none">
                <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <FileText className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-black text-xl tracking-tight leading-tight">{cert.titolo}</h3>
                  <p className="text-xs font-medium text-muted-foreground leading-relaxed line-clamp-2">{cert.desc}</p>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-border/20 mt-2 pt-6">
                  <Button variant="link" className="p-0 h-auto text-xs font-black text-primary gap-1 group/btn">
                    <Download className="h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" /> PDF
                  </Button>
                  <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">{cert.data}</span>
                </div>
              </div>
            ))}
            
            <div className="bg-muted/20 rounded-[1.5rem] border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center p-8 text-center gap-4 min-h-[240px]">
              <div className="h-14 w-14 rounded-full bg-background flex items-center justify-center shadow-sm border border-border/40">
                <History className="h-7 w-7 text-muted-foreground/60" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black uppercase tracking-widest">Archivio Storico</p>
                <p className="text-xs font-bold text-muted-foreground max-w-[180px]">Richieste e documenti degli anni passati.</p>
              </div>
              <Button variant="outline" size="sm" className="rounded-xl mt-2 font-black text-xs border-border/60">Vedi Tutto</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
