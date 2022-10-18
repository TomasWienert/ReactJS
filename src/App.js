import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";


import './App.css';

/* traigo componentes */

import './components/NavBar/NavBar.css'
import NavScrollExample from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"


const App = () => {
  return ( 
    <BrowserRouter>
      <div className="header">
        <NavScrollExample /> 
      </div>
      <Routes>
        <Route path = "/" element = {<ItemListContainer />} />
        <Route path = "/detail/:id" element = {<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;