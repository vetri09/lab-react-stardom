import './App.css';
import Table from './components/Table';
import prostars from './resources/prostars.json'

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className="heading">ProStars</h1>
      </nav>
      <Table data={prostars}/>
    </div>
  );
}

export default App;