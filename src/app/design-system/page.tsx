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
  Component,
  Code,
  Download,
  Share2,
  Trash2,
  CheckCheck,
  Clock,
  Bell,
  MessageSquare,
  CreditCard
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
  
  // Strato v2.0 Tokens - State for interactive editor
  const [tokens, setTokens] = React.useState({
    background: theme === "dark" ? "#0F0E14" : "#EEEDF2",
    foreground: theme === "dark" ? "#E4E2EC" : "#14131A",
    card: theme === "dark" ? "#1E1C2A" : "#FFFFFF",
    primary: theme === "dark" ? "#8470EF" : "#6547E8",
    destructive: theme === "dark" ? "#F56E90" : "#F03C6C",
    border: theme === "dark" ? "#2E2C3A" : "#E4E2EC",
    info: theme === "dark" ? "#043450" : "#EBF8FF",
    infoFg: theme === "dark" ? "#80CBF5" : "#065180",
    success: theme === "dark" ? "#144D1B" : "#EDFAEE",
    successFg: theme === "dark" ? "#8CDA95" : "#1D6E26",
    warning: theme === "dark" ? "#573006" : "#FEFAEE",
    warningFg: theme === "dark" ? "#EEC070" : "#7A480A",
    accent: theme === "dark" ? "#2E1A72" : "#F1EFFE",
    accentFg: theme === "dark" ? "#C9C0F8" : "#5035C8",
  })

  // Sincronizza i token quando cambia il tema di sistema, ma solo se l'utente non li ha modificati? 
  // Per semplicità nel lab, resettiamo al cambio tema per mostrare i default di Strato.
  React.useEffect(() => {
    setTokens({
      background: theme === "dark" ? "#0F0E14" : "#EEEDF2",
      foreground: theme === "dark" ? "#E4E2EC" : "#14131A",
      card: theme === "dark" ? "#1E1C2A" : "#FFFFFF",
      primary: theme === "dark" ? "#8470EF" : "#6547E8",
      destructive: theme === "dark" ? "#F56E90" : "#F03C6C",
      border: theme === "dark" ? "#2E2C3A" : "#E4E2EC",
      info: theme === "dark" ? "#043450" : "#EBF8FF",
      infoFg: theme === "dark" ? "#80CBF5" : "#065180",
      success: theme === "dark" ? "#144D1B" : "#EDFAEE",
      successFg: theme === "dark" ? "#8CDA95" : "#1D6E26",
      warning: theme === "dark" ? "#573006" : "#FEFAEE",
      warningFg: theme === "dark" ? "#EEC070" : "#7A480A",
      accent: theme === "dark" ? "#2E1A72" : "#F1EFFE",
      accentFg: theme === "dark" ? "#C9C0F8" : "#5035C8",
    })
  }, [theme])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const updateToken = (key: keyof typeof tokens, value: string) => {
    setTokens(prev => ({ ...prev, [key]: value }))
  }

  const resetToStrato = () => {
    setTokens({
      background: theme === "dark" ? "#0F0E14" : "#EEEDF2",
      foreground: theme === "dark" ? "#E4E2EC" : "#14131A",
      card: theme === "dark" ? "#1E1C2A" : "#FFFFFF",
      primary: theme === "dark" ? "#8470EF" : "#6547E8",
      destructive: theme === "dark" ? "#F56E90" : "#F03C6C",
      border: theme === "dark" ? "#2E2C3A" : "#E4E2EC",
      info: theme === "dark" ? "#043450" : "#EBF8FF",
      infoFg: theme === "dark" ? "#80CBF5" : "#065180",
      success: theme === "dark" ? "#144D1B" : "#EDFAEE",
      successFg: theme === "dark" ? "#8CDA95" : "#1D6E26",
      warning: theme === "dark" ? "#573006" : "#FEFAEE",
      warningFg: theme === "dark" ? "#EEC070" : "#7A480A",
      accent: theme === "dark" ? "#2E1A72" : "#F1EFFE",
      accentFg: theme === "dark" ? "#C9C0F8" : "#5035C8",
    })
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground animate-in fade-in duration-700">
      
      {/* Dynamic Style Override for Preview */}
      <style jsx global>{`
        :root {
          --preview-bg: ${tokens.background};
          --preview-fg: ${tokens.foreground};
          --preview-card: ${tokens.card};
          --preview-primary: ${tokens.primary};
          --preview-destructive: ${tokens.destructive};
          --preview-border: ${tokens.border};
          --preview-info: ${tokens.info};
          --preview-info-fg: ${tokens.infoFg};
          --preview-success: ${tokens.success};
          --preview-success-fg: ${tokens.successFg};
          --preview-warning: ${tokens.warning};
          --preview-warning-fg: ${tokens.warningFg};
          --preview-accent: ${tokens.accent};
          --preview-accent-fg: ${tokens.accentFg};
        }
      `}</style>

      {/* Header */}
      <header className="border-b border-border/10 bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-6 h-24 flex items-center justify-between">
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
                  <h1 className="text-2xl font-black tracking-tighter uppercase leading-none">Strato v2.0 Lab</h1>
                  <p className="text-muted-foreground font-black mt-1 uppercase text-[9px] tracking-[0.2em]">Sperimentazione UI & Logica Semantica</p>
               </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <Button variant="outline" className="rounded-xl h-11 gap-2 font-black text-[10px] uppercase border-none bg-muted/40" onClick={resetToStrato}>
               <RefreshCw className="h-4 w-4" /> Reset Default
             </Button>
             <Button className="rounded-xl h-11 gap-2 font-black text-[10px] uppercase bg-primary text-primary-foreground">
               <Save className="h-4 w-4" /> Esporta Prototipo
             </Button>
          </div>
        </div>
      </header>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Sidebar Editor (Ripristinato) */}
        <aside className="lg:col-span-3 border-r border-border/10 h-[calc(100vh-6rem)] overflow-y-auto bg-card/20 no-scrollbar">
          <div className="p-8 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-1">
                <Palette className="h-4 w-4 text-primary" />
                <h2 className="text-xs font-black uppercase tracking-[0.2em]">Token Editor</h2>
              </div>
              
              <div className="space-y-8">
                {/* Superfici */}
                <div className="space-y-4">
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest px-1">Superfici & Base</p>
                  {['background', 'foreground', 'card', 'border'].map(key => (
                    <div key={key} className="space-y-2 px-1">
                      <div className="flex justify-between items-center">
                        <Label className="text-[10px] font-bold text-foreground/60">{key}</Label>
                        <span className="text-[9px] font-mono opacity-40 uppercase">{(tokens as any)[key]}</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-lg border border-border/20 shrink-0" style={{ backgroundColor: (tokens as any)[key] }} />
                        <Input 
                          type="color" 
                          value={(tokens as any)[key]} 
                          onChange={(e) => updateToken(key as any, e.target.value)}
                          className="h-8 p-0 bg-transparent border-none cursor-pointer flex-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="bg-border/10" />

                {/* Azioni */}
                <div className="space-y-4">
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest px-1">Azioni & Branding</p>
                  {['primary', 'destructive'].map(key => (
                    <div key={key} className="space-y-2 px-1">
                      <div className="flex justify-between items-center">
                        <Label className="text-[10px] font-bold text-foreground/60">{key}</Label>
                        <span className="text-[9px] font-mono opacity-40 uppercase">{(tokens as any)[key]}</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-lg border border-border/20 shrink-0" style={{ backgroundColor: (tokens as any)[key] }} />
                        <Input 
                          type="color" 
                          value={(tokens as any)[key]} 
                          onChange={(e) => updateToken(key as any, e.target.value)}
                          className="h-8 p-0 bg-transparent border-none cursor-pointer flex-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="bg-border/10" />

                {/* Ruoli Semantici */}
                <div className="space-y-4 pb-10">
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest px-1">Ruoli Semantici (Bento)</p>
                  {['info', 'success', 'warning', 'accent'].map(key => (
                    <div key={key} className="space-y-4 border-l-2 border-muted pl-4 py-1">
                      <div className="space-y-2">
                        <Label className="text-[10px] font-bold text-foreground/60 uppercase tracking-tighter">{key} BG</Label>
                        <Input type="color" value={(tokens as any)[key]} onChange={(e) => updateToken(key as any, e.target.value)} className="h-8 p-0 bg-transparent border-none cursor-pointer" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-bold text-foreground/60 uppercase tracking-tighter">{key} FG</Label>
                        <Input type="color" value={(tokens as any)[key + 'Fg']} onChange={(e) => updateToken((key + 'Fg') as any, e.target.value)} className="h-8 p-0 bg-transparent border-none cursor-pointer" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area (Ripristinato con Tabs) */}
        <main className="lg:col-span-9 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar">
          <div className="p-8 md:p-12 space-y-12">
            <Tabs defaultValue="components" className="w-full">
              <TabsList className="bg-card h-16 rounded-[1.25rem] p-1.5 gap-1 border border-border/10 mb-12 max-w-2xl mx-auto shadow-sm">
                <TabsTrigger value="components" className="rounded-xl font-black text-[10px] uppercase tracking-widest gap-2 flex-1 data-[state=active]:bg-background data-[state=active]:shadow-none transition-all">
                  <Box className="h-4 w-4" /> UI Componenti
                </TabsTrigger>
                <TabsTrigger value="typography" className="rounded-xl font-black text-[10px] uppercase tracking-widest gap-2 flex-1 data-[state=active]:bg-background data-[state=active]:shadow-none transition-all">
                  <Type className="h-4 w-4" /> Tipografia
                </TabsTrigger>
                <TabsTrigger value="code" className="rounded-xl font-black text-[10px] uppercase tracking-widest gap-2 flex-1 data-[state=active]:bg-background data-[state=active]:shadow-none transition-all">
                  <Code className="h-4 w-4" /> Export CSS
                </TabsTrigger>
              </TabsList>

              {/* === TAB COMPONENTI === */}
              <TabsContent value="components" className="mt-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div 
                  className="rounded-[3rem] p-10 md:p-16 space-y-20 border-none transition-all duration-500 shadow-2xl relative overflow-hidden"
                  style={{ backgroundColor: 'var(--preview-bg)', color: 'var(--preview-fg)' }}
                >
                  {/* Buttons Section */}
                  <section className="space-y-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Atoms / Buttons</p>
                      <h3 className="text-2xl font-black tracking-tighter uppercase">Interazioni Principali</h3>
                    </div>
                    <div className="flex flex-wrap items-end gap-6">
                      <div className="space-y-3 text-center">
                        <Button className="h-16 px-10 rounded-[1.5rem] font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20 transition-all active:scale-95"
                          style={{ backgroundColor: 'var(--preview-primary)', color: 'var(--preview-bg)' }}>
                          Primary Action
                        </Button>
                        <p className="text-[9px] font-black opacity-30 uppercase tracking-widest">bg-primary</p>
                      </div>

                      <div className="space-y-3 text-center">
                        <Button className="h-16 px-10 rounded-[1.5rem] font-black uppercase tracking-widest text-xs transition-all active:scale-95"
                          style={{ backgroundColor: 'var(--preview-destructive)', color: 'var(--preview-bg)' }}>
                          Critical
                        </Button>
                        <p className="text-[9px] font-black opacity-30 uppercase tracking-widest">bg-destructive</p>
                      </div>

                      <div className="space-y-3 text-center">
                        <Button variant="outline" className="h-16 px-10 rounded-[1.5rem] font-black uppercase tracking-widest text-xs border-none bg-muted/40 transition-all active:scale-95"
                          style={{ color: 'var(--preview-fg)' }}>
                          Secondary
                        </Button>
                        <p className="text-[9px] font-black opacity-30 uppercase tracking-widest">bg-muted/40</p>
                      </div>
                    </div>
                  </section>

                  {/* Bento Grid Section */}
                  <section className="space-y-10">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Molecules / Bento Grid</p>
                      <h3 className="text-2xl font-black tracking-tighter uppercase">Geometria Deep Bento</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Info Card */}
                      <div className="p-8 rounded-[2rem] space-y-8 transition-all hover:scale-[1.02] cursor-pointer"
                        style={{ backgroundColor: 'var(--preview-info)', color: 'var(--preview-info-fg)' }}>
                        <div className="flex justify-between items-start">
                           <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-current/10">
                              <Info className="h-6 w-6" />
                           </div>
                           <Badge variant="outline" className="border-current/20 rounded-full font-black text-[9px] uppercase">v2.0</Badge>
                        </div>
                        <h4 className="text-2xl font-black tracking-tighter uppercase leading-none">Info Role</h4>
                      </div>

                      {/* Success Card */}
                      <div className="p-8 rounded-[2rem] space-y-8 transition-all hover:scale-[1.02] cursor-pointer"
                        style={{ backgroundColor: 'var(--preview-success)', color: 'var(--preview-success-fg)' }}>
                        <div className="flex justify-between items-start">
                           <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-current/10">
                              <CheckCheck className="h-6 w-6" />
                           </div>
                           <Badge variant="outline" className="border-current/20 rounded-full font-black text-[9px] uppercase">OK</Badge>
                        </div>
                        <h4 className="text-2xl font-black tracking-tighter uppercase leading-none">Success Role</h4>
                      </div>

                      {/* Warning Card */}
                      <div className="p-8 rounded-[2rem] space-y-8 transition-all hover:scale-[1.02] cursor-pointer"
                        style={{ backgroundColor: 'var(--preview-warning)', color: 'var(--preview-warning-fg)' }}>
                        <div className="flex justify-between items-start">
                           <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-current/10">
                              <Clock className="h-6 w-6" />
                           </div>
                           <Badge variant="outline" className="border-current/20 rounded-full font-black text-[9px] uppercase">Soon</Badge>
                        </div>
                        <h4 className="text-2xl font-black tracking-tighter uppercase leading-none">Warning Role</h4>
                      </div>
                    </div>
                  </section>

                  {/* Complex Dialog Preview */}
                  <section className="space-y-10">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Organisms / Dialogs</p>
                      <h3 className="text-2xl font-black tracking-tighter uppercase">Sistemi di Notifica</h3>
                    </div>
                    <div className="max-w-md bg-card rounded-[2.5rem] overflow-hidden border border-preview-border shadow-2xl"
                      style={{ backgroundColor: 'var(--preview-card)' }}>
                       <div className="p-10 border-b border-preview-border flex items-center justify-between" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                          <div className="flex items-center gap-4">
                             <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-primary-foreground shadow-lg" style={{ backgroundColor: 'var(--preview-primary)' }}>
                                <Bell className="h-6 w-6" />
                             </div>
                             <h4 className="text-xl font-black tracking-tighter uppercase">Preview</h4>
                          </div>
                          <Badge className="rounded-full font-black text-[9px] uppercase" style={{ backgroundColor: 'var(--preview-primary)', color: 'var(--preview-bg)' }}>2 NEW</Badge>
                       </div>
                       <div className="p-4 space-y-2">
                          <div className="p-5 rounded-2xl bg-muted/20 flex gap-4 items-center">
                             <div className="h-10 w-10 rounded-xl bg-role-accent" style={{ backgroundColor: 'var(--preview-accent)' }} />
                             <div className="flex-1">
                                <p className="text-xs font-black uppercase tracking-tight">Esempio Messaggio</p>
                                <p className="text-[10px] font-medium opacity-60">Anteprima del testo di notifica...</p>
                             </div>
                          </div>
                       </div>
                    </div>
                  </section>
                </div>
              </TabsContent>

              {/* === TAB TIPOGRAFIA (Ripristinato) === */}
              <TabsContent value="typography" className="mt-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div 
                  className="rounded-[3rem] p-10 md:p-16 space-y-20 border-none transition-all duration-500 shadow-2xl"
                  style={{ backgroundColor: 'var(--preview-bg)', color: 'var(--preview-fg)' }}
                >
                  <div className="space-y-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Heading Hierarchy</p>
                    <div className="space-y-12">
                       <div className="space-y-4">
                          <p className="text-[9px] font-mono opacity-30">H1 - text-6xl font-black leading-[0.9]</p>
                          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95]">
                             Digital Art <br />Identity
                          </h1>
                       </div>
                       <div className="space-y-4">
                          <p className="text-[9px] font-mono opacity-30">H2 - text-3xl font-black</p>
                          <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
                             Sistemi Accademici Complessi
                          </h2>
                       </div>
                    </div>
                  </div>

                  <Separator className="opacity-10" />

                  <div className="space-y-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Body & Reading</p>
                    <div className="space-y-8 max-w-2xl">
                       <div className="space-y-2">
                          <p className="text-[9px] font-mono opacity-30">Large Body - text-xl font-medium</p>
                          <p className="text-lg md:text-2xl font-medium leading-relaxed">
                             Il carattere Instrument Sans garantisce un&apos;eleganza neutrale ma autoritaria, perfetta per un ecosistema artistico.
                          </p>
                       </div>
                       <div className="space-y-2">
                          <p className="text-[9px] font-mono opacity-30">Regular - text-base font-medium</p>
                          <p className="text-base font-medium leading-relaxed opacity-70">
                             Ogni blocco di testo è calibrato per una leggibilità ottimale su schermi touch ad alta risoluzione, mantenendo un contrasto minimo di 4.5:1.
                          </p>
                       </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Metadata & Labels</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                       <div className="space-y-2">
                          <p className="text-[9px] font-mono opacity-30">Label Caps</p>
                          <p className="text-[11px] font-black uppercase tracking-[0.2em] leading-none">Aggiornamento</p>
                       </div>
                       <div className="space-y-2">
                          <p className="text-[9px] font-mono opacity-30">Badge Style</p>
                          <Badge className="bg-primary text-primary-foreground font-black text-[9px] uppercase px-3 h-6 rounded-full border-none">Attivo</Badge>
                       </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* === TAB EXPORT CSS (Ripristinato) === */}
              <TabsContent value="code" className="mt-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
                 <div className="bg-card rounded-[2.5rem] p-10 md:p-16 border border-border/10 space-y-12">
                    <div className="space-y-2">
                       <h3 className="text-3xl font-black tracking-tighter uppercase">Strato Variable Config</h3>
                       <p className="text-muted-foreground font-medium uppercase text-[10px] tracking-widest">Copia questi token per globals.css</p>
                    </div>
                    
                    <div className="relative group">
                       <pre className="bg-muted/40 p-10 rounded-[2rem] text-sm font-mono overflow-x-auto border border-border/5">
{`:root {
  --background: ${tokens.background};
  --foreground: ${tokens.foreground};
  --card: ${tokens.card};
  --primary: ${tokens.primary};
  --destructive: ${tokens.destructive};
  --border: ${tokens.border};

  /* Semantic Roles */
  --role-info: ${tokens.info};
  --role-info-fg: ${tokens.infoFg};
  --role-success: ${tokens.success};
  --role-success-fg: ${tokens.successFg};
  --role-warning: ${tokens.warning};
  --role-warning-fg: ${tokens.warningFg};
  --role-accent: ${tokens.accent};
  --role-accent-fg: ${tokens.accentFg};
}`}
                       </pre>
                       <Button variant="outline" className="absolute top-6 right-6 rounded-xl font-black text-[10px] uppercase h-10 px-5 border-none bg-background/50 backdrop-blur-md hover:bg-background"
                         onClick={() => {
                           navigator.clipboard.writeText(`:root {\n  --background: ${tokens.background};\n  --foreground: ${tokens.foreground};\n  --card: ${tokens.card};\n  --primary: ${tokens.primary};\n  --destructive: ${tokens.destructive};\n  --border: ${tokens.border};\n\n  /* Semantic Roles */\n  --role-info: ${tokens.info};\n  --role-info-fg: ${tokens.infoFg};\n  --role-success: ${tokens.success};\n  --role-success-fg: ${tokens.successFg};\n  --role-warning: ${tokens.warning};\n  --role-warning-fg: ${tokens.warningFg};\n  --role-accent: ${tokens.accent};\n  --role-accent-fg: ${tokens.accentFg};\n}`)
                           alert("Token copiati!")
                         }}>
                         Copia Codice
                       </Button>
                    </div>
                 </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
