import React from "react"

class hitungharga extends React.Component{
    constructor(){
        super();
        this.state = {
            hargaawal : 0,
            ppn : 0,
            diskon : 0,
            hargaakhir: 0
        }
    }

    HitungAkhir = () => {
        //menampung harga awal ppn dan diskon
        //mengubah ke dalam bentuk integer
        let hargaawal = parseInt(this.state.hargaawal)
        let ppn = parseInt(this.state.ppn)
        let diskon = parseInt(this.state.diskon)

        //perhitungan
        const pajak = ( ppn * hargaawal )
        const diskonp = (hargaawal * diskon )
        const hargaakhir = hargaawal + pajak - diskonp

        //hasil
        this.setState({
            hasil: hargaakhir
        })
    }

    render(){
        return(
            <div className="container">
                <div className="card">
                    <div className="card-header bg-danger text-center">
                        <h4>Hitung Harga Akhir</h4>
                    </div>
                    <div className="card-body">
                        Harga Awal
                        <input type="number" className="form-control mb-1" value = {this.props.hargaawal} onChange = {ev => this.setState({hargaawal: ev.target.value})}/>
                        PPN
                        <input type="number" className="form-control mb-1" value = {this.props.ppn} onChange = {ev => this.setState({ppn: ev.target.value})}/>
                        Diskon
                        <input type="number" className="form-control mb-1" value = {this.props.diskon} onChange = {ev => this.setState({diskon: ev.target.value})}/>
                            <button className="btn btn-success btn-block mb-1" onClick = {() => this.HitungAkhir()}>
                                Hitung Harga Akhir
                            </button>
                        Harga Akhir
                        <input type="number" className="form-control mb-1" value = {this.state.hasil} readOnly/>
                    </div>
                </div>
            </div>
        )
    }
}

//export
export default hitungharga;