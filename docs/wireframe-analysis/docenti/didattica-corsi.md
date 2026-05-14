# Analisi Wireframe: Docente - Didattica (Corsi e Registro)

**Percorsi file:** 
- `Nettuno Docenti/didattica/didattica - corsi.jpg`
- `Nettuno Docenti/didattica/didattica - corsi - click sul corso.jpg`
- `Nettuno Docenti/didattica/didattica - corsi - click su elenco studenti.jpg`
- `Nettuno Docenti/didattica/didattica - corsi - elenco studenti - scheda studente singolo.jpg`

## Struttura della Pagina
Sezione dedicata alla gestione dei corsi assegnati al docente, con strumenti per la comunicazione, la gestione delle lezioni e il registro presenze.

### 1. Hub Corsi (Vista Principale)
- **Tab Navigation:** CORSI (attiva), ORARIO LEZIONI, CREA APPELLI, ESAMI, TESI.
- **Griglia Bento:** Card per ogni materia (es. "WEB DESIGN 1", "WEB DESIGN 2").
    - **Contenuto Card:**
        - Nome materia e livello (Triennio/Biennio).
        - Numero iscritti (es. "30 ISCRITTI").
        - Info prossima lezione (Data e Ora).
        - Action: "VAI AL REGISTRO >".

### 2. Dettaglio Corso
- **Header:** Nome materia + Anno Accademico corrente.
- **Azioni Rapide:** Pulsanti per azioni critiche: "COMUNICA CON LA CLASSE", "LEZIONE ANNULLATA", "CAMBIO AULA", "CAMBIO ORARIO".
- **Moduli Informativi (Editabili):**
    - **Descrizione Corso:** Box per inserire o modificare il programma.
    - **Argomenti di Oggi:** Note sulla lezione corrente.
    - **Ricevimento:** Orari e modalità di incontro.
- **Gestione Studenti:** Box riassuntivo "STUDENTI ISCRITTI" con link "ELENCO ->".

### 3. Registro Presenze
- **Interfaccia Tabellare:** Elenco studenti con controlli rapidi.
- **Controlli Presenza:** Icone (Spunta, Interrogativo, X) per stato presenza/assenza/ritardo.
- **Gestione Orario:** Selettore orario inizio/fine lezione (es. 09:00 - 11:00).
- **Statistiche:** Barra di progresso "FREQUENZA %" per ogni studente.

### 4. Scheda Studente Singolo (nel Registro)
- **Header Studente:** Iniziali/Avatar, Nome, Matricola.
- **KPI Frequenza:** Barra di avanzamento con percentuale aggiornata.
- **Storico Lezioni:** Elenco cronologico delle lezioni con indicazione dello stato di presenza e dell'orario registrato.

## Funzionalità
1. **Comunicazione Diretta:** Invio rapido di comunicazioni/email alla classe intera.
2. **Flessibilità Logistica:** Gestione semplificata di annullamenti e cambi aula/orario.
3. **Registro Digitale:** Registrazione presenze in tempo reale con calcolo automatico della frequenza.
4. **Tracciamento Personalizzato:** Accesso allo storico dettagliato di ogni singolo studente per monitorare l'andamento del corso.
