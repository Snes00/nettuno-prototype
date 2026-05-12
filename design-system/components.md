# Componenti UI

## 🔘 Bottoni (Buttons)
Basati sul componente `Button` di shadcn/ui.

### 1. Primary (Default)
- **Stile**: Sfondo `foreground`, testo `background`.
- **Uso**: Azioni principali (Accedi, Invia, Conferma).
- **Radius**: `rounded-2xl` o `rounded-full` (se icon-only).

### 2. Ghost / Muted
- **Stile**: Sfondo trasparente o `muted/30`.
- **Uso**: Azioni secondarie, navigazione, pulsanti 'Indietro'.

### 3. Circular (Back Button)
- **Specifiche**: `h-11 w-11 rounded-full bg-muted/30`.
- **Icona**: `ArrowLeft` (h-5 w-5).

## ⌨️ Input
- **Stile**: `h-14`, `rounded-2xl`, `bg-muted/30`, `border-none`.
- **Placeholder**: Testo `muted-foreground`, font `bold`.
- **Focus**: `ring-foreground` (minimo).

## 🗂️ Card
- **Bento Style**: Grandi raccordi (`rounded-[2rem]`), senza bordi, sfondo `bg-card`.
- **Padding**: `p-8` o `p-10`.
- **Hover**: `hover:bg-muted/50` o leggera traslazione (`active:scale-95`).

## 📑 Navigazione
- **Mobile Bottom Nav**: `h-20` (altezza totale), icone centrate.
- **Desktop Sidebar**: `w-72`, `fixed`, posizionata a `top-28` per non sovrapporsi al logo globale.
