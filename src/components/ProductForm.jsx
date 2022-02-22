import { Component } from "react"

class ProductForm extends Component {


    state = {
        name: '',
        price: 1,
        category: '',
        stocked: true
    }

handleChange(event){
    this.setState({
        [event.target.id]: 
        event.type === "chechbox" ? event.target.checked : event.target.value,
    })
}

    render() {
        return (
            <div className="ProductForm">
                <div className="form-group">
                    <label className="form-label" for="name">Name</label>
                    <input value={this.state.name} 
                    onChange={(e) => this.handleChange(e)}
                     type="text" className="form-control" id="name" />
                </div>

                <div className="form-group">
                    <label className="form-label" for="name">Price</label>
                    <input value={this.state.price}
                    onChange={(e) => this.handleChange(e)} type="number" className="form-control" id="price" />
                </div>

                <div className="form-group">
                    <label className="form-label" for="name">Category</label>
                    <input value={this.state.category}
                    onChange={(e) => this.handleChange(e)} type="text" className="form-control" id="category" />
                </div>
                <div className="form-check mb-4">
                    <input
                        checked={this.state.stocked}
                        onChange={(e) => this.handleChange(e)}
                        className="form-check-input"
                        type="checkbox"
                        id="stocked"
                    />
                    <label className="form-check-label" for="stocked">
                        In Stock
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Create Product</button>
                        {JSON.stringify(this.state)}
            </div>

        )
    }

}

export default ProductForm