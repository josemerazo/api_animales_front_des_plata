import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaAnimales from "./components/TablaAnimales.js";

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <h1>Administración de animales</h1>
      </div>
      <div className='row'>
        <div className='col-md-9'><TablaAnimales /></div>
        <div className='col-md-3'><img src={logo} alt="logo react"></img></div>
      </div>
    </div>
  );
}

export default App;
