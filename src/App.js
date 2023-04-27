import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenida a Oh Bonita!'}/>
    </div>
  );
}

export default App;
