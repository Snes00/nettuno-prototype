# STRATO v2.1 — Design System Nettuno
> Documento autorevole. In caso di conflitto con foundations.md o components.md, questo prevale.
> Ultimo aggiornamento: 2026-05-16

---

## 1. Visione Visiva

### Intenzione originale
L'interfaccia di Nettuno deve sembrare un'**app nativa moderna**, non un portale istituzionale. I riferimenti visivi mostrano:

- **Bento grid ad alto contrasto** — card colorate con colori pieni (non tinte), testo nero o bianco direttamente sopra
- **Icone grandi e dirette** — non in piccoli box, ma protagoniste della card
- **Tipografia ultra-bold** — `font-black`, uppercase, tracking ampio per ogni label
- **Un colore per tile** — ogni azione/categoria ha il suo colore, non tutti grigi neutri
- **Sfondo canvas, non bianco** — `#EEEDF2` come base, le card bianche galleggiano sopra
- **Contrasto netto** — ogni elemento deve essere leggibile al primo sguardo (WCAG AA minimo, AAA dove possibile)

### Cosa evitare
- Tinte pallide con opacità (`bg-role-success/10`, `bg-role-info/20`) come sfondo tile — annullano il contrasto cromatico
- Usare `bg-role-*` in light mode e aspettarsi un look tenue: **i role-* ora sono vividi**, non pastello
- Testo muted su muted — perde leggibilità
- Card bianche su sfondo bianco — non c'è gerarchia
- Icone piccole in box piccoli dove basterebbe l'icona grande diretta
- Testo `text-role-*-fg` su sfondo non `bg-role-*` — contrasto non garantito fuori contesto

---

## 2. Token di Colore

### 2.1 Surface (Backgrounds)

