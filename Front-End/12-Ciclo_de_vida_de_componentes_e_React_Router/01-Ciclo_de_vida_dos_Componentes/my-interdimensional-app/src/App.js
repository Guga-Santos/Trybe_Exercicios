// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className='body'>
          {
            characters.map((obj) => {
              return (
              <div className='container' key={obj.name}>
                <h3>{ obj.name }</h3>
                <img src={obj.image} alt={obj.name}></img>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;