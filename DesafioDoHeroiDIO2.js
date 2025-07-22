let name = prompt("Qual o nome do seu herói? ")
console.log(`Olá ${name}, bem vindo!\nVamos descobrir seu saldo de vitórias, ou derrotas, e a posição no ranking!`)
//Criação de função para calcular o saldo de vitórias ou derrotas
function getPoints (win, losses){
    let points = win - losses
    return points
}
//O programa questiona o usuário sobre suas vitórias e derrotas, e as coloca como parâmetro da função
let earnedPoints = parseInt(prompt("Quantas vitórias você tem? "))
let lostPoints = parseInt(prompt("E quantas derrotas? "))

let ranking = getPoints(earnedPoints, lostPoints)
//Sabendo o resultado da função, o sistema estipula se ele teve mais vitórias ou derrotas
let position = " "
if (ranking >= 0){
    position = "vitórias"
}
else{
    position = "derrotas"
}
//Definição do nível do herói baseado no saldo de vitórias ou derotas
let level = " "
if (ranking <= 10){
    level = 'Ferro'
}
else if (ranking >= 11 && ranking <= 20){
    level = 'Bronze'
}  
else if (ranking >= 21 && ranking <= 50){
    level = 'Prata'
}
else if (ranking >=51 && ranking <= 80){
    level = 'Ouro'
}
else if (ranking >= 81 && ranking <= 90){
    level = 'Diamante'
}
else if (ranking >= 91 && ranking <= 100){
    level = 'Lendário'  
}
else {
    level = 'Imortal'
}

console.log(`O Herói tem saldo de ${ranking} ${position} e está no nível ${level}`)