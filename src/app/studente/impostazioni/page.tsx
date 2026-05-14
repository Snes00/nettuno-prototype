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
  ChevronLeft
} from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export default function StudenteImpostazioniPage() {
  const { theme, setTheme } = useTheme()
  const [lang, setLang] = React.useState("it")
  const [is2FAActive, setIs2FAActive] = React.useState(true)
  const [view, setView] = React.useState<"main" | "security" | "devices">("main")
  const [devices, setDevices] = React.useState([
    { id: 1, name: "iPhone 15 Pro", location: "Roma, Italia", active: true },
    { id: 2, name: "MacBook Air M2", location: "Napoli, Italia", active: false }
  ])

  const [notifications] = React.useState({
    push: true,
    email: false,
    avvisi: true
  })

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-10 pb-16 animate-in fade-in duration-500 pt-6">
      <div className="bg-card rounded-[2rem] overflow-hidden border border-border/40 md:border-none shadow-none">
        <div className="p-8 md:p-12">
          {view === "main" && (
            <div className="grid gap-12">
              {/* Sezione Aspetto */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Aspetto & Accessibilità</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-6 rounded-2xl bg-muted/30 border-none transition-all active:scale-[0.98]">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-background flex items-center justify-center text-foreground shadow-none border border-border/20">
                        {theme === "dark" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
                      </div>
                      <div className="flex flex-col">
                        <Label htmlFor="dark-mode" className="font-black text-base text-foreground uppercase tracking-tight">Modalità Scura</Label>
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 leading-none mt-1">Tema Interfaccia</span>
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
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Lingua di sistema</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Button 
                    variant="outline" 
                    className={cn(
                      "justify-center h-14 rounded-2xl text-[10px] font-black transition-all border-none shadow-none uppercase tracking-widest",
                      lang === "it" ? "bg-primary text-primary-foreground" : "bg-muted/40 text-foreground hover:bg-muted/60"
                    )}
                    onClick={() => setLang("it")}
                  >
                    ITALIANO
                  </Button>
                  <Button 
                    variant="outline" 
                    className={cn(
                      "justify-center h-14 rounded-2xl text-[10px] font-black transition-all border-none shadow-none uppercase tracking-widest",
                      lang === "en" ? "bg-primary text-primary-foreground" : "bg-muted/40 text-foreground hover:bg-muted/60"
                    )}
                    onClick={() => setLang("en")}
                  >
                    ENGLISH
                  </Button>
                </div>
              </div>

              {/* Sezione Notifiche */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1 flex items-center gap-2">
                  <Bell className="h-4 w-4" /> Notifiche
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-1">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-foreground">
                      <Label className="text-base font-black uppercase tracking-tight">Centro notifiche</Label>
                      <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60">Avvisi istantanei</span>
                    </div>
                    <Switch checked={notifications.push} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-foreground">
                      <Label className="text-base font-black uppercase tracking-tight">Email settimanali</Label>
                      <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest opacity-60">Riepilogo attività didattiche</span>
                    </div>
                    <Switch checked={notifications.avvisi} />
                  </div>
                </div>
              </div>

              {/* Sezione Sicurezza */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Sicurezza e Privacy</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => setView("security")}
                    className="w-full justify-between h-20 rounded-2xl bg-muted/30 hover:bg-muted/50 px-8 border-none text-foreground transition-all active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-5 text-base font-black uppercase tracking-tight">
                      <ShieldCheck className="h-6 w-6 text-muted-foreground" /> Gestione Sicurezza
                    </div>
                    <ChevronRight className="h-5 w-5 opacity-20" />
                  </Button>
                </div>
              </div>

              <Separator className="bg-border/20" />

              {/* Sezione Segnala un Problema */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1 flex items-center gap-2">
                  <Bug className="h-4 w-4" /> Segnala un Problema
                </h4>
                <div className="space-y-4">
                  <textarea
                    placeholder="Descrivi il problema riscontrato..."
                    className="w-full min-h-[100px] rounded-2xl bg-muted/30 border-none p-5 font-medium text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
                  />
                  <Button className="rounded-xl h-12 px-8 bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] shadow-none active:scale-95 transition-all">
                    Invia Segnalazione
                  </Button>
                </div>
              </div>

              <Separator className="bg-border/20" />

              {/* Sezione Azioni Critiche */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="ghost" className="h-16 rounded-2xl hover:bg-role-critical/30 text-role-critical-fg px-8 gap-4 transition-all border-none font-black uppercase tracking-widest text-[10px] active:scale-[0.98]">
                  <LogOut className="h-6 w-6" />
                  Esci dall&apos;account
                </Button>
              </div>
            </div>
          )}

          {view === "security" && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-200">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setView("main")} 
                className="h-12 w-12 rounded-full border-none bg-muted/30 hover:bg-muted/50 text-foreground transition-all mb-4 active:scale-90"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="space-y-8">
                <h3 className="text-3xl font-black tracking-tight text-foreground uppercase leading-none">Sicurezza e Privacy</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 2FA */}
                  <div className="p-6 rounded-2xl bg-muted/30 flex items-center justify-between border-none transition-all active:scale-[0.98]">
                    <div className="flex flex-col">
                      <span className="text-base font-black uppercase tracking-tight text-foreground">Autenticazione 2FA</span>
                      <span className="text-[10px] font-medium text-muted-foreground uppercase">Extra protezione</span>
                    </div>
                    <Switch checked={is2FAActive} onCheckedChange={setIs2FAActive} />
                  </div>

                  {/* Password */}
                  <Button variant="ghost" className="w-full justify-between h-20 rounded-2xl bg-muted/30 px-8 hover:bg-muted/50 border-none transition-all active:scale-[0.98]">
                    <div className="flex items-center gap-4">
                      <KeyRound className="h-6 w-6 opacity-60" />
                      <div className="text-left">
                        <p className="text-base font-black uppercase tracking-tight text-foreground leading-none">Cambia Password</p>
                        <p className="text-[9px] font-black text-muted-foreground mt-2 uppercase tracking-widest opacity-60">Ultima modifica: 6 mesi fa</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 opacity-20" />
                  </Button>

                  {/* Dispositivi */}
                  <Button variant="ghost" className="w-full justify-between h-20 rounded-2xl bg-muted/30 px-8 hover:bg-muted/50 border-none transition-all active:scale-[0.98]" onClick={() => setView("devices")}>
                    <div className="flex items-center gap-4">
                      <Smartphone className="h-6 w-6 opacity-60" />
                      <div className="text-left">
                        <p className="text-base font-black uppercase tracking-tight text-foreground leading-none">Dispositivi Connessi</p>
                        <p className="text-[9px] font-black text-muted-foreground mt-2 uppercase tracking-widest opacity-60">{devices.length} Sessioni attive</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 opacity-20" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {view === "devices" && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-200">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setView("security")} 
                className="h-12 w-12 rounded-full border-none bg-muted/30 hover:bg-muted/50 text-foreground transition-all mb-4 active:scale-90"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="space-y-6">
                <h3 className="text-3xl font-black tracking-tight uppercase leading-none">Dispositivi Connessi</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {devices.map(device => (
                    <div key={device.id} className="p-6 rounded-2xl bg-muted/30 flex items-center justify-between border-none transition-all hover:bg-muted/40">
                      <div className="flex items-center gap-4">
                        <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center", device.active ? "bg-role-success-fg/10" : "bg-muted")}>
                           <Smartphone className={cn("h-5 w-5", device.active ? "text-role-success-fg" : "text-muted-foreground")} />
                        </div>
                        <div>
                          <p className="text-base font-bold text-foreground">{device.name}</p>
                          <p className="text-[10px] text-muted-foreground uppercase font-black">{device.location} {device.active && "• In uso"}</p>
                        </div>
                      </div>
                      {!device.active && (
                        <Button variant="ghost" size="sm" className="text-role-critical-fg hover:bg-role-critical/20 text-[10px] font-black uppercase tracking-widest px-4 h-9 rounded-xl transition-all" onClick={() => setDevices(devices.filter(d => d.id !== device.id))}>RIMUOVI</Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-8 bg-muted/20 border-t border-border/20 flex items-center justify-center gap-2 text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">
          <Info className="h-4 w-4" />
          Nettuno v4.0.0 • Strato v2.0
        </div>
      </div>
    </div>
  )
}
