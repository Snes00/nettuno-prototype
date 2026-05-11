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
    <div className="max-w-4xl mx-auto flex flex-col gap-10 pb-16 animate-in fade-in duration-500">
      <section className="px-1 space-y-1">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">Impostazioni</h1>
        <p className="text-muted-foreground text-base md:text-lg font-medium tracking-tight">
          Personalizza la tua esperienza e gestisci la sicurezza del tuo account.
        </p>
      </section>

      <div className="bg-card rounded-[2rem] overflow-hidden border-none shadow-none">
        <div className="p-8 md:p-12">
          {view === "main" && (
            <div className="grid gap-12">
              {/* Sezione Aspetto */}
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Aspetto & Accessibilità</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-6 rounded-2xl bg-muted/30 border-none">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-background flex items-center justify-center text-foreground shadow-sm">
                        {theme === "dark" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
                      </div>
                      <div className="flex flex-col">
                        <Label htmlFor="dark-mode" className="font-bold text-base text-foreground">Modalità Scura</Label>
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
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Lingua di sistema</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Button 
                    variant="outline" 
                    className={cn(
                      "justify-center h-14 rounded-2xl text-xs font-black transition-all border-none shadow-none",
                      lang === "it" ? "bg-foreground text-background" : "bg-muted/40 text-foreground hover:bg-muted/60"
                    )}
                    onClick={() => setLang("it")}
                  >
                    ITALIANO
                  </Button>
                  <Button 
                    variant="outline" 
                    className={cn(
                      "justify-center h-14 rounded-2xl text-xs font-black transition-all border-none shadow-none",
                      lang === "en" ? "bg-foreground text-background" : "bg-muted/40 text-foreground hover:bg-muted/60"
                    )}
                    onClick={() => setLang("en")}
                  >
                    ENGLISH
                  </Button>
                </div>
              </div>

              {/* Sezione Notifiche */}
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1 flex items-center gap-2">
                  <Bell className="h-4 w-4" /> Notifiche
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-1">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-foreground">
                      <Label className="text-base font-bold">Centro notifiche</Label>
                      <span className="text-[10px] font-medium text-muted-foreground">Avvisi istantanei nell&apos;app</span>
                    </div>
                    <Switch checked={notifications.push} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-foreground">
                      <Label className="text-base font-bold">Email settimanali</Label>
                      <span className="text-[10px] font-medium text-muted-foreground">Riepilogo attività didattiche</span>
                    </div>
                    <Switch checked={notifications.avvisi} />
                  </div>
                </div>
              </div>

              {/* Sezione Sicurezza */}
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Sicurezza e Privacy</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => setView("security")}
                    className="w-full justify-between h-20 rounded-2xl bg-muted/30 hover:bg-muted/50 px-8 border-none text-foreground transition-all"
                  >
                    <div className="flex items-center gap-4 text-base font-bold">
                      <ShieldCheck className="h-6 w-6 opacity-60" /> Gestione Sicurezza
                    </div>
                    <ChevronRight className="h-5 w-5 opacity-20" />
                  </Button>
                </div>
              </div>

              <Separator className="bg-border/40" />

              {/* Sezione Azioni Critiche */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="ghost" className="h-16 rounded-2xl hover:bg-destructive/10 text-destructive px-8 gap-4 transition-all border-none font-black uppercase tracking-widest text-xs">
                  <LogOut className="h-6 w-6" />
                  Esci dall&apos;account
                </Button>
                
                <Button variant="ghost" className="h-16 rounded-2xl hover:bg-muted/40 text-muted-foreground hover:text-foreground px-8 gap-4 transition-all border-none font-black uppercase tracking-widest text-xs">
                  <Bug className="h-6 w-6" />
                  Segnala un Bug
                </Button>
              </div>
            </div>
          )}

          {view === "security" && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-200">
              <Button variant="ghost" onClick={() => setView("main")} className="mb-4 p-0 h-auto hover:bg-transparent text-muted-foreground font-black text-[10px] uppercase tracking-widest">
                ← Torna alle impostazioni
              </Button>
              <div className="space-y-8">
                <h3 className="text-3xl font-black tracking-tight text-foreground uppercase leading-none">Sicurezza e Privacy</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 2FA */}
                  <div className="p-6 rounded-2xl bg-muted/30 flex items-center justify-between border-none">
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-foreground">Autenticazione 2FA</span>
                      <span className="text-[10px] font-medium text-muted-foreground uppercase">Extra protezione</span>
                    </div>
                    <Switch checked={is2FAActive} onCheckedChange={setIs2FAActive} />
                  </div>

                  {/* Password */}
                  <Button variant="ghost" className="w-full justify-between h-20 rounded-2xl bg-muted/30 px-8 hover:bg-muted/50 border-none transition-all">
                    <div className="flex items-center gap-4">
                      <KeyRound className="h-6 w-6 opacity-60" />
                      <div className="text-left">
                        <p className="text-base font-bold text-foreground leading-none">Cambia Password</p>
                        <p className="text-[10px] font-medium text-muted-foreground mt-1 uppercase">Ultima modifica: 6 mesi fa</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 opacity-20" />
                  </Button>

                  {/* Dispositivi */}
                  <Button variant="ghost" className="w-full justify-between h-20 rounded-2xl bg-muted/30 px-8 hover:bg-muted/50 border-none transition-all" onClick={() => setView("devices")}>
                    <div className="flex items-center gap-4">
                      <Smartphone className="h-6 w-6 opacity-60" />
                      <div className="text-left">
                        <p className="text-base font-bold text-foreground leading-none">Dispositivi Connessi</p>
                        <p className="text-[10px] font-medium text-muted-foreground mt-1 uppercase">{devices.length} Sessioni attive</p>
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
              <Button variant="ghost" onClick={() => setView("security")} className="mb-4 p-0 h-auto hover:bg-transparent text-muted-foreground font-black text-[10px] uppercase tracking-widest">
                ← Indietro
              </Button>
              <div className="space-y-6">
                <h3 className="text-3xl font-black tracking-tight uppercase leading-none">Dispositivi Connessi</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {devices.map(device => (
                    <div key={device.id} className="p-6 rounded-2xl bg-muted/30 flex items-center justify-between border-none">
                      <div className="flex items-center gap-4">
                        <Smartphone className={cn("h-6 w-6", device.active ? "text-emerald-500" : "text-muted-foreground")} />
                        <div>
                          <p className="text-base font-bold">{device.name}</p>
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
          )}
        </div>

        <div className="p-8 bg-muted/20 border-t border-border/40 flex items-center justify-center gap-2 text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">
          <Info className="h-4 w-4" />
          Nettuno v4.0.0 • Sistema Accademico Integrato
        </div>
      </div>
    </div>
  )
}
