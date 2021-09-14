
import './App.css';
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
    <Navbar /> 
    <ItemListContainer greeting={"Bienvenidos a Batik de Bri, Tu lugar en la Moda."}/>
    <ItemCount />

    </>
  );
}

export default App;
