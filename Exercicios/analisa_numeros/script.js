// Declaração de VAR

let caixa_dados = document.getElementById('resultado');
let btn = document.getElementById('btnAdd');
let vetNumeros = [];
let exibir_val = document.createElement('div');
exibir_val.setAttribute('id', 'exibir_val');

function adicionar() {
    //Declaração de VAR
    let valor = Number(document.getElementById('txtvalor').value);
    //AÇÕES
    vetNumeros.push(valor + ' Valor adicionado <br>');
    exibir_val.innerHTML = vetNumeros.join(' ');



    exibir_val.style.width = '180px';
    exibir_val.style.backgroundColor = 'rgb(200, 224, 230)';
    exibir_val.style.margin = '10px';
    exibir_val.style.textAlign = 'center'
    
    
    // Adicionar o quadrado ao container
   
    
    // Alterar a cor do botão
    //btn.style.color = 'red';
    caixa_dados.appendChild(exibir_val);
}
 
