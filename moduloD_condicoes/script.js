function carregar() { 
    let msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}H.`
    if (hora >0 && hora <12){
        img.src = 'amanhecer.png'
    }else if(hora >= 12 && hora < 18){
        img.src = 'entardecer.png'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'anoitecer.png'
        document.body.style.background = '#515154'
    }
}