class creatHero {
    constructor(name, age, tipe){
        this.name = name;
        this.age = age;
        this.tipe = tipe
        if (this.tipe === "mago") {
            this.attack = "magia";
        }
        else if (this.tipe === "guerreiro"){
            this.attack = "espada";
        }
        else if (this.tipe === "monge"){
            this.attack = "artes marciais"
        }
        else if (this.tipe === "ninja"){
            this.attack = "shuriken"
        }
        else {
            return (this.attack = "Erro")  
        }
    }
    
    toAttack(){
        if (this.attack === "Erro"){
            console.log("Tipo de herói não encontrando")
        }
        else {
        console.log(`O tipo ${this.tipe} atacou usando ${this.attack}`)
        }
    }
}

let myHero = new creatHero("Docinho", 12, "monge")

let errorHero = new creatHero("Lindinha", 12, "menina super poderosa")

myHero.toAttack()

errorHero.toAttack()