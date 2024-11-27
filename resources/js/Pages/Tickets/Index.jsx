import './css/index.css';
import { Head, Link } from "@inertiajs/react";
import { FaPlus } from "react-icons/fa";
import TicketCard from "./components/TicketCard";


const Index = ({ tickets, auth }) => {
    return (
        <section>

            {/* Titolo della pagina */}
            <Head title="Tickets" />

            <div className="container mx-auto mt-2">
                {/* Bottone di crezione del task */}
                <div className="flex justify-center items-center gap-12">
                    <h1 className="text-4xl text-center my-12">Lista dei ticket</h1>
                    {auth.user.is_admin !== 0 &&
                        < Link
                            href={route('tickets.create')}
                            className="bg-blue-500 hover:bg-blue-700 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                        >
                            <FaPlus />Crea Ticket
                        </Link>
                    }
                </div>
                {/* Row */}
                <div className="flex flex-wrap -mx-4">
                    {/* Col */}
                    {tickets.map((t) => {
                        return (
                            <div key={t.id} className="p-4 w-1/3">
                                {/* Card */}
                                <TicketCard auth={auth} t={t} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
};

export default Index;