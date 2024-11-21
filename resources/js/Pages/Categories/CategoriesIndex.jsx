const CategoriesIndex = ({ categories }) => {
    return (
        <section>
            <div className="contanier mx-auto">
                {categories.map(category => (
                    <div key={category.id} className={`bg-[${category.color}] h-8`}>{category.label}</div>
                ))}
            </div>
        </section>
    )
}

export default CategoriesIndex;