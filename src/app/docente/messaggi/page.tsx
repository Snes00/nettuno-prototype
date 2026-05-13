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
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 pb-12 pt-4">
      <section className="space-y-6 px-1">
        <div className="relative group max-w-2xl">
          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground group-focus-within:text-foreground transition-colors" />
          <Input 
            placeholder="Cerca conversazione..." 
            className="pl-14 h-16 bg-card border border-border/40 rounded-[1.25rem] focus-visible:ring-primary/10 shadow-none text-base font-medium"
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
                  "rounded-2xl h-12 px-6 gap-2 border-none transition-all shrink-0 font-black uppercase tracking-widest text-[10px]",
                  isActive ? "bg-foreground text-background" : "bg-muted/40 text-foreground hover:bg-muted/60"
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </Button>
            )
          })}
        </div>
      </section>

      <div className="space-y-4">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg) => (
            <div 
              key={msg.id} 
              onClick={() => setSelectedMsg(msg)}
              className={cn(
                "p-8 rounded-[1.5rem] cursor-pointer transition-all border border-border/40 md:border-none group relative overflow-hidden",
                msg.letto ? "bg-card/60 opacity-80 hover:bg-card" : "bg-card hover:scale-[1.01]"
              )}
            >
              <div className="flex gap-6 items-center">
                <div className={cn(
                  "h-16 w-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-3 shadow-none",
                  msg.tipo === "studenti" ? "bg-role-info text-role-info-fg" :
                  msg.tipo === "colleghi" ? "bg-role-accent text-role-accent-fg" :
                  "bg-role-warning text-role-warning-fg"
                )}>
                  {msg.tipo === "studenti" ? <Users className="h-8 w-8" /> :
                   msg.tipo === "colleghi" ? <User className="h-8 w-8" /> :
                   <Building2 className="h-8 w-8" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                      {msg.mittente}
                    </span>
                    <span className="text-[10px] text-muted-foreground/40 font-black uppercase tracking-widest">
                      {msg.data}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-black truncate tracking-tighter text-foreground mb-1">
                    {msg.oggetto}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-1 font-medium tracking-tight">
                    {msg.anteprima}
                  </p>
                </div>
              </div>
              {!msg.letto && (
                <div className="absolute top-8 right-8 h-2.5 w-2.5 rounded-full bg-role-critical" />
              )}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-24 opacity-10">
            <Mail className="h-20 w-20 mb-4" />
            <p className="text-xl font-black uppercase tracking-[0.2em]">Nessun messaggio</p>
          </div>
        )}
      </div>

      <Dialog open={!!selectedMsg} onOpenChange={() => setSelectedMsg(null)}>
        <DialogContent className="max-w-2xl h-[90vh] p-0 overflow-hidden rounded-[2.5rem] border-none bg-background shadow-none flex flex-col focus-visible:ring-0">
          {selectedMsg && (
            <>
              <div className="p-8 md:p-10 border-b border-border/20 bg-card flex items-center justify-between shrink-0">
                <div className="flex items-center gap-5">
                   <div className={cn(
                     "h-14 w-14 rounded-2xl flex items-center justify-center",
                     selectedMsg.tipo === "studenti" ? "bg-role-info text-role-info-fg" : "bg-role-accent text-role-accent-fg"
                   )}>
                     <User className="h-7 w-7" />
                   </div>
                   <div>
                     <DialogTitle className="text-2xl font-black tracking-tighter text-foreground leading-none">{selectedMsg.mittente}</DialogTitle>
                     <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1.5">{selectedMsg.ruolo}</p>
                   </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-xl h-12 w-12 hover:bg-muted"><MoreHorizontal className="h-6 w-6" /></Button>
              </div>

              <ScrollArea className="flex-1 px-8 py-10">
                <div className="space-y-10">
                  {selectedMsg.conversazione.map((chat) => (
                    <div key={chat.id} className={cn("flex flex-col", chat.io ? "items-end" : "items-start")}>
                      <div className={cn(
                        "p-6 rounded-[1.5rem] max-w-[85%] font-medium text-sm leading-relaxed shadow-none",
                        chat.io ? "bg-foreground text-background rounded-tr-none" : "bg-card text-foreground rounded-tl-none border border-border/20"
                      )}>
                        {chat.testo}
                        
                        {chat.allegato && (
                          <div className={cn(
                            "mt-5 p-4 rounded-xl flex items-center gap-4 border transition-colors cursor-pointer",
                            chat.io ? "bg-background/10 border-background/20 hover:bg-background/20" : "bg-muted/50 border-border/40 hover:bg-muted"
                          )}>
                            <div className="h-11 w-11 rounded-lg bg-background flex items-center justify-center shadow-none border border-border/10">
                               <FileText className="h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                               <p className="text-xs font-black truncate">{chat.allegato.nome}</p>
                               <p className="text-[10px] opacity-40 font-black uppercase tracking-widest mt-0.5">{chat.allegato.size}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-muted-foreground mt-3 font-black uppercase tracking-widest px-1 opacity-40">{chat.ora}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-8 md:p-10 bg-card border-t border-border/20 shrink-0">
                <div className="flex items-center gap-4 bg-background rounded-2xl p-2.5 pl-5 border border-border/40 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                  <Button variant="ghost" size="icon" className="rounded-xl text-muted-foreground shrink-0 hover:bg-muted"><Plus className="h-5 w-5" /></Button>
                  <textarea 
                    className="flex-1 bg-transparent rounded-xl py-2.5 text-sm resize-none focus:outline-none border-none min-h-[44px] max-h-[120px] font-medium"
                    placeholder="Scrivi una risposta..."
                    rows={1}
                  />
                  <div className="flex items-center gap-1.5 pr-2">
                    <Button variant="ghost" size="icon" className="rounded-xl text-muted-foreground shrink-0 hover:bg-muted"><ImageIcon className="h-5 w-5" /></Button>
                    <Button className="h-12 w-12 rounded-xl bg-foreground text-background shrink-0 shadow-none hover:opacity-90 active:scale-95 transition-all">
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
