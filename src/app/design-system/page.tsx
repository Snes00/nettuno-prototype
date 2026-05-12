"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ArrowLeft, 
  Palette, 
  Type, 
  Box, 
  Save, 
  RefreshCw,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Smartphone,
  Info,
  Moon,
  Sun,
  Layout,
  Layers,
  Component
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export default function DesignSystemPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  // Strato v2.0 Global Tokens
  const stratoTokens = {
    light: {
      background: "#EEEDF2",
      foreground: "#14131A",
      card: "#FFFFFF",
      primary: "#6547E8",
      destructive: "#F03C6C",
      border: "#E4E2EC",
      roleInfo: "#EBF8FF",
      roleSuccess: "#EDFAEE",
      roleWarning: "#FEFAEE",
      roleAccent: "#F1EFFE",
    },
    dark: {
      background: "#0F0E14",
      foreground: "#E4E2EC",
      card: "#1E1C2A",
      primary: "#8470EF",
      destructive: "#F56E90",
      border: "#2E2C3A",
      roleInfo: "#043450",
      roleSuccess: "#144D1B",
      roleWarning: "#573006",
      roleAccent: "#2E1A72",
    }
  }

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentPalette = theme === "dark" ? stratoTokens.dark : stratoTokens.light

  return (
    <div className="min-h-screen bg-background text-foreground animate-in fade-in duration-700">
      
      {/* Dynamic Style Override for System Playground */}
      <style jsx global>{`
        :root {
          --ds-bg: ${currentPalette.background};
          --ds-fg: ${currentPalette.foreground};
          --ds-card: ${currentPalette.card};
          --ds-primary: ${currentPalette.primary};
          --ds-destructive: ${currentPalette.destructive};
          --ds-border: ${currentPalette.border};
          --ds-info: ${currentPalette.roleInfo};
          --ds-success: ${currentPalette.roleSuccess};
          --ds-warning: ${currentPalette.roleWarning};
          --ds-accent: ${currentPalette.roleAccent};
        }
      `}</style>

      {/* Hero Header */}
      <header className="border-b border-border/10 bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-muted active:scale-90 transition-all">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <div className="flex items-center gap-4">
               <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                  <Layers className="h-6 w-6" />
               </div>
               <div>
                  <h1 className="text-2xl font-black tracking-tighter uppercase leading-none">Strato v2.0</h1>
                  <p className="text-muted-foreground font-black mt-1 uppercase text-[9px] tracking-[0.2em]">Living Design System • ABAP Portal</p>
               </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex bg-muted/40 p-1 rounded-xl">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setTheme("light")}
                  className={cn("rounded-lg font-black text-[9px] uppercase px-4", theme === "light" && "bg-background shadow-sm")}
                >
                  <Sun className="h-3.5 w-3.5 mr-2" /> Light
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setTheme("dark")}
                  className={cn("rounded-lg font-black text-[9px] uppercase px-4", theme === "dark" && "bg-background shadow-sm")}
                >
                  <Moon className="h-3.5 w-3.5 mr-2" /> Dark
                </Button>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12 space-y-20">
        
        {/* Foundations Section */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Foundations</h2>
            <p className="text-muted-foreground font-medium text-lg">La logica cromatica semantica di Nettuno Strato.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Canvas", hex: currentPalette.background, label: "background" },
              { name: "Slate", hex: currentPalette.foreground, label: "foreground" },
              { name: "Surface", hex: currentPalette.card, label: "card" },
              { name: "Violet", hex: currentPalette.primary, label: "primary" },
              { name: "Coral", hex: currentPalette.destructive, label: "destructive" },
            ].map((c) => (
              <div key={c.name} className="space-y-3 group">
                <div className="aspect-[1.5/1] rounded-[1.5rem] shadow-sm transition-all group-hover:scale-[1.02] border border-border/10" style={{ backgroundColor: c.hex }} />
                <div className="px-1">
                  <p className="font-black text-xs uppercase tracking-tight leading-none">{c.name}</p>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase mt-1.5">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {[
              { name: "Info", hex: currentPalette.roleInfo, role: "Cyan" },
              { name: "Success", hex: currentPalette.roleSuccess, role: "Lime" },
              { name: "Warning", hex: currentPalette.roleWarning, role: "Amber" },
              { name: "Accent", hex: currentPalette.roleAccent, role: "Electric" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-5 p-6 bg-card rounded-[1.5rem] border border-border/40">
                <div className="h-14 w-14 rounded-2xl shrink-0 shadow-inner" style={{ backgroundColor: c.hex }} />
                <div>
                   <p className="font-black text-sm uppercase tracking-tight">{c.name}</p>
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-0.5">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Lab */}
        <section className="space-y-12">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-black tracking-tighter uppercase">Lab & Componenti</h2>
              <p className="text-muted-foreground font-medium text-lg">Test dei componenti atomici con i nuovi token.</p>
            </div>
            <Badge variant="outline" className="rounded-full px-4 h-8 font-black text-[10px] uppercase tracking-widest border-border/40">v2.0.4 Stable</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Component Preview Canvas */}
            <div className="lg:col-span-12 rounded-[3rem] p-10 md:p-16 space-y-16 border-none shadow-none" style={{ backgroundColor: 'var(--ds-bg)', color: 'var(--ds-fg)' }}>
               
               {/* Typo Scale */}
               <div className="space-y-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Typographic Hierarchy</p>
                  <div className="space-y-6">
                     <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">Visual Identity</h1>
                     <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase">Accademia di Belle Arti</h2>
                     <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl opacity-80">
                        Il sistema Strato utilizza Instrument Sans per bilanciare autorità editoriale e leggibilità digitale.
                     </p>
                  </div>
               </div>

               {/* Bento Cards Preview */}
               <div className="space-y-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Bento Pattern (Radius 24px)</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-8 rounded-[2rem] space-y-8 transition-all hover:scale-[1.02] cursor-pointer" style={{ backgroundColor: 'var(--ds-card)' }}>
                       <div className="h-12 w-12 rounded-xl flex items-center justify-center text-primary-foreground shadow-lg" style={{ backgroundColor: 'var(--ds-primary)' }}>
                          <Layout className="h-6 w-6" />
                       </div>
                       <h3 className="text-2xl font-black tracking-tight uppercase">Structure</h3>
                    </div>
                    
                    <div className="p-8 rounded-[2rem] space-y-8 transition-all hover:scale-[1.02] cursor-pointer shadow-xl shadow-primary/5" style={{ backgroundColor: 'var(--ds-primary)', color: 'var(--ds-bg)' }}>
                       <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-background/20">
                          <Component className="h-6 w-6" />
                       </div>
                       <h3 className="text-2xl font-black tracking-tight uppercase">Primary</h3>
                    </div>

                    <div className="p-8 rounded-[2rem] space-y-8 transition-all hover:scale-[1.02] cursor-pointer" style={{ backgroundColor: 'var(--ds-success)' }}>
                       <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-foreground/5">
                          <ShieldCheck className="h-6 w-6" />
                       </div>
                       <h3 className="text-2xl font-black tracking-tight uppercase">Secure</h3>
                    </div>
                  </div>
               </div>

               {/* Buttons & Forms */}
               <div className="space-y-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Interaction Atoms</p>
                  <div className="flex flex-wrap gap-6 items-end">
                    <Button className="h-16 px-10 rounded-[1.5rem] font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20 active:scale-95 transition-all" style={{ backgroundColor: 'var(--ds-primary)', color: 'var(--ds-bg)' }}>
                       Primary Button
                    </Button>
                    
                    <Button variant="outline" className="h-16 px-10 rounded-[1.5rem] font-black uppercase tracking-widest text-xs border-none active:scale-95 transition-all" style={{ backgroundColor: 'var(--ds-destructive)', color: 'var(--ds-bg)' }}>
                       Critical Action
                    </Button>

                    <div className="flex-1 min-w-[300px] space-y-3">
                       <Label className="text-[9px] font-black uppercase tracking-widest opacity-40 ml-2">Input Prototype</Label>
                       <Input 
                         placeholder="Scrivi qui..." 
                         className="h-16 px-6 rounded-2xl border-none font-bold text-base shadow-sm"
                         style={{ backgroundColor: 'var(--ds-card)' }}
                       />
                    </div>
                  </div>
               </div>

            </div>
          </div>
        </section>

        {/* Documentation Footer */}
        <footer className="pt-20 border-t border-border/10 flex flex-col items-center text-center gap-6">
           <div className="h-16 w-16 rounded-[1.5rem] bg-foreground text-background flex items-center justify-center">
              <Sparkles className="h-8 w-8" />
           </div>
           <p className="text-sm font-black uppercase tracking-[0.4em] opacity-40">Single Source of Truth • 2026</p>
        </footer>

      </main>
    </div>
  )
}
