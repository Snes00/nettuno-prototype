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
  ChevronRight,
  ArrowLeft
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
  <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
    <Button 
      variant="outline" 
      size="icon" 
      onClick={() => setView("main")} 
      className="h-12 w-12 rounded-full border-none bg-muted/30 hover:bg-muted/50 text-foreground transition-all mb-2 active:scale-90"
    >
      <ArrowLeft className="h-6 w-6" />
    </Button>
    <div className="space-y-8">
      <h3 className="text-2xl font-black tracking-tight text-foreground uppercase leading-none">Sicurezza</h3>
      
      <div className="space-y-3">
        {/* 2FA */}
        <div className="p-6 rounded-[1.5rem] bg-muted/30 flex items-center justify-between border border-transparent">
          <div className="flex flex-col">
            <span className="text-base font-black uppercase tracking-tight text-foreground leading-none">Autenticazione 2FA</span>
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1.5 opacity-60">Extra protezione</span>
          </div>
          <Switch checked={is2FAActive} onCheckedChange={setIs2FAActive} />
        </div>

        {/* Password */}
        <Button variant="ghost" className="w-full justify-between h-20  bg-muted/30 px-6 hover:bg-muted/50 border-none transition-all active:scale-[0.98]">
          <div className="flex items-center gap-4 text-left">
            <KeyRound className="h-6 w-6 text-muted-foreground" />
            <div className="space-y-0.5">
              <p className="text-base font-black uppercase tracking-tight text-foreground leading-none">Cambia Password</p>
              <p className="text-[10px] font-black text-muted-foreground mt-1 uppercase tracking-widest opacity-60">Aggiornato 3 mesi fa</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground/20" />
        </Button>

        {/* Dispositivi */}
        <Button variant="ghost" className="w-full justify-between h-20  bg-muted/30 px-6 hover:bg-muted/50 border-none transition-all active:scale-[0.98]" onClick={() => setView("devices")}>
          <div className="flex items-center gap-4 text-left">
            <Smartphone className="h-6 w-6 text-muted-foreground" />
            <div className="space-y-0.5">
              <p className="text-base font-black uppercase tracking-tight text-foreground leading-none">Dispositivi</p>
              <p className="text-[10px] font-black text-muted-foreground mt-1 uppercase tracking-widest opacity-60">{devices.length} Sessioni attive</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground/20" />
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
  <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
    <Button 
      variant="outline" 
      size="icon" 
      onClick={() => setView("security")} 
      className="h-12 w-12 rounded-full border-none bg-muted/30 hover:bg-muted/50 text-foreground transition-all mb-2 active:scale-90"
    >
      <ArrowLeft className="h-6 w-6" />
    </Button>
    <div className="space-y-6">
      <h3 className="text-2xl font-black tracking-tight uppercase leading-none">Dispositivi Connessi</h3>
      <div className="space-y-3">
        {devices.map(device => (
          <div key={device.id} className="p-6 rounded-[1.5rem] bg-muted/30 flex items-center justify-between border border-transparent">
            <div className="flex items-center gap-5">
              <div className={cn("h-12 w-12 rounded-full flex items-center justify-center shadow-none", device.active ? "bg-role-success text-role-success-fg" : "bg-muted text-muted-foreground")}>
                 <Smartphone className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-base font-black uppercase tracking-tight text-foreground">{device.name}</p>
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mt-1 opacity-60">{device.location} {device.active && "• In uso"}</p>
              </div>
            </div>
            {!device.active && (
              <Button variant="ghost" size="sm" className="text-role-critical-fg hover:bg-role-critical/10 text-[9px] font-black uppercase tracking-widest px-4 h-10  transition-all" onClick={() => setDevices(devices.filter(d => d.id !== device.id))}>RIMUOVI</Button>
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
        <button 
          className="h-14 w-14 rounded-full text-muted-foreground hover:text-foreground bg-card border border-border/20 hover:border-border/40 transition-all flex items-center justify-center p-0 shadow-none active:scale-95 group"
        >
          <Settings className="h-6 w-6 group-hover:rotate-45 transition-transform" />
          <span className="sr-only">Impostazioni</span>
        </button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px] h-[90vh] sm:h-[85vh] flex flex-col rounded-[2rem] p-0 overflow-hidden border border-border/40 md:border-none bg-background shadow-none animate-in zoom-in-95 duration-200">
        <DialogHeader className="p-10 border-b border-border/20 bg-card shrink-0">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
              <Settings className="h-6 w-6" />
            </div>
            <DialogTitle className="text-3xl font-black tracking-tighter text-foreground uppercase">Impostazioni</DialogTitle>
          </div>
          <DialogDescription className="text-sm font-medium text-muted-foreground uppercase tracking-tight">
            {isDocente ? "Gestione pannello docente e preferenze." : "Personalizza la tua esperienza su Nettuno."}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-1 px-10 overflow-y-auto">
          <div className="py-10">
            {view === "main" && (
              <div className="grid gap-12">
                {/* Sezione Aspetto & Accessibilità */}
                <div className="space-y-5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Aspetto & Accessibilità</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-6 rounded-[2rem] bg-muted/30 border border-transparent transition-all active:scale-[0.98]">
                      <div className="flex items-center gap-5">
                        <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center text-foreground shadow-none border border-border/10">
                          {theme === "dark" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
                        </div>
                        <div className="flex flex-col">
                          <Label htmlFor="dark-mode" className="font-black text-base text-foreground uppercase tracking-tight leading-none">Modalità Scura</Label>
                          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mt-1 leading-none">Tema Interfaccia</span>
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
                <div className="space-y-5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Lingua di sistema</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className={cn(
                        "justify-center h-14 rounded-full text-[10px] font-black transition-all border-none shadow-none uppercase tracking-widest active:scale-95",
                        lang === "it" ? "bg-primary text-primary-foreground" : "bg-muted/40 text-foreground hover:bg-muted/60"
                      )}
                      onClick={() => setLang("it")}
                    >
                      ITALIANO
                    </Button>
                    <Button 
                      variant="outline" 
                      className={cn(
                        "justify-center h-14 rounded-full text-[10px] font-black transition-all border-none shadow-none uppercase tracking-widest active:scale-95",
                        lang === "en" ? "bg-primary text-primary-foreground" : "bg-muted/40 text-foreground hover:bg-muted/60"
                      )}
                      onClick={() => setLang("en")}
                    >
                      ENGLISH
                    </Button>
                  </div>
                </div>

                {/* Sezione Notifiche */}
                <div className="space-y-5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1 flex items-center gap-2">
                    <Bell className="h-4 w-4" /> Notifiche
                  </h4>
                  <div className="space-y-8 px-1">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col text-foreground">
                        <Label className="text-base font-black uppercase tracking-tight">Centro notifiche</Label>
                        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest opacity-60">Avvisi istantanei</span>
                      </div>
                      <Switch checked={notifications.push} />
                    </div>
                    {isDocente && (
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col text-foreground">
                          <Label className="text-base font-black uppercase tracking-tight">Prenotazioni</Label>
                          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest opacity-60">Nuovi appuntamenti</span>
                        </div>
                        <Switch checked={notifications.ricevimenti} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Sezione Sicurezza */}
                <div className="space-y-5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Sicurezza e Privacy</h4>
                  <Button 
                    variant="ghost" 
                    onClick={() => setView("security")}
                    className="w-full justify-between h-20 rounded-[1.5rem] bg-muted/30 hover:bg-muted/50 px-6 border-none text-foreground transition-all active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-5 text-base font-black uppercase tracking-tight">
                      <ShieldCheck className="h-6 w-6 text-muted-foreground" /> Gestione Sicurezza
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground/20" />
                  </Button>
                </div>

                <Separator className="bg-border/20" />

                {/* Sezione Azioni Critiche */}
                <div className="space-y-4">
                  <Button variant="ghost" className="w-full justify-start h-16  hover:bg-role-critical/10 text-role-critical-fg px-6 gap-5 transition-all border-none font-black uppercase tracking-widest text-[10px] active:scale-95">
                    <LogOut className="h-6 w-6" />
                    Esci dall&apos;account
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start h-16  hover:bg-muted/40 text-muted-foreground hover:text-foreground px-6 gap-5 transition-all border-none font-black uppercase tracking-widest text-[10px] active:scale-95">
                    <Bug className="h-6 w-6" />
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

        <DialogFooter className="p-10 bg-muted/20 border-t border-border/20 shrink-0">
          <div className="flex items-center justify-center gap-3 text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] w-full opacity-40">
            <Info className="h-4 w-4" />
            Nettuno v4.2.0 •  v2.0
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
