import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

//import
import BMI from "./components/hitungbmi"
import Cicilan from "./components/cicilan"
import Harga from "./components/hargakhir"
import Konversi from "./components/konversidecimal"

class App extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <BMI/>
          <Cicilan/>
          <Harga/>

        </div>  
      </div>
    );
  }
}

export default App;
