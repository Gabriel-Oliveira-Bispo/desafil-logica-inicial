// desafio da dio, concluido tendo todos os requisitos.
//variaveis && constantes
const hero =  "Izuco Midoria "
let XP = 1
let level = " "
let pointsforvictories = 100
//laços de repetições && Operadores && estrutura de decisões
for (let XP = 1; XP < 15000; XP += pointsforvictories){
  if( XP > 0 && XP < 1000){
    level = "Ferro"
}else if( XP >= 1000 && XP < 2000){
    level = "Bronze"
}else if( XP >= 2000 && XP < 5000){
    level = "Prata"
}else if( XP >=5000 && XP < 7000){
    level = "Ouro"
}else if( XP >=7000 && XP < 8000){
    level = "Platina"
}else if( XP >= 8000 && XP < 9000){
    level = "Ascendente"
}else if( XP >= 9000 && XP < 10000){
    level = "Imortal"
}else if( XP > 10000){
    level = "Radiante"
}
console.log("O Herói de nome " + hero + "está no nivel de " + level)
}