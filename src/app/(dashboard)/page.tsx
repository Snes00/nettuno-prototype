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
  { id: 1, titolo: "Lezione annullata", descrizione: "Anatomia Artistica annullata per domani.", ora: "10:30", icon: AlertCircle, color: "text-[#991b1b]" },
  { id: 2, titolo: "Tassa in scadenza", descrizione: "Seconda rata entro il 30 Aprile.", ora: "Ieri", icon: Bell, color: "text-amber-700" },
  { id: 3, titolo: "Variazione Aula", descrizione: "Pittura I spostata in Aula 4.", ora: "2gg fa", icon: MapPin, color: "text-blue-700" },
  { id: 4, titolo: "Seminario Erasmus", descrizione: "Incontro informativo ore 15:00.", ora: "12 Apr", icon: Calendar, color: "text-purple-700" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-500">
      {/* Intestazione Allineata alla griglia */}
      <section className="space-y-1">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1A1917]">Dashboard</h1>
        <p className="text-[#7C7A77] text-lg md:text-xl font-medium tracking-tight">
          Bentvenuto, studente. Ecco cosa succede oggi.
        </p>
      </section>

      {/* Grid Bento reale a 12 colonne con gap rigoroso (24px) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Lezione Imminente (Bento Green) - 8 Colonne */}
        <div className="md:col-span-8 bg-[#DCFCE7] rounded-[2.5rem] p-8 md:p-10 min-h-[340px] flex flex-col justify-between group">
          <div className="flex justify-between items-start">
             <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#166534]/60">Lezione Imminente</span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#166534] leading-[0.9]">Pittura e Arti <br />Visive I</h2>
             </div>
             <div className="h-14 w-14 rounded-2xl bg-[#166534]/10 flex items-center justify-center">
                <BookOpen className="h-7 w-7 text-[#166534]" />
             </div>
          </div>
          <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
             <div className="space-y-2 w-full">
                <p className="text-xl font-bold text-[#166534]">Prof. Alessandro Rossi</p>
                <div className="flex flex-wrap gap-4 text-sm font-bold text-[#166534]/70">
                   <span className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-xl"><Clock className="h-4 w-4" /> 09:00 - 13:00</span>
                   <span className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-xl"><MapPin className="h-4 w-4" /> Aula Magno</span>
                </div>
             </div>
             <button className="w-full md:w-auto bg-[#166534] text-white rounded-2xl px-10 h-14 font-black text-lg shadow-none hover:bg-[#166534]/90 transition-all active:scale-95 shrink-0">
                Presenza
             </button>
          </div>
        </div>

        {/* Azioni Rapide (Bento White) - 4 Colonne */}
        <div className="md:col-span-4 bg-white border border-[#E5E2DA] rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-8">
           <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4A4947]">Azioni Rapide</span>
           </div>
           <QuickActions />
        </div>

        {/* Centro Avvisi (Bento Pink) - 12 Colonne */}
        <div className="md:col-span-12 bg-[#FEE2E2] rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-8">
           <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-3">
                 <div className="h-10 w-10 rounded-xl bg-[#991b1b]/10 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-[#991b1b]" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#991b1b]/60">Centro Avvisi</span>
              </div>
              <Badge className="bg-[#991b1b] text-white border-none rounded-full px-4 h-8 font-black">4 Nuovi</Badge>
           </div>

           <div className="bg-white/40 rounded-2xl overflow-hidden border border-[#991b1b]/5">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-[#991b1b]/5 text-[10px] font-black uppercase tracking-[0.2em] text-[#991b1b]/40">
                       <th className="px-8 py-4">Categoria / Titolo</th>
                       <th className="px-8 py-4 hidden md:table-cell">Descrizione</th>
                       <th className="px-8 py-4 text-right">Data</th>
                    </tr>
                 </thead>
                 <tbody>
                    {AVVISI.map((avviso) => (
                       <tr key={avviso.id} className="group cursor-pointer hover:bg-white/40 transition-colors border-b border-[#991b1b]/5 last:border-0">
                          <td className="px-8 py-5">
                             <div className="flex items-center gap-4">
                                <span className={cn("font-black text-base tracking-tight", avviso.color)}>{avviso.titolo}</span>
                             </div>
                          </td>
                          <td className="px-8 py-5 hidden md:table-cell">
                             <span className={cn("text-sm font-bold opacity-60", avviso.color)}>{avviso.descrizione}</span>
                          </td>
                          <td className="px-8 py-5 text-right">
                             <span className={cn("text-xs font-black opacity-30", avviso.color)}>{avviso.ora}</span>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           <div className="flex justify-center md:justify-end">
              <Button className="rounded-2xl bg-[#991b1b] text-white hover:bg-[#991b1b]/90 font-black px-10 h-14 gap-3 shadow-none text-base">
                 Tutti gli avvisi (12)
                 <ArrowRight className="h-5 w-5" />
              </Button>
           </div>
        </div>

      </div>
    </div>
  );
}
