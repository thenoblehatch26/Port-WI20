/* //old way of doing it
// const todoInput = document.getElementById('newTodo');


//helper function that makes it so you dont have to type document.querySelector over and over
function qs(query){
    return document.querySelector(query);
}

const todoInput = qs("#newTodo");

//end of helper example

//helper function that does the same as above except for all

function qsa(query){
    return document.querySelectorAll(query);
}

const todoInputAll = qsa("#newTodo");

//end of helper example
 */



export function qs(query){
    return document.querySelector(query);
}

export function qsa(query){
    return document.querySelectorAll(query);
}

export function bindTouch(selector, callback){
    qs(selector).addEventListener('touchend', (e) =>{
        e.preventDefault();
        callback();
    });    
    qs(selector).addEventListener('click', (e) =>{
        callback();
    })
}



//you can use this to use it in what ever function or you need 
//so if you have to use the api key over and over.
export const apiKey = 'asdfasfsdfdsf';

