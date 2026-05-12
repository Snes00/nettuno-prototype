"use client"

import * as React from "react"
import { 
  Search, 
  User, 
  Building2, 
  Send,
  Mail,
  Users,
  Image as ImageIcon,
  FileText,
  MoreHorizontal,
  Plus
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Dialog, 
  DialogContent, 
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type Allegato = {
  nome: string;
  tipo: string;
  size: string;
};

type ChatMessage = {
  id: number;
  testo: string;
  ora: string;
  io: boolean;
  allegato?: Allegato;
};

type ConversazioneDocente = {
  id: number;
  mittente: string;
  ruolo: string;
  oggetto: string;
  anteprima: string;
  data: string;
  letto: boolean;
  tipo: string;
  conversazione: ChatMessage[];
};

const MESSAGGI_DOCENTE: ConversazioneDocente[] = [
  {
    id: 1,
    mittente: "Marco Bianchi",
    ruolo: "Studente • Pittura I",
    oggetto: "Richiesta revisione progetto finale",
    anteprima: "Gentile Professore, le scrivo per chiederle se fosse possibile fissare un breve incontro online per revisionare...",
    data: "09:30",
    letto: false,
    tipo: "studenti",
    conversazione: [
      { id: 101, testo: "Gentile Professore, le scrivo per chiederle se fosse possibile fissare un breve incontro online per revisionare il mio progetto finale.", ora: "09:30", io: false },
      { id: 102, testo: "Certamente Marco. Possiamo vederci su Teams domani alle 15:00? Hai già una bozza da mostrarmi?", ora: "10:15", io: true },
      { id: 103, testo: "Sì, ho preparato un PDF con i primi bozzetti. Lo allego qui sotto.", ora: "10:20", io: false, allegato: { nome: "bozzetti_finale.pdf", tipo: "pdf", size: "2.4 MB" } },
    ]
  },
  {
    id: 2,
    mittente: "Direzione Didattica",
    ruolo: "Amministrazione",
    oggetto: "Convocazione Consiglio di Corso",
    anteprima: "Si comunica che il Consiglio di Corso è convocato per il giorno 15 Maggio alle ore 10:00 in Aula Magno.",
    data: "Ieri",
    letto: true,
    tipo: "istituzionale",
    conversazione: [
      { id: 201, testo: "Si comunica che il Consiglio di Corso è convocato per il giorno 15 Maggio alle ore 10:00 in Aula Magno.", ora: "Ieri 16:45", io: false }
    ]
  },
  {
    id: 3,
    mittente: "Prof.ssa Elena Bianchi",
    ruolo: "Coordinatrice Dipartimento",
    oggetto: "Materiali Laboratorio Scultura",
    anteprima: "Ciao Alessandro, ho caricato i nuovi moduli per la richiesta materiali nell'area amministrazione.",
    data: "2gg fa",
    letto: true,
    tipo: "colleghi",
    conversazione: [
      { id: 301, testo: "Ciao Alessandro, ho caricato i nuovi moduli per la richiesta materiali nell'area amministrazione.", ora: "26 Apr 11:20", io: false }
    ]
  },
]

export default function DocenteMessaggiPage() {
  const [activeTab, setActiveTab] = React.useState("tutti")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedMsg, setSelectedMsg] = React.useState<ConversazioneDocente | null>(null)

  const filteredMessages = MESSAGGI_DOCENTE.filter(m => {
    const matchTab = activeTab === "tutti" || m.tipo === activeTab
    const matchSearch = m.mittente.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        m.oggetto.toLowerCase().includes(searchQuery.toLowerCase())
    return matchTab && matchSearch
  })

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <section className="space-y-4 px-1">
        <div>
          <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-foreground">Messaggi</h1>
          <p className="text-muted-foreground mt-1 font-medium">Comunicazioni con studenti, colleghi e uffici.</p>
        </div>

        <div className="relative group max-w-2xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground group-focus-within:text-foreground transition-colors" />
          <Input 
            placeholder="Cerca conversazione..." 
            className="pl-12 h-14 bg-card border-none rounded-2xl focus-visible:ring-primary/10 shadow-none text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {[
            { id: "tutti", label: "Tutti", icon: Mail },
            { id: "studenti", label: "Studenti", icon: Users },
            { id: "colleghi", label: "Colleghi", icon: User },
            { id: "istituzionale", label: "Uffici", icon: Building2 }
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
                  msg.tipo === "studenti" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" :
                  msg.tipo === "colleghi" ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" :
                  "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                )}>
                  {msg.tipo === "studenti" ? <Users className="h-7 w-7" /> :
                   msg.tipo === "colleghi" ? <User className="h-7 w-7" /> :
                   <Building2 className="h-7 w-7" />}
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

      <Dialog open={!!selectedMsg} onOpenChange={() => setSelectedMsg(null)}>
        <DialogContent className="max-w-2xl h-[85vh] p-0 overflow-hidden rounded-[2rem] border-none bg-background shadow-none flex flex-col">
          {selectedMsg && (
            <>
              <div className="p-6 md:p-8 border-b border-muted/20 bg-card flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                   <div className={cn(
                     "h-12 w-12 rounded-2xl flex items-center justify-center",
                     selectedMsg.tipo === "studenti" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30" : "bg-purple-100 text-purple-600 dark:bg-purple-900/30"
                   )}>
                     <User className="h-6 w-6" />
                   </div>
                   <div>
                     <DialogTitle className="text-xl font-black">{selectedMsg.mittente}</DialogTitle>
                     <p className="text-[10px] font-bold uppercase text-muted-foreground">{selectedMsg.ruolo}</p>
                   </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-xl"><MoreHorizontal className="h-5 w-5" /></Button>
              </div>

              <ScrollArea className="flex-1 p-6 md:p-8">
                <div className="space-y-8">
                  {selectedMsg.conversazione.map((chat) => (
                    <div key={chat.id} className={cn("flex flex-col", chat.io ? "items-end" : "items-start")}>
                      <div className={cn(
                        "p-5 rounded-2xl max-w-[85%] font-medium text-sm leading-relaxed",
                        chat.io ? "bg-foreground text-background rounded-tr-none" : "bg-card text-foreground rounded-tl-none border border-border/40"
                      )}>
                        {chat.testo}
                        
                        {chat.allegato && (
                          <div className={cn(
                            "mt-4 p-3 rounded-xl flex items-center gap-3 border",
                            chat.io ? "bg-white/10 border-white/20" : "bg-muted/50 border-border/40"
                          )}>
                            <div className="h-10 w-10 rounded-lg bg-background/20 flex items-center justify-center">
                               <FileText className="h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                               <p className="text-xs font-bold truncate">{chat.allegato.nome}</p>
                               <p className="text-[10px] opacity-60 font-bold uppercase">{chat.allegato.size}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-widest px-1">{chat.ora}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-6 md:p-8 bg-card border-t border-muted/20 shrink-0">
                <div className="flex items-center gap-4 bg-background rounded-2xl p-2 pl-4 border border-border/40 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                  <Button variant="ghost" size="icon" className="rounded-xl text-muted-foreground shrink-0"><Plus className="h-5 w-5" /></Button>
                  <textarea 
                    className="flex-1 bg-transparent rounded-xl py-2 text-sm resize-none focus:outline-none border-none min-h-[40px] max-h-[120px]"
                    placeholder="Scrivi una risposta..."
                    rows={1}
                  />
                  <div className="flex items-center gap-1 pr-2">
                    <Button variant="ghost" size="icon" className="rounded-xl text-muted-foreground shrink-0"><ImageIcon className="h-5 w-5" /></Button>
                    <Button className="h-12 w-12 rounded-xl bg-foreground text-background shrink-0">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
