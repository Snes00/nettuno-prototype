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
  Mail,
  ChevronLeft,
  Image as ImageIcon,
  Smile,
  MoreHorizontal
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
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
    tipo: "segreteria",
    conversazione: [
      { id: 101, testo: "Gentile studente, ti confermiamo che la tua proposta di piano di studi è stata approvata dalla commissione didattica.", ora: "10:45", io: false },
      { id: 102, testo: "Grazie mille per la conferma. Entro quando devo inviare la copia firmata?", ora: "11:02", io: true },
      { id: 103, testo: "Puoi caricarla direttamente nell'area Amministrazione entro il 30 Aprile.", ora: "11:15", io: false }
    ]
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
    tipo: "docenti",
    conversazione: [
      { id: 201, testo: "Si avvisano gli studenti che il ricevimento di questo giovedì è posticipato alle ore 16:00 causa impegni istituzionali.", ora: "Ieri 15:30", io: false }
    ]
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
    tipo: "avvisi",
    conversazione: [
      { id: 301, testo: "È stato pubblicato il nuovo bando per la mobilità internazionale Erasmus+ per l'anno accademico 2026/27.", ora: "12 Apr 09:00", io: false }
    ]
  },
]

export default function MessaggiPage() {
  const [activeTab, setActiveTab] = React.useState("tutti")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedMsg, setSelectedMsg] = React.useState<any>(null)
  const [replyText, setReplyText] = React.useState("")

  const filteredMessages = MESSAGGI.filter(m => {
    const matchTab = activeTab === "tutti" || m.tipo === activeTab
    const matchSearch = m.mittente.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        m.oggetto.toLowerCase().includes(searchQuery.toLowerCase())
    return matchTab && matchSearch
  })

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      {/* Intestazione */}
      <section className="space-y-4 px-1">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">Messaggi</h1>
          <p className="text-muted-foreground mt-1 font-medium">Comunicazioni con docenti e segreteria.</p>
        </div>

        <div className="relative group max-w-2xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground group-focus-within:text-foreground transition-colors" />
          <Input 
            placeholder="Cerca..." 
            className="pl-12 h-14 bg-card border-none rounded-2xl focus-visible:ring-primary/10 shadow-none text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filtri */}
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
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
                variant="outline"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-2xl h-12 px-6 gap-2 border-none transition-all shrink-0 font-bold",
                  isActive ? "bg-foreground text-background" : "bg-card text-foreground/60 hover:bg-muted"
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
      <div className="space-y-3">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg) => (
            <div 
              key={msg.id} 
              onClick={() => setSelectedMsg(msg)}
              className={cn(
                "p-6 rounded-[1.5rem] cursor-pointer transition-all border-none group relative overflow-hidden",
                msg.letto ? "bg-card opacity-80" : "bg-white dark:bg-muted/20"
              )}
            >
              <div className="flex gap-6">
                <div className={cn(
                  "h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-3",
                  msg.tipo === "segreteria" ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" :
                  msg.tipo === "docenti" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" :
                  "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
                )}>
                  {msg.tipo === "segreteria" ? <Building2 className="h-7 w-7" /> :
                   msg.tipo === "docenti" ? <User className="h-7 w-7" /> :
                   <Megaphone className="h-7 w-7" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                      {msg.mittente}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-bold">
                      {msg.data}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold truncate tracking-tight text-foreground mb-1">
                    {msg.oggetto}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-1 font-medium">
                    {msg.anteprima}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 opacity-20">
            <Mail className="h-16 w-16 mb-4" />
            <p className="text-lg font-bold">Nessun messaggio</p>
          </div>
        )}
      </div>

      {/* Chat Dialog */}
      <Dialog open={!!selectedMsg} onOpenChange={() => setSelectedMsg(null)}>
        <DialogContent className="max-w-2xl h-[85vh] p-0 overflow-hidden rounded-[2rem] border-none bg-background shadow-none">
          {selectedMsg && (
            <>
              <div className="p-8 border-b border-muted/20 bg-card flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className={cn(
                     "h-12 w-12 rounded-2xl flex items-center justify-center",
                     selectedMsg.tipo === "segreteria" ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30" : "bg-blue-100 text-blue-600 dark:bg-blue-900/30"
                   )}>
                     <User className="h-6 w-6" />
                   </div>
                   <div>
                     <DialogTitle className="text-xl font-black">{selectedMsg.mittente}</DialogTitle>
                     <p className="text-[10px] font-bold uppercase text-muted-foreground">{selectedMsg.ruolo}</p>
                   </div>
                </div>
              </div>

              <ScrollArea className="flex-1 p-8">
                <div className="space-y-8">
                  {selectedMsg.conversazione.map((chat: any) => (
                    <div key={chat.id} className={cn("flex flex-col", chat.io ? "items-end" : "items-start")}>
                      <div className={cn(
                        "p-6 rounded-2xl max-w-[80%] font-medium text-sm",
                        chat.io ? "bg-foreground text-background rounded-tr-none" : "bg-card text-foreground rounded-tl-none"
                      )}>
                        {chat.testo}
                      </div>
                      <span className="text-[10px] text-muted-foreground mt-2 font-bold">{chat.ora}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-8 bg-card border-t border-muted/20">
                <div className="flex gap-4">
                  <textarea 
                    className="flex-1 bg-background rounded-xl p-4 text-sm resize-none focus:outline-none border-none h-14"
                    placeholder="Scrivi..."
                  />
                  <Button className="h-14 w-14 rounded-xl bg-foreground text-background">
                    <Send className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
