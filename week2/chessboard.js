let size = 6;
let b = "";
for(let i = 0; i < size; i += 1){
for(let a = 0; a < size; a += 1){
	if ((i + a) % 2 == 0) {
     b += " ";
    }
  	else{
      b += "#";
    }
}
  b += "\n"
}
console.log(b);