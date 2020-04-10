import React, { Component } from 'react';

class States extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nome: 'SEU NOME',
            hora: "00:00:00 AM"
        }

    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000);
    }

    componentDidUpdate() {
        console.log("Atualizou! " + this.state.hora)
    }

    render() {
        return (

            <div>
                <h1>Qualquer titulo</h1>
                <p>{this.state.hora}</p>
            </div >

        );
    }

}

export default States;
