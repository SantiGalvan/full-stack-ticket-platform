import { Head } from "@inertiajs/react";
import TicketForm from "./components/TicketForm";

const Edit = ({ ticket, users, categories, states }) => {

    const defaultValues = {
        title: ticket.title,
        description: ticket.description,
        user: ticket.user_id,
        category: ticket.category_id,
        state: ticket.state
    }

    return (
        <section>

            {/* Titolo della pagina */}
            <Head title="Edit Ticket" />

            <div className="container mx-auto">
                <h1 className="my-12 text-center text-4xl">Modifica {ticket.title}</h1>
                <TicketForm
                    isEdit={true}
                    users={users}
                    categories={categories}
                    action={route('tickets.update', ticket.id)}
                    method='put'
                    defaultValues={defaultValues}
                    states={states}
                />
            </div>

        </section>
    )
}

export default Edit;