import { FaPencilAlt } from "react-icons/fa";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

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

const IndexCard = ({ t, textColor, backgroundColor }) => {
    return (
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
    )
}
export default IndexCard;