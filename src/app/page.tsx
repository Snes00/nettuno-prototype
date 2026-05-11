"use client";

import Link from "next/link";
import { GraduationCap, UserCog, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 sm:p-12">
      {/* Logo & Header */}
      <div className="flex flex-col items-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="h-20 w-20 rounded-3xl bg-foreground text-background flex items-center justify-center shadow-none mb-4">
          <Sparkles className="h-10 w-10" />
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-black tracking-tighter leading-tight text-foreground">
            Nettuno
          </h1>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground opacity-50">
            Accademia di Belle Arti
          </p>
        </div>
      </div>

      {/* Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-12 delay-200 duration-1000 fill-mode-both">
        
        {/* Studente */}
        <Link href="/login?role=studente" className="group">
          <div className="bento-card h-[400px] bg-card hover:bg-muted/30 border border-border/40 cursor-pointer overflow-hidden relative">
            <div className="z-10 relative h-full flex flex-col justify-between">
              <div>
                <div className="h-14 w-14 rounded-2xl bg-bento-blue/50 flex items-center justify-center mb-6 text-foreground">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-black tracking-tighter text-foreground mb-2">Area Studenti</h2>
                <p className="text-muted-foreground font-medium max-w-[200px]">Gestisci il tuo piano di studi, esami e comunicazioni.</p>
              </div>
              <div className="flex items-center text-sm font-black uppercase tracking-widest text-foreground group-hover:translate-x-2 transition-transform">
                Entra <span className="ml-2">→</span>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 h-64 w-64 bg-bento-blue/20 rounded-full blur-3xl group-hover:bg-bento-blue/40 transition-colors" />
          </div>
        </Link>

        {/* Docente */}
        <Link href="/login?role=docente" className="group">
          <div className="bento-card h-[400px] bg-card hover:bg-muted/30 border border-border/40 cursor-pointer overflow-hidden relative">
            <div className="z-10 relative h-full flex flex-col justify-between">
              <div>
                <div className="h-14 w-14 rounded-2xl bg-bento-pink/50 flex items-center justify-center mb-6 text-foreground">
                  <UserCog className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-black tracking-tighter text-foreground mb-2">Area Docenti</h2>
                <p className="text-muted-foreground font-medium max-w-[200px]">Gestisci i tuoi corsi, verbali e ricevi i tuoi studenti.</p>
              </div>
              <div className="flex items-center text-sm font-black uppercase tracking-widest text-foreground group-hover:translate-x-2 transition-transform">
                Entra <span className="ml-2">→</span>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 h-64 w-64 bg-bento-pink/20 rounded-full blur-3xl group-hover:bg-bento-pink/40 transition-colors" />
          </div>
        </Link>

      </div>

      <p className="mt-16 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-30">
        Nettuno v4.0 • Redesign Project
      </p>
    </div>
  );
}
