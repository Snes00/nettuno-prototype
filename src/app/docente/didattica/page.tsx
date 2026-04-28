import { Construction } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 animate-in fade-in duration-500">
      <div className="h-20 w-20 rounded-3xl bg-muted flex items-center justify-center">
        <Construction className="h-10 w-10 text-muted-foreground" />
      </div>
      <h1 className="text-3xl font-black tracking-tighter capitalize">didattica - Docente</h1>
      <p className="text-muted-foreground font-medium">Sezione in fase di implementazione...</p>
    </div>
  );
}
