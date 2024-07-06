class hero{
    constructor(name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    }
    attackHero(){
        console.log(`The ${this.type} ${this.name}, just ${this.age} old, attacked using ${this.attack}`)
    }
}

let typeHero = "wizard"

if( typeHero === "wizard"){
    let attack = new hero("Gabriel", 16, typeHero, " black magic")
        attack.attackHero()
}else if( typeHero === "warrior" ){
    let attack = new hero("Hercules", 25, typeHero, "diamond sword")
        attack.attackHero()
}else if( typeHero === "monk"){
    let attack = new hero("Avatar", 18, typeHero, "martial arts")
        attack.attackHero()
}else if( typeHero === "ninja"){
    let attack = new hero("sasuke", 22, typeHero, "shuriken")
        attack.attackHero()
}else{
    console.log("We didn't find your hero, check the name")
}