import { TinyColor } from "@ctrl/tinycolor";
import './index.css';

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
            <div className="container mx-auto mt-20">
                {/* Bottone di crezione del task */}
                <div className="flex justify-end">
                    <button className="bg-green-600 text-white hover:bg-green-500 text-shadow h-[25px] text-[13px] px-3 py-[1px] border-[1px] rounded-xl font-semibold transition-colors duration-300 ease-in-out">
                        Crea Ticket
                    </button>
                </div>
                {/* Row */}
                <div className="flex flex-wrap -mx-4">
                    {/* Col */}
                    {tickets.map((t) => {
                        const { textColor, backgroundColor } = adjustColor(t.category.color);
                        return (
                            <div key={t.id} className="p-4 w-1/3">
                                {/* Card */}
                                <div className="p-4 flex flex-col bg-[#FCFCFB] shadow-lg rounded-lg h-[300px]">
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
                                    <div className="card-body border-t-[1px] pt-5">
                                        <p>{abstract(t.description, 350)}</p>
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