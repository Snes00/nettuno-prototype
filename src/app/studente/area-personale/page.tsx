"use client";

import * as React from "react";
import { 
  User, 
  CreditCard, 
  ShieldCheck, 
  LogOut, 
  ChevronRight,
  QrCode,
  Download,
  Share2,
  MapPin,
  Mail
} from "lucide-react";
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
  const [showQR, setShowQR] = React.useState(false);

  return (
    <div className="flex flex-col gap-10 pb-16 animate-in fade-in duration-500">
      {/* Intestazione */}
      <section className="px-1 space-y-1">
        <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-foreground uppercase leading-none">Area Personale</h1>
        <p className="text-muted-foreground text-base md:text-lg font-medium tracking-tight mt-2">
          Gestisci il tuo profilo, i dati anagrafici e la tua identità digitale.
        </p>
      </section>

      {/* Badge Studente Bento (Hero Card - Violet Primary) */}
      <section className="relative w-full aspect-[1.6/1] md:aspect-[2.5/1] rounded-[2.5rem] bg-primary text-primary-foreground p-8 md:p-12 overflow-hidden cursor-pointer group transition-all hover:scale-[1.01] border border-primary-foreground/10 shadow-none">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex gap-8 items-center">
                <div className="h-20 w-20 md:h-28 md:w-28 rounded-3xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 flex items-center justify-center overflow-hidden shrink-0">
                  <User className="h-10 w-10 md:h-14 md:w-14 text-primary-foreground" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none uppercase">Mario Rossi</h2>
                  <p className="text-primary-foreground/60 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Studente • ABA Roma</p>
                </div>
              </div>
              
              <Dialog open={showQR} onOpenChange={setShowQR}>
                <DialogTrigger asChild>
                  <button className="h-16 w-16 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all active:scale-90">
                    <QrCode className="h-8 w-8 text-primary-foreground" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-md p-0 border-none bg-card shadow-none rounded-[2.5rem] overflow-hidden focus-visible:ring-0">
                  <DialogHeader className="p-10 border-b border-border/20">
                    <DialogTitle className="text-3xl font-black tracking-tighter text-foreground uppercase leading-none">Badge Digitale</DialogTitle>
                  </DialogHeader>
                  <div className="p-12 flex flex-col items-center gap-10">
                    <div className="bg-background p-10 rounded-[3rem] border border-border/20 shadow-none">
                       <div className="h-52 w-52 bg-white rounded-3xl flex items-center justify-center">
                          <QrCode className="h-36 w-32 text-slate-950" />
                       </div>
                    </div>
                    <div className="text-center space-y-2">
                       <p className="text-xl font-black text-foreground uppercase tracking-tight">MATRICOLA: 20240981</p>
                       <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Valido fino al 31/10/2026</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                       <Button className="rounded-xl h-14 bg-primary text-primary-foreground hover:opacity-90 border-none font-black uppercase tracking-widest text-[10px] gap-2 active:scale-95 transition-all">
                          <Download className="h-4 w-4" /> Wallet
                       </Button>
                       <Button variant="outline" className="rounded-xl h-14 bg-muted/40 text-foreground hover:bg-muted border-none font-black uppercase tracking-widest text-[10px] gap-2 active:scale-95 transition-all">
                          <Share2 className="h-4 w-4" /> Condividi
                       </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-primary-foreground/40 text-[10px] font-black uppercase tracking-[0.2em]">Corso di Laurea</p>
                <p className="text-lg md:text-2xl font-black uppercase tracking-tight">Pittura e Arti Visive - Triennio</p>
              </div>
              <Badge className="bg-primary-foreground text-primary border-none font-black px-5 py-2 rounded-full uppercase tracking-widest text-[10px]">Attivo</Badge>
            </div>
          </div>
          {/* Decorazione di sfondo */}
          <div className="absolute top-[-20%] right-[-5%] h-[150%] w-[45%] bg-gradient-to-l from-primary-foreground/5 to-transparent rotate-12 pointer-events-none" />
      </section>

      {/* Grid Dati Personali */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-[2rem] p-8 space-y-8 border border-border/40 md:border-none shadow-none transition-all hover:scale-[1.02]">
          <div className="flex items-center gap-4">
             <div className="h-12 w-12 rounded-2xl bg-muted/30 flex items-center justify-center text-muted-foreground">
                <Mail className="h-6 w-6" />
             </div>
             <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Contatti Diretti</h3>
          </div>
          <div className="space-y-6">
             <div>
                <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest mb-1">Email Istituzionale</p>
                <p className="text-base font-black text-foreground">m.rossi@studenti.aba.it</p>
             </div>
             <div>
                <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest mb-1">Recapito Telefonico</p>
                <p className="text-base font-black text-foreground">+39 345 678 9012</p>
             </div>
          </div>
        </div>

        <div className="bg-card rounded-[2rem] p-8 space-y-8 border border-border/40 md:border-none shadow-none transition-all hover:scale-[1.02]">
          <div className="flex items-center gap-4">
             <div className="h-12 w-12 rounded-2xl bg-muted/30 flex items-center justify-center text-muted-foreground">
                <MapPin className="h-6 w-6" />
             </div>
             <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Residenza</h3>
          </div>
          <div className="space-y-1">
             <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest mb-2">Indirizzo Registrato</p>
             <p className="text-lg font-black text-foreground leading-tight uppercase">Via delle Belle Arti, 102</p>
             <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mt-1">00185, Roma (RM)</p>
          </div>
        </div>

        <div className="bg-role-info rounded-[2rem] p-8 flex flex-col justify-between border border-role-info-fg/10 shadow-none group transition-all hover:scale-[1.02]">
           <div className="space-y-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-role-info-fg/60">Status Fiscale</span>
              <h3 className="text-2xl font-black tracking-tight text-role-info-fg leading-none uppercase">Situazione Contabile in Regola</h3>
           </div>
           <Button variant="ghost" className="w-full mt-8 rounded-xl bg-role-info-fg/10 text-role-info-fg hover:bg-role-info-fg/20 font-black uppercase tracking-widest text-[9px] border-none h-12 shadow-none transition-all active:scale-95">
              Dettagli Pagamenti
           </Button>
        </div>
      </div>

      {/* Sicurezza e Documenti */}
      <section className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-1">Sicurezza e Accesso</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="w-full h-24 bg-card rounded-[1.5rem] flex items-center justify-between px-10 hover:bg-muted/40 transition-all border border-border/40 md:border-none group shadow-none">
             <div className="flex items-center gap-6">
                <div className="h-12 w-12 rounded-xl bg-muted/30 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="font-black text-foreground uppercase tracking-tight">Cambio Password</span>
             </div>
             <ChevronRight className="h-5 w-5 text-muted-foreground/30 group-hover:translate-x-2 transition-all" />
          </button>
          <button className="w-full h-24 bg-card rounded-[1.5rem] flex items-center justify-between px-10 hover:bg-muted/40 transition-all border border-border/40 md:border-none group shadow-none">
             <div className="flex items-center gap-6">
                <div className="h-12 w-12 rounded-xl bg-muted/30 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                  <CreditCard className="h-6 w-6" />
                </div>
                <span className="font-black text-foreground uppercase tracking-tight">Metodi di Pagamento</span>
             </div>
             <ChevronRight className="h-5 w-5 text-muted-foreground/30 group-hover:translate-x-2 transition-all" />
          </button>
        </div>
      </section>

      {/* Logout Action */}
      <Button 
        className="w-full h-20 rounded-[2rem] bg-role-critical/10 text-role-critical-fg hover:bg-role-critical-fg hover:text-role-critical border-none transition-all font-black text-base gap-5 shadow-none uppercase tracking-[0.2em] active:scale-[0.98]"
      >
        <LogOut className="h-7 w-7" />
        Esci dall&apos;account
      </Button>
    </div>
  );
}
