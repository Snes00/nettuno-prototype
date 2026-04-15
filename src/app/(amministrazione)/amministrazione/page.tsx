"use client"

import { 
  FileText, 
  CreditCard, 
  BookOpen, 
  GraduationCap, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Calculator,
  History
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
    <div className="flex flex-col gap-8 pb-8">
      {/* Intestazione */}
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Amministrazione</h1>
        <p className="text-muted-foreground mt-1">Gestisci la tua carriera, i pagamenti e la tua documentazione.</p>
      </section>

      <Tabs defaultValue="carriera" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-muted/50 rounded-2xl mb-6">
          <TabsTrigger value="carriera" className="rounded-xl py-2 gap-2">
            <GraduationCap className="h-4 w-4" />
            <span>Carriera</span>
          </TabsTrigger>
          <TabsTrigger value="tasse" className="rounded-xl py-2 gap-2">
            <CreditCard className="h-4 w-4" />
            <span>Tasse</span>
          </TabsTrigger>
          <TabsTrigger value="piano" className="rounded-xl py-2 gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Piano</span>
          </TabsTrigger>
          <TabsTrigger value="certificati" className="rounded-xl py-2 gap-2">
            <FileText className="h-4 w-4" />
            <span>Certificati</span>
          </TabsTrigger>
        </TabsList>

        {/* --- CARRIERA --- */}
        <TabsContent value="carriera" className="space-y-6 outline-none">
          {/* Statistiche Rapide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="rounded-2xl border-none shadow-sm bg-primary/5">
              <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                <Calculator className="h-8 w-8 text-primary" />
                <div className="text-2xl font-black text-primary">28.5</div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Media Ponderata</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-none shadow-sm bg-blue-500/5">
              <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                <GraduationCap className="h-8 w-8 text-blue-500" />
                <div className="text-2xl font-black text-blue-500">42 / 180</div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">CFU Acquisiti</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-none shadow-sm bg-emerald-500/5">
              <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                <History className="h-8 w-8 text-emerald-500" />
                <div className="text-2xl font-black text-emerald-500">23.3%</div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Progresso Carriera</p>
              </CardContent>
            </Card>
          </div>

          {/* Libretto */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-1">Libretto Digitale</h2>
            <Card className="rounded-2xl overflow-hidden border-muted-foreground/10 shadow-sm">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead className="font-bold">Materia</TableHead>
                    <TableHead className="text-center font-bold">Voto</TableHead>
                    <TableHead className="text-center font-bold">CFU</TableHead>
                    <TableHead className="text-right font-bold">Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {libretto.map((item, i) => (
                    <TableRow key={i} className="hover:bg-muted/20">
                      <TableCell className="font-semibold">{item.materia}</TableCell>
                      <TableCell className="text-center">
                        <span className="font-black text-primary">{item.voto}</span>
                        {item.lode && <span className="text-primary text-xs ml-0.5">L</span>}
                      </TableCell>
                      <TableCell className="text-center font-medium text-muted-foreground">{item.cfu}</TableCell>
                      <TableCell className="text-right text-xs font-medium text-muted-foreground">{item.data}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </section>
        </TabsContent>

        {/* --- TASSE --- */}
        <TabsContent value="tasse" className="space-y-6 outline-none">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-1">Situazione Pagamenti</h2>
          <div className="space-y-4">
            {tasse.map((tassa) => (
              <Card key={tassa.id} className="rounded-2xl border-muted-foreground/10 shadow-sm overflow-hidden group">
                <div className="flex flex-col md:flex-row md:items-center p-5 gap-4">
                  <div className={cn(
                    "h-12 w-12 rounded-2xl flex items-center justify-center shrink-0",
                    tassa.stato === "success" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30" : 
                    tassa.stato === "warning" ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30" : 
                    "bg-muted text-muted-foreground"
                  )}>
                    <CreditCard className="h-6 w-6" />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{tassa.rata}</h3>
                      <Badge variant={tassa.stato === "success" ? "secondary" : "outline"} className="text-[10px] h-5">
                        {tassa.stato === "success" ? "Pagato" : "Da Pagare"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Importo: <span className="font-bold text-foreground">{tassa.importo}</span> • Scadenza: {tassa.scadenza}</p>
                  </div>

                  <div className="flex gap-2">
                    {tassa.stato === "success" ? (
                      <Button variant="outline" size="sm" className="rounded-xl gap-2 text-xs">
                        <Download className="h-3 w-3" /> Ricevuta
                      </Button>
                    ) : (
                      <Button className="rounded-xl gap-2 text-xs font-bold bg-primary shadow-md">
                        Paga con <span className="bg-white text-blue-900 px-1 rounded text-[8px] font-black italic">pagoPA</span>
                      </Button>
                    )}
                  </div>
                </div>
                {tassa.stato === "warning" && (
                  <div className="bg-amber-500/10 px-5 py-2 border-t border-amber-500/20">
                    <p className="text-[10px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                      <AlertCircle className="h-3 w-3" /> Scadenza tra 6 giorni
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* --- PIANO DI STUDI --- */}
        <TabsContent value="piano" className="space-y-6 outline-none">
          <Card className="rounded-2xl border-muted-foreground/10 shadow-sm overflow-hidden">
            <CardHeader className="bg-primary/5">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-xl">Piano di Studi 2025/2026</CardTitle>
                  <CardDescription>Secondo anno - Pittura e Arti Visive</CardDescription>
                </div>
                <Badge variant="secondary">Approvato</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Carico Didattico Annuale</span>
                  <span className="font-bold">60 / 60 CFU</span>
                </div>
                <Progress value={100} className="h-2" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                  <div className="p-3 rounded-xl border bg-muted/20 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-all">
                    <span className="text-xs font-semibold">Vedi Materie Inserite</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="p-3 rounded-xl border bg-muted/20 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-all">
                    <span className="text-xs font-semibold">Regolamento Didattico</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 border-t p-4 flex justify-between items-center">
              <p className="text-[11px] text-muted-foreground">Ultima modifica: 12 Nov 2025</p>
              <Button size="sm" variant="ghost" disabled className="text-xs gap-2">
                 Modifica Piano (Chiuso)
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* --- CERTIFICATI --- */}
        <TabsContent value="certificati" className="space-y-6 outline-none">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-1">Download Certificati</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificati.map((cert, i) => (
              <Card key={i} className="rounded-2xl border-muted-foreground/10 shadow-sm hover:border-primary/30 transition-all group">
                <CardContent className="p-5 flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm leading-tight">{cert.titolo}</h3>
                    <p className="text-[11px] text-muted-foreground leading-snug">{cert.desc}</p>
                    <div className="pt-2 flex items-center gap-3">
                      <Button variant="link" className="p-0 h-auto text-[11px] font-bold text-primary gap-1">
                        <Download className="h-3 w-3" /> Scarica PDF
                      </Button>
                      <span className="text-[10px] text-muted-foreground/50">{cert.data}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="p-5 rounded-2xl bg-muted/30 border-2 border-dashed flex flex-col items-center text-center gap-3">
            <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center border shadow-sm">
              <History className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold">Richieste Precedenti</p>
              <p className="text-xs text-muted-foreground">Visualizza lo storico dei certificati richiesti negli anni passati.</p>
            </div>
            <Button variant="outline" size="sm" className="rounded-xl mt-2">Vedi Archivio</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
