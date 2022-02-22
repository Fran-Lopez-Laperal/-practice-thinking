import { Component } from "react";

class ControlledInput extends Component{
state = {
    text: ''
}

    render(){
        return(
            <div>
                <input 
                value={this.state.text}
                onChange={(event) => {
                    this.setState({text: event.target.value})
                }}
                className={`form-control ${this.state.text.length < 10 ? 'is-invalid' : 'is-valid'}`} 
                type="" />
                <p>{this.state.text}</p>
                
            </div>
        )
    }
}
export default ControlledInput