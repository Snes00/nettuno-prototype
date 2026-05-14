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
  LogOut,
  ShieldCheck,
  MapPin,
  Pencil,
  Save,
  Briefcase
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function DocenteAreaPersonalePage() {
  const [editMode, setEditMode] = React.useState(false);

  return (
    <div className="flex flex-col gap-10 pb-16 animate-in fade-in duration-500 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Badge Docente - Staff Accademico */}
        <div className="md:col-span-12 relative bg-primary text-primary-foreground rounded-[2.5rem] p-8 md:p-12 overflow-hidden transition-all hover:scale-[1.005]">
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex justify-between items-start">
              <div className="flex gap-6 md:gap-10 items-center">
                <div className="relative group">
                  <div className="h-28 w-28 md:h-36 md:w-36 rounded-3xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center overflow-hidden shrink-0">
                    <User className="h-16 w-16 md:h-20 md:w-20 text-primary-foreground" />
                  </div>
                  <button className="absolute bottom-1 right-1 h-9 w-9 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-all">
                    <Camera className="h-4 w-4 text-primary-foreground" />
                  </button>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-primary-foreground/20 text-primary-foreground border-none font-black px-3 py-1 rounded-full uppercase tracking-widest text-[9px]">
                    <ShieldCheck className="h-3 w-3 mr-1" /> Staff Accademico
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none uppercase">Prof. Alessandro Rossi</h2>
                  <p className="text-primary-foreground/60 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Docente Straordinario • Pittura e Arti Visive</p>
                </div>
              </div>
              <Button variant="ghost" className="rounded-xl h-12 px-6 gap-3 text-primary-foreground/70 hover:bg-primary-foreground/10 font-black uppercase tracking-widest text-[10px] active:scale-95 transition-all shrink-0" asChild>
                <Link href="/">
                  <LogOut className="h-4 w-4" /> Esci
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-0.5">
                <p className="text-primary-foreground/40 text-[9px] font-black uppercase tracking-[0.2em]">Email Istituzionale</p>
                <p className="text-sm font-black">a.rossi@abapa.it</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-primary-foreground/40 text-[9px] font-black uppercase tracking-[0.2em]">Ruolo</p>
                <p className="text-sm font-black uppercase tracking-tight">Docente Straordinario</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-primary-foreground/40 text-[9px] font-black uppercase tracking-[0.2em]">Contratto</p>
                <p className="text-sm font-black uppercase tracking-tight">Tempo Indeterminato</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-primary-foreground/40 text-[9px] font-black uppercase tracking-[0.2em]">Scadenza Badge</p>
                <p className="text-sm font-black uppercase tracking-tight">31/12/2027</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[-20%] right-[-5%] h-[150%] w-[40%] bg-gradient-to-l from-primary-foreground/5 to-transparent rotate-12 pointer-events-none" />
        </div>

        {/* Dati Personali Editabili */}
        <div className="md:col-span-12">
          <div className="bg-card rounded-[2.5rem] p-8 md:p-12 space-y-8 border border-border/40 md:border-none shadow-none">
            <div className="flex justify-between items-center">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Dati Personali</h3>
              <button
                onClick={() => setEditMode(!editMode)}
                className={cn(
                  "h-10 w-10 rounded-xl flex items-center justify-center transition-all active:scale-90",
                  editMode ? "bg-primary text-primary-foreground" : "bg-muted/30 text-muted-foreground hover:bg-muted"
                )}
              >
                <Pencil className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Email", icon: Mail, value: "a.rossi@abapa.it" },
                { label: "Telefono", icon: Phone, value: "+39 081 123 45 42" },
                { label: "Residenza", icon: MapPin, value: "Via Roma, 12 • Napoli (NA)" },
                { label: "Status", icon: Briefcase, value: "Docente Straordinario • Tempo Indeterminato" },
              ].map((campo) => {
                const Icon = campo.icon;
                return (
                  <div key={campo.label} className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5" /> {campo.label}
                    </label>
                    {editMode ? (
                      <input
                        defaultValue={campo.value}
                        className="w-full h-14 rounded-2xl bg-muted/20 border-2 border-primary/20 px-5 font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    ) : (
                      <p className="h-14 flex items-center px-5 rounded-2xl bg-muted/10 font-bold text-foreground">{campo.value}</p>
                    )}
                  </div>
                );
              })}
            </div>
            {editMode && (
              <div className="flex justify-end pt-4 border-t border-border/20">
                <Button
                  onClick={() => setEditMode(false)}
                  className="rounded-xl h-14 px-10 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs shadow-none active:scale-95"
                >
                  <Save className="h-4 w-4 mr-2" /> Salva
                </Button>
              </div>
            )}
          </div>
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
