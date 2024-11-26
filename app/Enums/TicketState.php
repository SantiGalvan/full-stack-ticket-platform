<?php

namespace App\Enums;

enum TicketState: string
{
    case ASSEGNATO = 'Assegnato';
    case IN_LAVORAZIONE = 'In lavorazione';
    case CHIUSO = 'Chiuso';
}
