const point = document.querySelectorAll('.cell');

point.forEach(function(){
    document.addEventListener("click",() => console.log('toe') );
});




function tic(){
    const item = document.createElement('p');
    item.appendChild = 'x'
}

function tac(){
    const item = document.createElement('p');
    item.appendChild = 'O'
}

function toe(){
    for(let i = 1; i <= 9; i++){
        if(i % 2 == 0){
            tic();
        }
        else{
            tac();
        }
    }
}