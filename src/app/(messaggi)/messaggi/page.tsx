"use client"

import * as React from "react"
import { 
  Search, 
  Star, 
  Archive, 
  Trash2, 
  Paperclip, 
  User, 
  Building2, 
  Megaphone,
  MoreVertical,
  Filter,
  Send,
  Mail
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const MESSAGGI = [
  {
    id: 1,
    mittente: "Segreteria Studenti",
    ruolo: "Amministrazione",
    oggetto: "Conferma Piano di Studi 2026/27",
    anteprima: "Gentile studente, ti confermiamo che la tua proposta di piano di studi è stata approvata dalla commissione didattica...",
    data: "10:45",
    letto: false,
    importante: true,
    allegati: true,
    tipo: "segreteria"
  },
  {
    id: 2,
    mittente: "Prof. Alessandro Rossi",
    ruolo: "Docente Pittura I",
    oggetto: "Spostamento Ricevimento Giovedì",
    anteprima: "Si avvisano gli studenti che il ricevimento di questo giovedì è posticipato alle ore 16:00 causa impegni istituzionali.",
    data: "Ieri",
    letto: true,
    importante: false,
    allegati: false,
    tipo: "docenti"
  },
  {
    id: 3,
    mittente: "Accademia di Belle Arti",
    ruolo: "Istituzionale",
    oggetto: "Bando Borse di Studio Erasmus+",
    anteprima: "È stato pubblicato il nuovo bando per la mobilità internazionale Erasmus+ per l'anno accademico 2026/27.",
    data: "12 Apr",
    letto: false,
    importante: false,
    allegati: true,
    tipo: "avvisi"
  },
  {
    id: 4,
    mittente: "Prof.ssa Maria Bianchi",
    ruolo: "Docente Anatomia",
    oggetto: "Materiale Integrativo Lezione 4",
    anteprima: "Ho caricato in piattaforma le slide relative alla lezione sull'osteologia del tronco. Potete trovarle anche nel...",
    data: "11 Apr",
    letto: true,
    importante: true,
    allegati: true,
    tipo: "docenti"
  }
]

export default function MessaggiPage() {
  const [activeTab, setActiveTab] = React.useState("tutti")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredMessages = MESSAGGI.filter(m => {
    const matchTab = activeTab === "tutti" || m.tipo === activeTab
    const matchSearch = m.mittente.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        m.oggetto.toLowerCase().includes(searchQuery.toLowerCase())
    return matchTab && matchSearch
  })

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] md:h-[calc(100vh-100px)] gap-6">
      {/* Intestazione e Ricerca */}
      <section className="space-y-4 px-1">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messaggi</h1>
          <p className="text-muted-foreground mt-1">Gestisci le comunicazioni con docenti e segreteria.</p>
        </div>

        <div className="relative group">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Cerca tra i messaggi..." 
            className="pl-10 h-11 bg-muted/30 border-none rounded-xl focus-visible:ring-primary focus-visible:ring-offset-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filtri Rapidi */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {[
            { id: "tutti", label: "Tutti", icon: Mail },
            { id: "docenti", label: "Docenti", icon: User },
            { id: "segreteria", label: "Segreteria", icon: Building2 },
            { id: "avvisi", label: "Avvisi", icon: Megaphone }
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <Button
                key={tab.id}
                variant={isActive ? "default" : "secondary"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-full px-4 gap-2 transition-all shrink-0",
                  isActive ? "shadow-md" : "bg-muted/50 hover:bg-muted"
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </Button>
            )
          })}
        </div>
      </section>

      {/* Lista Messaggi */}
      <ScrollArea className="flex-1 rounded-3xl border bg-muted/10 shadow-inner">
        <div className="p-3 space-y-2">
          {filteredMessages.length > 0 ? (
            filteredMessages.map((msg) => (
              <Card 
                key={msg.id} 
                className={cn(
                  "p-4 border-none shadow-sm cursor-pointer transition-all hover:bg-white dark:hover:bg-muted/50 group relative overflow-hidden",
                  !msg.letto && "bg-white dark:bg-muted/30"
                )}
              >
                {!msg.letto && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                )}
                
                <div className="flex gap-3">
                  {/* Avatar / Icona Tipo */}
                  <div className={cn(
                    "h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105",
                    msg.tipo === "segreteria" ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" :
                    msg.tipo === "docenti" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" :
                    "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
                  )}>
                    {msg.tipo === "segreteria" ? <Building2 className="h-6 w-6" /> :
                     msg.tipo === "docenti" ? <User className="h-6 w-6" /> :
                     <Megaphone className="h-6 w-6" />}
                  </div>

                  {/* Contenuto Messaggio */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-0.5">
                      <span className={cn(
                        "text-sm font-bold truncate pr-2",
                        !msg.letto ? "text-foreground" : "text-muted-foreground"
                      )}>
                        {msg.mittente}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium whitespace-nowrap">
                        {msg.data}
                      </span>
                    </div>
                    
                    <h3 className={cn(
                      "text-sm font-semibold truncate leading-tight mb-1",
                      !msg.letto ? "text-primary" : "text-foreground"
                    )}>
                      {msg.oggetto}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {msg.anteprima}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      {msg.allegati && (
                        <Badge variant="outline" className="h-5 gap-1 px-1.5 text-[9px] bg-background border-muted-foreground/20">
                          <Paperclip className="h-3 w-3" /> Allegato
                        </Badge>
                      )}
                      {msg.ruolo && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/60 italic">
                          {msg.ruolo}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Azioni Rapide (Desktop o Hover) */}
                  <div className="flex flex-col gap-2 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-amber-500">
                      <Star className={cn("h-4 w-4", msg.importante && "fill-amber-500 text-amber-500")} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                      <Archive className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center opacity-50">
              <Mail className="h-12 w-12 mb-4" />
              <p className="text-sm font-medium">Nessun messaggio trovato</p>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Floating Action Button (Nuovo Messaggio) */}
      <Button 
        className="fixed bottom-20 right-6 md:bottom-10 md:right-10 h-14 w-14 rounded-2xl shadow-2xl hover:scale-110 transition-transform active:scale-95 bg-primary text-primary-foreground"
      >
        <PlusIcon className="h-6 w-6" />
      </Button>
    </div>
  )
}

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
