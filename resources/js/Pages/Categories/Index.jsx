import { Link } from "@inertiajs/react";
import { FaPlus } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Index = ({ categories }) => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex justify-center items-center gap-12">

                    <h1 className="text-4xl text-center my-12">Categorie</h1>
                    <Link
                        href={route('categories.create')}
                        className="bg-blue-500 hover:bg-blue-700 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                    >
                        <FaPlus />Crea categoria
                    </Link>

                </div>

                <div className="flex flex-wrap -mx-3">

                    {categories.map(category => (
                        <div key={category.id} className="w-1/5 px-3 mb-8" >
                            <div className="flex flex-col justify-between items-center rounded-lg shadow-md">

                                <div style={{ backgroundColor: category.color }} className="w-full rounded-t-lg h-20 flex items-center justify-center">
                                    <h3 className="text-2xl text-white data-shadow">{category.label}</h3>
                                </div>

                                <div className="w-full rounded-t-lg h-20 flex items-center justify-center gap-4">
                                    <Link
                                        href={route('categories.edit', category.id)}
                                        className="mb-4 bg-orange-500 hover:bg-orange-700 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                                    >
                                        <FaPencilAlt />Modifica
                                    </Link>
                                    <Link
                                        href={route('categories.destroy', { id: category.id })}
                                        method="DELETE"
                                        className="mb-4 bg-red-500 hover:bg-red-700 text-white data-shadow font-bold py-2 px-4 rounded flex gap-1 items-center"
                                    >
                                        <RiDeleteBin6Fill />Elimina
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section >
    )
}

export default Index;