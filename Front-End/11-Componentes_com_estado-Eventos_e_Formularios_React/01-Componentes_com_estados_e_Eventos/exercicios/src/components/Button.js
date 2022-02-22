import { buildQueries } from "@testing-library/react";
import React, { Component } from "react";

class Button extends Component {
    constructor(){
        super()

        this.state = {
            contador: 0,
        }
        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick() {
        this.setState((before, _props) => ({
            contador: before.contador + 1,
        }))
    }

    render() {
        return (
            <div>
                <h2> Meu contador de número pares </h2>
                <button onClick={this.handlerClick} style={{backgroundColor: (this.state.contador % 2 === 0) ? "green" : "blue"}}>
                    {this.state.contador}
                    </button>
            </div>
        )
    }
}

export default Button;