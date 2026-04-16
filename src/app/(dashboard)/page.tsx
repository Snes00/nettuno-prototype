import { 
  AlertCircle, 
  BookOpen, 
  Clock, 
  MapPin, 
  ChevronRight,
  Calendar,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { cn } from "@/lib/utils";

const AVVISI = [
  { id: 1, titolo: "Lezione annullata", descrizione: "La lezione di Anatomia Artistica è annullata per domani.", colore: "text-[#991b1b]", bg: "bg-[#FEE2E2]", iconBg: "bg-[#991b1b]/10", icon: AlertCircle },
  { id: 2, titolo: "Tassa in scadenza", descrizione: "Seconda rata in scadenza il 30 Aprile. Regolarizza subito.", colore: "text-amber-700", bg: "bg-amber-50", iconBg: "bg-amber-100", icon: Bell },
  { id: 3, titolo: "Variazione Aula", descrizione: "Pittura I si terrà in Aula 4 invece che in Aula Magna.", colore: "text-blue-700", bg: "bg-blue-50", iconBg: "bg-blue-100", icon: MapPin },
  { id: 4, titolo: "Seminario Erasmus", descrizione: "Incontro informativo per borse 2026/27, ore 15:00.", colore: "text-purple-700", bg: "bg-purple-50", iconBg: "bg-purple-100", icon: Calendar },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 pb-12 animate-in fade-in duration-500">
      {/* Intestazione */}
      <section className="px-1 space-y-1">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1917]">Dashboard</h1>
        <p className="text-[#7C7A77] text-base md:text-lg font-medium">
          Bentvenuto, studente. Ecco cosa succede oggi.
        </p>
      </section>

      {/* Grid Bento */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Lezione Imminente (Bento Green) */}
        <div className="md:col-span-8 bg-[#DCFCE7] rounded-[2.5rem] p-8 min-h-[300px] flex flex-col justify-between group">
          <div className="flex justify-between items-start">
             <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#166534]/60">Lezione Imminente</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#166534]">Pittura e Arti <br />Visive I</h2>
             </div>
             <div className="h-12 w-12 rounded-full bg-[#166534]/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-[#166534]" />
             </div>
          </div>
          <div className="flex items-end justify-between">
             <div className="space-y-1">
                <p className="text-lg font-bold text-[#166534]">Prof. Alessandro Rossi</p>
                <div className="flex gap-4 text-sm font-semibold text-[#166534]/70">
                   <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 09:00 - 13:00</span>
                   <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Aula Magno</span>
                </div>
             </div>
             <Button className="bg-[#166534] text-white rounded-full px-8 h-14 font-bold shadow-none hover:bg-[#166534]/90">
                Prendi Presenza
             </Button>
          </div>
        </div>

        {/* Azioni Rapide (Bento White) */}
        <div className="md:col-span-4 bg-white border border-[#E5E2DA] rounded-[2.5rem] p-8 flex flex-col gap-6">
           <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]">Azioni Rapide</span>
           </div>
           <QuickActions />
        </div>

        {/* Sezione Avvisi - Griglia 2x2 su mobile/tablet, lista su desktop */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {AVVISI.map((avviso) => (
             <div key={avviso.id} className={cn("rounded-[2rem] p-6 flex flex-col gap-4 transition-all hover:scale-[1.02]", avviso.bg)}>
                <div className="flex items-center justify-between">
                   <div className={cn("h-10 w-10 rounded-full flex items-center justify-center", avviso.iconBg)}>
                      <avviso.icon className={cn("h-5 w-5", avviso.colore)} />
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Oggi</span>
                </div>
                <div>
                   <h3 className={cn("font-bold text-lg leading-tight mb-1", avviso.colore)}>{avviso.titolo}</h3>
                   <p className={cn("text-xs font-medium opacity-70 leading-relaxed", avviso.colore)}>{avviso.descrizione}</p>
                </div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
}
