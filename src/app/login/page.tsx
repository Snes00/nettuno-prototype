"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { 
  ArrowRight, 
  Fingerprint, 
  User, 
  Lock, 
  Info, 
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get("role") || "studente"
  const [loading, setLoading] = React.useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      if (role === "docente") {
        router.push("/docente/dashboard")
      } else {
        router.push("/studente/dashboard")
      }
    }, 800)
  }

  return (
    <div className="w-full max-w-[420px] space-y-6 animate-in slide-in-from-bottom-10 duration-1000">
      {/* Logo Section */}
      <div className="flex flex-col items-center gap-8">
        <div className="h-28 w-28 rounded-[2rem] bg-primary flex items-center justify-center text-primary-foreground shadow-2xl shadow-primary/30 rotate-3 hover:rotate-0 transition-all duration-700 cursor-pointer group">
          <span className="text-4xl font-black tracking-tighter group-hover:scale-110 transition-transform">ABAP</span>
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-foreground">
            Nettuno <span className="text-primary">{role}</span>
          </h1>
          <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.3em]">
            Accademia di Belle Arti • ABA Portal
          </p>
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-8">
        {/* SPID / CIE (Accesso Rapido) */}
        <Button 
          type="button" 
          variant="outline" 
          className="w-full h-20 rounded-[2rem] border border-border/40 bg-card hover:bg-muted/40 flex items-center justify-between px-8 transition-all group active:scale-[0.98]"
        >
          <div className="flex items-center gap-5">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
               <Fingerprint className="h-6 w-6" />
            </div>
            <span className="font-black text-[11px] uppercase tracking-widest text-foreground">Entra con SPID / CIE</span>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:translate-x-1 transition-all" />
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border/40" />
          </div>
          <div className="relative flex justify-center text-[9px] font-black uppercase tracking-[0.2em]">
            <span className="bg-background px-6 text-muted-foreground/60">Log-in Credenziali</span>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ml-2">
              Identificativo Utente
            </Label>
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40" />
              <Input 
                id="username" 
                placeholder="mario.rossi" 
                className="h-16 pl-14 rounded-[2rem] bg-card border border-border/40 focus-visible:ring-primary/20 transition-all font-bold text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-2">
              <Label htmlFor="password" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                Chiave di Accesso
              </Label>
              <button type="button" className="text-[9px] font-black uppercase tracking-widest text-primary hover:opacity-80 transition-opacity">
                Recupera
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40" />
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="h-16 pl-14 rounded-[2rem] bg-card border border-border/40 focus-visible:ring-primary/20 transition-all text-base"
              />
            </div>
          </div>
        </div>

        <Button 
          disabled={loading}
          className="w-full h-20 rounded-[2rem] bg-primary text-primary-foreground hover:opacity-90 font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-primary/20 transition-all active:scale-[0.98]"
        >
          {loading ? "Verifica in corso..." : "Accedi al Portale"}
        </Button>
      </form>

      {/* Footer Info */}
      <div className="flex flex-col items-center gap-5 pt-4">
        <button type="button" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 hover:text-foreground transition-colors underline-offset-4 hover:underline">
          Politica sulla Privacy
        </button>
        <div className="flex items-center gap-3 text-[10px] text-muted-foreground/30 font-black uppercase tracking-[0.2em]">
          <Info className="h-4 w-4 opacity-60" />
          Nettuno v4.2.0 •  v2.0
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background animate-in fade-in duration-1000 overflow-hidden relative">
      {/* Elementi decorativi di sfondo */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Selettore Lingua in alto a destra */}
      <div className="absolute top-10 right-10">
        <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-card border border-border/40 font-black text-[10px] tracking-widest hover:bg-muted transition-all active:scale-90 uppercase">
          ITA
        </Button>
      </div>

      <React.Suspense fallback={
        <div className="flex flex-col items-center gap-6">
          <div className="h-16 w-16 rounded-full border-4 border-muted border-t-primary animate-spin" />
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground animate-pulse">Caricamento Sistema...</p>
        </div>
      }>
        <LoginForm />
      </React.Suspense>
    </div>
  )
}
