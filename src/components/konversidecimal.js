import React from "react"

class konversi extends React.Component{
    constructor(){
        super();
        this.state = {
            decimal : 0,
            
        }
    }

    //fungsi menghitung
    HitungKonversi = () => {

    }

    render(){
        return(
            <div className="container">
                <div className="card">
                    <div className="card-header bg-info text-center">
                        <h4>Konversi Bilangan</h4>
                    </div>
                    <div className="card-body">
                        Input Bilangan :
                        
                    </div>
                </div>
            </div>
        )
    }
}

//export
export default konversi;
