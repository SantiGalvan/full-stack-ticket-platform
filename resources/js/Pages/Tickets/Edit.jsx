const Edit = ({ ticket }) => {
    return (
        <section>
            <div className="container mx-auto">
                <h1 className="my-12 text-center text-4xl">Edit {ticket.title}</h1>
            </div>
        </section>
    )
}

export default Edit;