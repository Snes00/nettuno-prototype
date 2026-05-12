"use client"

import * as React from "react"
import { 
  FolderOpen, 
  FileText, 
  Clock, 
  CheckCircle2,
  Download,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function DocenteAmministrazionePage() {
  return (
    <div className="flex flex-col gap-10 pb-16 animate-in fade-in duration-500">
      <section className="px-1 space-y-1">
        <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-foreground">Amministrazione</h1>
        <p className="text-muted-foreground text-base md:text-lg font-medium tracking-tight">
          Gestione documenti, richieste ferie e modulistica docenti.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Gestione Ferie e Permessi (Bento Accent) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-accent rounded-[1.5rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-none transition-colors">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Pannello Personale</span>
              <h2 className="text-3xl font-black tracking-tighter leading-none text-foreground">Richieste Ferie <br />& Permessi</h2>
              <p className="text-sm font-bold opacity-60">Hai 22 giorni di ferie rimanenti.</p>
            </div>
            <Button className="bg-foreground text-background rounded-xl px-8 h-14 font-black text-base shadow-none hover:opacity-90 transition-all shrink-0">
               Nuova Richiesta
            </Button>
          </div>

          <div className="bg-card rounded-[1.5rem] p-8 space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Stato Richieste Recenti</h3>
            <div className="space-y-3">
              {[
                { tipo: "Ferie", date: "15 - 20 Giugno", status: "Approvata", icon: CheckCircle2, color: "text-green-500" },
                { tipo: "Permesso Orario", date: "12 Maggio (09:00 - 11:00)", status: "In attesa", icon: Clock, color: "text-amber-500" },
                { tipo: "Congedo Studio", date: "02 - 05 Aprile", status: "Completata", icon: CheckCircle2, color: "text-muted-foreground" },
              ].map((req, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center">
                      <req.icon className={cn("h-5 w-5", req.color)} />
                    </div>
                    <div>
                      <p className="font-bold text-foreground leading-none mb-1">{req.tipo}</p>
                      <p className="text-xs font-medium text-muted-foreground">{req.date}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="rounded-lg font-black text-[10px] py-1 px-3 uppercase">{req.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Documentazione e Modulistica (Sidebar Bento) */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-card rounded-[1.5rem] p-8 space-y-8 min-h-full">
              <div className="flex items-center gap-3">
                 <FolderOpen className="h-5 w-5 text-muted-foreground" />
                 <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Documentazione</h3>
              </div>
              
              <div className="space-y-2">
                 {[
                   { label: "Modello Verbale Esame", size: "1.2 MB" },
                   { label: "Richiesta Materiali Laboratorio", size: "850 KB" },
                   { label: "Circolare n. 42 - Sicurezza", size: "2.4 MB" },
                   { label: "Modulo Missioni", size: "1.1 MB" },
                   { label: "Programma Didattico 2026", size: "3.2 MB" },
                 ].map((doc, idx) => (
                   <button key={idx} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-muted/50 transition-all group text-left">
                     <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <div>
                           <p className="text-sm font-bold text-foreground leading-none mb-1">{doc.label}</p>
                           <p className="text-[10px] font-medium text-muted-foreground">{doc.size}</p>
                        </div>
                     </div>
                     <Download className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                   </button>
                 ))}
              </div>

              <div className="pt-6 border-t border-muted/20">
                 <div className="bg-[var(--bento-yellow)] p-6 rounded-2xl space-y-3">
                    <div className="flex items-center gap-2">
                       <AlertCircle className="h-4 w-4 text-amber-700" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-amber-700">Promemoria</span>
                    </div>
                    <p className="text-sm font-bold text-amber-900 leading-tight">Consegna i programmi didattici entro il 15 Maggio.</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  )
}
