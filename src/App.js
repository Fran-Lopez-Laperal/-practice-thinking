import FilterableProductTable from './components/FilterableProductTable'
import ProductForm from './components/ProductForm'

function App() {
    return (
        <div className='App container'>
            <ProductForm />
            <FilterableProductTable />
        </div>
    )
}

export default App