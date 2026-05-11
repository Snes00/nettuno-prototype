"use client"

import * as React from "react"
import { 
  Plus, 
  X, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  CreditCard, 
  FileText, 
  MessageSquare, 
  Clock, 
  Heart,
  Zap,
  Star,
  Settings
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const ALL_ACTIONS = [
  { id: "esami", label: "I tuoi esami", icon: GraduationCap, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { id: "presenze", label: "Presenze", icon: Zap, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
  { id: "piano", label: "Piano di Studi", icon: BookOpen, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/20" },
  { id: "tasse", label: "Tasse e Pagamenti", icon: CreditCard, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/20" },
  { id: "calendario", label: "Calendario", icon: Calendar, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
  { id: "certificati", label: "Certificati", icon: FileText, color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-900/20" },
  { id: "messaggi", label: "Messaggi", icon: MessageSquare, color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-50 dark:bg-cyan-900/20" },
  { id: "orario", label: "Orario Lezioni", icon: Clock, color: "text-slate-600 dark:text-slate-400", bg: "bg-slate-50 dark:bg-slate-900/20" },
  { id: "preferiti", label: "Preferiti", icon: Heart, color: "text-pink-600 dark:text-pink-400", bg: "bg-pink-50 dark:bg-pink-900/20" },
  { id: "valutazioni", label: "Valutazioni", icon: Star, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-900/20" },
]

const BASE_ACTION_IDS = ["esami", "presenze", "piano", "tasse", "calendario"]

export function QuickActions() {
  const [activeActions, setActiveActions] = React.useState<string[]>([])
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    const saved = localStorage.getItem("nettuno_quick_actions")
    if (saved) {
      setActiveActions(JSON.parse(saved))
    } else {
      setActiveActions(BASE_ACTION_IDS)
    }
    setIsLoaded(true)
  }, [])

  const saveActions = (newActions: string[]) => {
    setActiveActions(newActions)
    localStorage.setItem("nettuno_quick_actions", JSON.stringify(newActions))
  }

  const toggleAction = (id: string) => {
    if (activeActions.includes(id)) {
      if (activeActions.length > 1) {
        saveActions(activeActions.filter(a => a !== id))
      }
    } else {
      saveActions([...activeActions, id])
    }
  }

  if (!isLoaded) return <div className="h-40 animate-pulse bg-muted/50 rounded-2xl" />

  const currentActions = ALL_ACTIONS.filter(a => activeActions.includes(a.id))

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3">
        {currentActions.map((action) => {
          const Icon = action.icon
          return (
            <Button 
              key={action.id}
              variant="outline" 
              className="flex items-center justify-start h-14 w-full p-3 gap-4 rounded-2xl border-none bg-muted/50 dark:bg-white/5 hover:bg-muted dark:hover:bg-white/10 transition-all group shadow-none"
            >
              <div className={cn("p-2 rounded-xl shrink-0 transition-transform group-hover:scale-110", action.bg)}>
                <Icon className={cn("h-5 w-5", action.color)} />
              </div>
              <span className="text-sm font-bold text-foreground">{action.label}</span>
            </Button>
          )
        })}

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="flex items-center justify-start h-14 w-full p-3 gap-4 rounded-2xl border-2 border-dashed border-muted-foreground/20 hover:border-foreground/20 bg-transparent transition-all group shadow-none"
            >
              <div className="p-2 rounded-xl bg-muted dark:bg-white/10 text-muted-foreground group-hover:bg-foreground/10 transition-colors shrink-0">
                <Plus className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-muted-foreground">Aggiungi</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md rounded-[1.5rem] border border-border bg-background shadow-none">
            <DialogHeader className="p-4">
              <DialogTitle className="text-2xl font-black tracking-tight">Personalizza Scorciatoie</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-3 py-4 px-2">
              {ALL_ACTIONS.map((action) => {
                const Icon = action.icon
                const isActive = activeActions.includes(action.id)
                return (
                  <button
                    key={action.id}
                    onClick={() => toggleAction(action.id)}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-2xl border-2 transition-all text-left",
                      isActive 
                        ? "bg-card border-foreground text-foreground" 
                        : "bg-transparent border-transparent hover:bg-muted text-muted-foreground"
                    )}
                  >
                    <div className={cn("p-2 rounded-xl shrink-0", action.bg)}>
                      <Icon className={cn("h-5 w-5", action.color)} />
                    </div>
                    <span className="text-xs font-bold leading-tight">{action.label}</span>
                  </button>
                )
              })}
            </div>
            <DialogFooter className="p-4">
              <Button className="rounded-xl w-full h-12 font-black bg-foreground text-background hover:opacity-90" asChild>
                <DialogTrigger>Salva Modifiche</DialogTrigger>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="flex justify-center pt-2">
        <Dialog>
           <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 hover:bg-transparent">
                 <Settings className="h-3 w-3 mr-2" /> Modifica
              </Button>
           </DialogTrigger>
        </Dialog>
      </div>
    </div>
  )
}
