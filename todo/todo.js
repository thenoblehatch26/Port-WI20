import {qs, qsa} from './utilities.js'

let toDoList = [];

function saveTodo(toDo){

}

export default class todo {
    constructor(){

    }
    listTodos(){

    }
    addNewTodo(){
        //get todo text
        const todoText = qs('#newTodo');
        //save to the datastore
        saveTodo(todoText.value);
        //list todos
        listTodos();
    }
    removeTodo(id){

    }
    completeTodo(id){

    }

}