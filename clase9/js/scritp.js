let edad = parseFloat(prompt("ingrese su edad"))
let altura = parseFloat(prompt("ingresa tu altura en cm"))


if (edad >=18 && altura >=150){
   // si la condicion es vervadera
   // se ejecuta todo o que yo defina aca
   alert("podes entrar a la pagina")
} else if (altura <150){
   // se ejecuta todo o que yo defina aca SOLO SI LA CONDICION ES FALSA
   alert("sos muy baj@, tomate el palo de aca")
}else{
   alert("tomate el palo de aca")
}


let listFrutas = ["banana", "naranja", "pomelo","papaya", "vamo boca", 7]

console.log(listFrutas[5])