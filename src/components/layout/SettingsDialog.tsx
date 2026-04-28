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
import { cn } from "@/lib/utils"

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
        <Button 
          variant="ghost" 
          className="h-14 w-14 rounded-2xl text-muted-foreground hover:text-foreground bg-card dark:bg-white/5 border-none hover:bg-muted dark:hover:bg-white/10 transition-all flex items-center justify-center p-0 shadow-none"
        >
          <Settings className="h-7 w-7" />
          <span className="sr-only">Impostazioni</span>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px] rounded-[1.5rem] p-0 overflow-hidden border-none bg-background shadow-none animate-in zoom-in-95 duration-200">
        <DialogHeader className="p-8 border-b border-border/40">
          <div className="flex items-center gap-3 mb-1">
            <div className="h-10 w-10 rounded-xl bg-foreground text-background flex items-center justify-center">
              <Settings className="h-5 w-5" />
            </div>
            <DialogTitle className="text-2xl font-black tracking-tighter">Impostazioni</DialogTitle>
          </div>
          <DialogDescription className="text-sm font-medium text-muted-foreground">
            Personalizza la tua esperienza su Nettuno.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] px-8">
          <div className="grid gap-8 py-8">
            
            {/* Sezione Aspetto */}
            <div className="flex items-center justify-between p-5 rounded-[1.25rem] bg-muted/30 border-none transition-all hover:bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center text-foreground shadow-sm">
                  {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="dark-mode" className="font-bold text-sm">Modalità Scura</Label>
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Tema Interfaccia</span>
                </div>
              </div>
              <Switch 
                id="dark-mode" 
                checked={theme === "dark"} 
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
            </div>

            {/* Sezione Lingua */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Lingua di sistema</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant={lang === "it" ? "default" : "outline"} 
                  className={cn(
                    "justify-center h-12 rounded-xl text-xs font-black transition-all border-none shadow-none",
                    lang === "it" ? "bg-foreground text-background" : "bg-muted/40 text-foreground hover:bg-muted/60"
                  )}
                  onClick={() => setLang("it")}
                >
                  ITALIANO
                </Button>
                <Button 
                  variant={lang === "en" ? "default" : "outline"} 
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
                  <div className="flex flex-col">
                    <Label className="text-sm font-bold text-foreground">Notifiche Push</Label>
                    <span className="text-[10px] font-medium text-muted-foreground">Avvisi istantanei su mobile</span>
                  </div>
                  <Switch 
                    checked={notifications.push} 
                    onCheckedChange={(checked) => setNotifications({...notifications, push: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <Label className="text-sm font-bold text-foreground">Email didattiche</Label>
                    <span className="text-[10px] font-medium text-muted-foreground">Comunicazioni dai professori</span>
                  </div>
                  <Switch 
                    checked={notifications.email} 
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})} 
                  />
                </div>
              </div>
            </div>

            <Separator className="bg-border/40" />

            {/* Legal & Info */}
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-between h-12 text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-xl px-4 transition-colors">
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
                  <ShieldCheck className="h-4 w-4" /> Privacy Policy
                </div>
                <ExternalLink className="h-3 w-3 opacity-40" />
              </Button>
              <Button variant="ghost" className="w-full justify-between h-12 text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-xl px-4 transition-colors">
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
                  <FileText className="h-4 w-4" /> Termini di Servizio
                </div>
                <ExternalLink className="h-3 w-3 opacity-40" />
              </Button>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="p-8 bg-muted/20 border-t border-border/40 flex flex-col sm:flex-col gap-4">
          <Button 
            className="w-full h-14 rounded-2xl bg-foreground text-background hover:scale-[1.02] active:scale-95 transition-all font-black text-base shadow-none gap-3 group"
          >
            <LogOut className="h-5 w-5" />
            Esci dall'account
          </Button>
          <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">
            <Info className="h-3 w-3" />
            Nettuno v2.4.0
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
