# Fondamenta del Design

## 🎨 Palette Colori Semantica (WCAG AA Compliant)
Nettuno utilizza un sistema di colori basato su **ruoli semantici**. Non usiamo colori "casuali", ma variabili che descrivono la funzione dell'elemento. Ogni ruolo garantisce un contrasto minimo di **4.5:1** (WCAG AA).

### 🌓 Superfici e Testi Base
| Token | Funzione |
| :--- | :--- |
| **`background`** | Sfondo principale (Warm Paper / Deep Graphite). |
| **`foreground`** | Testo principale ad alto contrasto. |
| **`card`** | Superfici elevate (Bento cards, Sidebar). |
| **`muted`** | Aree a bassa enfasi. |
| **`border`** | Separatori e bordi discreti. |
| **`primary`** | Azioni principali (Bottoni, link chiave). |
| **`destructive`** | Azioni pericolose o errori critici (es. Logout). |

### 🌈 Ruoli Bento (Accents)
Usati per categorizzare le informazioni e fornire feedback visivo. Ogni ruolo ha una variante `--bg` (sfondo) e `--fg` (testo).

| Ruolo | Esempio Utilizzo | Colore (Light) | Colore (Dark) |
| :--- | :--- | :--- | :--- |
| **`role-info`** | Medie, CFU, Statistiche | Blue | Deep Navy |
| **`role-success`** | Esami superati, Pagamenti OK | Green | Deep Forest |
| **`role-warning`** | Scadenze, Avvisi, Alert | Yellow | Deep Gold |
| **`role-critical`** | Tasse scadute, Errori, Logout | Red/Pink | Deep Crimson |
| **`role-accent`** | Piani di studio, Progetti, Extra | Purple | Deep Royal |

## ✍️ Tipografia
- **Font Family**: `Instrument Sans` (Variable)
- **Gerarchia**:
  - **Titoli (Black 900)**: Usati per H1 e H2 per massima leggibilità.
  - **Corpo (Medium 500)**: Bilanciato per ridurre l'affaticamento visivo.
  - **Label (Black 900 + Caps)**: Usate per metadati per "tagliare" il layout con autorità visiva.

## 📏 Spazi & Griglie (8-Point System)
- **Base Unit**: `4px`
- **Radius Stratificato**:
  - **Esterno (Container)**: `1.5rem` (24px)
  - **Interno (Componenti)**: `0.75rem` (12px)
