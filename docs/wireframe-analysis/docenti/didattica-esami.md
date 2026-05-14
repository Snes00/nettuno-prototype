# Analisi Wireframe: Docente - Didattica (Esami e Verbali)

**Percorsi file:** 
- `Nettuno Docenti/didattica/didattica - esami.jpg`
- `Nettuno Docenti/didattica/didattica - esami - click crea appelli (...).jpg`
- `Nettuno Docenti/didattica/didattica - esami - click su apri verbale.jpg`

## Struttura della Pagina
Gestione completa del ciclo di vita degli esami: dalla creazione degli appelli alla verbalizzazione dei voti.

### 1. Hub Esami (Vista Principale)
- **Tab Navigation:** ESAMI (attiva).
- **Toolbox:** 
    - Barra di ricerca "CERCA".
    - Pulsante prominente "CREA APPELLI".
    - Filtro temporale: "PROSSIMI" / "PASSATI".
- **Griglia Bento (Appelli):**
    - **Card Esame:**
        - Nome materia e sessione (es. "SESSIONE ESTIVA").
        - Dettagli logistici: Data e Ora.
        - Numero iscritti (con icona info).
        - **Stato Appello:** Badge "BOZZA" con icona di modifica o appello pubblicato.
        - **Action:** Pulsante "APRI VERBALE".

### 2. Creazione Appello (Overlay/Form)
- **Campi Input:**
    - **Livello:** Triennio/Biennio (Dropdown).
    - **Sessione:** Estiva/Invernale/Straordinaria (Dropdown).
    - **Materia:** Selezione dal carico didattico.
    - **Data e Orario:** Input specifici.
    - **Aula:** Selezione aule disponibili.
    - **Commissione:** Selezione dei membri della commissione.
- **Actions:** "ELIMINA" (annulla) e "PUBBLICA" (rende visibile agli studenti).

### 3. Gestione Verbale (Valutazione)
- **Header Verbale:** Riepilogo dati (Data, Codice, Orario), conteggio iscritti e membri commissione.
- **Ricerca:** Filtro rapido "CERCA STUDENTE".
- **Elenco Valutazioni:**
    - Riga studente con Nome e Matricola.
    - **Stato Presenza:** Toggle per confermare la presenza dello studente all'appello.
    - **Stato Valutazione:** Label "VALUTATO" (verde) o "IN ATTESA" (grigio).
    - **Azioni Contestuali:**
        - Pulsante "VALUTA" per inserire il voto.
        - Pulsante "RIVEDI" (con icona menu) per modificare una valutazione già inserita.
- **Chiusura:** Pulsante "CHIUDI APPELLO" per finalizzare il verbale.

## Funzionalità
1. **Workflow Guidato:** Creazione e pubblicazione appelli con salvataggio automatico in bozza.
2. **Controllo Presenze:** Registrazione rapida di chi si presenta effettivamente all'esame.
3. **Verbalizzazione Asincrona:** Possibilità di valutare gli studenti in momenti diversi, mantenendo traccia di chi manca.
4. **Finalizzazione Formale:** Funzione di chiusura appello per il consolidamento dei risultati nel sistema di carriera.
