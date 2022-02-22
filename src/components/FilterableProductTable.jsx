import { Component } from 'react';
import ControlledInput from './ControlledInput';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  state = {
    search: '',
    inStock: false
  }

  onSearch(newSearch) {
    this.setState({ search: newSearch })

  }

  render() {
    return (

      <div className="FilterableProductTable container">

        <SearchBar
          search={this.state.search}
          onSearch={(newSearch) => {
            this.onSearch(newSearch)
          }}
          inStock={this.state.inStock}
          onCheck={(checked) => {
            this.setState({ inStock: checked })
          }}
        />

        <ProductTable search={this.state.search} inStock={this.state.inStock} />
      </div>
    );
  }
}

export default FilterableProductTable;
