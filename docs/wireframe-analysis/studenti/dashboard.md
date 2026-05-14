# Analisi Wireframe: Studente - Dashboard

**Percorso file:** `Nettuno Studenti/dashboard.jpg`

## Struttura della Pagina
La dashboard è organizzata con una navigazione laterale e un corpo centrale suddiviso in widget informativi e d'azione.

- **Sidebar (Navigazione):**
    - Logo in alto a sinistra.
    - Voci di menu: Dashboard (attiva), Didattica, Amministrazione, Area Personale, Impostazioni.
- **Header Contenuto:**
    - Titolo "DASHBOARD".
    - Messaggio di benvenuto: "BENVENUTO [NOME STUDENTE]".
- **Area Principale (Widget):**
    - **Comunicazioni:**
        - Badge "2 URGENTI" per evidenziare avvisi critici.
        - Elenco di notifiche con orario/data sulla destra:
            - Tassa da pagare (11:15).
            - Seminario erasmus (09:31).
            - Esame [Materia] - Giorno / Ora / Aula (18:10).
            - Materia: Cambio Aula -> Aula Nuova (18:10).
        - Link "VEDI TUTTE >" per accedere all'archivio notifiche.
    - **Lezioni di Oggi:**
        - Griglia di card per le lezioni giornaliere.
        - Card "Web Design 1": Badge "IN CORSO", orario (14:00/18:00), aula (Aula 12), icona per i dettagli/materiali.
        - Card "Design Grafico": Badge "TERMINATA", titolo lezione, orario (08:00/12:00), aula (Aula 15), icona per i dettagli/materiali.
- **Barra Laterale Destra (Azioni Rapide):**
    - Titolo "AZIONI RAPIDE".
    - Pulsanti grandi per azioni frequenti:
        - "ISCRIVITI AD UN APPELLO".
        - "ORARIO LEZIONI".
    - Slot vuoto con "+" per aggiungere nuove scorciatoie.
    - Icona "matita" per modificare/ordinare le azioni rapide.

## Funzionalità
1. **Navigazione Globale:** Accesso a tutte le sezioni principali dell'app.
2. **Aggiornamento Stato:** Visualizzazione immediata di avvisi urgenti e lezioni correnti.
3. **Accesso Rapido:** Scorciatoie personalizzabili per le operazioni più comuni.
4. **Dettaglio Lezione:** Feedback visivo sullo stato della lezione (in corso, terminata) e informazioni logistiche (aula, orario).
