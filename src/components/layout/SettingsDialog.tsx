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
  Info
} from "lucide-react"
import { useTheme } from "next-themes"

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

export function SettingsDialog() {
  const { theme, setTheme } = useTheme()
  const [lang, setLang] = React.useState("it")
  const [notifications, setNotifications] = React.useState({
    push: true,
    email: false,
    avvisi: true
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Impostazioni</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-3xl p-0 overflow-hidden border-none shadow-2xl">
        <DialogHeader className="p-6 bg-primary/5 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
              <Settings className="h-4 w-4" />
            </div>
            <DialogTitle className="text-xl font-black">Impostazioni</DialogTitle>
          </div>
          <DialogDescription className="text-xs">
            Personalizza la tua esperienza su Nettuno.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[70vh] px-6">
          <div className="grid gap-6 py-4">
            {/* Sezione Aspetto (OTTIMIZZATA) */}
            <div className="flex items-center justify-between p-3 rounded-2xl border bg-muted/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-background shadow-sm text-primary">
                  {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="dark-mode" className="font-bold">Modalità Scura</Label>
                  <span className="text-[10px] text-muted-foreground">Regola l'aspetto visivo</span>
                </div>
              </div>
              <Switch 
                id="dark-mode" 
                checked={theme === "dark"} 
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
            </div>

            {/* Sezione Lingua */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Lingua di sistema</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant={lang === "it" ? "default" : "outline"} 
                  className="justify-center gap-2 h-10 rounded-xl text-xs font-bold"
                  onClick={() => setLang("it")}
                >
                  Italiano
                </Button>
                <Button 
                  variant={lang === "en" ? "default" : "outline"} 
                  className="justify-center gap-2 h-10 rounded-xl text-xs font-bold"
                  onClick={() => setLang("en")}
                >
                  English
                </Button>
              </div>
            </div>

            <Separator className="opacity-50" />

            {/* Sezione Preferenze Notifica (NUOVA) */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1 flex items-center gap-2">
                <Bell className="h-3 w-3" /> Notifiche
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <Label className="text-sm font-semibold">Notifiche Push</Label>
                    <span className="text-[10px] text-muted-foreground">Avvisi istantanei sul dispositivo</span>
                  </div>
                  <Switch 
                    checked={notifications.push} 
                    onCheckedChange={(checked) => setNotifications({...notifications, push: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <Label className="text-sm font-semibold">Email didattiche</Label>
                    <span className="text-[10px] text-muted-foreground">Ricevi materiali via mail</span>
                  </div>
                  <Switch 
                    checked={notifications.email} 
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})} 
                  />
                </div>
              </div>
            </div>

            <Separator className="opacity-50" />

            {/* Accessibilità */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1 flex items-center gap-2">
                <Accessibility className="h-3 w-3" /> Accessibilità
              </h4>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="justify-between h-11 rounded-xl px-4 border-dashed">
                  <span className="text-xs font-medium">Font Alta Leggibilità</span>
                  <Badge variant="outline" className="text-[9px] uppercase">Off</Badge>
                </Button>
                <Button variant="outline" className="justify-between h-11 rounded-xl px-4 border-dashed">
                  <span className="text-xs font-medium">Contrasto Elevato</span>
                  <Badge variant="outline" className="text-[9px] uppercase">Off</Badge>
                </Button>
              </div>
            </div>

            <Separator className="opacity-50" />

            {/* Legal (NUOVA) */}
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-between h-9 text-muted-foreground hover:text-primary rounded-lg px-2">
                <div className="flex items-center gap-2 text-[11px] font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5" /> Privacy Policy
                </div>
                <ExternalLink className="h-3 w-3" />
              </Button>
              <Button variant="ghost" className="w-full justify-between h-9 text-muted-foreground hover:text-primary rounded-lg px-2">
                <div className="flex items-center gap-2 text-[11px] font-semibold">
                  <FileText className="h-3.5 w-3.5" /> Termini di Servizio
                </div>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="p-6 bg-muted/30 flex-col sm:flex-col gap-3">
          <Button 
            variant="outline" 
            className="w-full h-12 rounded-xl border-destructive/20 text-destructive hover:bg-destructive hover:text-white transition-all font-bold gap-2 group"
          >
            <LogOut className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            Logout
          </Button>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-muted-foreground font-medium">
            <Info className="h-3 w-3" />
            Nettuno v2.4.0 • ABA Redesign Project
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
