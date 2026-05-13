# Componenti UI — Sistema "" (v2.0)

## 📐 Griglia e Geometria
Il sistema  si basa sul concetto di **Deep Bento**.
- **Corner Radius Esterno**: `1.5rem` (24px) per le sezioni principali e card.
- **Corner Radius Interno**: `0.75rem` (12px) per elementi UI interni (input, bottoni piccoli, avatar).
- **Radius Dialog/Hero**: `2.5rem` (40px) per un look ultra-moderno e morbido.

## 🔘 Bottoni (Buttons)
Basati sul componente `Button` di shadcn/ui ma con logica cromatica .

### 1. Primary
- **Colore**: `bg-primary` (Violet-500/400), testo `text-primary-foreground`.
- **Uso**: Azioni determinanti, navigazione attiva, login.
- **Micro-interazione**: `active:scale-95 transition-all`.

### 2. Destructive / Critical
- **Colore**: `bg-role-critical` o `bg-destructive` (Coral), testo contrastante.
- **Uso**: Logout, cancellazioni, avvisi urgenti.

### 3. Ghost / Surface
- **Colore**: `bg-muted/30` o trasparente.
- **Uso**: Pulsanti 'Indietro', azioni secondarie.

## ⌨️ Form Elements
- **Input**: Altezza `h-16` per touch-target ottimale, `rounded-[1.25rem]`, `bg-card` o `bg-muted/30`.
- **Label**: `uppercase font-black text-[10px] tracking-widest`.
- **Focus**: Ring sottile `primary/20`.

## 🗂️ Cards (Bento Boxes)
- **Standard**: `bg-card`, border `border-border/40` (o borderless se su sfondo canvas).
- **Semantic**: Possono assumere il colore del ruolo (es. `bg-role-success`).
- **Feedback**: `hover:scale-[1.01] duration-300`.

## 📑 Navigazione
- **Mobile Bottom Nav**: Floating dock `h-14` contenuto in un safe-area container `h-24`.
- **Sidebar**: Larghezza `w-72`, `rounded-[2rem]`, staccata dai bordi della pagina (Floating Sidebar).
