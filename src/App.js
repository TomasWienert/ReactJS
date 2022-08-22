import React from "react";
import './App.css';
import './components/NavBar/NavBar.css'
/* traigo componentes */

import NavBar from "./components/NavBar/NavBar"

class App extends React.Component {
  render() {
    return ( 
      <NavBar />
    );
  }
}


export default App;