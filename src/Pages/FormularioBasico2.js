import React, { Component } from 'react';

export default class FormularioBasico2 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            password: "",
            email: "",
            sexo: ""
        }

        this.changeEmail = this.changeEmail.bind(this);
        //this.changePass = this.changePass.bind(this);
    }

    changeEmail(e) {
        let obj = e.target.value;
        this.setState({ email: obj });
    }

    // changePass(e) {
    //     let obj = e.target.value;
    //     this.setState({ password: obj });
    // }

    render() {
        return (

            <div>
                {this.state.email} <br />
                {this.state.password}<br />
                {this.state.sexo}<br />
                Email:
                <input id="email" type="email" name="email" value={this.state.email} onChange={this.changeEmail} ></input>
                <br />
               Senha:
                <input id="password" type="password" name="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
                <br />
               Sexo:
                <select id="sexo" type="sexo" name="sexo" onChange={(e) => this.setState({ sexo: e.target.value })}>
                    <option>Masculino</option>
                    <option>Feminino</option>
                </select>
            </div >

        );
    }

}


