// SWITCH CASE
// podemos avaliar múltiplas expressões, a famosa (múltipla escolha)

let colocacao = 10;

switch (colocacao) {
    case 1:
        console.log("PRIMEIRO LUGAR");
        break; 
    case 2:
        console.log("SEGUNDO LUGAR");
        break;
    case 3:
        console.log("TERCEIRO LUGAR");
        break;
    case 4: case 5: case 6:
        console.log("PREMIO DE PARTICIPAÇÃO");
        break;    
    default:
        console.log("NÃO FOI REGISTRADO.");
        break;          
}