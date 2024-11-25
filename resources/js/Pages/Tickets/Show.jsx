import { Head } from "@inertiajs/react";

const Show = ({ ticket }) => {
    return (
        <>

            {/* Titolo della pagina */}
            <Head title="Ticket" />

            <h1>{ticket.title}</h1>

        </>
    )
}
export default Show;