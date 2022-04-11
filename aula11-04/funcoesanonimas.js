//função anonima
var x = function(n1, n2) {
    return n1 + n2
}

//invocar a função?
let z = x(50, '20')
console.log(z);

//função autoinvoke
(
    function(n1, n2) {
        console.log(n1 + n2)
    }
)(20, 30);