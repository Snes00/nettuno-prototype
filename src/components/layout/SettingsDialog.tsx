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
        <Button 
          variant="ghost" 
          className="h-14 w-14 rounded-2xl text-[#1A1917]/40 hover:text-[#1A1917] bg-white border border-[#E5E2DA] hover:bg-[#F1EFE9] transition-all flex items-center justify-center p-0"
        >
          <Settings className="h-7 w-7" />
          <span className="sr-only">Impostazioni</span>
        </Button>
      </DialogTrigger>
      
      {/* DialogContent Piatto e Solido */}
      <DialogContent className="sm:max-w-[425px] rounded-[1.5rem] p-0 overflow-hidden border border-[#E5E2DA] bg-white shadow-none animate-in zoom-in-95 duration-200">
        <DialogHeader className="p-8 bg-white border-b border-[#E5E2DA] pb-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="h-10 w-10 rounded-xl bg-[#1A1917] text-white flex items-center justify-center">
              <Settings className="h-5 w-5" />
            </div>
            <DialogTitle className="text-2xl font-black tracking-tighter">Impostazioni</DialogTitle>
          </div>
          <DialogDescription className="text-sm font-medium text-[#7C7A77]">
            Personalizza la tua esperienza su Nettuno.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] px-8">
          <div className="grid gap-8 py-6">
            
            {/* Sezione Aspetto */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F8F5F0] border border-[#E5E2DA]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white border border-[#E5E2DA] flex items-center justify-center text-[#1A1917]">
                  {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="dark-mode" className="font-bold text-sm">Modalità Scura</Label>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7C7A77] opacity-60">Interfaccia Dark</span>
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
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1917]/30 px-1">Lingua di sistema</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant={lang === "it" ? "default" : "outline"} 
                  className={cn(
                    "justify-center h-12 rounded-xl text-xs font-bold transition-all",
                    lang === "it" ? "bg-[#1A1917] text-white" : "bg-white border-[#E5E2DA] text-[#1A1917]"
                  )}
                  onClick={() => setLang("it")}
                >
                  Italiano
                </Button>
                <Button 
                  variant={lang === "en" ? "default" : "outline"} 
                  className={cn(
                    "justify-center h-12 rounded-xl text-xs font-bold transition-all",
                    lang === "en" ? "bg-[#1A1917] text-white" : "bg-white border-[#E5E2DA] text-[#1A1917]"
                  )}
                  onClick={() => setLang("en")}
                >
                  English
                </Button>
              </div>
            </div>

            {/* Sezione Notifiche */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1917]/30 px-1 flex items-center gap-2">
                <Bell className="h-3 w-3" /> Notifiche
              </h4>
              <div className="space-y-4 px-1">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-bold text-[#1A1917]">Notifiche Push</Label>
                  <Switch 
                    checked={notifications.push} 
                    onCheckedChange={(checked) => setNotifications({...notifications, push: checked})} 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-bold text-[#1A1917]">Email didattiche</Label>
                  <Switch 
                    checked={notifications.email} 
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})} 
                  />
                </div>
              </div>
            </div>

            <Separator className="bg-[#E5E2DA]" />

            {/* Legal & Info */}
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-between h-10 text-[#1A1917]/60 hover:text-[#1A1917] hover:bg-[#F1EFE9] rounded-xl px-2 transition-colors">
                <div className="flex items-center gap-3 text-xs font-bold">
                  <ShieldCheck className="h-4 w-4" /> Privacy Policy
                </div>
                <ExternalLink className="h-3 w-3" />
              </Button>
              <Button variant="ghost" className="w-full justify-between h-10 text-[#1A1917]/60 hover:text-[#1A1917] hover:bg-[#F1EFE9] rounded-xl px-2 transition-colors">
                <div className="flex items-center gap-3 text-xs font-bold">
                  <FileText className="h-4 w-4" /> Termini di Servizio
                </div>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="p-8 bg-[#F8F5F0] border-t border-[#E5E2DA] flex-col sm:flex-col gap-4">
          <Button 
            className="w-full h-14 rounded-2xl bg-[#1A1917] text-white hover:bg-black transition-all font-black text-base shadow-none gap-3 group"
          >
            <LogOut className="h-5 w-5" />
            Esci dall'account
          </Button>
          <div className="flex items-center justify-center gap-2 text-[10px] text-[#1A1917]/30 font-bold uppercase tracking-widest">
            <Info className="h-3 w-3" />
            Nettuno v2.4.0
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

import { cn } from "@/lib/utils"
