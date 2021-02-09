import React from "react"
import Alert from "./Alert"

class Main extends React.Component {
    //constructor
    constructor(){
        super();
        this.state = {
            berat: 0,
            tinggi: 0,
            hasil: 0,
            status: " ",
            type: " "
        }
    }

    HitungBMI = () => {
        //tampung data tinggi dan berat yang dinput user
        let tinggi = this.state.tinggi
        let berat = this.state.berat

        //result perhitungan
        let result = berat / (tinggi * tinggi)
        let status = ""
        let type = ""

        //ifelse status =
        if (result < 18.5) {
            status = "Kurang berat badan"
            type = "danger"
        } else if (result >= 18.5 && result <= 24.9) {
            status = "Normal"
            type = "success"
        } else if (result >= 25 && result <= 29.9) {
            status = "Kelebihan berat badan"
            type = "warning"
        } else if (result >= 30) {
            status = "Obesitas"
            type= "dark"
        }
        //masukan status dan result ke dalam state
        this.setState({
            hasil: result,
            status: status,
            type: type
        })
    }

    render(){
        return(
            <div className="container">
                <div className="card">
                     <div className="card-header bg-info text-center">
                       <h4>Perhitungan BMI</h4>
                    </div>

                        <div className="card-body">
                            Input Berat
                            <input type="number" className="form-control mb-1" value = {this.props.berat} onChange = {ev => this.setState({berat: ev.target.value})}/>

                            {/** ev.target.value = untuk mendapatkan nilai yang dimasukan oleh user ke input tsb */}
                            Input tinggi
                            <input type="number" className="form-control mb-1" value = {this.props.tinggi} onChange = {ev => this.setState({tinggi: ev.target.value})}/>

                            <button className="btn btn-success btn-block mb-1" onClick = {() => this.HitungBMI()}>
                                hitung BMI
                            </button>

                            Nilai BMI
                            <input type="number" className="form-control mb-1" value = { this.state.hasil } readOnly />

                            Status BMI
                           <Alert message={this.state.status} type={this.state.type}/>
                            
                    </div>    
                </div>
            </div>
        )
    }
}

//export
export default Main;



                            










