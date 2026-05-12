# Fondamenta del Design

## 🎨 Palette Colori Semantica (WCAG AA Compliant)
La palette di Nettuno è progettata per garantire un rapporto di contrasto minimo di **4.5:1** per il testo normale e **3:1** per componenti grafici, assicurando l'accessibilità universale.

### 🌓 Logica Light & Dark
| Token | Light Mode (Warm Paper) | Dark Mode (Deep Graphite) | Funzione |
| :--- | :--- | :--- | :--- |
| **`background`** | `#F8F5F0` | `#0A0A0A` | Sfondo principale dell'applicazione. |
| **`foreground`** | `#1A1917` | `#F5F5F0` | Testo principale e icone ad alto contrasto. |
| **`card`** | `#FFFFFF` | `#141414` | Superfici elevate (Bento cards, Sidebar). |
| **`muted`** | `#F1EFE9` | `#1A1A1A` | Sfondi secondari e aree a bassa enfasi. |
| **`muted-fg`** | `#7C7A77` | `#71717A` | Testi secondari e metadati (Passa WCAG AA su bg). |
| **`accent`** | `#FFD6E8` | `#2A1F2D` | Colore di evidenza e feedback interattivo. |
| **`border`** | `#E5E2DA` | `#262626` | Separatori e bordi discreti. |

### 🌈 Colori di Ruolo (Bento Accents)
Usati per categorizzare le aree Studente/Docente e gli stati del sistema.

| Ruolo | Light Tint | Dark Deep | Utilizzo |
| :--- | :--- | :--- | :--- |
| **Studente** | `#DBEAFE` (Blue) | `#111B2D` | Icone, badge e sezioni Area Studenti. |
| **Docente** | `#FEE2E2` (Pink) | `#2D1616` | Icone, badge e sezioni Area Docenti. |
| **Successo** | `#DCFCE7` (Green) | `#0F2013` | Stato presenze, conferme, voti alti. |
| **Allerta** | `#FEF9C3` (Yellow) | `#261F0F` | Comunicazioni, scadenze, avvisi. |
| **Critico** | `#FEE2E2` (Red) | `#2D1616` | Errori, presenze sotto soglia, scadenze passate. |

## ✍️ Tipografia
- **Font Family**: `Instrument Sans` (Variable)
- **Gerarchia**:
  - **Titoli (Black 900)**: Usati per H1 e H2 per massima leggibilità.
  - **Corpo (Medium 500)**: Bilanciato per ridurre l'affaticamento visivo.
  - **Label (Black 900 + Caps)**: Usate per metadati per "tagliare" il layout con autorità visiva.

## 📏 Spazi & Griglie (8-Point System)
- **Base Unit**: `4px` (tutte le dimensioni sono multipli di 4 o 8).
- **Radius Stratificato**:
  - **Esterno (Container)**: `1.5rem` (24px)
  - **Interno (Componenti)**: `0.75rem` (12px)
  - Questo garantisce un "nested radius" armonioso che rispetta la geometria delle card.
