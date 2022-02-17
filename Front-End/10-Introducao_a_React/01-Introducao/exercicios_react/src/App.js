import logo from './logo.svg';
import './App.css';
import Header from './Header'


const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const array = ['Gustavo', 'Amanda', 'Euclides', 'Cacau', 'Diego', 'Kathleen', 'Bryan', 'Rafitas'];

function App() {
  return (
    <>
    <Header />
    <div><ol>{array.map((elem) => Task(elem))}</ol></div>
    </>
  );
}

export default App;
