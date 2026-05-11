import { 
  AlertCircle, 
  BookOpen, 
  Clock, 
  MapPin, 
  ChevronRight,
  Calendar,
  Bell,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TeacherQuickActions } from "@/components/dashboard/docente/TeacherQuickActions";

const AVVISI = [
  { id: 1, titolo: "Appello Straordinario", descrizione: "Richiesta apertura appello per Pittura II.", ora: "11:15", icon: AlertCircle, color: "text-[#991b1b]" },
  { id: 2, titolo: "Verbale da firmare", descrizione: "3 verbali in attesa di firma digitale.", ora: "Oggi", icon: Bell, color: "text-amber-700" },
  { id: 3, titolo: "Ricevimento Studenti", descrizione: "Marco Bianchi ha prenotato per domani.", ora: "Ieri", icon: Users, color: "text-blue-700" },
  { id: 4, titolo: "Consiglio Accademico", descrizione: "Convocazione per il 15 Maggio.", ora: "3gg fa", icon: Calendar, color: "text-purple-700" },
];

export default function DocenteDashboardPage() {
  return (
    <div className="flex flex-col gap-12 animate-in fade-in duration-500">
      {/* Header Benvenuto */}
      <section>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase">
          Benvenuto prof rossi.
        </h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Colonna Sinistra: Comunicazioni + Attività */}
        <div className="md:col-span-8 space-y-12">
          
          {/* Sezione Comunicazioni */}
          <section className="bg-card rounded-[2rem] p-8 md:p-10 border-none shadow-none space-y-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-black tracking-tighter uppercase">Comunicazioni</h2>
                <Badge className="bg-foreground text-background border-none rounded-full px-4 h-7 font-black text-[10px] uppercase">
                  2 Urgenti
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              {AVVISI.slice(0, 3).map((avviso) => (
                <div key={avviso.id} className="group flex items-center justify-between p-6 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-all cursor-pointer">
                  <div className="space-y-1">
                    <p className="font-black text-sm uppercase tracking-tight">{avviso.titolo}</p>
                    <p className="text-xs font-bold text-muted-foreground">{avviso.descrizione}</p>
                  </div>
                  <span className="text-[10px] font-black text-muted-foreground opacity-50">{avviso.ora}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button className="text-xs font-black uppercase tracking-widest hover:underline flex items-center gap-2">
                Vedi tutte <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </section>

          {/* Sezione Attività di Oggi */}
          <section className="space-y-6">
            <h2 className="text-xl font-black tracking-tighter uppercase px-2">Attività di oggi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Lezione In Corso */}
              <div className="bg-card rounded-[2rem] p-8 space-y-8 relative group cursor-pointer hover:bg-muted/20 transition-all">
                <div className="flex justify-between items-start">
                  <Badge className="bg-foreground text-background border-none rounded-full px-3 h-6 font-black text-[9px] uppercase">
                    In Corso
                  </Badge>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-black tracking-tighter leading-none uppercase">Web Design 1</h3>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Triennio</p>
                </div>
                <div className="flex flex-col gap-2">
                   <div className="flex items-center gap-2 text-xs font-black">
                      <Clock className="h-4 w-4" /> 14:00 / 18:00
                   </div>
                   <div className="flex items-center gap-2 text-xs font-black">
                      <MapPin className="h-4 w-4" /> Aula 12
                   </div>
                </div>
                <div className="absolute bottom-8 right-8 h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                   <BookOpen className="h-5 w-5" />
                </div>
              </div>

              {/* Lezione Terminata */}
              <div className="bg-card rounded-[2rem] p-8 space-y-8 relative opacity-60 group cursor-pointer hover:opacity-100 transition-all">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="border-foreground text-foreground rounded-full px-3 h-6 font-black text-[9px] uppercase">
                    Terminata
                  </Badge>
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-black tracking-tighter leading-none uppercase">Web Design</h3>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Biennio</p>
                </div>
                <div className="flex flex-col gap-2">
                   <div className="flex items-center gap-2 text-xs font-black">
                      <Clock className="h-4 w-4" /> 08:00 / 12:00
                   </div>
                   <div className="flex items-center gap-2 text-xs font-black">
                      <MapPin className="h-4 w-4" /> Aula 15
                   </div>
                </div>
                <div className="absolute bottom-8 right-8 h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                   <BookOpen className="h-5 w-5" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Colonna Destra: Azioni Rapide */}
        <div className="md:col-span-4 sticky top-32">
          <section className="bg-card rounded-[2rem] p-8 md:p-10 space-y-8 min-h-[400px] flex flex-col">
            <h2 className="text-xl font-black tracking-tighter uppercase">Azioni Rapide</h2>
            <div className="flex-1">
              <TeacherQuickActions />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
