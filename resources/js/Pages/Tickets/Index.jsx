import { TinyColor } from "@ctrl/tinycolor";
import './css/index.css';
import { Link } from "@inertiajs/react";
import { FaPlus } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";

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

// Funzione per determinare il colore del badge in base allo status
const getStateClass = (state) => ({
    'Assegnato': 'assigned',
    'Chiuso': 'closed',
    'In lavorazione': 'in-progress',
}[state]);

// Funzione dell'abastract
const abstract = (description, maxLength) => {
    if (description.length > maxLength) {
        return description.slice(0, maxLength) + '...';
    }
    return description;
};

const Index = ({ tickets }) => {
    return (
        <section>
            <div className="h-[80px] bg-red-300 gap-4 flex justify-center items-center">
                <div className="h-[40px] w-[80px] border-2 border-dotted border-red-500 bg-green-400 flex justify-center items-center">
                    <a href="#" className="hover:text-blue-600 transition-colors duration-300 font-semibold">Link 1</a>
                </div>
                <div className="h-[40px] w-[80px] border-2 border-dotted border-red-500 bg-green-400 flex justify-center items-center">
                    <a href="#" className="hover:text-blue-600 transition-colors duration-300 font-semibold">Link 2</a>
                </div>
                <div className="h-[40px] w-[80px] border-2 border-dotted border-red-500 bg-green-400 flex justify-center items-center">
                    <a href="#" className="hover:text-blue-600 transition-colors duration-300 font-semibold">Link 3</a>
                </div>
            </div>
            <div className="container mx-auto mt-2">
                {/* Bottone di crezione del task */}
                <div className="flex justify-center items-center gap-12">
                    <h1 className="text-4xl text-center my-12">Lista dei ticket</h1>
                    <Link
                        href={route('tickets.create')}
                        className="bg-blue-500 hover:bg-blue-700 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                    >
                        <FaPlus />Crea Ticket
                    </Link>
                </div>
                {/* Row */}
                <div className="flex flex-wrap -mx-4">
                    {/* Col */}
                    {tickets.map((t) => {
                        const { textColor, backgroundColor } = adjustColor(t.category.color);
                        return (
                            <div key={t.id} className="p-4 w-1/3">
                                {/* Card */}
                                <div className="p-4 flex flex-col bg-[#FCFCFB] shadow-lg rounded-lg h-[340px]">
                                    <h1 className="text-[24px] pb-1 text-center">{t.title}</h1>
                                    <div className="pb-3">
                                        {/* Badge dello status */}
                                        <span
                                            className={`${getStateClass(t.state)} h-[23px] text-[13px] px-3 py-[1px] border-[1px] rounded-xl font-semibold me-2`}>
                                            {t.state}
                                        </span>
                                        {/* Badge della categoria */}
                                        <span
                                            style={{
                                                backgroundColor: backgroundColor,
                                                color: textColor,
                                                borderColor: textColor,
                                            }}
                                            className="h-[23px] text-[13px] px-3 py-[1px] border-[1px] rounded-xl font-semibold"
                                        >
                                            {t.category.label}
                                        </span>
                                    </div>
                                    {/* Descrzione della card */}
                                    <div className="card-body border-t-[1px] h-[170px] pt-5">
                                        <p>{abstract(t.description, 350)}</p>
                                    </div>
                                    {/* Bottoni di modifica e dettaglio */}
                                    <div className="flex justify-center items-center gap-8 pt-5">
                                        <Link
                                            className="bg-blue-500 hover:bg-blue-700 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                                            href={route('tickets.edit', t.slug)}
                                        >
                                            <FaPencilAlt />Modifica
                                        </Link>
                                        <Link
                                            className="bg-blue-500 hover:bg-blue-700 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                                            href={route('tickets.show', t.slug)}
                                        >
                                            <FaMagnifyingGlassPlus />Dettaglio
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Index;