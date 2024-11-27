import { TinyColor } from "@ctrl/tinycolor";
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


const TicketCard = ({ t, auth, isShow }) => {
    const { textColor, backgroundColor } = adjustColor(t.category.color);
    return (
        <div className="p-6 flex flex-col bg-[#FCFCFB] shadow-lg rounded-lg">
            <h1 className={
                !isShow
                    ? "text-[24px] pb-1 text-center"
                    : "text-5xl pb-1 text-center"}
            >
                {t.title}
            </h1>
            <div className="pb-2 flex justify-between">
                {/* Badge */}
                <div>
                    {/* Badge dello status */}
                    <span
                        className={
                            !isShow
                                ? `${getStateClass(t.state)} h-[23px] text-[13px] px-3 py-[1px] border-[1px] rounded-xl font-semibold me-2`
                                : `${getStateClass(t.state)} h-[28px] text-[16px] px-3 py-[1px] border-[1px] rounded-xl font-semibold me-2`
                        }
                    >
                        {t.state}
                    </span>
                    {/* Badge della categoria */}
                    <span
                        style={{
                            backgroundColor: backgroundColor,
                            color: textColor,
                            borderColor: textColor,
                        }}
                        className={
                            !isShow
                                ? "h-[23px] text-[13px] px-3 py-[1px] border-[1px] rounded-xl font-semibold"
                                : "h-[28px] text-[16px] px-3 py-[1px] border-[1px] rounded-xl font-semibold"
                        }
                    >
                        {t.category.label}
                    </span>
                </div>
                {/* Operatore */}
                {(isShow || auth.user.is_admin === 1) &&
                    <div>
                        <span className="text-[18px] font-semibold">{t.user.name}</span>
                    </div>
                }
            </div>
            {/* Descrzione della card */}
            <div className="card-body border-t-[1px] h-[170px] pt-2">
                {!isShow ? <p>{abstract(t.description, 350)}</p> : <p className="text-[22px]">{t.description}</p>}
            </div>
            {/* Bottoni di modifica e dettaglio */}
            <div className="flex justify-center items-center gap-8 pt-5">
                {auth.user.is_admin !== 0 &&
                    <Link
                        className="bg-blue-500 hover:bg-blue-700 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                        href={route('tickets.edit', t.slug)}
                    >
                        <FaPencilAlt />Modifica
                    </Link>
                }
                {!isShow && <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                    href={route('tickets.show', t.slug)}
                >
                    <FaMagnifyingGlassPlus />Dettaglio
                </Link>}
            </div>
        </div>
    )
}
export default TicketCard;