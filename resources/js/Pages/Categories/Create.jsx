import Form from "./components/CategoryForm";

const Create = () => {

    const defaultValues = {
        label: '',
        color: '#ffffff'
    }

    return (
        <section>
            <div className="container mx-auto">
                <h1 className="my-12 text-4xl text-center">Crea nuova categoria</h1>
                <Form defaultValues={defaultValues} action={route('categories.store')} method="post" />
            </div>
        </section>
    )
}

export default Create;