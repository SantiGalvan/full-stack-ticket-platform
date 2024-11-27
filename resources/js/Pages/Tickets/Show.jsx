import { Head } from "@inertiajs/react";
import TicketCard from "./components/TicketCard";

// Funzione per determinare il colore del badge in base allo status
const getStateClass = (state) => ({
    'Assegnato': 'assigned',
    'Chiuso': 'closed',
    'In lavorazione': 'in-progress',
}[state]);

const Show = ({ ticket, auth }) => {
    return (
        <section>
            {/* Titolo della pagina */}
            <Head title="Ticket" />

            <div className="container mx-auto">
                <div className="flex items-center justify-center h-[800px]">
                    {/* Card */}
                    <TicketCard t={ticket} isShow={true} auth={auth} />
                </div>

            </div>


        </section>



    )
}
export default Show;