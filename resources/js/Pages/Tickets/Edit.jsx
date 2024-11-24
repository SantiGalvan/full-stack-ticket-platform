import TicketForm from "./components/TicketForm";

const Edit = ({ ticket, users, categories }) => {

    const defaultValues = {
        title: ticket.title,
        description: ticket.description,
        user: ticket.user_id,
        category: ticket.category_id
    }

    return (
        <section>
            <div className="container mx-auto">
                <h1 className="my-12 text-center text-4xl">Modifica {ticket.title}</h1>
                <TicketForm
                    users={users}
                    categories={categories}
                    action={route('tickets.update', ticket.id)}
                    method='put'
                    defaultValues={defaultValues}
                />
            </div>
        </section>
    )
}

export default Edit;