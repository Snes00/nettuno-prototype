import { 
  AlertCircle, 
  BookOpen, 
  Clock, 
  MapPin, 
  ChevronRight,
  ArrowUpRight,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 pb-12 animate-in fade-in duration-500">
      {/* Intestazione Bento */}
      <section className="px-1 flex justify-between items-end">
        <div className="space-y-1">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1917]">Dashboard</h1>
          <p className="text-[#7C7A77] text-base md:text-lg font-medium">
            Good morning, Dr. Olivia.
          </p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="rounded-full h-12 w-12 p-0 bg-white border-none shadow-sm">
              <Plus className="h-6 w-6" />
           </Button>
        </div>
      </section>

      {/* Grid Bento Principal */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Card Lezione (Gialla) */}
        <div className="md:col-span-8 bg-[#FEF9C3] rounded-[2.5rem] p-8 min-h-[320px] flex flex-col justify-between group cursor-pointer transition-all hover:opacity-90">
          <div className="flex justify-between items-start">
             <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#854d0e]/60">Lezione Imminente</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#854d0e]">Pittura e Arti <br />Visive I</h2>
             </div>
             <div className="h-12 w-12 rounded-full bg-[#854d0e]/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-[#854d0e]" />
             </div>
          </div>
          <div className="flex items-end justify-between">
             <div className="space-y-1">
                <p className="text-lg font-bold text-[#854d0e]">Prof. Alessandro Rossi</p>
                <div className="flex gap-4 text-sm font-semibold text-[#854d0e]/70">
                   <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 09:00 - 13:00</span>
                   <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Aula Magno</span>
                </div>
             </div>
             <Button className="bg-[#854d0e] text-white rounded-full px-8 h-14 font-bold shadow-none">
                Prendi Presenza
             </Button>
          </div>
        </div>

        {/* Card Status (Rosa) */}
        <div className="md:col-span-4 bg-[#FEE2E2] rounded-[2.5rem] p-8 flex flex-col justify-between group cursor-pointer hover:opacity-90">
           <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#991b1b]/60">Tasse & Ammin</span>
              <ArrowUpRight className="h-6 w-6 text-[#991b1b]" />
           </div>
           <div className="space-y-1">
              <p className="text-4xl font-bold text-[#991b1b]">€ 380</p>
              <p className="text-sm font-bold text-[#991b1b]/70 italic leading-tight">Seconda rata in scadenza <br />il 20 Aprile 2026</p>
           </div>
           <Button variant="outline" className="w-full rounded-full border-[#991b1b]/20 text-[#991b1b] font-bold h-12 bg-white/20">
              Vedi Carriera
           </Button>
        </div>

        {/* Card Avvisi (Azzurra) */}
        <div className="md:col-span-4 bg-[#DBEAFE] rounded-[2.5rem] p-8 flex flex-col gap-6 group cursor-pointer hover:opacity-90">
           <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1e40af]/60">Avvisi Critici</span>
              <Badge className="bg-[#1e40af]/10 text-[#1e40af] border-none text-[10px] font-bold">New</Badge>
           </div>
           <div className="space-y-4">
              <p className="text-xl font-bold text-[#1e40af] leading-tight pr-4">Lezione di Anatomia Artistica annullata per domani.</p>
              <div className="h-px w-full bg-[#1e40af]/10" />
              <p className="text-sm font-bold text-[#1e40af]/70">Nuovi materiali disponibili per Fotografia.</p>
           </div>
           <div className="mt-auto">
              <span className="text-xs font-bold text-[#1e40af] underline decoration-2 underline-offset-4">Vedi tutti (12)</span>
           </div>
        </div>

        {/* Card Quick Actions (Grigia) */}
        <div className="md:col-span-8 bg-[#FFFFFF] border-none rounded-[2.5rem] p-8 flex flex-col gap-6">
           <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#4A4947]">Azioni Rapide</span>
              <span className="text-[10px] font-bold text-[#4A4947]/40 uppercase tracking-widest">Personalizza</span>
           </div>
           <div className="bg-transparent">
              <QuickActions />
           </div>
        </div>

      </div>
    </div>
  );
}
