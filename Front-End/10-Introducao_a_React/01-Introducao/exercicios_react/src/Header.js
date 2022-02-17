import React, {Component} from "react";
import logo from '../src/mario.png'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-container">
                <img className="logo" src={logo}></img>
                <h1 className="logoText">TrybeReact</h1>
                </div>
                <nav className="nav">
                    <h3>Informações</h3>
                    <h3>Contato</h3>
                </nav>
            </header>
        )
    }
}

export default Header