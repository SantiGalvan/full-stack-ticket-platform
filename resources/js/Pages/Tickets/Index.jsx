import { TinyColor } from "@ctrl/tinycolor";
import './css/index.css';
import { Head, Link } from "@inertiajs/react";
import { FaPlus } from "react-icons/fa";
import IndexCard from "./components/IndexCard";

// Funzione per gestire i colori
const adjustColor = (color) => {
    const tinyColor = new TinyColor(color);
    let adjustedColor = color;

    if (tinyColor.isLight()) {
        // Se il colore è troppo chiaro verrà scurito del 45%
        adjustedColor = tinyColor.darken(45).toHexString();
    } else if (tinyColor.isDark()) {
        // Se il colore è troppo scuro verrà schiarito del 30%
        adjustedColor = tinyColor.lighten(30).toHexString();
    }

    return {
        textColor: adjustedColor,
        backgroundColor: new TinyColor(adjustedColor).setAlpha(0.2).toRgbString(),
    };
};

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
                        const { textColor, backgroundColor } = adjustColor(t.category.color);
                        return (
                            <div key={t.id} className="p-4 w-1/3">
                                {/* Card */}
                                <IndexCard auth={auth} t={t} textColor={textColor} backgroundColor={backgroundColor} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
};

export default Index;