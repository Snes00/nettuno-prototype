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
  Settings2
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
  { id: "esami", label: "I tuoi esami", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
  { id: "presenze", label: "Presenze", icon: Zap, color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: "piano", label: "Piano di Studi", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
  { id: "tasse", label: "Tasse e Pagamenti", icon: CreditCard, color: "text-amber-600", bg: "bg-amber-50" },
  { id: "calendario", label: "Calendario", icon: Calendar, color: "text-indigo-600", bg: "bg-indigo-50" },
  { id: "certificati", label: "Certificati", icon: FileText, color: "text-rose-600", bg: "bg-rose-50" },
  { id: "messaggi", label: "Messaggi", icon: MessageSquare, color: "text-cyan-600", bg: "bg-cyan-50" },
  { id: "orario", label: "Orario Lezioni", icon: Clock, color: "text-slate-600", bg: "bg-slate-50" },
  { id: "preferiti", label: "Preferiti", icon: Heart, color: "text-pink-600", bg: "bg-pink-50" },
  { id: "valutazioni", label: "Valutazioni", icon: Star, color: "text-orange-600", bg: "bg-orange-50" },
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

  if (!isLoaded) return <div className="h-40 animate-pulse bg-muted/50 rounded-[2rem]" />

  const currentActions = ALL_ACTIONS.filter(a => activeActions.includes(a.id))

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {currentActions.map((action) => {
          const Icon = action.icon
          return (
            <Button 
              key={action.id}
              variant="outline" 
              className="flex items-center justify-start h-14 w-full p-3 gap-3 rounded-2xl border-none bg-[#F1EFE9] hover:bg-[#EBE8E2] transition-all group shadow-none"
            >
              <div className={cn("p-2 rounded-xl shrink-0 transition-transform group-hover:scale-110", action.bg, action.color)}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-[#1A1917] truncate">{action.label}</span>
            </Button>
          )
        })}

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="flex items-center justify-start h-14 w-full p-3 gap-3 rounded-2xl border-2 border-dashed border-[#E5E2DA] hover:border-[#1A1917]/20 bg-transparent hover:bg-white/50 transition-all group shadow-none"
            >
              <div className="p-2 rounded-xl bg-[#EBE8E2] text-[#4A4947] group-hover:bg-[#1A1917]/10 transition-colors shrink-0">
                <Plus className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-[#4A4947]">Aggiungi</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md rounded-[2.5rem] border-none shadow-2xl bg-[#F8F5F0]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold tracking-tight px-2">Personalizza Scorciatoie</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-3 py-6 px-2">
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
                        ? "bg-white border-[#1A1917] text-[#1A1917]" 
                        : "bg-transparent border-transparent hover:bg-white/50 text-[#4A4947]"
                    )}
                  >
                    <div className={cn("p-2 rounded-xl shrink-0", action.bg, action.color)}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold leading-tight">{action.label}</span>
                  </button>
                )
              })}
            </div>
            <DialogFooter className="px-2">
              <Button className="rounded-full w-full h-12 font-bold bg-[#1A1917] text-white hover:bg-[#1A1917]/90" asChild>
                <DialogTrigger>Salva Modifiche</DialogTrigger>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="flex justify-center pt-2">
        <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4A4947]/40 hover:bg-transparent">
           <Settings2 className="h-3 w-3 mr-2" /> Gestione Avanzata
        </Button>
      </div>
    </div>
  )
}
