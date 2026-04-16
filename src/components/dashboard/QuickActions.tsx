"use client"

import * as React from "react"
import { 
  Plus, 
  X, 
  GripVertical, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  CreditCard, 
  FileText, 
  MessageSquare, 
  Clock, 
  Settings,
  Heart,
  Zap,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

// Pool di tutte le azioni possibili
const ALL_ACTIONS = [
  { id: "esami", label: "I tuoi esami", icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-500/10" },
  { id: "presenze", label: "Presenze", icon: Zap, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { id: "piano", label: "Piano di Studi", icon: BookOpen, color: "text-purple-500", bg: "bg-purple-500/10" },
  { id: "tasse", label: "Tasse e Pagamenti", icon: CreditCard, color: "text-amber-500", bg: "bg-amber-500/10" },
  { id: "calendario", label: "Calendario", icon: Calendar, color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { id: "certificati", label: "Certificati", icon: FileText, color: "text-rose-500", bg: "bg-rose-500/10" },
  { id: "messaggi", label: "Messaggi", icon: MessageSquare, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { id: "orario", label: "Orario Lezioni", icon: Clock, color: "text-slate-500", bg: "bg-slate-500/10" },
  { id: "preferiti", label: "Preferiti", icon: Heart, color: "text-pink-500", bg: "bg-pink-500/10" },
  { id: "valutazioni", label: "Valutazioni", icon: Star, color: "text-orange-500", bg: "bg-orange-500/10" },
]

// Azioni di base (ID)
const BASE_ACTION_IDS = ["esami", "presenze", "piano", "tasse", "calendario"]

export function QuickActions() {
  const [activeActions, setActiveActions] = React.useState<string[]>([])
  const [isEditing, setIsEditing] = React.useState(false)
  const [isLoaded, setIsLoaded] = React.useState(false)

  // Caricamento dallo stato locale
  React.useEffect(() => {
    const saved = localStorage.getItem("nettuno_quick_actions")
    if (saved) {
      setActiveActions(JSON.parse(saved))
    } else {
      setActiveActions(BASE_ACTION_IDS)
    }
    setIsLoaded(true)
  }, [])

  // Salvataggio nello stato locale
  const saveActions = (newActions: string[]) => {
    setActiveActions(newActions)
    localStorage.setItem("nettuno_quick_actions", JSON.stringify(newActions))
  }

  const toggleAction = (id: string) => {
    if (activeActions.includes(id)) {
      if (activeActions.length > 1) { // Minimo 1 azione
        saveActions(activeActions.filter(a => a !== id))
      }
    } else {
      saveActions([...activeActions, id])
    }
  }

  if (!isLoaded) return <div className="h-40 animate-pulse bg-muted rounded-2xl" />

  const currentActions = ALL_ACTIONS.filter(a => activeActions.includes(a.id))

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Azioni Rapide</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs font-medium text-primary hover:bg-primary/5"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Salva" : "Modifica"}
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {currentActions.map((action) => {
          const Icon = action.icon
          return (
            <div key={action.id} className="relative group">
              <Button 
                variant="outline" 
                className="flex flex-col h-auto w-full aspect-square p-2 gap-2 rounded-2xl border-muted-foreground/10 hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm"
              >
                <div className={`p-2 rounded-xl ${action.bg} ${action.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <span className="text-[10px] md:text-xs font-medium truncate w-full">{action.label}</span>
              </Button>
              
              {isEditing && (
                <button 
                  onClick={() => toggleAction(action.id)}
                  className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          )
        })}

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="flex flex-col h-auto aspect-square p-2 gap-2 rounded-2xl border-2 border-dashed border-muted-foreground/20 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all group"
            >
              <div className="p-2 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                <Plus className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <span className="text-[10px] md:text-xs font-medium">Aggiungi</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md rounded-3xl">
            <DialogHeader>
              <DialogTitle>Personalizza Scorciatoie</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-3 gap-4 py-4">
              {ALL_ACTIONS.map((action) => {
                const Icon = action.icon
                const isActive = activeActions.includes(action.id)
                return (
                  <button
                    key={action.id}
                    onClick={() => toggleAction(action.id)}
                    className={`flex flex-col items-center p-3 rounded-2xl border transition-all ${
                      isActive 
                        ? "bg-primary/10 border-primary text-primary shadow-sm" 
                        : "border-transparent hover:bg-muted"
                    }`}
                  >
                    <div className={`p-2 rounded-xl mb-2 ${action.bg} ${action.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-semibold">{action.label}</span>
                    {isActive && (
                      <Badge className="mt-2 h-4 px-1.5 text-[8px] bg-primary text-white border-none">Attivo</Badge>
                    )}
                  </button>
                )
              })}
            </div>
            <DialogFooter className="sm:justify-center">
              <Button variant="outline" className="rounded-xl w-full" asChild>
                <DialogTrigger>Chiudi</DialogTrigger>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