| Token CSS | Light (#hex) | Dark (#hex) | Uso |
|---|---|---|---|
| `background` | `#EEEDF2` | `#0F0E14` | Canvas pagina — MAI sostituire con bianco |
| `card` | `#FFFFFF` | `#1E1C2A` | Card bento, contenitori principali |
| `muted` | `#F6F5F9` | `#16151E` | TabsList, input, sidebar, slot secondari |
| `foreground` | `#14131A` | `#E4E2EC` | Testo principale, icone attive |
| `muted-foreground` | `#7E7B8A` | `#9E9BAA` | Testo secondario, label info (non critiche) |
| `border` | `#E4E2EC` | `#2E2C3A` | Bordi sottili, separatori |

### 2.2 Azione Primaria

| Token | Light | Dark | Uso |
|---|---|---|---|
| `primary` | `#6547E8` (Violet-500) | `#8470EF` (Violet-400) | CTA, tab attivo, focus ring |
| `primary-foreground` | `#FFFFFF` | `#0F0E14` | Testo/icone su sfondo primary |

Contrasto `primary-foreground` su `primary`: **5.5:1 — WCAG AA ✓**

### 2.3 Ruoli Semantici

I token `role-*` hanno due varianti:
- **`role-{ruolo}`** = sfondo saturo vivido (Light) / sfondo scuro saturo (Dark) → per tile bento, icon-box, badge background
- **`role-{ruolo}-fg`** = testo/icona ad alto contrasto → sempre sopra il rispettivo `role-{ruolo}`

#### Light mode — palette vivida (Strato v2.1)

I `role-*` light ora usano colori **saturi al 400–600 level**, non tinte pallide. Questo produce il look "bento colorato" del riferimento visivo.

| Ruolo | `role-*` Light | `role-*-fg` Light | Contrasto | Level |
|---|---|---|---|---|
| `info` | `#22D3EE` (Cyan-400) | `#083344` (Cyan-950) | **10.9:1** | AAA ✓ |
| `success` | `#A3E635` (Lime-400) | `#1A2E00` (Lime-950) | **13.3:1** | AAA ✓ |
| `warning` | `#FCD34D` (Amber-300) | `#451A00` (Amber-950) | **11.4:1** | AAA ✓ |
| `critical` | `#FB7185` (Rose-400) | `#4C0519` (Rose-950) | **7.2:1** | AAA ✓ |
| `accent` | `#7C3AED` (Violet-600) | `#FFFFFF` (White) | **5.7:1** | AA ✓ |

**Pattern fg per tile light:**
- `info`, `success`, `warning`, `critical` → **dark text** (il bg è vivido ma chiaro)
- `accent` → **white text** (il bg è scuro)

#### Dark mode — ruoli semantici

| Ruolo | `role-*` Dark | `role-*-fg` Dark |
|---|---|---|
| `info` | `#043450` (Cyan-800) | `#80CBF5` (Cyan-300) |
| `success` | `#144D1B` (Lime-800) | `#8CDA95` (Lime-300) |
| `warning` | `#573006` (Amber-800) | `#EEC070` (Amber-300) |
| `critical` | `#781730` (Coral-800) | `#F99AB4` (Coral-300) |
| `accent` | `#2E1A72` (Violet-800) | `#C9C0F8` (Violet-200) |

> **Regola**: usare sempre `text-role-{ruolo}-fg` come foreground su `bg-role-{ruolo}`. Non mescolare token di ruoli diversi.

> **Distinzione opacità**: `bg-role-*/10` e `/20` sono **accettabili** come hover state di bottoni o overlay decorativi (glow, border). Sono **vietati** come sfondo persistente di tile/card con testo sopra — usare sempre `bg-role-*` pieno + `text-role-*-fg`.

---

## 3. Tipografia

**Font**: Instrument Sans (Variable) — importato come `--font-instrument-sans`

### Scala

| Ruolo | Classi Tailwind | Dove |
|---|---|---|
| Metrica hero | `text-4xl md:text-5xl font-black tracking-tighter` | Numeri grandi KPI (28.5, 42/180) |
| Titolo card | `text-2xl md:text-3xl font-black tracking-tighter uppercase` | Titolo card bento principale |
| Titolo sezione | `text-xl font-black tracking-tighter uppercase` | Intestazioni di sezione (Comunicazioni, Attività) |
| Label UI | `text-[10px] font-black uppercase tracking-widest` | Label di campo, tab, sezione header |
| Label micro | `text-[9px] font-black uppercase tracking-widest` | Badge, timestamp, sottotitoli |
| Corpo | `text-sm font-medium` | Descrizioni, note, paragrafi |
| Sottotitolo bold | `text-xs font-black uppercase` | Dettagli in card lista |

### Regole ferme
- **Minimo**: `font-medium` in tutta la UI. Mai `font-normal` o `font-light`.
- **Label, badge, tab, titoli**: sempre `font-black`.
- **Testo corpo**: `font-medium`, senza tracking aggiuntivo.
- **Mai** testo più piccolo di `text-[9px]` (11px circa) — limite WCAG per leggibilità.

---

## 4. Geometria e Spaziatura

### Border Radius

| Contesto | Valore | Classe Tailwind | Dove |
|---|---|---|---|
| Card hero / Badge digitale | 40px | `rounded-[2.5rem]` | Area personale, card badge primaria |
| Card bento standard | 32px | `rounded-[2rem]` | Tutte le card principali |
| Dialog / Modal | 32px | `rounded-[2rem]` | Contenitore dialog |
| Elemento interno card | 16px | `rounded-2xl` | Sottoelementi, icona-box, input |
| Bottone standard | 12px | `rounded-xl` | Tutti i bottoni d'azione |
| Tab trigger | 12px | `rounded-xl` | TabsTrigger |
| Pill / Badge | ∞ | `rounded-full` | Badge, edit button circolare |

> ⛔ Non usare `rounded-lg` (8px) o valori inferiori — rompono il linguaggio visivo.

### Altezze Bottoni (touch target)

| Tipo | Altezza | Uso |
|---|---|---|
| Form action primaria | `h-14` (56px) | Pubblica, Invia, Salva, Prenotati |
| Dialog / form secondaria | `h-12` (48px) | Annulla in dialog, conferme |
| Back navigation | `h-11` (44px) | "Torna agli Appelli", ghost nav |
| Icon button inline | `h-10 w-10` (40px) | Pulsanti icona nelle card |
| Edit floating (matita) | `h-8 w-8` – `h-10 w-10` | Floating pencil su azioni rapide |
| Action tile | `aspect-square` | Grid azioni rapide |

> Minimo WCAG per target interattivo: 44×44px. Ogni bottone di `h-11` o superiore è conforme.

### Padding Card

| Dimensione | Classi | Dove |
|---|---|---|
| Hero / area personale | `p-8 md:p-12` | Card badge, profilo |
| Standard bento | `p-8 md:p-10` | Card contenuto principale |
| Compatta | `p-8` | Card secondarie, dialog sezioni |
| Lista item | `p-5 md:p-6` | Righe in liste, comunicazioni |

### Spaziatura tra sezioni

| Contesto | Gap | Classe |
|---|---|---|
| Sezioni principali pagina | 40px | `gap-10` |
| Card in griglia | 24–32px | `gap-6 md:gap-8` |
| Elementi lista | 12–16px | `space-y-3 md:space-y-4` |
| Tab → contenuto | 48px | `mb-12` su TabsList |

---

## 5. Componenti

### 5.1 Bottoni

#### Primary — Azione determinante
```
bg-primary text-primary-foreground
rounded-xl h-14 px-10
font-black uppercase tracking-widest text-xs
shadow-none active:scale-95 transition-all
```
**Usa per**: Pubblica, Invia, Salva, Prenotati, Approva, Crea, Conferma, Nuova Richiesta

#### Ghost / Back navigation
```html
<Button variant="ghost"
  className="rounded-xl h-11 px-5
             font-black uppercase tracking-widest text-[10px]
             text-muted-foreground hover:text-foreground hover:bg-muted/40
             transition-all">
  <ChevronLeft className="h-4 w-4 mr-2" /> Torna agli Appelli
</Button>
```
**Regola**: sempre testo descrittivo + `ChevronLeft` a sinistra. Posizione: top-left della vista.

#### Destructive / Critical
```
bg-role-critical-fg text-role-critical
rounded-xl h-12 px-8
font-black uppercase tracking-widest text-[10px]
shadow-none active:scale-95
```
**Usa SOLO per**: Rinuncia agli studi, Rimuovi account, elimina dati permanentemente.
**NON usare per**: Annulla form, chiudi dialog, back navigation.

#### Annulla (in form/dialog) — Neutro
```
variant="outline"
rounded-xl h-12 to h-14 px-8 to px-10
border-border/40
font-black uppercase tracking-widest text-[10px]
```
Nessun colore semantico. L'annulla non è pericoloso.

#### Edit floating (matita)
```
rounded-full bg-foreground text-background
h-8 w-8 to h-10 w-10
flex items-center justify-center
shadow-lg hover:scale-110 transition-transform active:scale-90
absolute bottom-0 right-0   ← nel contenitore con position:relative
```

#### Outline / Secondary
```
variant="outline"
rounded-xl h-11 to h-14
border-border/40
font-black uppercase tracking-widest text-xs
```

---

### 5.2 Card Bento

#### Standard (contenuto neutro)
```
bg-card rounded-[2rem] p-8 md:p-10
border border-border/40 md:border-none shadow-none
transition-all hover:scale-[1.01]
```

#### Semantica (role color)
```
bg-role-{ruolo} rounded-[2rem] p-8 md:p-10
border border-role-{ruolo}-fg/10 shadow-none
transition-all hover:scale-[1.01]
```
Tutto il testo interno: `text-role-{ruolo}-fg`
Sottoelementmi / box interni: `bg-role-{ruolo}-fg/10`

#### Hero / Profilo
```
bg-primary text-primary-foreground
rounded-[2.5rem] p-8 md:p-12
overflow-hidden  ← obbligatorio per le decorazioni di sfondo
```
Decorazione sfondo opzionale:
```
<div className="absolute top-[-20%] right-[-5%] h-[150%] w-[40%]
                bg-gradient-to-l from-primary-foreground/5 to-transparent
                rotate-12 pointer-events-none" />
```

---

### 5.3 Azioni Rapide (Widget)

Contenitore:
```
relative   ← necessario per il floating edit button
```

Griglia:
```
grid grid-cols-2 gap-3
```

Cella azione:
```html
<Link className="group aspect-square
                 flex flex-col items-center justify-center p-4
                 rounded-2xl bg-muted/30 hover:bg-muted/50
                 transition-all active:scale-[0.95]">
  <Icon className="h-8 w-8 text-foreground mb-3" />
  <span className="text-[10px] font-black uppercase tracking-tighter
                   text-center leading-tight">
    Label Max 2 Parole
  </span>
</Link>
```

Cella "Aggiungi":
```html
<div className="aspect-square rounded-2xl
                border-2 border-dashed border-muted-foreground/20
                hover:border-foreground/20
                flex flex-col items-center justify-center gap-2
                transition-all cursor-pointer">
  <div className="h-8 w-8 rounded-xl bg-muted/30 flex items-center justify-center">
    <Plus className="h-5 w-5 text-muted-foreground/60" />
  </div>
  <span className="text-[9px] font-black uppercase tracking-widest
                   text-muted-foreground/60">
    Aggiungi
  </span>
</div>
```

Edit button (floating):
```html
<button className="absolute bottom-0 right-0
                   h-10 w-10 rounded-full bg-foreground text-background
                   flex items-center justify-center
                   shadow-lg hover:scale-110 transition-transform active:scale-90">
  <Pencil className="h-5 w-5" />
</button>
```

> **Roadmap**: In futuro ogni tile potrà avere il proprio colore semantico (come nei riferimenti visivi) invece del grigio neutro `bg-muted/30`. La struttura del componente lo supporta già.

---

### 5.4 Form Elements

Input di testo:
```
h-14 rounded-2xl bg-muted/20 border-none
focus-visible:ring-primary/20 font-bold
```

Select nativo:
```
w-full h-14 rounded-2xl bg-muted/20 border-none px-4
font-bold text-foreground
focus:outline-none focus:ring-2 focus:ring-primary/20
```

Textarea:
```
w-full min-h-[120px] rounded-2xl bg-muted/20 border-none p-4
font-medium text-sm resize-none
focus:outline-none focus:ring-2 focus:ring-primary/20
```

Label campo:
```
text-[10px] font-black uppercase tracking-widest text-muted-foreground/60
```

Struttura form standard:
```html
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="space-y-2">
    <Label ...>Nome campo</Label>
    <Input ... />
  </div>
</div>
<div className="flex justify-end pt-4 border-t border-border/20">
  <Button className="bg-primary h-14 ...">Azione primaria</Button>
</div>
```

---

### 5.5 Icone

**Libreria**: Lucide React (stroke-width default 2px)

| Dimensione | Classe | Contesto |
|---|---|---|
| Micro | `h-3 w-3` – `h-4 w-4` | In badge, link "vedi tutto" |
| Standard | `h-5 w-5` | Bottoni, liste compatte, tab (con testo) |
| Nav | `h-6 w-6` | Sidebar, bottom nav, icon-box `h-12` |
| Card | `h-7 w-7` – `h-8 w-8` | Azioni rapide tile, card KPI |
| Hero | `h-10 w-10` – `h-12 w-12` | Hero card, icona decorativa grande |

**Icon-box** (icona in contenitore):
```
h-10 w-10 to h-14 w-14   ← dimensione box
rounded-xl to rounded-2xl
bg-role-{ruolo}/10 to bg-muted/30
flex items-center justify-center shrink-0
```

**Icone di navigazione direzionale** — regola univoca:
- Indietro (back): `ChevronLeft` — MAI `ArrowLeft`
- Avanti / Espandi: `ChevronRight`
- Link "vedi tutto": `ChevronRight` — MAI `ArrowRight`
- Upload/Download: `Upload` / `Download`
- Azioni di invio form: `Send` (pubblica, invia richiesta)

---

### 5.6 Badge

```
rounded-full border-none
px-3 to px-4  h-6 to h-8
font-black text-[9px] to text-[10px] uppercase tracking-widest
```

Varianti colore:
```
bg-role-{ruolo}-fg text-role-{ruolo}     ← badge colorato scuro
bg-role-{ruolo} text-role-{ruolo}-fg     ← badge tinta chiara
bg-primary text-primary-foreground       ← badge primary
bg-muted text-muted-foreground           ← badge neutro
```

---

### 5.7 Dialog / Modal

Contenitore:
```
rounded-[2rem] border-none bg-card shadow-none
```

Struttura interna (padding precisi):
```
DialogHeader  → p-8 pb-0
Body          → p-8
DialogFooter  → p-8 pt-0 flex gap-3
```

Titolo dialog: `text-2xl font-black tracking-tighter uppercase`

Bottoni nel footer:
```
h-12 flex-1 rounded-xl
font-black uppercase tracking-widest text-[10px]
```
- Azione secondaria (Annulla): `variant="outline" border-border/40`
- Azione primaria: `bg-primary` (o `bg-role-critical-fg` per azioni distruttive)

---

### 5.8 TabsList / TabsTrigger

TabsList:
```
flex w-full overflow-x-auto h-auto p-1.5
bg-muted/40 rounded-[1.5rem] mb-12
border-none no-scrollbar
```

TabsTrigger:
```
flex-1 rounded-xl py-3 gap-2
font-black text-[10px] uppercase tracking-widest
transition-all active:scale-95
```
Attivo (Radix data-active): `data-active:bg-primary data-active:text-primary-foreground`

> La versione Radix UI usata usa `data-active` (non `data-[state=active]`).

---

### 5.9 Comunicazioni / Liste

Ogni voce di lista con icona semantica:
```html
<div className="flex items-center gap-5 p-5 to p-6
                bg-muted/30 rounded-2xl
                hover:bg-muted/50 transition-all cursor-pointer
                border border-transparent hover:border-border/20">
  <!-- Icon-box semantico (obbligatorio, non icona nuda) -->
  <div className="h-12 w-12 rounded-xl bg-role-{ruolo}/10
                  flex items-center justify-center shrink-0">
    <Icon className="h-6 w-6 text-role-{ruolo}-fg" />
  </div>
  <div className="space-y-0.5">
    <p className="font-black text-sm uppercase tracking-tight">{titolo}</p>
    <p className="text-xs font-medium text-muted-foreground">{descrizione}</p>
  </div>
  <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest ml-auto shrink-0">{ora}</span>
</div>
```

Link "Vedi tutte":
```html
<button className="text-[10px] font-black uppercase tracking-[0.2em]
                   text-primary hover:opacity-80
                   flex items-center gap-2 transition-all">
  Vedi tutte <ChevronRight className="h-4 w-4" />
</button>
```

---

### 5.10 Navigazione

Bottom Nav (mobile):
```
fixed bottom-0 left-0 right-0 z-50
h-20 to h-24 (con safe area)
bg-background/95 backdrop-blur
border-t border-border/20
```
Icona attiva: `text-primary`
Icona inattiva: `text-muted-foreground`

Sidebar (desktop, floating):
```
fixed left-4 top-4 bottom-4 z-40
w-72 to w-80
rounded-[2rem] bg-card
border border-border/20 shadow-none
```

Header (fixed, pointer-events):
```
fixed top-0 left-0 right-0 z-50
pointer-events-none   ← contenitore
  ↳ logo (mobile): pointer-events-auto
  ↳ bell icon: pointer-events-auto
```

---

## 6. Pattern di Interazione

### Micro-animazioni standard

| Evento | Animazione | Classi |
|---|---|---|
| Page entry | Fade in | `animate-in fade-in duration-500` |
| Panel/form entry | Slide up | `animate-in slide-in-from-bottom-4 duration-300` |
| Sub-view entry | Slide right | `animate-in slide-in-from-right-4 duration-200` |
| Card hover | Scale up | `hover:scale-[1.01] transition-all` |
| Hero card hover | Scale lieve | `hover:scale-[1.005] transition-all` |
| Bottone press | Scale down | `active:scale-95` |
| Icon button press | Scale down | `active:scale-90` |
| Edit floating hover | Scale up | `hover:scale-110 transition-transform` |

### In-page navigation (vista alternata)

Quando un pulsante mostra una vista diversa nella stessa pagina (form creazione, nuova richiesta):

1. **Stato**: `const [view, setView] = React.useState(false)`
2. **Back button**: `<Button variant="ghost">` con `ChevronLeft` + testo — posizione top-left
3. **Titolo vista**: `text-3xl font-black tracking-tighter uppercase`
4. **Azione principale**: `bg-primary h-14` — posizione bottom-right, separata da `border-t`
5. **NO bottone Annulla separato** — il back button è l'unica via di uscita

### Dialog di conferma (struttura fissa)

```
[Titolo azione]
[Testo esplicativo con dati rilevanti]
[Annulla neutro] ← sinistra  [Azione primaria colorata] ← destra
```

---

## 7. Accessibilità WCAG

### Rapporti di contrasto verificati (Light Mode)

| Coppia | Hex | Rapporto | Level |
|---|---|---|---|
| `foreground` su `background` | #14131A / #EEEDF2 | **14.1:1** | AAA ✓ |
| `primary-foreground` su `primary` | #FFF / #6547E8 | **5.5:1** | AA ✓ |
| `role-success-fg` su `role-success` | #1D6E26 / #EDFAEE | **8.2:1** | AAA ✓ |
| `role-critical-fg` su `role-critical` | #A81E40 / #FEF5F8 | **7.5:1** | AAA ✓ |
| `role-info-fg` su `role-info` | #065180 / #EBF8FF | **8.8:1** | AAA ✓ |
| `role-warning-fg` su `role-warning` | #7A480A / #FEFAEE | **7.1:1** | AAA ✓ |
| `role-accent-fg` su `role-accent` | #5035C8 / #F1EFFE | **6.1:1** | AA ✓ |
| `muted-foreground` su `background` | #7E7B8A / #EEEDF2 | **4.6:1** | AA ✓ (limite) |
| `card-foreground` su `card` | #14131A / #FFFFFF | **18.1:1** | AAA ✓ |

### Regole operative WCAG

1. **Target interattivi**: minimo 44×44px → usare `h-11` (44px) come altezza minima bottoni cliccabili
2. **Testo piccolo** (`text-[9px]`, ~11px): ammesso SOLO se `font-black` (peso alto conta come "large text" secondo WCAG 1.4.3)
3. **`muted-foreground`** su `background`: passa AA (4.6:1) ma è al limite — non usare per testo critico o istruzioni importanti
4. **Bianco su `role-success` light** (#EDFAEE): contrasto bianco/lime-50 ≈ 1.1:1 — **VIETATO**
5. **Focus ring**: sempre visibile (`focus:ring-2 focus:ring-primary/20` come minimo su tutti gli input)
6. **Icone decorative**: aggiungere `aria-hidden="true"` alle icone puramente decorative

---

## 8. Anti-pattern — Cosa NON fare

### Geometria
| ❌ Sbagliato | ✅ Corretto |
|---|---|
| `rounded-lg` (8px) su card | `rounded-2xl` (16px) interno, `rounded-[2rem]` esterno |
| `rounded-md` su bottoni | `rounded-xl` |
| `p-4` come padding card | minimo `p-8` |

### Tipografia
| ❌ Sbagliato | ✅ Corretto |
|---|---|
| `font-bold` per label, tab, titoli | `font-black` |
| `font-normal` ovunque nell'UI | minimo `font-medium` |
| Tracking normale su label uppercase | `tracking-widest` o `tracking-[0.2em]` |

### Icone di navigazione
| ❌ Sbagliato | ✅ Corretto |
|---|---|
| `ArrowLeft` per "torna indietro" | `ChevronLeft` |
| `ArrowRight` per link "vedi tutto" | `ChevronRight` |
| Icona nuda in lista strutturata | Icona in icon-box `h-12 w-12 rounded-xl` |

### Bottoni
| ❌ Sbagliato | ✅ Corretto |
|---|---|
| `text-role-critical-fg` su bottone Annulla | Outline neutro senza colore |
| `bg-foreground` per azioni di submit form | `bg-primary text-primary-foreground` |
| `bg-foreground` per stato attivo selettore | `bg-primary text-primary-foreground` |
| Due vie di uscita da un form (back + Annulla) | Solo back button con ChevronLeft + testo |

### Pattern
| ❌ Sbagliato | ✅ Corretto |
|---|---|
| Tre stili diversi per lo stesso componente | Un solo pattern definito qui |
| Link "vedi tutto" come `<Button variant="link">` | `<button>` nativo con classi dirette |
| Link "vedi tutto" come `<button>` nativo con `ChevronRight` | ← questo è corretto |
| Version footer diversa tra aree | "Nettuno v4.0.0 • Strato v2.0" ovunque |
| `no-scrollbar` su TabsList senza la classe definita | Classe definita in `globals.css` ✓ |

---

## 9. Componenti da Unificare (Backlog)

Questi componenti esistono in più versioni inconsistenti e vanno consolidati:

| Componente | Stato attuale | Target |
|---|---|---|
| **QuickActions** | 3 versioni: `TeacherQuickActions`, inline studente, `QuickActions.tsx` | Unico componente con prop `role` e `actions[]` |
| **Comunicazioni lista** | Icona nuda (studente) vs icon-box (docente) | Sempre icon-box semantico |
| **Link "vedi tutto"** | `<Button variant="link">` (studente) vs `<button>` nativo (docente) | Sempre `<button>` nativo |
| **Tile azioni colorate** | Tutte grigie `bg-muted/30` | Futuro: colore semantico per tile |
| **QuickActions dialog** | Esiste solo in `QuickActions.tsx` non usato | Collegare al bottone matita di entrambe le dashboard |

---

## 10. File di riferimento

| File | Contenuto |
|---|---|
| `src/app/globals.css` | Token CSS variabili, dark mode, `.bento-card`, `.no-scrollbar` |
| `src/components/ui/tabs.tsx` | Stile tab con `data-active` (non `data-[state=active]`) |
| `src/components/layout/AppShell.tsx` | Layout principale, padding con header fixed |
| `src/components/layout/Header.tsx` | `pointer-events-none` container, `auto` solo su figli interattivi |
| `design-system/STRATO_v2.md` | **Questo documento** — fonte di verità |
