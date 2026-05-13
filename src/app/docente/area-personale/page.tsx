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
  ChevronRight,
  LogOut
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function DocenteAreaPersonalePage() {
  return (
    <div className="flex flex-col gap-10 pb-16 animate-in fade-in duration-500 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Profile Card (Bento White - Primary Accent) */}
        <div className="md:col-span-12 bg-card rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-border/40 md:border-none shadow-none transition-all hover:scale-[1.005]">
          <div className="relative group">
             <div className="h-32 w-32 md:h-44 md:w-44 rounded-full bg-muted/40 flex items-center justify-center overflow-hidden border-4 border-background transition-all group-hover:border-primary/20">
                <User className="h-20 w-20 md:h-24 md:w-24 text-muted-foreground" />
             </div>
             <button className="absolute bottom-1 right-1 h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center border-4 border-background hover:scale-110 transition-transform shadow-lg">
                <Settings className="h-5 w-5" />
             </button>
          </div>
          <div className="flex-1 text-center md:text-left space-y-5">
             <div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground leading-none uppercase">Prof. Alessandro Rossi</h2>
                <p className="text-muted-foreground font-black mt-2 uppercase tracking-[0.2em] text-[10px] md:text-xs">Pittura e Arti Visive • Cattedra di I Fascia</p>
             </div>
             <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Badge variant="outline" className="rounded-xl px-5 py-2 font-black text-[10px] uppercase tracking-widest bg-muted/20 border-border/40 text-foreground">alessandro.rossi@abapa.it</Badge>
                <Badge variant="outline" className="rounded-xl px-5 py-2 font-black text-[10px] uppercase tracking-widest bg-muted/20 border-border/40 text-foreground">+39 081 ••• •• 42</Badge>
             </div>
          </div>
          <Button variant="ghost" className="rounded-xl h-16 px-8 gap-3 text-role-critical-fg hover:bg-role-critical/10 hover:text-role-critical-fg font-black uppercase tracking-widest text-[10px] active:scale-95 transition-all" asChild>
            <Link href="/">
              <LogOut className="h-5 w-5" /> Esci dall&apos;account
            </Link>
          </Button>
        </div>

        {/* Ricevimento Studenti (Bento Accent - Purple) */}
        <div className="md:col-span-8 space-y-6">
          <div className="bg-role-accent rounded-[2.5rem] p-8 md:p-10 space-y-10 border border-role-accent-fg/10 transition-all hover:scale-[1.01]">
            <div className="flex justify-between items-start">
               <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-role-accent-fg/60">Gestione Didattica</span>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-none uppercase text-role-accent-fg">Richieste Ricevimento</h3>
                  <p className="text-sm font-black text-role-accent-fg/60 uppercase tracking-widest">Hai 4 appuntamenti questa settimana.</p>
               </div>
               <div className="h-16 w-16 rounded-2xl bg-role-accent-fg/10 flex items-center justify-center text-role-accent-fg">
                  <Calendar className="h-8 w-8" />
               </div>
            </div>

            <div className="space-y-4">
               {[
                 { nome: "Marco Bianchi", corso: "Pittura I", orario: "Mar 15:30", tipo: "In presenza" },
                 { nome: "Sofia Rossi", corso: "Tesi", orario: "Mar 16:00", tipo: "Online" },
                 { nome: "Luca Verdi", corso: "Pittura I", orario: "Gio 10:00", tipo: "In presenza" },
               ].map((ric, idx) => (
                 <div key={idx} className="flex items-center justify-between p-6 rounded-[1.5rem] bg-background/40 dark:bg-black/20 group hover:bg-background/60 transition-all border border-transparent hover:border-role-accent-fg/10">
                    <div className="flex items-center gap-5">
                       <div className="h-12 w-12 rounded-xl bg-role-accent-fg/10 flex items-center justify-center font-black text-xs text-role-accent-fg">
                          {ric.nome.charAt(0)}
                       </div>
                       <div>
                          <p className="font-black text-foreground uppercase tracking-tight leading-none mb-1.5">{ric.nome}</p>
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{ric.corso} • {ric.tipo}</p>
                       </div>
                    </div>
                    <div className="text-right space-y-1">
                       <p className="text-sm font-black text-foreground uppercase tracking-tighter">{ric.orario}</p>
                       <button className="text-[9px] font-black uppercase tracking-[0.2em] text-role-critical-fg opacity-40 hover:opacity-100 transition-opacity">Annulla</button>
                    </div>
                 </div>
               ))}
            </div>

            <Button className="w-full bg-role-accent-fg text-role-accent rounded-xl h-16 font-black uppercase tracking-widest text-xs shadow-none active:scale-95 transition-all">
               Configura Disponibilità
            </Button>
          </div>
        </div>

        {/* Supporto & Link */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-card rounded-[2.5rem] p-8 md:p-10 space-y-10 border border-border/40 md:border-none shadow-none flex-1 transition-all hover:scale-[1.01]">
             <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Servizi Docente</span>
                <h3 className="text-2xl font-black tracking-tight uppercase text-foreground">Help & Risorse</h3>
             </div>
             
             <div className="space-y-2">
                {[
                  { label: "FAQ Portale Docenti", icon: HelpCircle, href: "#" },
                  { label: "Contatta Segreteria", icon: Mail, href: "#" },
                  { label: "Richiedi Supporto IT", icon: Phone, href: "#" },
                ].map((item, idx) => (
                  <button key={idx} className="w-full flex items-center justify-between p-5 rounded-2xl hover:bg-muted/40 transition-all group border border-transparent hover:border-border/10">
                    <div className="flex items-center gap-5">
                       <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                       <span className="text-sm font-black text-foreground uppercase tracking-tight">{item.label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground/20 group-hover:translate-x-2 transition-all" />
                  </button>
                ))}
             </div>

             <div className="pt-8 border-t border-border/10 space-y-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">Canali Istituzionali</p>
                <div className="flex gap-4">
                   <button className="h-14 w-14 rounded-2xl bg-muted/20 flex items-center justify-center hover:bg-muted transition-all active:scale-90"><Camera className="h-6 w-6 text-muted-foreground" /></button>
                   <button className="h-14 w-14 rounded-2xl bg-muted/20 flex items-center justify-center hover:bg-muted transition-all active:scale-90"><Globe className="h-6 w-6 text-muted-foreground" /></button>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  )
}
