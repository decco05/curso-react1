import React, { Component } from 'react';
import '../css/cronometro.css'

class Cronometro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            nomebtnvai: "VAI"
        }
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }


    vai() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            this.setState({ nomebtnvai: "RETOMAR" });
        }
        else {
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            }, 100);
            this.setState({ nomebtnvai: "PAUSAR" });
        }
    }

    limpar() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null

        }
        this.state.numero = 0;
        this.setState({ numero: 0 })
        this.setState({ nomebtnvai: "VAI" });
    }

    render() {
        return (
            <div className="container">
                <img className="img" src={require('../assets/cronometro.png')}></img>
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.nomebtnvai}</a>
                    <a className="botao" onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>

        );
    }

}

export default Cronometro;
