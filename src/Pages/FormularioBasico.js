import React, { Component } from 'react';

export default class FormularioBasico extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            password: "",
            email: "",
            sexo: "",
            error: ""
        }

        this.changeEmail = this.changeEmail.bind(this);
        //this.changePass = this.changePass.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
    }

    changeEmail(e) {
        let obj = e.target.value;
        this.setState({ email: obj });
    }

    cadastrar(e) {
        const { nome, email, password } = this.state;

        if (nome !== '' && email !== '' && password !== '') {

            alert(`Nome: ${nome} , Email: ${email}, Senhe: ${password} `);
            this.setState({ error: "" })
        }
        else {
            //erro
            this.setState({ error: "Ops... Parece que está faltando algo!!" })
        }

        e.preventDefault();
    }

    // changePass(e) {
    //     let obj = e.target.value;
    //     this.setState({ password: obj });
    // }

    render() {
        return (
            <div >
                <h1> Novo Usuario </h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <input type="text" name="nome" value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })}
                    ></input>
                    <input type="text" name="email" value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    ></input>
                    <input type="password" name="password" value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                    ></input>
                    <button type="submit">Cadastrar</button>
                </form>
            </div >

        );
    }

}


