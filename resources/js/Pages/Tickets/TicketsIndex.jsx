const TicketsIndex = ({ tickets }) => {

    return (
        <>
            <ul>
                {tickets.map(ticket => (
                    <li key={ticket.id}>{ticket.title}</li>
                ))}
            </ul>
        </>
    )
}
export default TicketsIndex;