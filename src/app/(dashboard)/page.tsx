import { 
  AlertCircle, 
  BookOpen, 
  Clock, 
  MapPin, 
  Sparkles,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Intestazione Premium */}
      <section className="px-1 space-y-2">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles className="h-4 w-4 fill-primary" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Buona giornata</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
          Ciao, <span className="text-primary">Studente</span>.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-medium tracking-tight">
          Ecco il tuo riepilogo per oggi, <span className="text-foreground">Martedì 14 Aprile</span>.
        </p>
      </section>

      {/* Widget OGGI - Design Rivoluzionato */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">Lezione Imminente</h2>
          <Badge variant="outline" className="rounded-full border-primary/20 text-primary px-3">Live ora</Badge>
        </div>
        
        <Card className="group relative overflow-hidden rounded-[2.5rem] border-none bg-gradient-to-br from-[#1a1a1a] via-primary/90 to-primary text-white shadow-2xl shadow-primary/20 transition-all duration-500 hover:scale-[1.01] active:scale-[0.99]">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          <CardHeader className="relative z-10 p-8 pb-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md rounded-lg px-3 py-1 text-[10px] font-bold">PITTURA E ARTI VISIVE I</Badge>
                <CardTitle className="text-3xl md:text-5xl font-black leading-none tracking-tighter">
                  Laboratorio <br />Creativo Avanzato
                </CardTitle>
                <CardDescription className="text-white/70 text-base md:text-lg font-medium italic">
                  Prof. Alessandro Rossi
                </CardDescription>
              </div>
              <div className="h-16 w-16 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center rotate-6 group-hover:rotate-12 transition-transform">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="relative z-10 p-8 pt-0">
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10">
                <Clock className="h-5 w-5 text-white/70" />
                <span className="text-sm font-bold tracking-tight">09:00 - 13:00</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10">
                <MapPin className="h-5 w-5 text-white/70" />
                <span className="text-sm font-bold tracking-tight">Aula Magna, Piano 1</span>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="relative z-10 p-2">
            <Button className="w-full bg-white text-primary hover:bg-white/90 font-black text-lg h-16 rounded-[1.8rem] transition-all shadow-xl active:scale-[0.98]">
              PRENDI PRESENZA ORA
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* AVVISI e AZIONI RAPIDE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Avvisi Critici - Look Contemporaneo */}
        <section className="lg:col-span-1 space-y-6">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">Notifiche Importanti</h2>
            <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-primary">Tutti</Button>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { id: 1, text: "Lezione di Anatomia annullata domani.", type: "urgent", time: "10m fa" },
              { id: 2, text: "Scadenza Tasse: 20 Aprile.", type: "warning", time: "2h fa" },
              { id: 3, text: "Nuovi materiali Fotografia.", type: "info", time: "Ieri" }
            ].map((avviso) => (
              <div key={avviso.id} className="flex gap-4 p-5 rounded-[1.8rem] border bg-card/50 hover:bg-card hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative overflow-hidden">
                <div className={cn(
                  "mt-1 shrink-0 rounded-2xl p-3 shadow-sm",
                  avviso.type === 'urgent' ? 'bg-red-500/10 text-red-600' :
                  avviso.type === 'warning' ? 'bg-amber-500/10 text-amber-600' :
                  'bg-blue-500/10 text-blue-600'
                )}>
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-40">{avviso.time}</span>
                  </div>
                  <p className="text-sm leading-tight font-bold group-hover:text-primary transition-colors pr-4">{avviso.text}</p>
                </div>
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </section>

        {/* Azioni Rapide Dinamiche */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">Servizi Rapidi</h2>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground/40" />
          </div>
          <div className="rounded-[2.5rem] bg-muted/20 p-2 border border-dashed border-muted-foreground/10">
             <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}
