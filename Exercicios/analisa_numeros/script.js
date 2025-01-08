// Declaração de VAR
let caixa_dados = document.getElementById('resultado');
let btn = document.getElementById('btnAdd');
let vetNumeros = [];
let exibir_val = document.createElement('div');
exibir_val.setAttribute('id', 'exibir_val');

//DIV DO ESPAÇO DO BTNFINAL
let div_abaixo_exib = document.createElement('div')
div_abaixo_exib.setAttribute('id', 'div_abaixo_exib')

//DIV DA RESUMO DOS DADOS ACIONADA COM O CLICK DO BTNFINAL
let resumo = document.createElement('div')
resumo.setAttribute('id', 'resumo') 

/*-----------------------------------------------------------------------*/

//FUNÇÕES DE EVENTOS PARA OS BOTÕES
btn.addEventListener('mouseenter', entrar)
btn.addEventListener('mouseout', sair)

function entrar(){
    btn.style.color = 'blue'
}
function sair(){
    btn.style.color = 'black'
/*-----------------------------------------------------------------------*/
}
/*INIC. FUNÇÃO AQUI!!!*/

function adicionar() {
    //Declaração de VAR
    let valor = Number(document.getElementById('txtvalor').value);
    

    //Verifica se não existe mensagem de erro
    let msgerro = document.getElementById('msgerro')
    if (msgerro) {
        msgerro.remove()
    }
    // Verifica se não existe botão finalizar
    let btnFinal = document.getElementById('btnFinal')
    if (btnFinal){
        btnFinal.remove()

    }

    //VERIFICAÇÃO 
    if(valor < 1 || valor > 100 ){
        let msgerro = document.createElement('p')
        msgerro.setAttribute('id', 'msgerro')
        msgerro.innerHTML = 'Erro! Valor é incompatível'
        msgerro.style.color = 'red'
        //exibir_val.innerHTML = ''
        exibir_val.appendChild(msgerro)
    }else{
    //add o valorr no vetor
    vetNumeros.push(valor);

       //CONSTRUINDO A STRING PARA EXIBIÇÃO
    let resultado = ''
    for(i = 0; i < vetNumeros.length; i++){
        resultado += `${vetNumeros[i]} Valor adicionado <br>`
        
    }
    exibir_val.innerHTML = resultado
    console.log(vetNumeros)
    console.log(resultado)

    


    let btnFinal = document.createElement('input')
    btnFinal.setAttribute('type', 'button')
    btnFinal.setAttribute('id', 'btnFinal')
    btnFinal.setAttribute('value', 'Finalizar')
    btnFinal.addEventListener('click', final) //ADICIONANDO ONCLICK DINAMICAMENTE

    div_abaixo_exib.appendChild(btnFinal)
    
    }
                                        //iNIC. FUNÇÃO AQUI!!!
    function final(){
        let verif_resumo = document.getElementById('resumo')
        if(verif_resumo){
            verif_resumo.remove()
        }else{ 
            let ordem = document.createElement('p')
            ordem.setAttribute('id', 'ordem')
            ordem.innerHTML = `Em ordem numérica ${vetNumeros.sort()}`
            resumo.appendChild(ordem)

            let maior_val = document.createElement('p')
            maior_val.setAttribute('id', 'maior_val')
            maior_val.innerHTML = `O maior número: ${Math.max(...vetNumeros)}`
            resumo.appendChild(maior_val)
                        
        }
        caixa_dados.appendChild(resumo)
    }
    
    
        
    //QUERO FRIZAR QUE PARA EXIBIR NA TELA UMA STRING USA APENAS O INNERHTML MAS SE FOR UMA TAG HTML PRECISA SER USADO APPENDCHILD
    
    caixa_dados.appendChild(exibir_val);
    caixa_dados.appendChild(div_abaixo_exib)
    
    
    
}
 
