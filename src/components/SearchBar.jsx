function SearchBar({ search, inStock, onSearch, onCheck }) {
    return (
        <div className="SearchBar mt-5">
            <input
                value={search}
                onChange={(event) => { 
                    onSearch(event.target.value)
                }}
                type="text"
                placeholder="Search.." />
            <div>
                <input
                    checked={inStock}
                    onChange={(event) => {
                        onCheck(event.target.checked)
                    }}
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox"
                     />
                <label className="form-check-label" for="checkbox">
                Only Check the stock</label>
            </div>
        </div>
    )
}

export default SearchBar