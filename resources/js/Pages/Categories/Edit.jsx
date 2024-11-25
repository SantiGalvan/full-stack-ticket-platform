import { Head } from "@inertiajs/react";
import CategoryForm from "./components/CategoryForm";

const Edit = ({ category }) => {

    const defaultValues = {
        label: category.label,
        color: category.color
    }

    return (
        <section>

            {/* Titolo della pagina */}
            <Head title="Edit Category" />

            <div className="container mx-auto">
                <h1 className="my-12 text-center text-4xl">Edit {category.label}</h1>
                <CategoryForm
                    defaultValues={defaultValues}
                    action={route('categories.update', category.id)}
                    method="put"
                />
            </div>
        </section>
    )
}

export default Edit;