console.log("Vamos descobrir o nível do seu herói? \nPrimeiro informe o nome e então seu XP")
let nomeDoHeroi = prompt("Qual o nome do Herói? ")
let xp = prompt("Qual seu XP? ")
let nivel = ""

if (xp <= 1000){
    nivel = "Ferro!"
}
else if (xp >= 1001 && xp <= 2000){
    nivel = "Bronze!"
}
else if (xp >= 2001 && xp <= 5000){
    nivel = "Prata!"
}
else if (xp >= 5001 && xp <= 7000){
    nivel = "Ouro!"
}
else if (xp >= 7001 && xp <= 8000){
    nivel = "Platina!"
}
else if (xp >= 8001 && xp <= 9000){
    nivel = "Ascendente!"
}
else if (xp >= 9001 && xp <= 10000){
    nivel = "Imortal!"
}
else{
    nivel = "Radiante!"
}
console.log("O herói de nome " + nomeDoHeroi + " está no nível " + nivel)