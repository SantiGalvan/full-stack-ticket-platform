import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { FaSave } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "@inertiajs/react";
import { useForm } from 'laravel-precognition-react-inertia';

const CategoryForm = ({ defaultValues, action, method }) => {

    const { data, setData, submit, hasError, errors, processing, invalid, validate } = useForm(method, action, defaultValues);

    const submitForm = e => {
        e.preventDefault();
        submit({ data, preserveScroll: true });
    }

    return (
        <>
            <form className="p-4" onSubmit={submitForm}>
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-wrap my-8 -mx-4">

                    {/* Label */}
                    <div className="p-4 w-2/3">

                        <InputLabel
                            htmlFor="label"
                            value={'Nome della categoria'}
                        />
                        <TextInput
                            id="label"
                            name="label"
                            className="w-full"
                            value={data.label}
                            onChange={e => { setData('label', e.target.value) }}
                            onBlur={() => { validate('label') }}
                        />

                        {invalid('label') && < InputError message={errors.label} />}

                    </div>

                    {/* Color */}
                    <div className="p-4 w-1/3">
                        <InputLabel
                            htmlFor="color"
                            value={'Colore'}
                        />
                        <TextInput
                            id="color"
                            name="color"
                            className="w-1/2"
                            type="color"
                            value={data.color}
                            onChange={e => { setData('color', e.target.value) }}
                            onBlur={() => { validate('color') }}
                        />
                        {invalid('color') && < InputError message={errors.color} />}
                    </div>

                    <div className="p-4 w-full flex items-center justify-center gap-4">

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-green-600 hover:bg-green-800 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                        >
                            <FaSave />Salva
                        </button>

                    </div>

                </div>
            </form>
            <Link
                type="button"
                href={route('categories.index')}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex gap-1 items-center w-40"
            >
                <FaArrowLeftLong />Torna indietro
            </Link>
        </>

    )
}

export default CategoryForm;