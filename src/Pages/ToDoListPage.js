import React, { Component } from 'react';
import ToDoList from '../Components/ToDoList.js'

class ToDoListPage extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (

            <div>
                <h1>Lista de Tarefas</h1>
                <ToDoList></ToDoList>
            </div >

        );
    }

}

export default ToDoListPage;
