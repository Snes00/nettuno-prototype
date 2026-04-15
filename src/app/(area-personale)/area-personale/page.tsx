"use client"

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
  KeyRound
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
import { Input } from "@/components/ui/input";

export default function AreaPersonalePage() {
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
      {/* Header Profilo */}
      <section className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-background border shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
            <User className="h-32 w-32" />
        </div>
        
        <div className="relative group">
          <div className="h-24 w-24 md:h-32 md:w-32 rounded-3xl bg-muted border-4 border-background shadow-xl flex items-center justify-center overflow-hidden">
             <User className="h-12 w-12 md:h-16 md:w-16 text-muted-foreground" />
          </div>
          <Button size="icon" className="absolute -bottom-2 -right-2 h-10 w-10 rounded-xl shadow-lg border-2 border-background">
            <Camera className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 text-center md:text-left space-y-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight">Mario Rossi</h1>
            <Badge variant="secondary" className="w-fit mx-auto md:mx-0">Matricola: 202400123</Badge>
          </div>
          <p className="text-muted-foreground font-medium">Pittura e Arti Visive • Secondo Anno (Triennio)</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" /> Studente In Regola
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
              <FileCheck className="h-3.5 w-3.5" /> Iscrizione Attiva
            </span>
          </div>
        </div>
      </section>

      <Tabs defaultValue="dati" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50 rounded-2xl mb-6">
          <TabsTrigger value="dati" className="rounded-xl py-2 gap-2">
            <User className="h-4 w-4" />
            <span>Dati</span>
          </TabsTrigger>
          <TabsTrigger value="sicurezza" className="rounded-xl py-2 gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Sicurezza</span>
          </TabsTrigger>
          <TabsTrigger value="documenti" className="rounded-xl py-2 gap-2">
            <IdCard className="h-4 w-4" />
            <span>Documenti</span>
          </TabsTrigger>
        </TabsList>

        {/* --- DATI ANAGRAFICI --- */}
        <TabsContent value="dati" className="space-y-6 outline-none">
          <Card className="rounded-2xl border-muted-foreground/10 shadow-sm overflow-hidden">
            <CardHeader className="bg-muted/30">
              <CardTitle className="text-lg">Informazioni di Contatto</CardTitle>
              <CardDescription>I tuoi dati istituzionali e personali.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Istituzionale</label>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/20 border group hover:border-primary/30 transition-all">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium truncate">m.rossi@studenti.accademia.it</span>
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
            <CardFooter className="bg-muted/10 border-t p-4 flex justify-end">
              <Button variant="ghost" className="text-xs font-bold gap-2">
                 Richiedi Modifica Dati <ExternalLink className="h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* --- SICUREZZA --- */}
        <TabsContent value="sicurezza" className="space-y-6 outline-none">
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
        <TabsContent value="documenti" className="space-y-6 outline-none">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-1">Documenti d'Identità Caricati</h2>
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

          <div className="p-8 rounded-2xl border-2 border-dashed flex flex-col items-center text-center gap-3 bg-muted/5">
             <Button variant="outline" className="rounded-xl border-primary text-primary font-bold gap-2">
               Aggiorna Documento <ChevronRight className="h-4 w-4" />
             </Button>
             <p className="text-[10px] text-muted-foreground max-w-xs">I documenti devono essere caricati in formato PDF o JPG (max 5MB).</p>
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
          Esci dal tuo account (Logout)
        </Button>
        <p className="text-center text-[10px] text-muted-foreground mt-4">Nettuno v2.4.0 • ABA Redesign Project</p>
      </section>
    </div>
  );
}

function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
