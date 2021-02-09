import React from "react"

class konversi extends React.Component{
    constructor(){
        super();
        this.state = {
            input: '10',
            output: '10',
            konversi: '',
            result: ''
        }
    }

    //fungsi menghitung
    HitungKonversi = () => {
        const inputan = parseInt(this.state.input)
        const outputan = parseInt(this.state.output)
        const input = parseInt(this.state.konversi)

        //proses konversi
        if ( inputan === 10 || inputan === 8 || inputan === 2 || inputan === 16 ) {
            if (outputan === 10 || outputan === 8 || outputan === 2 || outputan === 16) {
                let result = parseInt(input, inputan).toString(outputan).toUpperCase();
                this.setState({result: result})
            }
        }
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
                        <input type="number" className="form-control mb-1" value = {this.props.input} onChange = {ev => this.setState({input: ev.target.value})}/>
                    
                        {/** menentukan pilihan */}
                        Pilihan : 
                        <select class="custom-select">
                            <option > Binary </option>
                            <option > Oktal </option>
                            <option > Hexadecimal </option>
                        </select>
                    
                        <button className="btn btn-success btn-block mb-1" onClick = {() => this.HitungKonversi()}>
                            Konversikan        
                        </button>

                        Hasil konversi
                            <input type="number" className="form-control mb-1" value = {this.state.nominal} readOnly/> 
                    </div>
                </div>
            </div>
        )
    }
}

//export
export default konversi;
