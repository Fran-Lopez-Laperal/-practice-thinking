import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"
import products from '../components/data/products.json'

function getCategories() {
    const categories = []
    products.forEach(product => {
        const category = product.category
        if (!categories.includes(category)) {
            categories.push(category)
        }
    })
    return categories
}



const categories = getCategories(products)

function ProductTable({ search, inStock }) {
    return (
        <div className="ProductTable">
            <div className="d-flex">
                <div className="fw-bold">Name</div>
                <div className="fw-bold">Price</div>
            </div>

            {categories.map(category =>
                <>
                    <ProductCategoryRow category={category} />
                    {products
                        .filter(product => inStock ? product.stocked : true)
                        .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
                        .filter(product => product.category === category)
                        .map(product => <ProductRow  {...product} />
                       )}
                </>
            )}


        </div>
    )
}

export default ProductTable





const porductInStock = products.filter(product => !product.stocked === true)