// Declaração de VAR
let caixa_dados = document.getElementById('resultado');
let btn = document.getElementById('btnAdd');
let vetNumeros = [];
let exibir_val = document.createElement('div');
exibir_val.setAttribute('id', 'exibir_val');

//teste
let div_abaixo_exib = document.createElement('div')
div_abaixo_exib.setAttribute('id', 'div_abaixo_exib')


btn.addEventListener('mouseenter', entrar)
btn.addEventListener('mouseout', sair)

function entrar(){
    btn.style.color = 'blue'
}
function sair(){
    btn.style.color = 'black'
}

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
    //btnFinal.addEventListener('click', finalizar)

    
    div_abaixo_exib.appendChild(btnFinal)
    
    }

    //QUERO FRIZAR QUE PARA EXIBIR NA TELA UMA STRING USA APENAS O INNERHTML MAS SE FOR UMA TAG HTML PRECISA SER USADO APPENDCHILD
    
    //ROUPAGEM DA CAIXA DE SAÍDA DE DADOS
    exibir_val.style.width = '180px';
    exibir_val.style.backgroundColor = 'rgb(200, 224, 230)';
    exibir_val.style.margin = '10px';
    exibir_val.style.textAlign = 'center'
    
    // Alterar a cor do botão
    //btn.style.color = 'red';
    caixa_dados.appendChild(exibir_val);
    caixa_dados.appendChild(div_abaixo_exib)
}
 
