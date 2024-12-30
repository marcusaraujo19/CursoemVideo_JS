function contar(){
    let entrada = document.getElementById('entrada')
    let valorDigitado = Number(document.getElementById('txtTabuada').value)
    let exibeValor = document.getElementById('resultado')

    //criação Var dinamica
    let incremento = document.createElement('p')
    incremento.setAttribute('id', 'incremento')

    exibeValor.innerHTML = "" //limpa o ultimo resultado exibido

    //Lógica 
    let resultado = ""
    if(valorDigitado == 0){
        let msgerro = document.createElement('p')
        msgerro.setAttribute('id', 'msgerro')
        msgerro.innerHTML = `O valor deve ser maior que 1 `
        msgerro.style.color = 'red'
        entrada.appendChild(msgerro)
        
    }else{
        msgerro.innerHTML = ""
        for(let i = 0; i <= 10; i++){
        resultado += `${i}x${valorDigitado} = ${i*valorDigitado} </br>`
    }
    //exibindo os valores armazenados em resultado
    incremento.innerHTML = resultado
    exibeValor.appendChild(incremento)
    }
    
}


