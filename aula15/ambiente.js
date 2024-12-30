//let num = [2, 56, 6, 7]

//Para adicionar um valor a certa posição
//num[3] = 44
//Para adicionar na ultima posição "PUSH"
//num.push(51)
//Para saber o comprimento LENGTH() "é um atributo NÃO um método"
//num.length
//Para organizar crescente SORT() "é um método"
//num.sort()
// Para organizar crescente SORT() "é um método" com uma função de comparação 
//num.sort((a, b) => a -b)


/*console.log(`O vetor tem ${num.length} posições`)
console.log(`Em ordem crescente ${num}`) 
console.log("--------------------------------------------")
for(let i = 0; i < num.length; i++){
    console.log(`O valor que esta na posição "${i}" é ${num[i]}`)
}*/

//DIA 29/12/24
let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)

/*for(i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem valor ${num[i]}`)
}
*/

let val = num.indexOf(2)
console.log('O usúario solicitou o indexOf(2) ')
if (val == -1){
    console.log('O valor solicitado é inexistente')
}else{
    console.log(`O valor  "2" esta na posição ${val} `)
}


/*for(let i in num){
    console.log(`A minha posição ${i} é ${num[i]}`)
}*/


