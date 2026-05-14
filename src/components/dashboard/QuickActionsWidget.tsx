"use client"

import * as React from "react"
import { Plus, Pencil } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export interface QuickAction {
  id: string
  label: string        // max 2 parole
  icon: React.ElementType
  href: string
  tileClass?: string   // bg-role-*, default: "bg-muted/30"
  iconClass?: string   // text-role-*-fg, default: "text-foreground"
}

interface QuickActionsWidgetProps {
  storageKey: string
  allActions: QuickAction[]
  defaultActionIds: string[]
}

export function QuickActionsWidget({
  storageKey,
  allActions,
  defaultActionIds,
}: QuickActionsWidgetProps) {
  const [activeIds, setActiveIds] = React.useState<string[]>([])
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const defaultsRef = React.useRef(defaultActionIds)

  React.useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    setActiveIds(saved ? JSON.parse(saved) : defaultsRef.current)
    setIsLoaded(true)
  }, [storageKey])

  const toggle = (id: string) => {
    setActiveIds((prev) => {
      const next = prev.includes(id)
        ? prev.length > 1 ? prev.filter((a) => a !== id) : prev
        : [...prev, id]
      localStorage.setItem(storageKey, JSON.stringify(next))
      return next
    })
  }

  if (!isLoaded) {
    return (
      <div className="grid grid-cols-2 gap-3">
        <div className="aspect-square rounded-2xl bg-muted/30 animate-pulse" />
        <div className="aspect-square rounded-2xl bg-muted/30 animate-pulse" />
        <div className="aspect-square rounded-2xl bg-muted/20 animate-pulse" />
      </div>
    )
  }

  const activeActions = allActions.filter((a) => activeIds.includes(a.id))

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-3 pb-1">
        {activeActions.map((action) => {
          const Icon = action.icon
          return (
            <Link
              key={action.id}
              href={action.href}
              className={cn(
                "group aspect-square flex flex-col items-center justify-center p-4",
                "rounded-2xl transition-all active:scale-[0.95] hover:scale-[1.04]",
                action.tileClass ?? "bg-muted/30"
              )}
            >
              <Icon className={cn("h-8 w-8 mb-3", action.iconClass ?? "text-foreground")} />
              <span className="text-[10px] font-black uppercase tracking-tighter text-center leading-tight text-foreground">
                {action.label}
              </span>
            </Link>
          )
        })}

        {/* Slot Aggiungi — apre il dialog di personalizzazione */}
        <button
          onClick={() => setDialogOpen(true)}
          className="aspect-square rounded-2xl border-2 border-dashed border-muted-foreground/20 hover:border-foreground/20 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.95]"
        >
          <div className="h-8 w-8 rounded-xl bg-muted/30 flex items-center justify-center">
            <Plus className="h-5 w-5 text-muted-foreground/60" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">
            Aggiungi
          </span>
        </button>
      </div>

      {/* Dialog personalizzazione — aperto da Aggiungi E dal floating button */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-sm rounded-[2rem] border-none bg-card shadow-none">
          <DialogHeader className="p-8 pb-2">
            <DialogTitle className="text-2xl font-black tracking-tighter uppercase">
              Personalizza
            </DialogTitle>
            <p className="text-xs font-medium text-muted-foreground mt-1">
              Seleziona le azioni da mostrare.
            </p>
          </DialogHeader>
          <div className="px-8 grid grid-cols-2 gap-3">
            {allActions.map((action) => {
              const Icon = action.icon
              const isActive = activeIds.includes(action.id)
              return (
                <button
                  key={action.id}
                  onClick={() => toggle(action.id)}
                  className={cn(
                    "aspect-square flex flex-col items-center justify-center p-4",
                    "rounded-2xl border-2 transition-all active:scale-[0.95]",
                    isActive
                      ? cn("border-foreground", action.tileClass ?? "bg-muted/30")
                      : "border-transparent bg-muted/20 opacity-40 hover:opacity-70"
                  )}
                >
                  <Icon className={cn("h-7 w-7 mb-2", action.iconClass ?? "text-foreground")} />
                  <span className="text-[9px] font-black uppercase tracking-tighter text-center leading-tight text-foreground">
                    {action.label}
                  </span>
                </button>
              )
            })}
          </div>
          <DialogFooter className="p-8 pt-6">
            <Button
              onClick={() => setDialogOpen(false)}
              className="w-full rounded-xl h-14 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs shadow-none active:scale-95 transition-all"
            >
              Salva
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Floating edit button — apre lo stesso dialog */}
      <button
        onClick={() => setDialogOpen(true)}
        className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-90"
      >
        <Pencil className="h-5 w-5" />
      </button>
    </div>
  )
}
