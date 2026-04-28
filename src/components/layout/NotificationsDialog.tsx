"use client"

import * as React from "react"
import { 
  Bell, 
  CheckCheck, 
  Trash2, 
  AlertCircle, 
  Calendar, 
  MessageSquare, 
  CreditCard,
  X,
  Clock
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: "alert",
    title: "Tassa in scadenza",
    description: "La seconda rata delle tasse scade tra 6 giorni. Evita la mora pagando ora.",
    time: "2 ore fa",
    read: false,
    icon: CreditCard,
    color: "bg-[var(--bento-pink)] text-red-700 dark:text-foreground"
  },
  {
    id: 2,
    type: "message",
    title: "Nuovo Messaggio",
    description: "Il Prof. Rossi ha risposto alla tua domanda su Pittura I.",
    time: "5 ore fa",
    read: false,
    icon: MessageSquare,
    color: "bg-[var(--bento-blue)] text-blue-700 dark:text-foreground"
  },
  {
    id: 3,
    type: "calendar",
    title: "Lezione Spostata",
    description: "La lezione di Storia dell'Arte è stata spostata dall'aula 4 all'aula Magno.",
    time: "Ieri",
    read: true,
    icon: Calendar,
    color: "bg-[var(--bento-yellow)] text-amber-700 dark:text-foreground"
  },
  {
    id: 4,
    type: "info",
    title: "Seminario Erasmus",
    description: "Sono aperte le iscrizioni per il prossimo bando Erasmus+ 2026/27.",
    time: "2 giorni fa",
    read: true,
    icon: AlertCircle,
    color: "bg-[var(--bento-purple)] text-purple-700 dark:text-foreground"
  }
]

export function NotificationsDialog() {
  const [notifications, setNotifications] = React.useState(INITIAL_NOTIFICATIONS)
  const unreadCount = notifications.filter(n => !n.read).length

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const toggleRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: !n.read } : n
    ))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-14 w-14 rounded-2xl text-muted-foreground hover:text-foreground bg-card dark:bg-white/5 border-none hover:bg-muted dark:hover:bg-white/10 relative transition-all flex items-center justify-center p-0 shadow-none"
        >
          <Bell className="h-7 w-7" />
          {unreadCount > 0 && (
            <span className="absolute top-4 right-4 h-2.5 w-2.5 rounded-full bg-primary border-2 border-background animate-pulse"></span>
          )}
          <span className="sr-only">Notifiche</span>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[450px] rounded-[1.5rem] p-0 overflow-hidden border-none bg-background shadow-none animate-in zoom-in-95 duration-200">
        <DialogHeader className="p-8 border-b border-border/40">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-foreground text-background flex items-center justify-center">
                <Bell className="h-5 w-5" />
              </div>
              <DialogTitle className="text-2xl font-black tracking-tighter">Notifiche</DialogTitle>
            </div>
            {unreadCount > 0 && (
              <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary border-none font-black text-[10px] px-2.5 h-6">
                {unreadCount} NUOVE
              </Badge>
            )}
          </div>
          <DialogDescription className="text-sm font-medium text-muted-foreground">
            Rimani aggiornato sugli avvisi della tua accademia.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh]">
          <div className="p-4 space-y-3">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <div 
                  key={notif.id}
                  className={cn(
                    "group relative flex gap-4 p-4 rounded-[1.25rem] transition-all border-none",
                    notif.read ? "bg-transparent opacity-60" : "bg-muted/40 hover:bg-muted/60"
                  )}
                  onClick={() => toggleRead(notif.id)}
                >
                  {/* Icona */}
                  <div className={cn(
                    "h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                    notif.color
                  )}>
                    <notif.icon className="h-6 w-6" />
                  </div>
                  
                  {/* Contenuto */}
                  <div className="flex-1 space-y-1 pr-6">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-sm tracking-tight leading-none">{notif.title}</h4>
                      <span className="text-[10px] font-black text-muted-foreground/40 uppercase flex items-center gap-1 shrink-0">
                        <Clock className="h-2.5 w-2.5" /> {notif.time}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                      {notif.description}
                    </p>
                  </div>

                  {/* Azione di eliminazione rapida (solo mobile-touch o hover desktop) */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteNotification(notif.id)
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>

                  {/* Indicatore "non letto" */}
                  {!notif.read && (
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-muted/40 flex items-center justify-center">
                  <Bell className="h-8 w-8 text-muted-foreground/30" />
                </div>
                <div className="space-y-1">
                  <p className="font-black text-sm">Nessuna notifica</p>
                  <p className="text-xs text-muted-foreground font-medium">Tutto tranquillo! Ti avviseremo quando ci sarà qualcosa di nuovo.</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <DialogFooter className="p-6 bg-muted/20 border-t border-border/40 flex flex-row items-center justify-between gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-xs font-black uppercase tracking-widest gap-2 text-muted-foreground hover:text-foreground rounded-xl h-11 px-4"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            <CheckCheck className="h-4 w-4" /> Segna come letti
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground rounded-xl h-11 px-4"
          >
            Vedi tutte
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
