# Analisi Wireframe: Studente - Didattica (Corsi)

**Percorso file:** `Nettuno Studenti/didattica/didattica - corsi.jpg` e `didattica - corsi - click su vai al corso.jpg`

## Struttura della Pagina
Area principale per la gestione degli insegnamenti seguiti dallo studente.

- **Navigazione Interna (Tabs):**
    - Corsi (Attiva), Orario Lezioni, Esami, Tesi.
- **Elenco Corsi (Griglia di Card):**
    - Ogni card rappresenta un insegnamento:
        - **Titolo Materia:** (es. Web Design 1).
        - **Progresso Presenze:** Barra di avanzamento con percentuale (es. 60%).
        - **Info Prossima Lezione:** Data e ora del prossimo incontro.
        - **Azione:** Link "VAI AL CORSO >".
- **Dettaglio Corso (dopo il click):**
    - Header con titolo materia e pulsante indietro.
    - **Area Contenuti (Sinistra):**
        - Card "Descrizione Corso" e "Codice Classroom".
        - Card "Orario di Ricevimento" con icona email per contatto rapido col docente.
        - Card "Argomenti di Oggi" con data e lista argomenti.
    - **Area Monitoraggio (Destra):**
        - **Calendario Presenze:** Griglia tipo heatmap che mostra la frequenza.
        - **Legenda Colori:** Rosso (Assente), Verde (Presente), Giallo (Ritardo), Blu (Uscita anticipata).

## Funzionalità
1. **Monitoraggio Frequenza:** Controllo costante della percentuale di presenze (utile per l'ammissione agli esami).
2. **Accesso a Materiali/Classroom:** Collegamento diretto alle piattaforme di e-learning.
3. **Comunicazione col Docente:** Informazioni rapide su orari di ricevimento e contatti.
4. **Tracciamento Didattico:** Visualizzazione degli argomenti trattati in ogni lezione.
