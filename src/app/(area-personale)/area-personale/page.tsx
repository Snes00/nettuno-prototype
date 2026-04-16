"use client";

import * as React from "react";
import { 
  User, 
  Settings, 
  CreditCard, 
  ShieldCheck, 
  FileText, 
  LogOut, 
  ChevronRight,
  QrCode,
  Download,
  Share2,
  MapPin,
  Mail,
  Phone,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1A1917]">Area Personale</h1>
        <p className="text-[#7C7A77] text-base md:text-lg font-medium">
          Gestisci il tuo profilo, i dati anagrafici e la tua identità digitale.
        </p>
      </section>

      {/* Badge Studente Bento (Hero Card) */}
      <section className="relative w-full aspect-[1.6/1] md:aspect-[2.5/1] rounded-[1.5rem] bg-[#1A1917] p-8 md:p-12 text-white overflow-hidden cursor-pointer group transition-all hover:scale-[1.01] border-none">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex gap-6 items-center">
                <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden shrink-0">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tighter">Mario Rossi</h2>
                  <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] md:text-xs">Studente • ABA Roma</p>
                </div>
              </div>
              
              <Dialog open={showQR} onOpenChange={setShowQR}>
                <DialogTrigger asChild>
                  <button className="h-14 w-14 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                    <QrCode className="h-7 w-7 text-white" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-md p-0 border-none bg-white shadow-none rounded-[1.5rem] overflow-hidden">
                  <DialogHeader className="p-8 border-b border-[#F1EFE9]">
                    <DialogTitle className="text-2xl font-black tracking-tighter">Badge Digitale</DialogTitle>
                  </DialogHeader>
                  <div className="p-10 flex flex-col items-center gap-8">
                    <div className="bg-[#F8F5F0] p-8 rounded-[2rem] border border-[#E5E2DA]/50">
                       <div className="h-48 w-48 bg-white rounded-2xl flex items-center justify-center">
                          <QrCode className="h-32 w-32 text-[#1A1917]" />
                       </div>
                    </div>
                    <div className="text-center space-y-2">
                       <p className="text-lg font-black text-[#1A1917]">MATRICOLA: 20240981</p>
                       <p className="text-xs font-bold text-[#7C7A77] uppercase tracking-widest">Valido fino al 31/10/2026</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                       <Button className="rounded-xl h-12 bg-[#F1EFE9] text-[#1A1917] hover:bg-[#EBE8E2] border-none font-bold gap-2">
                          <Download className="h-4 w-4" /> Wallet
                       </Button>
                       <Button className="rounded-xl h-12 bg-[#F1EFE9] text-[#1A1917] hover:bg-[#EBE8E2] border-none font-bold gap-2">
                          <Share2 className="h-4 w-4" /> Condividi
                       </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Corso di Laurea</p>
                <p className="text-lg md:text-xl font-bold">Pittura e Arti Visive - Triennio</p>
              </div>
              <Badge className="bg-[#DCFCE7] text-[#166534] border-none font-black px-4 py-1.5 rounded-full">Attivo</Badge>
            </div>
          </div>
          {/* Decorazione di sfondo */}
          <div className="absolute top-[-20%] right-[-5%] h-[150%] w-[40%] bg-gradient-to-l from-white/5 to-transparent rotate-12 pointer-events-none" />
      </section>

      {/* Grid Dati Personali */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Info Box 1 */}
        <div className="bg-white rounded-[1.5rem] p-8 space-y-6 border-none shadow-none">
          <div className="flex items-center gap-3">
             <div className="h-10 w-10 rounded-xl bg-[#F8F5F0] flex items-center justify-center">
                <Mail className="h-5 w-5 text-[#1A1917]/40" />
             </div>
             <h3 className="text-xs font-black uppercase tracking-widest text-[#1A1917]/40">Contatti</h3>
          </div>
          <div className="space-y-4">
             <div>
                <p className="text-[10px] font-bold text-[#7C7A77] uppercase tracking-tighter">Email Istituzionale</p>
                <p className="font-bold text-[#1A1917]">m.rossi@studenti.aba.it</p>
             </div>
             <div>
                <p className="text-[10px] font-bold text-[#7C7A77] uppercase tracking-tighter">Telefono</p>
                <p className="font-bold text-[#1A1917]">+39 345 678 9012</p>
             </div>
          </div>
        </div>

        {/* Info Box 2 */}
        <div className="bg-white rounded-[1.5rem] p-8 space-y-6 border-none shadow-none">
          <div className="flex items-center gap-3">
             <div className="h-10 w-10 rounded-xl bg-[#F8F5F0] flex items-center justify-center">
                <MapPin className="h-5 w-5 text-[#1A1917]/40" />
             </div>
             <h3 className="text-xs font-black uppercase tracking-widest text-[#1A1917]/40">Residenza</h3>
          </div>
          <div>
             <p className="text-[10px] font-bold text-[#7C7A77] uppercase tracking-tighter">Indirizzo</p>
             <p className="font-bold text-[#1A1917]">Via delle Belle Arti, 102</p>
             <p className="font-bold text-[#1A1917]">00185, Roma (RM)</p>
          </div>
        </div>

        {/* Info Box 3 */}
        <div className="bg-[#DBEAFE] rounded-[1.5rem] p-8 flex flex-col justify-between border-none shadow-none group">
           <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-700/60">Status Tasse</span>
              <h3 className="text-2xl font-bold tracking-tight text-blue-800 leading-tight">Situazione Contabile in Regola</h3>
           </div>
           <Button variant="ghost" className="w-full mt-6 rounded-xl bg-white/40 text-blue-800 hover:bg-white/60 font-bold border-none h-12">
              Dettagli Pagamenti
           </Button>
        </div>
      </div>

      {/* Azioni Account */}
      <section className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1A1917]/40 px-1">Sicurezza e Documenti</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="w-full h-20 bg-white rounded-2xl flex items-center justify-between px-8 hover:bg-[#F1EFE9] transition-all border-none group">
             <div className="flex items-center gap-4">
                <ShieldCheck className="h-5 w-5 text-[#1A1917]/40 group-hover:text-[#1A1917]" />
                <span className="font-bold text-[#1A1917]">Cambio Password</span>
             </div>
             <ChevronRight className="h-4 w-4 text-[#1A1917]/20" />
          </button>
          <button className="w-full h-20 bg-white rounded-2xl flex items-center justify-between px-8 hover:bg-[#F1EFE9] transition-all border-none group">
             <div className="flex items-center gap-4">
                <CreditCard className="h-5 w-5 text-[#1A1917]/40 group-hover:text-[#1A1917]" />
                <span className="font-bold text-[#1A1917]">Metodi di Pagamento</span>
             </div>
             <ChevronRight className="h-4 w-4 text-[#1A1917]/20" />
          </button>
        </div>
      </section>

      {/* Logout */}
      <Button 
        className="w-full h-16 rounded-[1.5rem] bg-white text-red-600 hover:bg-red-50 border-none transition-all font-black text-lg gap-4 shadow-none"
      >
        <LogOut className="h-6 w-6" />
        Esci dall'account
      </Button>
    </div>
  );
}
