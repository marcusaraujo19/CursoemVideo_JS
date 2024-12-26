let num = [2, 56, 6, 7]

//Para adicionar um valor a certa posição
//num[3] = 44
//Para adicionar na ultima posição "PUSH"
num.push(51)
//Para saber o comprimento LENGTH() "é um atributo NÃO um método"
num.length
//Para organizar crescente SORT() "é um método"
//num.sort()
// Para organizar crescente SORT() "é um método" com uma função de comparação 
num.sort((a, b) => a -b)


console.log(`O vetor tem ${num.length} posições`)
console.log(`Em ordem crescente ${num}`) 
console.log("--------------------------------------------")
for(let i = 0; i < num.length; i++){
    console.log(`O valor que esta na posição "${i}" é ${num[i]}`)
}
