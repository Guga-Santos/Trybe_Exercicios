import React, { Component } from "react";
import Data from "./Data";

class Input extends Component {
    constructor(){
        super()
        this.state = {
            filter: "",
        }

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        this.setState({
            filter: e.target.value,
        })
    }

    render(){
        return(
            <div>
            <input type={'text'} onChange={this.handleInput}/>
            {Data.filter((ob) => ob.nome.includes(this.state.filter))
            .map((obj) => <h3 key={obj.nome}>{obj.nome}</h3>)}
            </div>
        )
    }
}

export default Input;