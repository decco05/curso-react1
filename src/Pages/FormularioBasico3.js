import React, { Component } from 'react';

export default class FormularioBasico2 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            form: {
                nome: "",
                password: "",
                email: "",
                sexo: ""
            }
        }

        this.dadosform = this.dadosform.bind(this);

    }

    dadosform(e) {
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({ form: form });
    }


    render() {
        return (

            <div>
                {this.state.form.email} <br />
                {this.state.form.password}<br />
                {this.state.form.sexo}<br />
                Email:
                <input id="email" type="email" name="email" value={this.state.form.email} onChange={this.dadosform} ></input>
                <br />
               Senha:
                <input id="password" type="password" name="password" onChange={this.dadosform}></input>
                <br />
               Sexo:
                <select id="sexo" type="sexo" name="sexo" onChange={this.dadosform} >
                    <option>Masculino</option>
                    <option>Feminino</option>
                </select>
            </div >

        );
    }

}


