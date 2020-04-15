import React, { Component } from 'react';
import ToDoItems from './ToDoItems';

class ToDoList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            tarefa: '',
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.log = this.log.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(key) {
        console.log('item a ser deletado' + key)
        let filtro = this.state.items.filter((item) => {
            return (item.key !== key);
        })

        this.setState({ items: filtro })
    }

    addItem(e) {
        let state = this.state;
        if (this._TarefaInput.value !== '') {
            let newItem = {
                text: (this._TarefaInput.value),
                key: Date.now()
            }
            this.setState({ items: [...state.items, newItem] });
            this.setState({ tarefa: '' });

        }

        e.preventDefault();
    }

    log() {
        console.log(this.state.items);
    }

    render() {
        return (

            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Nova Tarefa" name="Tarefa"
                        value={this.state.tarefa} onChange={(e) => this.setState({ tarefa: e.target.value })}
                        ref={e => this._TarefaInput = e}
                    ></input>
                    <button type='submit'>
                        Adicionar
                    </button>
                </form>
                <button type='button' onClick={this.log}>
                    Log
                    </button>


                <ToDoItems lista={this.state.items} delete={this.deleteItem}>

                </ToDoItems>
            </div>

        );
    }

}

export default ToDoList;
