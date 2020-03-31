function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var diaSem = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
 
    
switch (mes) {

    case 0:
        mes = 'Janeiro'
        break

    case 1:
        mes = 'Fevereiro'
        break
    
    case 2:
        mes = 'Março'
        break

    case 3:
        mes = 'Abril'
        break
    
    case 4:
        mes = 'Maio'
        break
        
    case 5:
        mes = 'Junho'
        break

    case 6:
        mes = 'Julho'
        break

    case 7:
        mes = 'Agosto'
        break

    case 8:
        mes = 'Setembro'
        break

    case 9:
        mes = 'Outubro'
        break

    case 10:
        mes = 'Novembro'
        break

    case 11:
        mes = 'Dezembro'
        break
        
}
    
    
    

    if (hora >= 6 && hora <= 12) {
        msg.innerHTML = `Hoje é dia <strong>${diaSem}</strong> de <strong>${mes}</strong> de <strong>${ano}</strong>. <br> Agora são <strong>${hora}</strong> horas e <strong> ${min}</strong> Minutos. <br> Bom Dia!` 
        img.src = "fotomanha.png"
        document.body.style.background = "#fedc70"


        
    } else if (hora > 12 && hora <= 18) {
        msg.innerHTML = `Hoje é dia <strong>${diaSem}</strong> de <strong>${mes}</strong> de <strong>${ano}</strong>. <br> Agora são <strong>${hora}</strong> horas e <strong> ${min}</strong> Minutos. <br> Boa Tarde!` 
        img.src = "fototarde.png"
        document.body.style.background = "#b14302"

    } else if (hora > 18 && hora <= 24) {
        msg.innerHTML = `Hoje é dia <strong>${diaSem}</strong> de <strong>${mes}</strong> de <strong>${ano}</strong>. <br> Agora são <strong>${hora}</strong> horas e <strong> ${min}</strong> Minutos. <br> Boa Noite!`
        img.src = "fotonoite.png"
        document.body.style.background = "#2f4f5c"


    } else {
        msg.innerHTML = `Hoje é dia <strong>${diaSem}</strong> de <strong>${mes}</strong> de <strong>${ano}</strong>. <br> Agora são <strong>${hora}</strong> horas e <strong> ${min}</strong> Minutos. <br> Boa Madrugada!` 
        document.body.style.background = "#2f4f5c"
        img.src = "fotonoite.png"

    }

}

