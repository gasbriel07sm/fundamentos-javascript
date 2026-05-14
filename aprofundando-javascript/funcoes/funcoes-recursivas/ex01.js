/** Crie uma função recursiva contarAteZero.
Ela deve receber um número e ir exibindo até chegar em zero. 
*/

const funcRec = n => {
    console.log(n);
    n > 0 ? funcRec(n - 1) : false
}

funcRec(10)