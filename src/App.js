import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* traigo componentes */

import './components/NavBar/NavBar.css'
import NavScrollExample from "./components/NavBar/NavBar"

class App extends React.Component {
  render() {
    return ( 
      <div>
        <NavScrollExample /> 
      </div>
    );
  }
}


export default App;