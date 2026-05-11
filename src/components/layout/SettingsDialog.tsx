"use client"

import * as React from "react"
import { 
  Settings, 
  Moon, 
  Sun, 
  Bell, 
  ShieldCheck, 
  LogOut, 
  Info,
  Smartphone,
  KeyRound,
  Bug,
  ChevronRight
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
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface SecurityViewProps {
  setView: (view: "main" | "security" | "devices" | "bug") => void
  is2FAActive: boolean
  setIs2FAActive: (active: boolean) => void
  devices: { id: number; name: string; location: string; active: boolean }[]
}

const SecurityView = ({ setView, is2FAActive, setIs2FAActive, devices }: SecurityViewProps) => (
  <div className="space-y-6 animate-in slide-in-from-right-4 duration-200">
    <Button variant="ghost" onClick={() => setView("main")} className="mb-2 p-0 h-auto hover:bg-transparent text-muted-foreground font-black text-[10px] uppercase tracking-widest">
      ← Torna alle impostazioni
    </Button>
    <div className="space-y-6">
      <h3 className="text-xl font-black tracking-tight text-foreground">Sicurezza e Privacy</h3>
      
      <div className="space-y-2">
        {/* 2FA */}
        <div className="p-5 rounded-2xl bg-muted/30 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">Autenticazione 2FA</span>
            <span className="text-[10px] font-medium text-muted-foreground uppercase">Extra protezione</span>
          </div>
          <Switch checked={is2FAActive} onCheckedChange={setIs2FAActive} />
        </div>

        {/* Password */}
        <Button variant="ghost" className="w-full justify-between h-16 rounded-2xl bg-muted/30 px-5 hover:bg-muted/50 border-none transition-all">
          <div className="flex items-center gap-3">
            <KeyRound className="h-5 w-5 opacity-60" />
            <div className="text-left">
              <p className="text-sm font-bold text-foreground leading-none">Cambia Password</p>
              <p className="text-[10px] font-medium text-muted-foreground mt-1 uppercase">Ultima modifica: 3 mesi fa</p>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 opacity-20" />
        </Button>

        {/* Dispositivi */}
        <Button variant="ghost" className="w-full justify-between h-16 rounded-2xl bg-muted/30 px-5 hover:bg-muted/50 border-none transition-all" onClick={() => setView("devices")}>
          <div className="flex items-center gap-3">
            <Smartphone className="h-5 w-5 opacity-60" />
            <div className="text-left">
              <p className="text-sm font-bold text-foreground leading-none">Dispositivi Connessi</p>
              <p className="text-[10px] font-medium text-muted-foreground mt-1 uppercase">{devices.length} Sessioni attive</p>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 opacity-20" />
        </Button>
      </div>
    </div>
  </div>
)

interface DevicesViewProps {
  setView: (view: "main" | "security" | "devices" | "bug") => void
  devices: { id: number; name: string; location: string; active: boolean }[]
  setDevices: (devices: { id: number; name: string; location: string; active: boolean }[]) => void
}

const DevicesView = ({ setView, devices, setDevices }: DevicesViewProps) => (
  <div className="space-y-6 animate-in slide-in-from-right-4 duration-200">
    <Button variant="ghost" onClick={() => setView("security")} className="mb-2 p-0 h-auto hover:bg-transparent text-muted-foreground font-black text-[10px] uppercase tracking-widest">
      ← Indietro
    </Button>
    <div className="space-y-4">
      <h3 className="text-xl font-black tracking-tight">Dispositivi Connessi</h3>
      <div className="space-y-3">
        {devices.map(device => (
          <div key={device.id} className="p-4 rounded-2xl bg-muted/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Smartphone className={cn("h-5 w-5", device.active ? "text-emerald-500" : "text-muted-foreground")} />
              <div>
                <p className="text-sm font-bold">{device.name}</p>
                <p className="text-[10px] text-muted-foreground uppercase font-black">{device.location} {device.active && "• In uso"}</p>
              </div>
            </div>
            {!device.active && (
              <Button variant="ghost" size="sm" className="text-destructive text-[10px] font-black" onClick={() => setDevices(devices.filter(d => d.id !== device.id))}>RIMUOVI</Button>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export function SettingsDialog() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const isDocente = pathname.startsWith("/docente")
  
  const [lang, setLang] = React.useState("it")
  const [is2FAActive, setIs2FAActive] = React.useState(true)
  const [devices, setDevices] = React.useState([
    { id: 1, name: "MacBook Pro 14\"", location: "Napoli, Italia", active: true },
    { id: 2, name: "iPhone 15 Pro", location: "Roma, Italia", active: false }
  ])
  const [view, setView] = React.useState<"main" | "security" | "devices" | "bug">("main")

  const [notifications] = React.useState({
    push: true,
    email: false,
    ricevimenti: true,
    avvisi: true
  })

  return (
    <Dialog onOpenChange={(open) => !open && setView("main")}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-14 w-14 rounded-2xl text-muted-foreground hover:text-foreground bg-card dark:bg-white/5 border-none hover:bg-muted dark:hover:bg-white/10 transition-all flex items-center justify-center p-0 shadow-none"
        >
          <Settings className="h-7 w-7" />
          <span className="sr-only">Impostazioni</span>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[480px] h-[90vh] sm:h-[85vh] flex flex-col rounded-[1.5rem] p-0 overflow-hidden border-none bg-background shadow-none animate-in zoom-in-95 duration-200">
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
          <div className="py-8">
            {view === "main" && (
              <div className="grid gap-10">
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

                {/* Sezione Notifiche */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1 flex items-center gap-2">
                    <Bell className="h-3 w-3" /> Notifiche
                  </h4>
                  <div className="space-y-5 px-1">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col text-foreground">
                        <Label className="text-sm font-bold">Centro notifiche</Label>
                        <span className="text-[10px] font-medium text-muted-foreground">Avvisi istantanei nell&apos;app</span>
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
                  </div>
                </div>

                {/* Sezione Sicurezza (Nuova Logica Interattiva) */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Sicurezza e Privacy</h4>
                  <Button 
                    variant="ghost" 
                    onClick={() => setView("security")}
                    className="w-full justify-between h-14 rounded-2xl bg-muted/30 hover:bg-muted/50 px-5 border-none text-foreground transition-all"
                  >
                    <div className="flex items-center gap-3 text-sm font-bold">
                      <ShieldCheck className="h-5 w-5 opacity-60" /> Gestione Sicurezza
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-20" />
                  </Button>
                </div>

                <Separator className="bg-border/40" />

                {/* Sezione Azioni Critiche */}
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start h-14 rounded-2xl hover:bg-destructive/10 text-destructive px-5 gap-4 transition-all border-none font-black uppercase tracking-widest text-xs">
                    <LogOut className="h-5 w-5" />
                    Esci dall&apos;account
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start h-14 rounded-2xl hover:bg-muted/40 text-muted-foreground hover:text-foreground px-5 gap-4 transition-all border-none font-black uppercase tracking-widest text-xs">
                    <Bug className="h-5 w-5" />
                    Segnala un Bug
                  </Button>
                </div>
              </div>
            )}

            {view === "security" && (
              <SecurityView 
                setView={setView} 
                is2FAActive={is2FAActive} 
                setIs2FAActive={setIs2FAActive} 
                devices={devices} 
              />
            )}
            {view === "devices" && (
              <DevicesView 
                setView={setView} 
                devices={devices} 
                setDevices={setDevices} 
              />
            )}
          </div>
        </ScrollArea>

        <DialogFooter className="p-8 bg-muted/20 border-t border-border/40 shrink-0">
          <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] w-full">
            <Info className="h-3 w-3" />
            Nettuno v4.0.0
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
