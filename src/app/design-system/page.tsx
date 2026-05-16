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
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  //  v2.0 Global Tokens Map
  const STRATO_DEFAULTS = {
    light: {
      background: "#EEEDF2",
      foreground: "#14131A",
      card: "#FFFFFF",
      primary: "#6547E8",
      destructive: "#F03C6C",
      border: "#E4E2EC",
      info: "#EBF8FF",
      infoFg: "#065180",
      success: "#EDFAEE",
      successFg: "#1D6E26",
      warning: "#FEFAEE",
      warningFg: "#7A480A",
      accent: "#F1EFFE",
      accentFg: "#5035C8",
    },
    dark: {
      background: "#0F0E14",
      foreground: "#E4E2EC",
      card: "#1E1C2A",
      primary: "#8470EF",
      destructive: "#F56E90",
      border: "#2E2C3A",
      info: "#043450",
      infoFg: "#80CBF5",
      success: "#144D1B",
      successFg: "#8CDA95",
      warning: "#573006",
      warningFg: "#EEC070",
      accent: "#2E1A72",
      accentFg: "#C9C0F8",
    }
  }

  // Tokens state initialization
  const [tokens, setTokens] = React.useState(STRATO_DEFAULTS.light)

  // Ensure hydration and sync tokens with the actual resolved theme
  React.useEffect(() => {
    setMounted(true)
    const isDark = resolvedTheme === "dark"
    setTokens(isDark ? STRATO_DEFAULTS.dark : STRATO_DEFAULTS.light)
  }, [resolvedTheme])

  const updateToken = (key: keyof typeof tokens, value: string) => {
    setTokens(prev => ({ ...prev, [key]: value }))
  }

  const resetTo = () => {
    const isDark = resolvedTheme === "dark"
    setTokens(isDark ? STRATO_DEFAULTS.dark : STRATO_DEFAULTS.light)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground animate-in fade-in duration-700">
      
      {/* Dynamic Style Override for Preview Area */}
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
                  <h1 className="text-2xl font-black tracking-tighter uppercase leading-none"> v2.0 Lab</h1>
                  <p className="text-muted-foreground font-black mt-1 uppercase text-[9px] tracking-[0.2em]">Design System Live Editor</p>
               </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
             {/* Theme Switcher in Header for accessibility */}
             <div className="flex bg-muted/40 p-1 rounded-xl">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setTheme("light")}
                  className={cn("rounded-lg font-black text-[9px] uppercase px-4 h-9", resolvedTheme === "light" && "bg-background shadow-sm")}
                >
                  <Sun className="h-3.5 w-3.5 mr-2" /> Light
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setTheme("dark")}
                  className={cn("rounded-lg font-black text-[9px] uppercase px-4 h-9", resolvedTheme === "dark" && "bg-background shadow-sm")}
                >
                  <Moon className="h-3.5 w-3.5 mr-2" /> Dark
                </Button>
             </div>
             <Separator orientation="vertical" className="h-8 bg-border/10 mx-2" />
             <Button className="rounded-xl h-11 gap-2 font-black text-[10px] uppercase bg-primary text-primary-foreground shadow-lg shadow-primary/20" onClick={resetTo}>
               <RefreshCw className="h-4 w-4" /> Reset Default
             </Button>
          </div>
        </div>
      </header>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Sidebar Editor */}
        <aside className="lg:col-span-3 border-r border-border/10 h-[calc(100vh-6rem)] overflow-y-auto bg-card/20 no-scrollbar">
          <div className="p-8 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-1">
                <Palette className="h-4 w-4 text-primary" />
                <h2 className="text-xs font-black uppercase tracking-[0.2em]">Token Configuration</h2>
              </div>
              
              <div className="space-y-8">
                {/* Surfaces */}
                <div className="space-y-4">
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest px-1">Superfici & Base</p>
                  {['background', 'foreground', 'card', 'border'].map(key => (
                    <div key={key} className="space-y-2 px-1 group">
                      <div className="flex justify-between items-center">
                        <Label className="text-[10px] font-bold text-foreground/60">{key}</Label>
                        <span className="text-[9px] font-mono opacity-40 uppercase">{(tokens as any)[key]}</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-lg border border-border/20 shrink-0 shadow-sm" style={{ backgroundColor: (tokens as any)[key] }} />
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

                {/* Actions */}
                <div className="space-y-4">
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest px-1">Azioni & Branding</p>
                  {['primary', 'destructive'].map(key => (
                    <div key={key} className="space-y-2 px-1 group">
                      <div className="flex justify-between items-center">
                        <Label className="text-[10px] font-bold text-foreground/60">{key}</Label>
                        <span className="text-[9px] font-mono opacity-40 uppercase">{(tokens as any)[key]}</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-lg border border-border/20 shrink-0 shadow-sm" style={{ backgroundColor: (tokens as any)[key] }} />
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

                {/* Semantic Roles */}
                <div className="space-y-4 pb-12">
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest px-1">Ruoli Semantici (Bento)</p>
                  {['info', 'success', 'warning', 'accent'].map(key => (
                    <div key={key} className="space-y-4 border-l-2 border-primary/20 pl-4 py-1">
                      <div className="space-y-2">
                        <Label className="text-[10px] font-bold text-foreground/60 uppercase tracking-tighter">{key} Background</Label>
                        <Input type="color" value={(tokens as any)[key]} onChange={(e) => updateToken(key as any, e.target.value)} className="h-8 p-0 bg-transparent border-none cursor-pointer" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-bold text-foreground/60 uppercase tracking-tighter">{key} Foreground</Label>
                        <Input type="color" value={(tokens as any)[key + 'Fg']} onChange={(e) => updateToken((key + 'Fg') as any, e.target.value)} className="h-8 p-0 bg-transparent border-none cursor-pointer" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:col-span-9 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar bg-background">
          <div className="p-6 md:p-8 space-y-12 max-w-5xl mx-auto">
            <Tabs defaultValue="components" className="w-full">
              <TabsList className="bg-card h-16 rounded-[1.5rem] p-1.5 gap-1 border border-border/10 mb-16 shadow-xl">
                <TabsTrigger value="components" className="rounded-xl font-black text-[10px] uppercase tracking-widest gap-2 flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                  <Box className="h-4 w-4" /> UI Elements
                </TabsTrigger>
                <TabsTrigger value="typography" className="rounded-xl font-black text-[10px] uppercase tracking-widest gap-2 flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                  <Type className="h-4 w-4" /> Typography
                </TabsTrigger>
                <TabsTrigger value="code" className="rounded-xl font-black text-[10px] uppercase tracking-widest gap-2 flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                  <Code className="h-4 w-4" /> Export Config
                </TabsTrigger>
              </TabsList>

              {/* === TAB COMPONENTI === */}
              <TabsContent value="components" className="mt-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div 
                  className="rounded-[3rem] p-10 md:p-20 space-y-24 border border-preview-border transition-all duration-500 shadow-2xl relative"
                  style={{ backgroundColor: 'var(--preview-bg)', color: 'var(--preview-fg)' }}
                >
                  {/* Buttons Section */}
                  <section className="space-y-10">
                    <div className="space-y-2">
                      <p className="text-[11px] font-black uppercase tracking-[0.4em] opacity-40">Atoms / Interaction</p>
                      <h3 className="text-3xl font-black tracking-tighter uppercase">Global Buttons</h3>
                    </div>
                    <div className="flex flex-wrap items-end gap-8">
                      <div className="space-y-4">
                        <Button className="h-16 px-12 rounded-[1.5rem] font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20 transition-all active:scale-95"
                          style={{ backgroundColor: 'var(--preview-primary)', color: theme === "dark" ? "#0F0E14" : "#FFFFFF" }}>
                          Primary
                        </Button>
                        <p className="text-[10px] font-black opacity-30 text-center uppercase tracking-widest">bg-primary</p>
                      </div>

                      <div className="space-y-4">
                        <Button className="h-16 px-12 rounded-[1.5rem] font-black uppercase tracking-widest text-xs transition-all active:scale-95"
                          style={{ backgroundColor: 'var(--preview-destructive)', color: theme === "dark" ? "#0F0E14" : "#FFFFFF" }}>
                          Critical
                        </Button>
                        <p className="text-[10px] font-black opacity-30 text-center uppercase tracking-widest">bg-destructive</p>
                      </div>

                      <div className="space-y-4">
                        <Button variant="outline" className="h-16 px-12 rounded-[1.5rem] font-black uppercase tracking-widest text-xs border-none bg-muted/40 transition-all active:scale-95"
                          style={{ color: 'var(--preview-fg)' }}>
                          Ghost
                        </Button>
                        <p className="text-[10px] font-black opacity-30 text-center uppercase tracking-widest">bg-muted/40</p>
                      </div>
                    </div>
                  </section>

                  {/* Bento Grid Section */}
                  <section className="space-y-12">
                    <div className="space-y-2">
                      <p className="text-[11px] font-black uppercase tracking-[0.4em] opacity-40">Molecules / Bento</p>
                      <h3 className="text-3xl font-black tracking-tighter uppercase">Semantic States</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {['info', 'success', 'warning', 'accent'].map(role => (
                        <div key={role} className="p-8 rounded-[1.25rem] space-y-10 transition-all hover:scale-[1.05] cursor-pointer shadow-lg"
                          style={{ backgroundColor: `var(--preview-${role})`, color: `var(--preview-${role}-fg)` }}>
                          <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-current/10">
                             {role === 'info' && <Info className="h-6 w-6" />}
                             {role === 'success' && <CheckCheck className="h-6 w-6" />}
                             {role === 'warning' && <Clock className="h-6 w-6" />}
                             {role === 'accent' && <Sparkles className="h-6 w-6" />}
                          </div>
                          <h4 className="text-2xl font-black tracking-tighter uppercase leading-none">{role} Role</h4>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Card Surface Preview */}
                  <section className="space-y-12">
                     <div className="space-y-2">
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] opacity-40">Surface / Containers</p>
                        <h3 className="text-3xl font-black tracking-tighter uppercase">Living Surface</h3>
                     </div>
                     <div className="bg-card rounded-[3rem] p-12 space-y-8 border border-preview-border shadow-xl"
                       style={{ backgroundColor: 'var(--preview-card)' }}>
                        <div className="flex justify-between items-center">
                           <h4 className="text-2xl font-black uppercase tracking-tight">Main Surface Card</h4>
                           <Badge variant="outline" className="border-current/20 rounded-full font-black text-[10px] px-4 h-8 uppercase tracking-widest">bg-card</Badge>
                        </div>
                        <p className="text-lg opacity-60 leading-relaxed font-medium">
                           Le card utilizzano il token <code className="font-mono text-primary bg-primary/5 px-2 py-0.5 rounded text-sm">--preview-card</code>. In modalità Dark, queste superfici diventano profonde ed eleganti.
                        </p>
                     </div>
                  </section>
                </div>
              </TabsContent>

              {/* === TAB TIPOGRAFIA === */}
              <TabsContent value="typography" className="mt-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div 
                  className="rounded-[3rem] p-10 md:p-20 space-y-24 border border-preview-border transition-all duration-500 shadow-2xl"
                  style={{ backgroundColor: 'var(--preview-bg)', color: 'var(--preview-fg)' }}
                >
                  <div className="space-y-10">
                    <p className="text-[11px] font-black uppercase tracking-[0.4em] opacity-40">Editorial / Scale</p>
                    <div className="space-y-16">
                       <div className="space-y-6">
                          <p className="text-[10px] font-mono opacity-20 border-b border-current/10 pb-2 max-w-fit">H1 - text-8xl font-black leading-[0.85]</p>
                          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.9]">
                              <br />System
                          </h1>
                       </div>
                       <div className="space-y-6">
                          <p className="text-[10px] font-mono opacity-20 border-b border-current/10 pb-2 max-w-fit">H2 - text-5xl font-black</p>
                          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
                             Visual Authority
                          </h2>
                       </div>
                    </div>
                  </div>

                  <Separator className="opacity-10" />

                  <div className="space-y-10">
                    <p className="text-[11px] font-black uppercase tracking-[0.4em] opacity-40">Reading / Experience</p>
                    <div className="space-y-10 max-w-3xl">
                       <div className="space-y-4">
                          <p className="text-2xl md:text-4xl font-medium leading-[1.3]">
                             Il carattere Instrument Sans bilancia autorità editoriale e precisione digitale, garantendo leggibilità su ogni touchpoint.
                          </p>
                       </div>
                       <p className="text-base md:text-lg font-medium leading-relaxed opacity-60">
                          Ogni riga di testo segue le regole di contrasto WCAG 2.1 AA, assicurando che l&apos;esperienza utente sia inclusiva e riposante per la vista.
                       </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* === TAB EXPORT === */}
              <TabsContent value="code" className="mt-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
                 <div className="bg-card rounded-[3rem] p-12 md:p-20 border border-border/10 space-y-16 shadow-2xl">
                    <div className="space-y-4 text-center">
                       <h3 className="text-5xl font-black tracking-tighter uppercase leading-none">Variable Config</h3>
                       <p className="text-muted-foreground font-black uppercase text-[11px] tracking-[0.4em]">Ready for globals.css</p>
                    </div>
                    
                    <div className="relative group">
                       <pre className="bg-muted/40 p-12 rounded-[1.5rem] text-sm font-mono overflow-x-auto border border-border/5 leading-relaxed">
{`:root {
  /*  v2.0 Live Export */
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
                       <Button 
                         className="absolute top-8 right-8 rounded-xl font-black text-[10px] uppercase h-12 px-8 bg-primary text-primary-foreground shadow-xl active:scale-95 transition-all"
                         onClick={() => {
                           navigator.clipboard.writeText(`:root {\n  --background: ${tokens.background};\n  --foreground: ${tokens.foreground};\n  --card: ${tokens.card};\n  --primary: ${tokens.primary};\n  --destructive: ${tokens.destructive};\n  --border: ${tokens.border};\n\n  /* Semantic Roles */\n  --role-info: ${tokens.info};\n  --role-info-fg: ${tokens.infoFg};\n  --role-success: ${tokens.success};\n  --role-success-fg: ${tokens.successFg};\n  --role-warning: ${tokens.warning};\n  --role-warning-fg: ${tokens.warningFg};\n  --role-accent: ${tokens.accent};\n  --role-accent-fg: ${tokens.accentFg};\n}`)
                           alert("Token configurazione  copiati!")
                         }}>
                         Copy to Clipboard
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
