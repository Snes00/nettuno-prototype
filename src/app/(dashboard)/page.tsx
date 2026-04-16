import { 
  AlertCircle, 
  BookOpen, 
  Clock, 
  MapPin, 
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 pb-12 animate-in fade-in duration-500">
      {/* Intestazione Originale */}
      <section className="px-1 space-y-1">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1917]">Dashboard</h1>
        <p className="text-[#7C7A77] text-base md:text-lg font-medium">
          Bentvenuto, studente. Ecco cosa succede oggi.
        </p>
      </section>

      {/* Grid Bento - Riequilibrata */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Lezione Imminente (Bento Green) - Priorità Alta */}
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

        {/* Azioni Rapide (Bento White) - Dimensione corretta e compatta */}
        <div className="md:col-span-4 bg-white border border-[#E5E2DA] rounded-[2.5rem] p-8 flex flex-col gap-6">
           <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]">Azioni Rapide</span>
           </div>
           <div className="bg-transparent overflow-hidden">
              {/* Qui QuickActions deve essere ottimizzato per stare in un col-span-4 */}
              <QuickActions />
           </div>
        </div>

        {/* Avvisi Critici (Bento Pink) - Sotto la lezione */}
        <div className="md:col-span-12 lg:col-span-12 bg-[#FEE2E2] rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-[#991b1b]/10 flex items-center justify-center shrink-0">
                 <AlertCircle className="h-6 w-6 text-[#991b1b]" />
              </div>
              <div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-[#991b1b]/60">Ultimo Avviso</span>
                 <p className="text-lg font-bold text-[#991b1b] leading-tight">Lezione di Anatomia Artistica annullata per domani.</p>
              </div>
           </div>
           <Button variant="outline" className="rounded-full border-[#991b1b]/20 text-[#991b1b] font-bold h-12 bg-white/20 whitespace-nowrap">
              Vedi tutti gli avvisi (12)
           </Button>
        </div>

      </div>
    </div>
  );
}
