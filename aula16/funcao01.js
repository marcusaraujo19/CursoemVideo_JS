//  ----------------------- EXEMPLOS DE COMO USAR FUNÇÕES ------------------------------


/* --- FUNÇÃO 1 ---
function parimpar(n){
    if (n %2 == 0) {
        return 'Par'
    }else{
        return 'Impar'
    }
}

console.log(parimpar(121))*/

/* --- FUNÇÃO 2 ---
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
function fatorial(n){
    n2 = 1
    for( i = n; i > 1; i--){
       n2*=i
    }
    return n2
}
console.log(`o Valor do fatorial de 5 é: ${fatorial(5)}`)
*/

// --- FUUNÇÃO RECURSIVA ---
function fatorial(n){
    if (n == 0){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(`O fatorial do número escolhido é: ${fatorial(5)}`)


/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!
n! = n x (n-1)!
*/







