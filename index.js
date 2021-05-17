// 1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

// 2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

// 3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let idade=20
let pessoa= "ishuman"
let niver= "Janeiro"

if(idade>=18){
console.log("Vc já está bem grandinho, não acha?")
}else {
    console.log("se situa moleque")
}

if((idade>=18) && (pessoa=="ishuman")){
    console.log("Vc tem grandes responsabilidades")
} else {
    console.log("vai estudar programação, vai por mim")
}

if((niver=="Janeiro") || (niver=="Dezembro")){
console.log("Vc nasceu nas férias, mas vou vou te dar moleza")
} else {
    console.log("Você não nasceu de férias, vai estudar")
}

// Bonus

// *** Exercícios bônus
// 4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

// 5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E



let nome = "Roberta"
let sobrenome = "Silveira"

if (nome.charAt(0)=="R"){
    console.log("Meu nome começa com R")
} else {
    console.log("Meu nome, não começa com a letra R")
}

if((nome.length>6) || (nome.charAt(0)=="E")) {
    console.log ("Deu certo Amanda, seu esforço valeu a pena!")
} else {
    console.log("Deu ruim, estuda mais que uma hora vai! ")
}