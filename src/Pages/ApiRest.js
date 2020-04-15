import React, { Component } from 'react';
import '../css/apirest.css'
//http://sujeitoprogramador.com/rn-api/?api=posts

class ApiRest extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dataApiRest: []
        }
    }

    componentDidMount() {
        let url = "http://sujeitoprogramador.com/rn-api/?api=posts";

        fetch(url).then((r) => r.json()).then((json) => {
            let state = this.state;
            state.dataApiRest = json;
            this.setState(state);
            console.log(state.dataApiRest);
        });
    }

    render() {
        return (

            <div className="container">
                <header> Nutrição !</header>
                {

                    this.state.dataApiRest.map((item) => {
                        return (
                            <article key={item.id} className="post">
                                <strong className="titulo">{item.titulo}</strong>
                                <img className="capa" src={item.capa}></img>
                                <p className="subtitulo">{item.subtitulo}</p>
                                <a className="botao" href="#">Acessar</a>
                            </article>

                        );
                    })
                }
            </div>

        );
    }

}

export default ApiRest;
