"use client"

import * as React from "react"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Smartphone, 
  LogOut, 
  Camera, 
  Fingerprint, 
  FileCheck, 
  ChevronRight,
  ExternalLink,
  IdCard,
  KeyRound,
  QrCode,
  Maximize2,
  CheckCircle2,
  Download,
  Shield
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
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function AreaPersonalePage() {
  const [isIDOpen, setIsIDOpen] = React.useState(false);

  const dispositivi = [
    { nome: "iPhone 15 Pro", stato: "Attivo ora", icon: Smartphone },
    { nome: "MacBook Pro 14\"", stato: "Ultimo accesso: 2 ore fa", icon: Smartphone },
  ];

  const documenti = [
    { tipo: "Carta d'Identità", scadenza: "12/05/2028", stato: "Validato" },
    { tipo: "Codice Fiscale", scadenza: "Illimitata", stato: "Validato" },
  ];

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Intestazione */}
      <section className="px-1">
        <h1 className="text-3xl font-bold tracking-tight">Area Personale</h1>
        <p className="text-muted-foreground mt-1">Gestisci il tuo profilo, la sicurezza e il tuo tesserino digitale.</p>
      </section>

      {/* Tesserino Digitale Interattivo */}
      <section>
        <div 
          onClick={() => setIsIDOpen(true)}
          className="relative w-full aspect-[1.6/1] md:aspect-[2.1/1] rounded-[2rem] p-6 text-white overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/20"
        >
          {/* Sfondo con gradiente e pattern artistico */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-primary to-primary/80" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          {/* Logo Accademia (Placeholder) */}
          <div className="absolute top-6 right-6 flex items-center gap-2 opacity-80">
            <div className="h-8 w-8 rounded-full border-2 border-white/40 flex items-center justify-center font-black text-[10px]">ABA</div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Accademia Belle Arti</span>
          </div>

          <div className="relative h-full flex flex-col justify-between z-10">
            <div className="flex gap-5 items-start">
              {/* Foto Studente */}
              <div className="h-20 w-20 md:h-28 md:w-28 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center overflow-hidden shrink-0 shadow-lg">
                <User className="h-10 w-10 md:h-14 md:w-14 text-white/60" />
              </div>
              
              <div className="space-y-1 md:space-y-2 pt-1">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">Studente</span>
                  <h2 className="text-xl md:text-3xl font-black">Mario Rossi</h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">Corso</span>
                  <p className="text-xs md:text-sm font-medium opacity-90">Pittura e Arti Visive I</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="space-y-3">
                <div className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 pr-2">A.A. 2025/2026</span>
                   <Badge variant="secondary" className="w-fit bg-emerald-500/20 text-emerald-300 border-none text-[9px] h-5 font-bold animate-pulse">
                     ISCRITTO IN REGOLA
                   </Badge>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/40 font-mono">
                  Matricola: 202400123
                </div>
              </div>

              <div className="bg-white p-2 rounded-xl shadow-lg group-hover:rotate-6 transition-transform">
                <QrCode className="h-10 w-10 md:h-14 md:w-14 text-black" />
              </div>
            </div>
          </div>

          {/* Overlay Hover */}
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20">
               <Maximize2 className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground text-center mt-3 font-medium uppercase tracking-widest flex items-center justify-center gap-2">
           <Shield className="h-3 w-3" /> Valido per accesso Musei e Parchi Archeologici
        </p>
      </section>

      <Tabs defaultValue="dati" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50 rounded-2xl mb-6">
          <TabsTrigger value="dati" className="rounded-xl py-2 gap-2 transition-all">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Anagrafica</span>
            <span className="sm:hidden">Dati</span>
          </TabsTrigger>
          <TabsTrigger value="sicurezza" className="rounded-xl py-2 gap-2 transition-all">
            <ShieldCheck className="h-4 w-4" />
            <span className="hidden sm:inline">Sicurezza</span>
            <span className="sm:hidden">Safety</span>
          </TabsTrigger>
          <TabsTrigger value="documenti" className="rounded-xl py-2 gap-2 transition-all">
            <IdCard className="h-4 w-4" />
            <span className="hidden sm:inline">Documenti</span>
            <span className="sm:hidden">Files</span>
          </TabsTrigger>
        </TabsList>

        {/* --- DATI ANAGRAFICI --- */}
        <TabsContent value="dati" className="space-y-6 outline-none animate-in fade-in duration-500">
          <Card className="rounded-2xl border-muted-foreground/10 shadow-sm overflow-hidden">
            <CardHeader className="bg-muted/30">
              <CardTitle className="text-lg">Informazioni di Contatto</CardTitle>
              <CardDescription>I tuoi dati istituzionali e personali aggiornati.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Istituzionale</label>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-muted/20 border group hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium truncate">m.rossi@studenti.accademia.it</span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                       <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Telefono</label>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/20 border group hover:border-primary/30 transition-all">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">+39 333 123 4567</span>
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Residenza</label>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/20 border group hover:border-primary/30 transition-all">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Via delle Belle Arti 12, 00100 Roma (RM)</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/10 border-t p-4 flex justify-between items-center">
              <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                <FileCheck className="h-3 w-3 text-emerald-500" /> Dati verificati dalla segreteria
              </p>
              <Button variant="ghost" className="text-xs font-bold gap-2">
                 Richiedi Modifica Dati
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* --- SICUREZZA --- */}
        <TabsContent value="sicurezza" className="space-y-6 outline-none animate-in fade-in duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-2xl border-muted-foreground/10 shadow-sm overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <KeyRound className="h-5 w-5 text-primary" /> Credenziali
                </CardTitle>
                <CardDescription>Gestisci la tua password e l'accesso MFA.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <Button variant="outline" className="w-full justify-between rounded-xl h-12 group">
                   <span className="text-sm font-semibold">Cambia Password</span>
                   <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                 </Button>
                 <Button variant="outline" className="w-full justify-between rounded-xl h-12 group">
                   <div className="flex items-center gap-3">
                     <Fingerprint className="h-5 w-5 text-primary" />
                     <span className="text-sm font-semibold">Autenticazione Biometrica</span>
                   </div>
                   <Badge className="bg-emerald-500 text-white border-none">Attiva</Badge>
                 </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-muted-foreground/10 shadow-sm overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" /> Dispositivi Connessi
                </CardTitle>
                <CardDescription>Sessioni attive sul tuo account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {dispositivi.map((dev, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border">
                    <div className="flex items-center gap-3">
                       <dev.icon className="h-4 w-4 text-muted-foreground" />
                       <div className="flex flex-col">
                         <span className="text-sm font-bold">{dev.nome}</span>
                         <span className="text-[10px] text-muted-foreground">{dev.stato}</span>
                       </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-destructive text-[10px] font-bold">Rimuovi</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* --- DOCUMENTI --- */}
        <TabsContent value="documenti" className="space-y-6 outline-none animate-in fade-in duration-500">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-1">Digital Locker Documenti</h2>
          <div className="grid gap-4">
            {documenti.map((doc, i) => (
              <Card key={i} className="rounded-2xl border-muted-foreground/10 shadow-sm overflow-hidden hover:border-primary/30 transition-all">
                <div className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <IdCard className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">{doc.tipo}</span>
                      <span className="text-[10px] text-muted-foreground">Scadenza: {doc.scadenza}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 text-[10px]">
                      {doc.stato}
                    </Badge>
                    <Button variant="ghost" size="icon" className="rounded-full">
                       <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-8 rounded-2xl border-2 border-dashed flex flex-col items-center text-center gap-4 bg-muted/5">
             <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center border shadow-sm">
                <Download className="h-6 w-6 text-muted-foreground" />
             </div>
             <div className="space-y-1">
                <p className="text-sm font-bold">Aggiungi nuovo documento</p>
                <p className="text-xs text-muted-foreground max-w-[240px]">I documenti devono essere caricati in formato PDF o JPG (max 5MB).</p>
             </div>
             <Button className="rounded-xl px-8 shadow-md">
               Sfoglia File
             </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Tasto Logout */}
      <section className="pt-4">
        <Button 
          variant="outline" 
          className="w-full h-14 rounded-2xl border-destructive/20 text-destructive hover:bg-destructive hover:text-white transition-all font-bold gap-3 shadow-sm group"
        >
          <LogOut className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          Chiudi Sessione (Logout)
        </Button>
        <p className="text-center text-[10px] text-muted-foreground mt-4">Nettuno v2.4.0 • ABA Redesign Project</p>
      </section>

      {/* ID CARD FULLSCREEN DIALOG */}
      <Dialog open={isIDOpen} onOpenChange={setIsIDOpen}>
        <DialogContent className="max-w-md p-0 border-none bg-transparent shadow-none gap-0 overflow-hidden">
          <div className="relative w-full aspect-[1/1.6] bg-gradient-to-br from-[#1a1a1a] via-primary to-primary/80 rounded-[2.5rem] p-8 text-white shadow-2xl overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-full border-2 border-white/40 flex items-center justify-center font-black text-xs">ABA</div>
                <span className="text-xs font-bold uppercase tracking-[0.3em]">Accademia Belle Arti</span>
              </div>
              
              <div className="h-48 w-48 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center overflow-hidden shadow-2xl">
                 <User className="h-24 w-24 text-white/60" />
              </div>

              <div className="space-y-1">
                <h2 className="text-4xl font-black">Mario Rossi</h2>
                <p className="text-lg font-medium opacity-80 italic">Pittura e Arti Visive I</p>
              </div>

              <div className="space-y-4 w-full">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                   <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-1">Status Documento</p>
                   <p className="text-sm font-black">STUDENTE ISCRITTO</p>
                   <p className="text-[11px] font-bold text-emerald-400">Anno Accademico 2025/2026</p>
                </div>
                
                <div className="flex justify-between items-center px-2">
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Matricola</p>
                    <p className="text-sm font-mono font-bold">202400123</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Scadenza</p>
                    <p className="text-sm font-bold">31/10/2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl flex flex-col items-center gap-2 group scale-100 hover:scale-105 transition-transform duration-500">
              <QrCode className="h-32 w-32 text-black" />
              <p className="text-[8px] text-black font-black uppercase tracking-widest opacity-40">Codice Verifica Universitaria</p>
            </div>
          </div>
          <Button 
            onClick={() => setIsIDOpen(false)} 
            className="mt-6 w-full bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl h-14 font-bold"
          >
            Chiudi Tesserino
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
