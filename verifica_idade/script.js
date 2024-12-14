function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var qtd_ano = ano - Number(formAno.value)
    var foto = document.createElement('img')
    foto.setAttribute('id', 'imagemCircular')
    radioBtn = document.getElementsByName('radsex')


    if (formAno.value.length == 0 || formAno.value > ano){
        alert(`[ERROR] Preencha o Ano corretamente`)
    }
    else{
        var gênero = ''

        if(radioBtn[0].checked){
            gênero = `Homem com ${qtd_ano} anos`
            foto.setAttribute('src', './img/menino.jpg')
        }
    }
    res.innerText = `${gênero}`
    res.appendChild(foto)
    
}