import React from 'react'

class cicilan extends React.Component {
    constructor(){
        super();
        this.state = {
            nominal : 0,
            bunga : 0,
            periode: '12',
            SukuBunga: 0,
            Cicilan: 0,
            Angsuran: 0
        }
    }

    HitungCicilan = () => {
        //tampung data nominal dan bunga dan periode
        let nominal = this.state.nominal
        let bunga = this.state.bunga
        let periode = this.state.periode

        //result perhitungan
        let hitungan = bunga / 100;
        let HitungBunga = (nominal * hitungan) / periode;
        let CicilanPokok = nominal / periode;
        let AngsuranpBulan = CicilanPokok + HitungBunga;

        //hasil
        this.setState({
            hasil: AngsuranpBulan
        })

    }


    render(){
        return(
            <div className="container">
                <div className="card">
                    <div className="card-header bg-warning text-center">
                        <h4>Cicilan Bank</h4>
                    </div>
                        <div className="card-body">
                            Input Nominal :
                            <input type="number" className="form-control mb-1" value = {this.props.nominal} onChange = {ev => this.setState({nominal: ev.target.value})}/>

                            Bunga(%) :
                            <input type="number" className="form-control mb-1" value = {this.props.bunga} onChange = {ev => this.setState({bunga: ev.target.value})}/>

                            Periode :
                            <select class="custom-select" value = {this.props.periode} onChange = {ev => this.setState({periode: ev.target.value})}>
                                <option>12</option>
                                <option>24</option>
                                <option>36</option>
                            </select>

                            <button className="btn btn-success btn-block mb-1" onClick = {() => this.HitungCicilan()}>
                                Hitung Cicilan
                            </button>

                            Angsuran per bulan
                            <input type="number" className="form-control mb-1" value = {this.state.hasil} readOnly/> 
                        </div>
                </div>
            </div>
        )
    }
}

export default cicilan
