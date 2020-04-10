import React, { Component } from 'react';

export default class Listas extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nome: 'SEU NOME',
            contador: 0,
            admin: true,
            listFeed:
                [
                    { id: 1, nome: 'Douglas Decco', curtidas: 100, comentarios: 2 },
                    { id: 2, nome: 'Ana Paula', curtidas: 6, comentarios: 50 },
                    { id: 3, nome: 'Batata Decco', curtidas: 8, comentarios: 20 }
                ]
        }


    }


    render() {
        return (

            <div>
                {this.state.listFeed.map((item) => {
                    return (
                        <div key={item.id}>
                            <div style={{ paddingTop: 0 }}>ID: {item.id}</div>
                            <div style={{ paddingTop: 0 }}>NOME: {item.nome}</div>
                            <div style={{ paddingTop: 0 }}>DADOS: {item.curtidas} curtidas / {item.comentarios} comentarios </div>
                        </div>
                    );
                })}
            </div >

        );
    }

}


