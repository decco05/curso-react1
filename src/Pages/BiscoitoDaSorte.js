import React, { Component } from 'react';
import '../css/biscoitodasorte.css'

class BiscoitoDaSorte extends Component {


    constructor(props) {
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.frases = ['FRASE 1', 'FRASE 2', 'FRASE 3', 'FRASE 4', 'FRASE 5', 'FRASE 6']

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
    }

    quebraBiscoito() {

        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = this.frases[numeroAleatorio];
        this.setState(state);
    }

    render() {
        return (

            <div className="container">
                <img src={require('../assets/biscoito.jpg')}></img>
                <BotaoBiscoitoDaSorte nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}></BotaoBiscoitoDaSorte>
                <h3 className="textoFraseBiscoito">{this.state.textoFrase}</h3>
            </div >

        );
    }

}


class BotaoBiscoitoDaSorte extends Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>

        );
    }
}

export default BiscoitoDaSorte;
