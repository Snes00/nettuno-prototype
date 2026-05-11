import { 
  AlertCircle, 
  BookOpen, 
  Clock, 
  MapPin, 
  Calendar,
  Bell,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { cn } from "@/lib/utils";

const AVVISI = [
  { id: 1, titolo: "Lezione annullata", descrizione: "Anatomia Artistica annullata per domani.", ora: "10:30", icon: AlertCircle, color: "text-[#991b1b]" },
  { id: 2, titolo: "Tassa in scadenza", descrizione: "Seconda rata entro il 30 Aprile.", ora: "Ieri", icon: Bell, color: "text-amber-700" },
  { id: 3, titolo: "Variazione Aula", descrizione: "Pittura I spostata in Aula 4.", ora: "2gg fa", icon: MapPin, color: "text-blue-700" },
  { id: 4, titolo: "Seminario Erasmus", descrizione: "Incontro informativo ore 15:00.", ora: "12 Apr", icon: Calendar, color: "text-purple-700" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      <section className="space-y-1">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-base md:text-lg font-medium tracking-tight">
          Bentvenuto, studente. Ecco cosa succede oggi.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Lezione Imminente (Bento Green) */}
        <div className="md:col-span-8 bg-[var(--bento-green)] rounded-[1.5rem] p-8 md:p-10 min-h-[320px] flex flex-col justify-between group border-none shadow-none transition-colors">
          <div className="flex justify-between items-start">
             <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#166534]/60 dark:text-foreground/40">Lezione Imminente</span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#166534] dark:text-foreground leading-[0.95]">Pittura e Arti <br />Visive I</h2>
             </div>
             <div className="h-12 w-12 rounded-xl bg-[#166534]/10 dark:bg-white/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-[#166534] dark:text-foreground" />
             </div>
          </div>
          <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
             <div className="space-y-2 w-full">
                <p className="text-lg font-bold text-[#166534] dark:text-foreground/80">Prof. Alessandro Rossi</p>
                <div className="flex flex-wrap gap-4 text-sm font-bold text-[#166534]/70 dark:text-foreground/60">
                   <span className="flex items-center gap-2 bg-white/30 dark:bg-black/20 px-3 py-1.5 rounded-xl"><Clock className="h-4 w-4" /> 09:00 - 13:00</span>
                   <span className="flex items-center gap-2 bg-white/30 dark:bg-black/20 px-3 py-1.5 rounded-xl"><MapPin className="h-4 w-4" /> Aula Magno</span>
                </div>
             </div>
             <button className="w-full md:w-auto bg-[#166534] dark:bg-foreground dark:text-background text-white rounded-xl px-8 h-12 font-black text-base shadow-none hover:bg-[#166534]/90 transition-all active:scale-95 shrink-0">
                Presenza
             </button>
          </div>
        </div>

        {/* Azioni Rapide (Bento White/Card) */}
        <div className="md:col-span-4 bg-card rounded-[1.5rem] p-8 md:p-10 flex flex-col gap-6 border-none shadow-none transition-colors">
           <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Azioni Rapide</span>
           </div>
           <QuickActions />
        </div>

        {/* Centro Avvisi (Bento Pink) */}
        <div className="md:col-span-12 bg-[var(--bento-pink)] rounded-[1.5rem] p-8 md:p-10 flex flex-col gap-6 border-none shadow-none transition-colors">
           <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-3">
                 <AlertCircle className="h-5 w-5 text-[#991b1b] dark:text-foreground" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#991b1b]/60 dark:text-foreground/40">Centro Avvisi</span>
              </div>
              <Badge className="bg-[#991b1b] dark:bg-foreground dark:text-background text-white border-none rounded-full px-3 h-7 font-black">4 Nuovi</Badge>
           </div>

           <div className="bg-white/40 dark:bg-black/20 rounded-xl overflow-hidden border-none shadow-none">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-[#991b1b]/5 dark:border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-[#991b1b]/40 dark:text-foreground/20">
                       <th className="px-8 py-3">Titolo</th>
                       <th className="px-8 py-3 hidden md:table-cell">Descrizione</th>
                       <th className="px-8 py-3 text-right">Data</th>
                    </tr>
                 </thead>
                 <tbody>
                    {AVVISI.map((avviso) => (
                       <tr key={avviso.id} className="group cursor-pointer hover:bg-white/40 dark:hover:bg-white/5 transition-colors border-b border-[#991b1b]/5 dark:border-white/5 last:border-0">
                          <td className="px-8 py-4">
                             <span className={cn("font-bold text-sm tracking-tight", avviso.color, "dark:text-foreground")}>{avviso.titolo}</span>
                          </td>
                          <td className="px-8 py-4 hidden md:table-cell">
                             <span className={cn("text-xs font-bold opacity-60", avviso.color, "dark:text-foreground/60")}>{avviso.descrizione}</span>
                          </td>
                          <td className="px-8 py-4 text-right">
                             <span className={cn("text-xs font-black opacity-30", avviso.color, "dark:text-foreground/40")}>{avviso.ora}</span>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           <div className="flex justify-center md:justify-end mt-2">
              <Button className="rounded-xl bg-[#991b1b] dark:bg-foreground dark:text-background text-white hover:bg-[#991b1b]/90 font-black px-8 h-12 gap-2 shadow-none text-sm">
                 Tutti gli avvisi (12)
                 <ArrowRight className="h-4 w-4" />
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
