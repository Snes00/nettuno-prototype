# Analisi Wireframe: Docente - Dashboard

**Percorso file:** `Nettuno Docenti/dashboard.jpg`

## Struttura della Pagina
Dashboard operativa orientata alla gestione delle attività didattiche e amministrative del docente.

- **Sidebar (Navigazione):**
    - Logo, Dashboard (attiva), Didattica, Area Personale, Impostazioni.
- **Header:**
    - Messaggio di benvenuto: "BENVENUTO PROF. [COGNOME]".
- **Area Principale (Widget):**
    - **Comunicazioni:**
        - Badge "2 URGENTI".
        - Notifiche specifiche per il ruolo:
            - Richiesta appello straordinario (Aula 2).
            - Verbali da firmare (es. "2 verbali da firmare").
            - Convocazioni organi collegiali (es. Consiglio Accademico).
        - Link "VEDI TUTTE >".
    - **Attività di Oggi:**
        - Card lezioni con distinzione di livello:
            - "Web Design 1" (Triennio): Stato "IN CORSO", orario, aula.
            - "Web Design" (Biennio): Stato "TERMINATA", orario, aula.
- **Barra Laterale Destra (Azioni Rapide):**
    - Titolo "AZIONI RAPIDE".
    - Pulsanti per task frequenti:
        - "CREA APPELLO".
        - "ORARIO LEZIONI".
    - Slot "+" e icona modifica.

## Funzionalità
1. **Firma Elettronica:** Avviso rapido per i verbali pendenti (funzionalità critica per docenti).
2. **Gestione Spazi:** Richieste e notifiche relative all'uso delle aule.
3. **Controllo Didattico:** Visualizzazione immediata delle lezioni giornaliere suddivise per corso (Triennio/Biennio).
4. **Scorciatoie Amministrative:** Accesso diretto alla creazione di nuovi appelli d'esame.
