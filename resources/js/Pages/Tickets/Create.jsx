import { Head } from "@inertiajs/react";
import TicketForm from "./components/TicketForm";

const Create = ({ categories, users }) => {

    const defaultValues = {
        title: '',
        description: '',
        user: '',
        category: ''
    }

    return (
        <section>

            {/* Titolo della pagina */}
            <Head title="Create Ticket" />

            <div className="container mx-auto">
                <h1 className="mt-12 text-4xl text-center">Crea nuovo ticket</h1>

                <TicketForm
                    users={users}
                    categories={categories}
                    action={route('tickets.store')}
                    method='post'
                    defaultValues={defaultValues}
                />

            </div>
        </section>
    )
}

export default Create;