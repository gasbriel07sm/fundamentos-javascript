// LOOP FOR OF e LOOP FOR IN
const obj = document.getElementsByTagName("div");
let num = [10, 20, 30, 40, 50];

console.log("USANDO FOR IN")
// o for in imprime o índice, para pegarmos os valores, colocamos <vetor>[<apelido>]
for (let n in num) {
    console.log(n + ": " + num[n])
}

console.log("\nUSANDO FOR OF")
for (let n of num) {
    console.log(n)
}

console.log("USANDO FOR IN")
// o for in imprime o índice, para pegarmos os valores, colocamos <vetor>[<apelido>]
for (let o in obj) {
    console.log(o + ": " + obj[o])
}

console.log("\nUSANDO FOR OF")
for (let o of obj) {
    console.log(o);
    o.innerHTML = "Curso"
}