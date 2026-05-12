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
  Sun
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"

export default function DesignSystemPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  // Palette State (Predefiniti estratti da globals.css)
  const [colors, setColors] = React.useState({
    background: "#F8F5F0",
    foreground: "#1A1917",
    card: "#FFFFFF",
    muted: "#F1EFE9",
    mutedFg: "#7C7A77",
    accent: "#FFD6E8",
    border: "#E5E2DA",
  })

  React.useEffect(() => {
    setMounted(true)
    // In un'app reale caricheremmo qui i valori attuali dalle variabili CSS
  }, [])

  const updateColor = (key: keyof typeof colors, value: string) => {
    setColors(prev => ({ ...prev, [key]: value }))
  }

  const resetPalette = () => {
    setColors({
      background: "#F8F5F0",
      foreground: "#1A1917",
      card: "#FFFFFF",
      muted: "#F1EFE9",
      mutedFg: "#7C7A77",
      accent: "#FFD6E8",
      border: "#E5E2DA",
    })
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12 animate-in fade-in duration-700">
      {/* Dynamic Style Override for Preview */}
      <style jsx global>{`
        :root {
          --preview-bg: ${colors.background};
          --preview-fg: ${colors.foreground};
          --preview-card: ${colors.card};
          --preview-muted: ${colors.muted};
          --preview-muted-fg: ${colors.mutedFg};
          --preview-accent: ${colors.accent};
          --preview-border: ${colors.border};
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-none bg-muted/30">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">Design System Lab</h1>
              <p className="text-muted-foreground font-medium mt-1 uppercase text-[10px] tracking-widest">Single Source of Truth • Prototipazione Live</p>
            </div>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="rounded-2xl h-12 gap-2 font-black text-xs uppercase border-none bg-muted/30" onClick={resetPalette}>
               <RefreshCw className="h-4 w-4" /> Reset
             </Button>
             <Button className="rounded-2xl h-12 gap-2 font-black text-xs uppercase bg-foreground text-background">
               <Save className="h-4 w-4" /> Salva Palette
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Editor */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-card rounded-[2rem] p-8 space-y-8">
              <div className="flex items-center gap-3">
                <Palette className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-xl font-black tracking-tighter uppercase">Palette Editor</h2>
              </div>
              
              <div className="space-y-6">
                {Object.entries(colors).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{key}</Label>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase">{value}</span>
                    </div>
                    <div className="flex gap-3">
                      <div 
                        className="h-10 w-10 rounded-xl border border-border/40 shrink-0" 
                        style={{ backgroundColor: value }}
                      />
                      <Input 
                        type="color" 
                        value={value} 
                        onChange={(e) => updateColor(key as keyof typeof colors, e.target.value)}
                        className="h-10 p-1 bg-transparent border-none cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="bg-border/40" />
              
              <div className="space-y-4">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Tema Attivo</Label>
                <div className="flex gap-2">
                  <Button 
                    variant={theme === "light" ? "default" : "outline"} 
                    className="flex-1 rounded-xl h-12 border-none"
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="h-4 w-4 mr-2" /> Light
                  </Button>
                  <Button 
                    variant={theme === "dark" ? "default" : "outline"} 
                    className="flex-1 rounded-xl h-12 border-none"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="h-4 w-4 mr-2" /> Dark
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* Preview Canvas */}
          <main className="lg:col-span-8 space-y-12">
            <Tabs defaultValue="components" className="w-full">
              <TabsList className="bg-card h-14 rounded-2xl p-1 gap-1 border-none mb-8">
                <TabsTrigger value="components" className="rounded-xl font-black text-[10px] uppercase gap-2 flex-1 data-[state=active]:bg-background transition-all">
                  <Box className="h-4 w-4" /> Componenti
                </TabsTrigger>
                <TabsTrigger value="typography" className="rounded-xl font-black text-[10px] uppercase gap-2 flex-1 data-[state=active]:bg-background transition-all">
                  <Type className="h-4 w-4" /> Tipografia
                </TabsTrigger>
              </TabsList>

              <TabsContent value="components" className="space-y-12 mt-0">
                {/* Preview Area (Simula il design system in tempo reale) */}
                <div 
                  className="rounded-[2.5rem] p-12 space-y-12 border-none transition-all duration-500 shadow-2xl"
                  style={{ 
                    backgroundColor: 'var(--preview-bg)', 
                    color: 'var(--preview-fg)' 
                  }}
                >
                  {/* Sezione Bottoni */}
                  <section className="space-y-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Buttons & States</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button className="rounded-2xl h-14 px-8 font-black text-xs uppercase tracking-widest shadow-none transition-all active:scale-95" 
                        style={{ backgroundColor: 'var(--preview-fg)', color: 'var(--preview-bg)' }}>
                        Primary Action
                      </Button>
                      <Button variant="outline" className="rounded-2xl h-14 px-8 font-black text-xs uppercase tracking-widest border-none transition-all"
                        style={{ backgroundColor: 'var(--preview-muted)', color: 'var(--preview-fg)' }}>
                        Secondary
                      </Button>
                      <Button size="icon" className="h-14 w-14 rounded-full border-none transition-all"
                        style={{ backgroundColor: 'var(--preview-muted)', color: 'var(--preview-fg)' }}>
                        <ArrowLeft className="h-6 w-6" />
                      </Button>
                    </div>
                  </section>

                  {/* Sezione Card */}
                  <section className="space-y-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Cards & Containers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-8 rounded-[2rem] space-y-4 shadow-none transition-all border border-transparent hover:border-preview-border"
                        style={{ backgroundColor: 'var(--preview-card)' }}>
                        <div className="h-12 w-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: 'var(--preview-muted)' }}>
                          <Sparkles className="h-6 w-6" />
                        </div>
                        <h4 className="text-xl font-black tracking-tighter uppercase leading-none">Bento Element</h4>
                        <p className="text-sm font-medium opacity-60">
                          Questo elemento utilizza le variabili dinamiche per l&apos;anteprima dei colori.
                        </p>
                      </div>
                      
                      <div className="p-8 rounded-[2rem] space-y-6 flex flex-col justify-between"
                        style={{ backgroundColor: 'var(--preview-muted)' }}>
                        <div className="space-y-1">
                          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Ruolo Attivo</p>
                          <h4 className="text-2xl font-black tracking-tighter uppercase">Preview Muted</h4>
                        </div>
                        <Button className="rounded-xl h-12 w-full font-black text-[10px] uppercase tracking-widest"
                          style={{ backgroundColor: 'var(--preview-fg)', color: 'var(--preview-bg)' }}>
                          Interazione
                        </Button>
                      </div>
                    </div>
                  </section>

                  {/* Sezione Form Elements */}
                  <section className="space-y-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Form Elements</h3>
                    <div className="grid gap-4 max-w-sm">
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-1">Label Esempio</Label>
                        <Input 
                          placeholder="Placeholder text..." 
                          className="h-14 px-6 rounded-2xl border-none font-bold"
                          style={{ backgroundColor: 'var(--preview-muted)' }}
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </TabsContent>

              <TabsContent value="typography" className="space-y-12 mt-0">
                <div 
                  className="rounded-[2.5rem] p-12 space-y-16 border-none transition-all duration-500 shadow-2xl"
                  style={{ 
                    backgroundColor: 'var(--preview-bg)', 
                    color: 'var(--preview-fg)' 
                  }}
                >
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Heading 1 - text-4xl font-black</p>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                      Nettuno Design System
                    </h1>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Heading 2 - text-2xl font-black</p>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">
                      Universal Design per l&apos;Accademia
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Body Text - text-base font-medium</p>
                    <p className="text-base md:text-xl font-medium leading-relaxed max-w-2xl">
                      Il corpo del testo utilizza Instrument Sans Medium. La leggibilità è garantita da una spaziatura di interlinea generosa e un contrasto ottimizzato secondo gli standard WCAG AA.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Metadata</p>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em]">Codice: 102938</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Status</p>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">Approvato</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Export CSS */}
            <div className="bg-card rounded-[2rem] p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Palette className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-xl font-black tracking-tighter uppercase">Export Config</h2>
                </div>
                <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest" onClick={() => {
                  const css = `
:root {
  --background: ${colors.background};
  --foreground: ${colors.foreground};
  --card: ${colors.card};
  --muted: ${colors.muted};
  --muted-foreground: ${colors.mutedFg};
  --accent: ${colors.accent};
  --border: ${colors.border};
}`
                  navigator.clipboard.writeText(css)
                  alert("CSS Copiato negli appunti!")
                }}>Copia CSS</Button>
              </div>
              <pre className="bg-muted/30 p-6 rounded-xl text-xs font-mono overflow-x-auto">
                {`/* Applica queste variabili in globals.css */
:root {
  --background: ${colors.background};
  --foreground: ${colors.foreground};
  --card: ${colors.card};
  --muted: ${colors.muted};
  --muted-foreground: ${colors.mutedFg};
  --accent: ${colors.accent};
  --border: ${colors.border};
}`}
              </pre>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
