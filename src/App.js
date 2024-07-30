import logo from './logo.svg';
import './App.css';


function mostrarTitulo(titulo){
  return (
    <h1>
      {titulo}
    </h1>
  );
}

function App() {

  const title = 'Fin';
  return ( 
    <div>
    {mostrarTitulo('Hola mundo')}
    { mostrarTitulo(title)}
    </div>
  );
}

export default App;
