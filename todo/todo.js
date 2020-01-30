import {qs, qsa, bindTouch} from './utilities.js'

let toDoList = [];

function saveTodo(toDo){

}

export default class todo {
    constructor(){
        bindTouch('#newTodoButton' , this.addNewTodo)
    }
    listTodos(){

    }
    addNewTodo(){
        //get todo text
        const todoText = qs('#newTodo');
        //save to the datastore
        saveTodo(todoText.value);
        //list todos
        this.listTodos();
    }
    removeTodo(id){

    }
    completeTodo(id){

    }

}