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

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get("role") || "studente" // Default a studente se manca
  const [loading, setLoading] = React.useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simuliamo un caricamento per dare feedback visivo
    setTimeout(() => {
      if (role === "docente") {
        router.push("/docente/dashboard")
      } else {
        router.push("/studente/didattica")
      }
    }, 800)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background animate-in fade-in duration-700">
      {/* Selettore Lingua in alto a destra (come da wireframe) */}
      <div className="absolute top-8 right-8">
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-muted/30 border-none font-black text-[10px]">
          ITA
        </Button>
      </div>

      <div className="w-full max-w-[400px] space-y-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-6">
          <div className="h-24 w-24 rounded-[2rem] bg-foreground flex items-center justify-center text-background shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <span className="text-3xl font-black tracking-tighter">ABAP</span>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">
              Nettuno {role}
            </h1>
            <p className="text-muted-foreground text-xs font-black uppercase tracking-[0.2em]">
              Accademia di Belle Arti
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* SPID / CIE (Accesso Rapido) */}
          <Button 
            type="button" 
            variant="outline" 
            className="w-full h-16 rounded-2xl border-none bg-muted/30 hover:bg-muted/50 flex items-center justify-between px-6 transition-all group"
          >
            <div className="flex items-center gap-4">
              <Fingerprint className="h-6 w-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="font-black text-xs uppercase tracking-widest">Entra con SPID / CIE</span>
            </div>
            <ArrowRight className="h-4 w-4 opacity-20" />
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
              <span className="bg-background px-4 text-muted-foreground">Oppure usa le credenziali</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                Nome Utente
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="username" 
                  placeholder="mario.rossi" 
                  className="h-14 pl-12 rounded-2xl bg-muted/30 border-none focus-visible:ring-foreground transition-all font-bold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <Label htmlFor="password" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Password
                </Label>
                <button type="button" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground">
                  Dimenticata?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="h-14 pl-12 rounded-2xl bg-muted/30 border-none focus-visible:ring-foreground transition-all"
                />
              </div>
            </div>
          </div>

          <Button 
            disabled={loading}
            className="w-full h-16 rounded-2xl bg-foreground text-background hover:bg-foreground/90 font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all active:scale-[0.98]"
          >
            {loading ? "Accesso in corso..." : "Accedi"}
          </Button>
        </form>

        {/* Footer Info */}
        <div className="flex flex-col items-center gap-4 pt-8">
          <button type="button" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            Informativa Privacy
          </button>
          <div className="flex items-center gap-2 text-[9px] text-muted-foreground/40 font-black uppercase">
            <Info className="h-3 w-3" />
            Nettuno v4.0.0
          </div>
        </div>
      </div>
    </div>
  )
}
