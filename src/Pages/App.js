import React, { Component } from 'react';

class Equipe extends Component {
    render() {
        return (
            <BemVindo nome={this.props.nome} idade="28" direitosreservados="TODO DIREITO INTEEGRA TEC" />
        );
    }
}

function App() {
    return (
        <div>
            <Equipe nome="Doug2" />
        </div>
    );
}

const BemVindo = (props) => {
    return (
        <div>
            <h2> Seja Muito bem vindo! </h2>
            <Pessoa nome={props.nome} idade={props.idade} direitosreservados={props.direitosreservados}></Pessoa>

        </div>
    );
}

const Pessoa = (props) => {
    return (
        <div>
            <h2> Meu nome é {props.nome} </h2>
            <h2> Tenho {props.idade} anos </h2>
            <Rodape direitosreservados={props.direitosreservados}></Rodape>
        </div>
    );
}

const Rodape = (props) => {
    return (
        <div>
            <h5>  {props.direitosreservados} </h5>


        </div>
    );
}





export default App;