<?php

namespace Database\Seeders;

use App\Models\Ticket;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tickets = [
            [
                'title' => 'Problema di accesso',
                'state' => 'Assegnato',
                'description' => 'L\'utente non riesce ad accedere al portale con le credenziali fornite. Nonostante abbia provato più volte a reimpostare la password utilizzando la funzione di recupero, continua a ricevere un messaggio di errore generico. Il problema potrebbe essere causato da un errore lato server nella gestione delle sessioni o da un malfunzionamento nel modulo di autenticazione. Si consiglia di verificare sia il flusso di recupero password che i log del server per individuare eventuali problemi.',
                'category_id' => 7,
            ],
            [
                'title' => 'Errore nel pagamento',
                'state' => 'In lavorazione',
                'description' => 'Durante il tentativo di effettuare un pagamento online, il sistema restituisce un errore generico che impedisce agli utenti di completare le transazioni. Il problema sembra verificarsi solo con alcuni metodi di pagamento, come le carte di credito, mentre altri metodi funzionano correttamente. È necessario analizzare i log delle transazioni, verificare l\'integrazione con il gateway di pagamento e testare diverse configurazioni per determinare la causa dell\'errore.',
                'category_id' => 9,
            ],
            [
                'title' => 'Bug nell\'interfaccia utente',
                'state' => 'Chiuso',
                'description' => 'Alcuni pulsanti nell\'interfaccia utente non rispondono ai clic in determinate pagine. Gli utenti hanno segnalato che il problema si manifesta principalmente quando si utilizza un browser specifico o durante l\'interazione con determinati dispositivi touchscreen. Potrebbe trattarsi di un conflitto tra gli eventi JavaScript o di un problema con i file CSS. È stato eseguito un controllo approfondito del codice e implementate correzioni per garantire il corretto funzionamento dell\'interfaccia.',
                'category_id' => 1,
            ],
            [
                'title' => 'Richiesta nuova funzionalità',
                'state' => 'Assegnato',
                'description' => 'Un utente ha richiesto l\'implementazione di una nuova funzionalità per generare un report mensile dettagliato sulle vendite. Il report dovrebbe includere grafici personalizzabili, un riepilogo delle vendite per categoria e opzioni di esportazione in formati PDF ed Excel. Inoltre, l\'utente ha suggerito di aggiungere filtri avanzati per selezionare intervalli di date e categorie specifiche. Sarà necessario analizzare i requisiti e valutare l\'impatto dell\'implementazione sulla piattaforma esistente.',
                'category_id' => 2,
            ],
            [
                'title' => 'Aggiornamento profilo utente',
                'state' => 'Chiuso',
                'description' => 'L\'utente non riesce a salvare le modifiche apportate al proprio profilo, come l\'aggiornamento del numero di telefono e dell\'indirizzo email. Ogni tentativo di salvataggio genera un messaggio di errore che indica un problema di connessione con il database. Dopo un\'analisi approfondita, si è scoperto che un vincolo nel database impediva l\'aggiornamento di alcuni campi. È stato necessario modificare la struttura del database per risolvere il problema.',
                'category_id' => 7,
            ],
            [
                'title' => 'Problema con la stampa PDF',
                'state' => 'In lavorazione',
                'description' => 'Il file PDF generato dal sistema non contiene tutte le informazioni richieste dagli utenti. In particolare, mancano dettagli critici come il nome del cliente e il riepilogo dei prodotti acquistati. Il problema sembra essere legato a un errore nel template utilizzato per la generazione del documento o a dati incompleti provenienti dal database. Si consiglia di verificare il flusso di dati e correggere eventuali problemi nel rendering del file.',
                'category_id' => 5,
            ],
            [
                'title' => 'Rallentamenti nel caricamento',
                'state' => 'Assegnato',
                'description' => 'Le pagine del portale impiegano troppo tempo per caricarsi, soprattutto durante le ore di punta. Gli utenti segnalano che alcune pagine impiegano fino a 15 secondi per caricarsi completamente. Dopo un\'analisi preliminare, si sospetta che il problema sia causato da query non ottimizzate nel database e dall\'elevato numero di richieste al server. Si consiglia di eseguire un profiling delle query e implementare un sistema di caching per migliorare le prestazioni.',
                'category_id' => 3,
            ],
            [
                'title' => 'Errore 500',
                'state' => 'Chiuso',
                'description' => 'Un errore 500 viene mostrato in alcune sezioni del sito, impedendo agli utenti di accedere a determinate funzionalità. Questo tipo di errore è solitamente causato da problemi lato server, come errori di configurazione o script PHP malfunzionanti. Dopo un\'indagine approfondita, è stato identificato un problema nella gestione delle rotte e sono state implementate le necessarie correzioni.',
                'category_id' => 1,
            ],
            [
                'title' => 'Problema di registrazione',
                'state' => 'Assegnato',
                'description' => 'Un utente ha segnalato di non riuscire a completare la registrazione al portale. Dopo aver compilato tutti i campi richiesti, il sistema restituisce un messaggio di errore generico. È probabile che il problema sia legato a una validazione dei dati lato server o a un vincolo errato nella tabella del database. È necessaria un\'analisi dettagliata per identificare e risolvere il problema.',
                'category_id' => 7,
            ],
            [
                'title' => 'Richiesta di assistenza telefonica',
                'state' => 'In lavorazione',
                'description' => 'Un cliente ha richiesto supporto telefonico per configurare il proprio account e accedere correttamente al portale. Il cliente segnala di avere difficoltà a comprendere alcune funzionalità avanzate del sistema. È necessario contattare il cliente e guidarlo passo dopo passo nella configurazione del profilo.',
                'category_id' => 3,
            ],
        ];

        foreach ($tickets as $ticket) {

            $new_ticket = new Ticket();

            $new_ticket->user_id = rand(1, 5);

            $new_ticket->slug = Str::slug($ticket['title']);
            $new_ticket->fill($ticket);
            $new_ticket->save();
        }
    }
}
