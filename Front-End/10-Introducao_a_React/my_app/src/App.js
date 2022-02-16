import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function nome (nome, sobrenome) {
  return `${nome} ${sobrenome}!`;
}

const greeting = `Hello, ${nome("Gustavo", "Santos")}`

const element = <h1 className="teste">{greeting}</h1>

function reacting() {
  return (
      element
  )
}

export default reacting;
