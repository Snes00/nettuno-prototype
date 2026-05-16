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
    color: "bg-role-critical/15 text-role-critical"
  },
  {
    id: 2,
    type: "message",
    title: "Nuovo Messaggio",
    description: "Il Prof. Rossi ha risposto alla tua domanda su Pittura I.",
    time: "5 ore fa",
    read: false,
    icon: MessageSquare,
    color: "bg-role-info text-role-info-fg"
  },
  {
    id: 3,
    type: "calendar",
    title: "Lezione Spostata",
    description: "La lezione di Storia dell'Arte è stata spostata dall'aula 4 all'aula Magno.",
    time: "Ieri",
    read: true,
    icon: Calendar,
    color: "bg-role-warning text-role-warning-fg"
  },
  {
    id: 4,
    type: "info",
    title: "Seminario Erasmus",
    description: "Sono aperte le iscrizioni per il prossimo bando Erasmus+ 2026/27.",
    time: "2 giorni fa",
    read: true,
    icon: AlertCircle,
    color: "bg-role-accent text-role-accent-fg"
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
        <button 
          className="h-14 w-14 rounded-full text-muted-foreground hover:text-foreground bg-card border border-border/20 hover:border-border/40 relative transition-all flex items-center justify-center p-0 shadow-none group active:scale-95"
        >
          <Bell className="h-6 w-6 group-hover:rotate-12 transition-transform" />
          {unreadCount > 0 && (
            <span className="absolute top-4 right-4 h-2.5 w-2.5 rounded-full bg-primary border-2 border-background animate-pulse"></span>
          )}
          <span className="sr-only">Notifiche</span>
        </button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[460px] rounded-[2rem] p-0 overflow-hidden border border-border/40 md:border-none bg-background shadow-none animate-in zoom-in-95 duration-200">
        <DialogHeader className="p-10 border-b border-border/20 bg-card">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                <Bell className="h-6 w-6" />
              </div>
              <DialogTitle className="text-3xl font-black tracking-tighter uppercase text-foreground">Notifiche</DialogTitle>
            </div>
            {unreadCount > 0 && (
              <Badge className="rounded-full bg-primary/10 text-primary border-none font-black text-[10px] px-3 h-7 tracking-widest">
                {unreadCount} NUOVE
              </Badge>
            )}
          </div>
          <DialogDescription className="text-sm font-medium text-muted-foreground uppercase tracking-tight">
            Rimani aggiornato sugli avvisi della tua accademia.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh]">
          <div className="p-6 space-y-4">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <div 
                  key={notif.id}
                  className={cn(
                    "group relative flex gap-5 p-6 rounded-[2rem] transition-all border border-transparent cursor-pointer",
                    notif.read ? "bg-transparent opacity-60 hover:bg-muted/20" : "bg-muted/40 hover:bg-muted/60 hover:border-border/10"
                  )}
                  onClick={() => toggleRead(notif.id)}
                >
                  {/* Icona */}
                  <div className={cn(
                    "h-14 w-14 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-sm",
                    notif.color
                  )}>
                    <notif.icon className="h-7 w-7" />
                  </div>
                  
                  {/* Contenuto */}
                  <div className="flex-1 space-y-1.5 pr-8">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-base tracking-tight uppercase leading-none">{notif.title}</h4>
                      <span className="text-[10px] font-black text-muted-foreground/40 uppercase flex items-center gap-1 shrink-0 tracking-widest">
                        <Clock className="h-3 w-3" /> {notif.time}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground leading-snug">
                      {notif.description}
                    </p>
                  </div>

                  {/* Azione di eliminazione rapida */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-4 right-4 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-role-critical-fg hover:bg-role-critical/20"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteNotification(notif.id)
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>

                  {/* Indicatore "non letto" */}
                  {!notif.read && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary shadow-lg shadow-primary/40" />
                  )}
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-5 opacity-20">
                <Bell className="h-16 w-16 text-foreground" />
                <div className="space-y-1">
                  <p className="font-black text-lg uppercase tracking-widest">Nessuna notifica</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase">Ti avviseremo quando ci sarà qualcosa di nuovo.</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <DialogFooter className="p-8 bg-muted/20 border-t border-border/20 flex flex-row items-center justify-between gap-4">
          <Button 
            variant="ghost" 
            className="text-[10px] font-black uppercase tracking-[0.2em] gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 h-12 px-5"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            <CheckCheck className="h-4 w-4" /> Segna come letti
          </Button>
          
          <Button 
            variant="ghost" 
            className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground h-12 px-5 hover:bg-muted/40"
          >
            Vedi tutte
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
