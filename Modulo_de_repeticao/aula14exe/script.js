function contar(){
    //pegando os valores que serão inseridos
    let entrada = document.getElementById('entrada')
    let ini     = Number(document.getElementById('txtInicio').value)
    let fim     = Number(document.getElementById('txtFim').value)
    let passo   = Number(document.getElementById('txtPasso').value)
    //saída
    let saida   = document.getElementById('saida')
    //Elementos ocultos
    let resultado = document.createElement('p')
    resultado.setAttribute('id', 'result')
    

    if(ini.length == 0 || fim.length == 0 || passo == 0){
        let msgerro = document.createElement('p')
        msgerro.setAttribute('id', 'msgerro')
        msgerro.innerHTML = 'Atenção, preencha todos os campos corretamente!'
        msgerro.style.color = 'red'
        entrada.appendChild(msgerro)
    }

    else if (ini > fim){
        resultado.innerHTML = 'Contando: <br>'
        for(let i = ini; i >= fim; i -= passo){
            resultado.innerHTML += ` ${i} \u{1F449}`
        }
    }
    else{
        resultado.innerHTML = 'Contando: <br>'
        for(let i = ini; i <= fim; i += passo){
            resultado.innerHTML += ` ${i} \u{1F449}`        
        }
    }
    resultado.innerHTML += `Fim \u{1F3C1}`
    saida.appendChild(resultado)
    
    

}