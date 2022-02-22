function ProductRow({ name, price }) {
    return (
        <div className="ProductRow d-flex">
            <div className="w-50">
                {name}
            </div>
            <div className="w-50">
                {price}
            </div>
        </div>
    )
}

export default ProductRow