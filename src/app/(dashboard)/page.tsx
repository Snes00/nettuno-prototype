import { 
  AlertCircle, 
  BookOpen, 
  Clock, 
  MapPin, 
  ChevronRight,
  Calendar,
  Bell,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { cn } from "@/lib/utils";

const AVVISI = [
  { id: 1, titolo: "Lezione annullata", descrizione: "Anatomia Artistica annullata per domani.", ora: "10:30", icon: AlertCircle, color: "text-red-600" },
  { id: 2, titolo: "Tassa in scadenza", descrizione: "Seconda rata entro il 30 Aprile.", ora: "Ieri", icon: Bell, color: "text-amber-600" },
  { id: 3, titolo: "Variazione Aula", descrizione: "Pittura I spostata in Aula 4.", ora: "2gg fa", icon: MapPin, color: "text-blue-600" },
  { id: 4, titolo: "Seminario Erasmus", descrizione: "Incontro informativo ore 15:00.", ora: "12 Apr", icon: Calendar, color: "text-purple-600" },
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
             <button className="bg-[#166534] text-white rounded-full px-8 h-14 font-bold shadow-none hover:bg-[#166534]/90 transition-all active:scale-95">
                Prendi Presenza
             </button>
          </div>
        </div>

        {/* Azioni Rapide (Bento White) */}
        <div className="md:col-span-4 bg-white border border-[#E5E2DA] rounded-[2.5rem] p-8 flex flex-col gap-6">
           <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]">Azioni Rapide</span>
           </div>
           <QuickActions />
        </div>

        {/* Centro Avvisi (Bento Pink) - Contenitore Unico */}
        <div className="md:col-span-12 bg-[#FEE2E2] rounded-[2.5rem] p-8 flex flex-col gap-6">
           <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-2">
                 <AlertCircle className="h-5 w-5 text-[#991b1b]" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-[#991b1b]/60">Centro Avvisi</span>
              </div>
              <Badge className="bg-[#991b1b] text-white border-none rounded-full px-3">4 nuovi</Badge>
           </div>

           <div className="bg-white/40 rounded-[1.5rem] overflow-hidden">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-[#991b1b]/5 text-[10px] font-black uppercase tracking-widest text-[#991b1b]/40">
                       <th className="px-6 py-4 font-black">Avviso</th>
                       <th className="px-6 py-4 font-black hidden md:table-cell">Dettaglio</th>
                       <th className="px-6 py-4 font-black text-right">Data</th>
                    </tr>
                 </thead>
                 <tbody>
                    {AVVISI.map((avviso) => (
                       <tr key={avviso.id} className="group cursor-pointer hover:bg-white/40 transition-colors border-b border-[#991b1b]/5 last:border-0">
                          <td className="px-6 py-4">
                             <div className="flex items-center gap-3">
                                <avviso.icon className={cn("h-4 w-4", avviso.color)} />
                                <span className="font-bold text-[#991b1b] text-sm md:text-base">{avviso.titolo}</span>
                             </div>
                          </td>
                          <td className="px-6 py-4 hidden md:table-cell">
                             <span className="text-sm text-[#991b1b]/60 font-medium">{avviso.descrizione}</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                             <span className="text-xs font-bold text-[#991b1b]/40">{avviso.ora}</span>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           <div className="flex justify-center md:justify-end mt-2">
              <Button className="rounded-full bg-[#991b1b] text-white hover:bg-[#991b1b]/90 font-bold px-8 h-12 gap-2 shadow-none">
                 Vedi tutti gli avvisi (12)
                 <ArrowRight className="h-4 w-4" />
              </Button>
           </div>
        </div>

      </div>
    </div>
  );
}
