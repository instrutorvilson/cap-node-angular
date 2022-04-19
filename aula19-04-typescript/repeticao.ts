let arr = [10, 20, 30, 40];

console.log('for iterativo')
for (var val of arr) {
  console.log(`${val}`); // prints values: 10, 20, 30, 40
}

console.log("for indexado")
for(let i = 0; i < arr.length; i++){
    console.log(`posição ${i} valor ${arr[i]}`)
}

/**While */
var x: number;
x = 0;
while(x < 10){
    console.log(`execuçaõ ${x}`);
    x++
}
console.log("fim do laço while")

/**do while */

var y: number = 0
do{
    console.log(`execuçaõ ${y}`);
    y++
} while(y < 10)