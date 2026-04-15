import { 
  AlertCircle, 
  BookOpen, 
  Clock, 
  MapPin, 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuickActions } from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Intestazione */}
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Bentvenuto, studente. Ecco cosa succede oggi.</p>
      </section>

      {/* Widget OGGI */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-1">Lezione Imminente</h2>
        <Card className="border-l-4 border-l-primary shadow-sm overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <Badge variant="secondary" className="mb-2">In Corso</Badge>
                <CardTitle className="text-xl md:text-2xl">Pittura e Arti Visive I</CardTitle>
                <CardDescription className="text-base">Prof. Alessandro Rossi</CardDescription>
              </div>
              <CardAction>
                <Button size="sm" variant="outline" className="h-8 w-8 p-0 md:h-auto md:w-auto md:px-3 md:py-1">
                  <span className="hidden md:inline">Dettagli</span>
                  <BookOpen className="h-4 w-4 md:hidden" />
                </Button>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">09:00 - 13:00</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Aula Magno, Piano 1</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-primary/5 border-t border-primary/10">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 rounded-lg transition-all shadow-md active:scale-[0.98]">
              Prendi Presenza
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* AVVISI e AZIONI RAPIDE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Avvisi Urgenti */}
        <section className="lg:col-span-1 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-1">Avvisi Critici</h2>
          <div className="flex flex-col gap-3">
            {[
              { id: 1, text: "Lezione di Anatomia Artistica annullata per domani.", type: "urgent" },
              { id: 2, text: "Scadenza rata Tassa Regionale: 20 Aprile.", type: "warning" },
              { id: 3, text: "Nuovi materiali disponibili per il corso di Fotografia.", type: "info" }
            ].map((avviso) => (
              <div key={avviso.id} className="flex gap-3 p-3 rounded-xl border bg-card text-card-foreground shadow-sm transition-hover hover:bg-accent/50 group">
                <div className={`mt-0.5 shrink-0 rounded-full p-1.5 ${
                  avviso.type === 'urgent' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                  avviso.type === 'warning' ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' :
                  'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                }`}>
                  <AlertCircle className="h-4 w-4" />
                </div>
                <p className="text-sm leading-tight font-medium group-hover:text-foreground">{avviso.text}</p>
              </div>
            ))}
          </div>
          <Button variant="link" className="px-1 h-auto text-primary font-semibold">Vedi tutti gli avvisi</Button>
        </section>

        {/* Azioni Rapide Dinamiche */}
        <div className="lg:col-span-2">
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
