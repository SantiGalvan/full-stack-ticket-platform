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
                'state' => 'assegnato',
                'description' => 'L\'utente non riesce ad accedere al portale con le credenziali fornite.',
                'category_id' => 7,
            ],
            [
                'title' => 'Errore nel pagamento',
                'state' => 'in lavorazione',
                'description' => 'Il sistema restituisce un errore durante la fase di pagamento online.',
                'category_id' => 9,
            ],
            [
                'title' => 'Bug nell\'interfaccia utente',
                'state' => 'chiuso',
                'description' => 'Alcuni pulsanti non rispondono ai clic in determinate pagine.',
                'category_id' => 1,
            ],
            [
                'title' => 'Richiesta nuova funzionalità',
                'state' => 'assegnato',
                'description' => 'L\'utente richiede l\'aggiunta di un report mensile per le vendite.',
                'category_id' => 2,
            ],
            [
                'title' => 'Aggiornamento profilo utente',
                'state' => 'chiuso',
                'description' => 'L\'utente non riesce a salvare le modifiche al proprio profilo.',
                'category_id' => 7,
            ],
            [
                'title' => 'Problema con la stampa PDF',
                'state' => 'in lavorazione',
                'description' => 'Il file PDF generato non contiene tutte le informazioni necessarie.',
                'category_id' => 5,
            ],
            [
                'title' => 'Rallentamenti nel caricamento',
                'state' => 'assegnato',
                'description' => 'Le pagine del portale impiegano troppo tempo per caricarsi.',
                'category_id' => 3,
            ],
            [
                'title' => 'Errore 500',
                'state' => 'chiuso',
                'description' => 'Un errore 500 viene mostrato in alcune sezioni del sito.',
                'category_id' => 1,
            ],
            [
                'title' => 'Problema di registrazione',
                'state' => 'assegnato',
                'description' => 'Un utente non riesce a completare la registrazione al portale.',
                'category_id' => 7,
            ],
            [
                'title' => 'Richiesta di assistenza telefonica',
                'state' => 'in lavorazione',
                'description' => 'Un cliente ha richiesto supporto per configurare il suo account.',
                'category_id' => 3,
            ],
            [
                'title' => 'Problema con i permessi',
                'state' => 'assegnato',
                'description' => 'Un utente non riesce ad accedere a una sezione riservata.',
                'category_id' => 7,
            ],
            [
                'title' => 'Errore di sincronizzazione',
                'state' => 'chiuso',
                'description' => 'I dati non vengono sincronizzati tra i vari dispositivi.',
                'category_id' => 6,
            ],
            [
                'title' => 'Anomalia nel report',
                'state' => 'in lavorazione',
                'description' => 'Alcuni dati del report non sono corretti o incompleti.',
                'category_id' => 5,
            ],
            [
                'title' => 'Crash dell\'app',
                'state' => 'assegnato',
                'description' => 'L\'app si blocca improvvisamente durante l\'uso.',
                'category_id' => 1,
            ],
            [
                'title' => 'Problema di compatibilità',
                'state' => 'chiuso',
                'description' => 'Il software non funziona correttamente su alcuni browser.',
                'category_id' => 4,
            ],
            [
                'title' => 'Richiesta reset password',
                'state' => 'assegnato',
                'description' => 'Un utente richiede un reset della password per il proprio account.',
                'category_id' => 7,
            ],
            [
                'title' => 'Problema di visualizzazione',
                'state' => 'in lavorazione',
                'description' => 'Alcune immagini non vengono caricate correttamente nel sito.',
                'category_id' => 3,
            ],
            [
                'title' => 'Errore nella notifica',
                'state' => 'assegnato',
                'description' => 'Le notifiche non arrivano correttamente agli utenti.',
                'category_id' => 3,
            ],
            [
                'title' => 'Richiesta di aggiornamento',
                'state' => 'chiuso',
                'description' => 'Un cliente richiede l\'aggiornamento alla nuova versione del software.',
                'category_id' => 2,
            ],
            [
                'title' => 'Problema di traduzione',
                'state' => 'assegnato',
                'description' => 'Alcune sezioni dell\'interfaccia non sono tradotte correttamente.',
                'category_id' => 10,
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
