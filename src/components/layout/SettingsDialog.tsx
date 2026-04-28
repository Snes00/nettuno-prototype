"use client"

import * as React from "react"
import { 
  Settings, 
  Moon, 
  Sun, 
  Languages, 
  Accessibility, 
  Bell, 
  ShieldCheck, 
  FileText, 
  LogOut, 
  ExternalLink,
  Info,
  Smartphone,
  KeyRound,
  Bug,
  CalendarCheck,
  Eye,
  Lock
} from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export function SettingsDialog() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const isDocente = pathname.startsWith("/docente")
  
  const [lang, setLang] = React.useState("it")
  const [notifications, setNotifications] = React.useState({
    push: true,
    email: false,
    ricevimenti: true,
    avvisi: true
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-14 w-14 rounded-2xl text-muted-foreground hover:text-foreground bg-card dark:bg-white/5 border-none hover:bg-muted dark:hover:bg-white/10 transition-all flex items-center justify-center p-0 shadow-none"
        >
          <Settings className="h-7 w-7" />
          <span className="sr-only">Impostazioni</span>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[480px] h-[90vh] sm:h-auto rounded-[1.5rem] p-0 overflow-hidden border-none bg-background shadow-none animate-in zoom-in-95 duration-200">
        <DialogHeader className="p-8 border-b border-border/40 shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <div className="h-10 w-10 rounded-xl bg-foreground text-background flex items-center justify-center">
              <Settings className="h-5 w-5" />
            </div>
            <DialogTitle className="text-2xl font-black tracking-tighter text-foreground">Impostazioni</DialogTitle>
          </div>
          <DialogDescription className="text-sm font-medium text-muted-foreground">
            {isDocente ? "Gestione pannello docente e preferenze." : "Personalizza la tua esperienza su Nettuno."}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-1 px-8 overflow-y-auto">
          <div className="grid gap-10 py-8">
            
            {/* Sezione Aspetto & Accessibilità */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Aspetto & Accessibilità</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-5 rounded-[1.25rem] bg-muted/30 border-none">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center text-foreground shadow-sm">
                      {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    </div>
                    <div className="flex flex-col">
                      <Label htmlFor="dark-mode" className="font-bold text-sm text-foreground">Modalità Scura</Label>
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Tema Interfaccia</span>
                    </div>
                  </div>
                  <Switch 
                    id="dark-mode" 
                    checked={theme === "dark"} 
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                  />
                </div>
                
                <Button variant="ghost" className="w-full justify-between h-14 rounded-[1.25rem] bg-muted/30 px-5 hover:bg-muted/50 transition-all border-none">
                  <div className="flex items-center gap-3 text-sm font-bold text-foreground">
                    <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center">
                      <Accessibility className="h-5 w-5" />
                    </div>
                    Contrasto elevato
                  </div>
                  <Switch />
                </Button>
              </div>
            </div>

            {/* Sezione Lingua */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Lingua di sistema</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className={cn(
                    "justify-center h-12 rounded-xl text-xs font-black transition-all border-none shadow-none",
                    lang === "it" ? "bg-foreground text-background" : "bg-muted/40 text-foreground hover:bg-muted/60"
                  )}
                  onClick={() => setLang("it")}
                >
                  ITALIANO
                </Button>
                <Button 
                  variant="outline" 
                  className={cn(
                    "justify-center h-12 rounded-xl text-xs font-black transition-all border-none shadow-none",
                    lang === "en" ? "bg-foreground text-background" : "bg-muted/40 text-foreground hover:bg-muted/60"
                  )}
                  onClick={() => setLang("en")}
                >
                  ENGLISH
                </Button>
              </div>
            </div>

            {/* Sezione Notifiche (Dinamica) */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1 flex items-center gap-2">
                <Bell className="h-3 w-3" /> Notifiche
              </h4>
              <div className="space-y-5 px-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col text-foreground">
                    <Label className="text-sm font-bold">Centro notifiche</Label>
                    <span className="text-[10px] font-medium text-muted-foreground">Avvisi istantanei nell'app</span>
                  </div>
                  <Switch checked={notifications.push} />
                </div>
                
                {isDocente && (
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-foreground">
                      <Label className="text-sm font-bold">Prenotazioni Ricevimento</Label>
                      <span className="text-[10px] font-medium text-muted-foreground">Notifica per nuovi appuntamenti</span>
                    </div>
                    <Switch checked={notifications.ricevimenti} />
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col text-foreground">
                    <Label className="text-sm font-bold">Email istituzionali</Label>
                    <span className="text-[10px] font-medium text-muted-foreground">Comunicazioni ufficiali ABA</span>
                  </div>
                  <Switch checked={notifications.email} />
                </div>
              </div>
            </div>

            {/* Sezione Sicurezza & Privacy */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1 flex items-center gap-2">
                <ShieldCheck className="h-3 w-3" /> Sicurezza e Privacy
              </h4>
              <div className="space-y-2">
                {[
                  { label: "Autenticazione a due fattori", icon: Lock, badge: "Attiva" },
                  { label: "Dispositivi connessi", icon: Smartphone, badge: "2" },
                  { label: "Cambia password", icon: KeyRound },
                ].map((item, idx) => (
                  <Button key={idx} variant="ghost" className="w-full justify-between h-14 rounded-2xl hover:bg-muted/40 px-4 text-foreground transition-all">
                    <div className="flex items-center gap-3 text-sm font-bold">
                      <item.icon className="h-4 w-4 opacity-60" /> {item.label}
                    </div>
                    {item.badge ? (
                      <Badge className="bg-muted text-foreground text-[10px] font-black border-none rounded-lg">{item.badge}</Badge>
                    ) : (
                      <ChevronRight className="h-4 w-4 opacity-20" />
                    )}
                  </Button>
                ))}
              </div>
            </div>

            <Separator className="bg-border/40" />

            {/* Segnala Bug */}
            <Button variant="ghost" className="w-full justify-start h-14 rounded-2xl hover:bg-red-500/10 text-destructive hover:text-red-500 px-5 gap-4 transition-all border-none">
              <Bug className="h-5 w-5" />
              <span className="text-sm font-black uppercase tracking-widest">Segnala un Bug</span>
            </Button>

            {/* Legal */}
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-between h-10 text-muted-foreground hover:text-foreground rounded-xl px-4 text-[10px] font-black uppercase tracking-[0.2em]">
                Privacy Policy <ExternalLink className="h-3 w-3" />
              </Button>
              <Button variant="ghost" className="w-full justify-between h-10 text-muted-foreground hover:text-foreground rounded-xl px-4 text-[10px] font-black uppercase tracking-[0.2em]">
                Termini di Servizio <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="p-8 bg-muted/20 border-t border-border/40 flex flex-col sm:flex-col gap-4 shrink-0">
          <Button 
            className="w-full h-14 rounded-2xl bg-foreground text-background hover:scale-[1.02] active:scale-95 transition-all font-black text-base shadow-none gap-3 group"
          >
            <LogOut className="h-5 w-5" />
            Esci dall'account
          </Button>
          <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">
            <Info className="h-3 w-3" />
            Nettuno v4.0.0
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
