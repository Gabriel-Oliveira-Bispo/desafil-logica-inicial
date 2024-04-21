const heroi =  "Izuco Midoria "
let vitoria = 1
let nivel = " "

function calcularNivel(vitoria ){
    if(vitoria < 10){
        nivel = "Ferro"
    }else if(vitoria >= 10 && vitoria < 20){
        nivel = "Bronze"
    }else if(vitoria >= 20 && vitoria < 50){
        nivel = "Prata"
    }else if(vitoria >= 50 && vitoria < 80){
        nivel = "Ouro"
    }else if(vitoria >= 80 && vitoria < 90){
        nivel = "Diamante"
    }else if(vitoria >= 90 && vitoria < 100){
        nivel = "Inmortal"
    }else if(vitoria >=100 ){
        nivel = "Imortal"
    }
    return nivel
}
for(let vitoria = 1; vitoria < 102; vitoria ++ ){
    nivel = calcularNivel(vitoria)
console.log(`O ${heroi} tem de saldo de ${vitoria} vitorias está no nível de ${nivel} `)
}