import React, { Component } from 'react';

class Contador extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nome: 'SEU NOME',
            contador: 0
        }

        this.aumentarContador = this.aumentarContador.bind(this);
        this.diminuirContador = this.diminuirContador.bind(this);
    }

    aumentarContador() {
        console.log("Aumentou");
        let x = this.state;
        if (x.contador < 10) {
            x.contador = x.contador + 1;
        }
        this.setState(x);
    }

    diminuirContador() {
        console.log("Diminuiu");
        let x = this.state;
        if (x.contador > 0) {
            x.contador = x.contador - 1;
        }
        this.setState(x);
    }


    render() {
        return (

            <div>
                <h1>Qualquer titulo</h1>
                <button onClick={this.diminuirContador}> - </button>
                {this.state.contador}
                <button onClick={this.aumentarContador}> + </button>
            </div >

        );
    }

}

export default Contador;
