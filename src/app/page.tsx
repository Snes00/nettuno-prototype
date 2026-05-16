"use client";

import Link from "next/link";
import { GraduationCap, UserCog, Sparkles, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 sm:p-12 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Logo & Header */}
      <div className="flex flex-col items-center mb-20 space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <div className="h-24 w-24 rounded-[2rem] bg-primary text-primary-foreground flex items-center justify-center shadow-2xl shadow-primary/30 mb-4 rotate-3 hover:rotate-0 transition-all duration-700 cursor-pointer">
          <Sparkles className="h-12 w-12" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-6xl font-black tracking-tighter leading-tight text-foreground uppercase">
            Nettuno
          </h1>
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground/60">
            Accademia di Belle Arti • ABA Portal
          </p>
        </div>
      </div>

      {/* Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl animate-in fade-in slide-in-from-bottom-16 delay-300 duration-1000 fill-mode-both">
        
        {/* Studente */}
        <Link href="/login?role=studente" className="group">
          <div className="rounded-[2rem] p-10 h-[450px] bg-card hover:bg-muted/20 border border-border/40 md:border-none shadow-none cursor-pointer overflow-hidden relative transition-all hover:scale-[1.02] flex flex-col justify-between">
            <div className="z-10 relative">
                <div className="h-16 w-16 rounded-full bg-role-info flex items-center justify-center mb-8 text-role-info-fg shadow-sm">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-black tracking-tighter text-foreground mb-4 uppercase">Area Studenti</h2>
                <p className="text-muted-foreground font-medium text-lg leading-snug max-w-[260px]">Accedi al tuo libretto, gestisci tasse e frequenza corsi.</p>
            </div>
            <div className="z-10 relative flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-5 transition-all">
              Inizia Sessione <ArrowRight className="h-4 w-4" />
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-16 -right-16 h-80 w-80 bg-role-info/10 rounded-full blur-3xl group-hover:bg-role-info/20 transition-all duration-700" />
          </div>
        </Link>

        {/* Docente */}
        <Link href="/login?role=docente" className="group">
          <div className="rounded-[2rem] p-10 h-[450px] bg-card hover:bg-muted/20 border border-border/40 md:border-none shadow-none cursor-pointer overflow-hidden relative transition-all hover:scale-[1.02] flex flex-col justify-between">
            <div className="z-10 relative">
                <div className="h-16 w-16 rounded-full bg-role-accent flex items-center justify-center mb-8 text-role-accent-fg shadow-sm">
                  <UserCog className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-black tracking-tighter text-foreground mb-4 uppercase">Area Docenti</h2>
                <p className="text-muted-foreground font-medium text-lg leading-snug max-w-[260px]">Gestione didattica, verbali d&apos;esame e ricevimento.</p>
            </div>
            <div className="z-10 relative flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-5 transition-all">
              Accesso Registro <ArrowRight className="h-4 w-4" />
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-16 -right-16 h-80 w-80 bg-role-accent/10 rounded-full blur-3xl group-hover:bg-role-accent/20 transition-all duration-700" />
          </div>
        </Link>
      </div>

      <div className="mt-16 animate-in fade-in slide-in-from-bottom-6 delay-700 fill-mode-both">
        <Link href="/design-system">
          <Button variant="outline" className="h-14  px-10 gap-4 font-black text-[11px] uppercase tracking-[0.2em] border-border/40 bg-card hover:bg-muted transition-all active:scale-95 shadow-none">
            <Palette className="h-5 w-5 text-primary" /> Sistema  v2.0
          </Button>
        </Link>
      </div>

      <p className="mt-20 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/30">
        Accademia di Belle Arti • Nettuno Ecosystem • 2026
      </p>
    </div>
  );
}
