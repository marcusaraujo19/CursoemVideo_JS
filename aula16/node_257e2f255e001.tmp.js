//  ----------------------- EXEMPLOS DE COMO USAR FUNÇÕES ------------------------------


/* -- FUNÇÃO 1 --
function parimpar(n){
    if (n %2 == 0) {
        return 'Par'
    }else{
        return 'Impar'
    }
}

console.log(parimpar(121))*/

/* -- FUNÇÃO 2
function soma(n1, n2){
    return n1 + n2
}

console.log(`O valor somado é: ${soma(3, 6)}`)
*/

/* --- FUNÇÃO 3 ---
v = function(x){
    return x*2
}
console.log(`Esse exemplo passa para uma variável um função ${v}. que retorna qualquer valor digitado o dobro. Exemplo "5" = ${v(5)}`)
*/

/* --- FUNÇÃO 3 FATORIAL ---

*/
function fatorial(n){
    res = 0
    for( i = 1; i < n; i++){
       n*=i 
    }
    return n
}
console.log(`o Valor do fatorial de 5 é: ${fatorial(5)}`)





