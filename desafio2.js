const hero =  "Izuco Midoria "
let victory = 1
let level = " "

function calculateLevel(victory ){
    if(victory < 10){
        level = "Ferro"
    }else if(victory >= 10 && victory < 20){
        level = "Bronze"
    }else if(victory >= 20 && victory < 50){
        level = "Prata"
    }else if(victory >= 50 && victory < 80){
        level = "Ouro"
    }else if(victory >= 80 && victory < 90){
        level = "Diamante"
    }else if(victory >= 90 && victory < 100){
        level = "Inmortal"
    }else if(victory >=100 ){
        level = "Imortal"
    }
    return level
}
for(let victory = 1; victory < 102; victory ++ ){
    nivel = calculateLevel(victory)
console.log(`O ${hero} tem de saldo de ${victory} vitorias está no nível de ${level} `)
}