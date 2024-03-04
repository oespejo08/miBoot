//import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la prueba de mi primera App</p>
}

const App = () => {
 
  return (
    <div className="App">
    <Mensaje color='red' message='Estamos Trabajando'/>
    <Mensaje color='black' message='En un curso'/>
    <Mensaje color='red' message='Para aprender React'/>
    <Description/>

   
    </div>
  );
}

export default App;
