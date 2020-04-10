import React, { Component } from 'react';

class Condicoes extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nome: 'SEU NOME',
            contador: 0,
            admin: true
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
                {/* IF
                {
                    this.state.admin === true &&
                    <h1>Qualquer titulo</h1>
                } */}
                {/* IF E ELSE
                {
                    this.state.admin === true &&
                    <h1>Qualquer titulo</h1>
                } */}




                {/* //Ternário */}
                {
                    this.state.admin ?
                        <div>
                            <h1>Qualquer titulo</h1>
                            <button onClick={this.diminuirContador}> - </button>
                            {this.state.contador}
                            <button id="teste" onClick={this.aumentarContador}> + </button>
                        </div >
                        :
                        <h1>Nada para mostrar</h1>
                }
            </div >

        );
    }

}

export default Condicoes;
