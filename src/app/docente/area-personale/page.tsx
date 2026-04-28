"use client"

import * as React from "react"
import { 
  User, 
  Settings, 
  HelpCircle, 
  Mail, 
  Phone, 
  Camera, 
  Globe,
  Calendar,
  Clock,
  ChevronRight,
  ShieldCheck,
  Bell,
  Eye,
  LogOut
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function DocenteAreaPersonalePage() {
  return (
    <div className="flex flex-col gap-10 pb-16 animate-in fade-in duration-500">
      <section className="px-1 space-y-1">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">Area Personale</h1>
        <p className="text-muted-foreground text-base md:text-lg font-medium tracking-tight">
          Gestisci il tuo profilo, imposta la disponibilità per il ricevimento e configura l'account.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Profile Card (Bento White) */}
        <div className="md:col-span-12 bg-card rounded-[1.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border-none shadow-none">
          <div className="relative group">
             <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-muted flex items-center justify-center overflow-hidden border-4 border-background">
                <User className="h-20 w-20 text-muted-foreground" />
             </div>
             <button className="absolute bottom-1 right-1 h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center border-4 border-background hover:scale-110 transition-transform">
                <Settings className="h-5 w-5" />
             </button>
          </div>
          <div className="flex-1 text-center md:text-left space-y-4">
             <div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground leading-none">Prof. Alessandro Rossi</h2>
                <p className="text-muted-foreground font-bold mt-2 uppercase tracking-widest text-xs">Pittura e Arti Visive • Cattedra di I Fascia</p>
             </div>
             <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Badge variant="outline" className="rounded-xl px-4 py-1.5 font-bold text-xs bg-muted/30 border-none">alessandro.rossi@abapa.it</Badge>
                <Badge variant="outline" className="rounded-xl px-4 py-1.5 font-bold text-xs bg-muted/30 border-none">+39 081 ••• •• 42</Badge>
             </div>
          </div>
          <Button variant="ghost" className="rounded-xl h-14 px-6 gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive font-black" asChild>
            <Link href="/">
              <LogOut className="h-5 w-5" /> Esci
            </Link>
          </Button>
        </div>

        {/* Ricevimento Studenti (Bento Pink) */}
        <div className="md:col-span-8 space-y-6">
          <div className="bg-[var(--bento-pink)] rounded-[1.5rem] p-8 md:p-10 space-y-8 border-none transition-colors">
            <div className="flex justify-between items-start">
               <div className="space-y-1 text-foreground">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Gestione Ricevimento</span>
                  <h3 className="text-3xl font-black tracking-tighter leading-none">Disponibilità Prenotate</h3>
                  <p className="text-sm font-bold opacity-60">Hai 4 studenti in attesa questa settimana.</p>
               </div>
               <Calendar className="h-8 w-8 text-foreground opacity-40" />
            </div>

            <div className="space-y-3">
               {[
                 { nome: "Marco Bianchi", corso: "Pittura I", orario: "Mar 15:30", tipo: "In presenza" },
                 { nome: "Sofia Rossi", corso: "Tesi", orario: "Mar 16:00", tipo: "Online" },
                 { nome: "Luca Verdi", corso: "Pittura I", orario: "Gio 10:00", tipo: "In presenza" },
               ].map((ric, idx) => (
                 <div key={idx} className="flex items-center justify-between p-5 rounded-2xl bg-white/40 dark:bg-black/20 group hover:bg-white/60 transition-all">
                    <div className="flex items-center gap-4">
                       <div className="h-10 w-10 rounded-xl bg-white/40 dark:bg-white/10 flex items-center justify-center font-bold text-xs">
                          {ric.nome.charAt(0)}
                       </div>
                       <div>
                          <p className="font-bold text-foreground leading-none mb-1">{ric.nome}</p>
                          <p className="text-xs font-medium opacity-60">{ric.corso} • {ric.tipo}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-black text-foreground">{ric.orario}</p>
                       <button className="text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Annulla</button>
                    </div>
                 </div>
               ))}
            </div>

            <Button className="w-full bg-foreground text-background rounded-xl h-14 font-black text-base shadow-none">
               Imposta Nuovi Slot
            </Button>
          </div>
        </div>

        {/* Supporto & Link (Bento Purple) */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-card rounded-[1.5rem] p-8 space-y-8 border-none shadow-none flex-1">
             <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Assistenza</span>
                <h3 className="text-2xl font-black tracking-tight uppercase">Help & Link</h3>
             </div>
             
             <div className="space-y-2">
                {[
                  { label: "FAQ Docenti", icon: HelpCircle, href: "#" },
                  { label: "Contatta Segreteria", icon: Mail, href: "#" },
                  { label: "Supporto IT", icon: Phone, href: "#" },
                ].map((item, idx) => (
                  <button key={idx} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-muted/50 transition-all group">
                    <div className="flex items-center gap-4">
                       <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                       <span className="text-sm font-bold text-foreground">{item.label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
             </div>

             <div className="pt-6 border-t border-muted/20 space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Social Abapa</p>
                <div className="flex gap-4">
                   <button className="h-12 w-12 rounded-xl bg-muted/30 flex items-center justify-center hover:bg-muted transition-colors"><Camera className="h-5 w-5" /></button>
                   <button className="h-12 w-12 rounded-xl bg-muted/30 flex items-center justify-center hover:bg-muted transition-colors"><Globe className="h-5 w-5" /></button>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  )
}
