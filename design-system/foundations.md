# Fondamenta del Design

## 🎨 Colori (Brand & UI)
Usiamo un approccio basato su variabili CSS per supportare nativamente la Dark Mode.

### Core Colors
- **Foreground**: `#000000` (Light) / `#FFFFFF` (Dark) - Testi e icone principali.
- **Background**: `#FFFFFF` (Light) / `#09090b` (Dark) - Sfondo principale.
- **Card**: `#F4F4F5` (Light / `muted/30`) / `#18181b` (Dark) - Sfondi di sezioni e card.
- **Border**: `border-border/40` - Bordi sottili e discreti.

### Accent Colors (Bento Style)
- **Blue**: `bg-blue-100/50` / `dark:bg-blue-900/30` (Area Studenti)
- **Pink**: `bg-rose-100/50` / `dark:bg-rose-900/30` (Area Docenti)
- **Green**: `text-emerald-500` (Successo / Conferme)
- **Red**: `text-red-500` (Errori / Allerta presenze)

## ✍️ Tipografia
- **Font Family**: `Instrument Sans` (Variable)
- **Stile**: Black (900) per i titoli, Medium (500) per il corpo del testo.

### Scale
- **H1**: `text-2xl md:text-4xl` (font-black, tracking-tighter)
- **H2**: `text-xl md:text-2xl` (font-black, tracking-tight)
- **Body**: `text-sm md:text-base` (font-medium)
- **Label/Caption**: `text-[10px]` (font-black, uppercase, tracking-widest)

## 📏 Spazi & Griglie
- **Unit Base**: `4px`
- **Border Radius**:
  - `rounded-full`: Pulsanti circolari, avatar.
  - `rounded-2xl` (1rem): Pulsanti standard, input.
  - `rounded-[1.5rem]` (1.5rem): Card piccole, menu.
  - `rounded-[2rem]` (2rem): Card grandi, Dashboard sections.

### Layout Padding
- **Mobile**: `px-6`
- **Desktop**: `md:px-8` (Content max-width: `1280px`)
- **Gap Generale**: `gap-8` o `gap-12` per separare le macro-sezioni.
