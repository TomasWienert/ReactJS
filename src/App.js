import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* traigo componentes */

import './components/NavBar/NavBar.css'
import NavScrollExample from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer"

class App extends React.Component {
  render() {
    return ( 
      <div>
        <div className="header">
          <NavScrollExample /> 
        </div>
        <div>
          <ItemListContainer 
          title="Aqui encontrará todos los productos" 
          parrafo="Cada producto mostrará nombre, una imagen y su precio, ademas de un contador 
          para elegir cuantos agregará al carrito"/>
        </div>
      </div>
      
    );
  }
}


export default App;