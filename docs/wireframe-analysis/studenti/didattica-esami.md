# Analisi Wireframe: Studente - Didattica (Esami)

**Percorso file:** `Nettuno Studenti/didattica/didattica - esami.jpg` e varianti click/prenotazione.

## Struttura della Pagina
Gestione completa del ciclo di vita degli esami: prenotazione, rinuncia e accettazione voti.

- **Navigazione Interna (Tabs):**
    - Corsi, Orario Lezioni, Esami (Attiva), Tesi.
- **Area Prenotazione (Appelli Aperti):**
    - Elenco di card/righe con:
        - Pulsante "+" per prenotare.
        - Materia, Data, Orario.
        - Docente e Commissario.
        - CFA associati.
- **Workflow di Prenotazione:**
    - Click su "+" -> Dialog di conferma ("Sicuro di volerti prenotare?").
    - Stato "Prenotato" -> Icona di spunta (V) al posto di "+" e icona "matita" a destra per modificare/cancellare.
    - Click su "matita" -> Dialog di rinuncia ("Vuoi disiscriverti davvero?").
- **Area Esiti (Appelli Chiusi):**
    - Righe con stati differenti:
        - **Da Accettare:** Appare il voto con icona (V). Click apre il dialog di accettazione.
        - **Assente:** Lo studente non si è presentato.
        - **Prenotato:** Esame futuro.
- **Accettazione Voto (Dialog):**
    - Riepilogo: Materia, Prof, Commissione, Argomenti trattati.
    - **Voto:** Visualizzazione chiara della valutazione.
    - **Azioni:** Pulsanti "RIFIUTA" e "ACCETTA".

## Funzionalità
1. **Iscrizione Appelli:** Sistema self-service di prenotazione esami.
2. **Gestione Voti:** Accettazione formale o rifiuto della valutazione conseguita.
3. **Archivio Esiti:** Visualizzazione dello stato di tutti gli appelli (passati e futuri).
