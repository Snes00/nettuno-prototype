import { 
  AlertCircle, 
  BookOpen, 
  Clock, 
  MapPin, 
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
    <div className="flex flex-col gap-8 pb-12">
      {/* Intestazione Flat */}
      <section className="px-1 space-y-1">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground text-base md:text-lg font-medium">
          Bentvenuto, studente. Ecco cosa succede oggi.
        </p>
      </section>

      {/* Widget OGGI - Flat Design */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Lezione Imminente</h2>
          <Badge variant="secondary" className="rounded-md px-3 bg-primary/10 text-primary border-none">In Corso</Badge>
        </div>
        
        <Card className="relative overflow-hidden rounded-2xl border bg-primary text-primary-foreground shadow-none">
          <CardHeader className="p-6 pb-2">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <CardTitle className="text-2xl md:text-4xl font-bold tracking-tight">
                  Pittura e Arti Visive I
                </CardTitle>
                <CardDescription className="text-primary-foreground/80 text-sm md:text-base font-medium">
                  Prof. Alessandro Rossi
                </CardDescription>
              </div>
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 pt-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Clock className="h-4 w-4 text-white/70" />
                <span className="text-sm font-semibold">09:00 - 13:00</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <MapPin className="h-4 w-4 text-white/70" />
                <span className="text-sm font-semibold">Aula Magno, Piano 1</span>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="p-6 pt-0">
            <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold h-12 rounded-xl transition-all shadow-none">
              Prendi Presenza
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* AVVISI e AZIONI RAPIDE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Avvisi Critici */}
        <section className="lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Avvisi Critici</h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {[
              { id: 1, text: "Lezione di Anatomia Artistica annullata per domani.", type: "urgent" },
              { id: 2, text: "Scadenza rata Tassa Regionale: 20 Aprile.", type: "warning" },
              { id: 3, text: "Nuovi materiali disponibili per il corso di Fotografia.", type: "info" }
            ].map((avviso) => (
              <div key={avviso.id} className="flex gap-4 p-4 rounded-xl border bg-card hover:bg-muted/50 transition-colors group cursor-pointer relative shadow-none">
                <div className={cn(
                  "mt-0.5 shrink-0 rounded-lg p-2",
                  avviso.type === 'urgent' ? 'bg-red-500/10 text-red-600' :
                  avviso.type === 'warning' ? 'bg-amber-500/10 text-amber-600' :
                  'bg-blue-500/10 text-blue-600'
                )}>
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm leading-tight font-bold pr-4">{avviso.text}</p>
                </div>
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </div>
          <Button variant="link" className="px-1 h-auto text-primary font-bold text-xs uppercase tracking-wider">Vedi tutti gli avvisi</Button>
        </section>

        {/* Azioni Rapide Dinamiche */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Azioni Rapide</h2>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground/40" />
          </div>
          <div className="rounded-2xl border bg-muted/20 p-2 shadow-none">
             <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}
