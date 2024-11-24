import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from 'laravel-precognition-react-inertia';
import { Link } from "@inertiajs/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

const TicketForm = ({ defaultValues, action, method, categories, users }) => {

    const { data, setData, submit, hasError, errors, processing, invalid, validate } = useForm(method, action, defaultValues);

    const submitForm = e => {
        e.preventDefault();
        submit({ data, preserveScroll: true });
    }

    return (
        <>
            <form className="p-4" onSubmit={submitForm}>
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-wrap my-8 -mx-4">

                    <div className="p-4 w-1/2">

                        <div className="flex flex-wrap -mx-4">

                            {/* Title */}
                            <div className="px-4 w-full">
                                <InputLabel
                                    htmlFor="title"
                                    value={'Titolo del ticket'}
                                />
                                <TextInput
                                    id="title"
                                    name="title"
                                    className="w-full"
                                    value={data.title}
                                    onChange={e => { setData('title', e.target.value) }}
                                    onBlur={() => { validate('title') }}
                                />

                                {invalid('title') && < InputError message={errors.title} />}
                            </div>

                            {/* Selects */}
                            <div className="pl-8 w-full flex flex-wrap -mx-4 mt-8">

                                {/* Users */}
                                <div className="w-1/2 pr-2">

                                    <InputLabel
                                        htmlFor="user"
                                        value={'Operatori'}
                                    />

                                    <select
                                        name="user"
                                        id="user"
                                        className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        value={data.user}
                                        onChange={e => { setData('user', e.target.value) }}
                                        onBlur={() => { validate('user') }}
                                    >
                                        <option value="">Scegli un operatore</option>
                                        {users.map(({ name, id }) => (
                                            <option key={`user-${id}`} value={id}>{name}</option>
                                        ))}
                                    </select>

                                    {invalid('user') && < InputError message={errors.user} />}

                                </div>

                                {/* Categories */}
                                <div className="w-1/2 pl-2">

                                    <InputLabel
                                        htmlFor="category"
                                        value={'Categorie'}
                                    />

                                    <select
                                        name="category"
                                        id="category"
                                        className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        value={data.category}
                                        onChange={e => { setData('category', e.target.value) }}
                                        onBlur={() => { validate('category') }}
                                    >
                                        <option value="">Scegli una categoria</option>
                                        {categories.map(({ label, id }) => (
                                            <option key={`category-${id}`} value={id}>{label}</option>
                                        ))}

                                    </select>

                                    {invalid('category') && < InputError message={errors.category} />}

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Description */}
                    <div className="p-4 w-1/2">

                        <InputLabel
                            htmlFor="description"
                            value={'Descrizione'}
                        />

                        <textarea
                            id="description"
                            name="description"
                            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            type="text-area"
                            rows="5"
                            cols="50"
                            value={data.description}
                            onChange={e => { setData('description', e.target.value) }}
                            onBlur={() => { validate('description') }}
                        ></textarea>

                        {invalid('description') && < InputError message={errors.description} />}

                    </div>

                    {/* Buttons */}
                    <div className="p-4 w-full flex items-center justify-center gap-4">

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-green-600 hover:bg-green-800 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                        >
                            <FaSave />Salva
                        </button>

                        <button
                            type="reset"
                            disabled={processing}
                            className="bg-orange-600 hover:bg-orange-800 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                        >
                            <VscDebugRestart />Reset
                        </button>

                    </div>

                </div>
            </form>

            <Link
                type="button"
                href={route('tickets.index')}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex gap-1 items-center w-40"
            >
                <FaArrowLeftLong />Torna indietro
            </Link>
        </>
    )
}

export default TicketForm;