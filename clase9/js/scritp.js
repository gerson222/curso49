// let edad = parseFloat(prompt("ingrese su edad"))
// let altura = parseFloat(prompt("ingresa tu altura en cm"))


// if (edad >=18 && altura >=150){
//    // si la condicion es vervadera
//    // se ejecuta todo o que yo defina aca
//    alert("podes entrar a la pagina")
// } else if (altura <150){
//    // se ejecuta todo o que yo defina aca SOLO SI LA CONDICION ES FALSA
//    alert("sos muy baj@, tomate el palo de aca")
// }else{
//    alert("tomate el palo de aca")
// }


// let listFrutas = ["banana", "naranja", "pomelo","papaya", "vamo boca", 7]

// console.log(listFrutas[5])





// // cree un array
// let frutas = ["manzana", "banana", "naranja"];
// // cambie que hay en la posicion 0
// frutas[0]="uvas"
// //consulte que hay en la posicion 0
// console.log(frutas[0]);
// //agregue 2 frutas
// frutas.push("manzana");
// frutas.push("pera");
// //averiguo el largo de mi array (espero que sea 5)
// console.log(`el largo de tu array es ${frutas.length}`);
// //elimino el ultimo elemento de mi array
// frutas.pop();
// //vuelvo a consultar el largo de mi array (espero que sea 4)
// console.log(`el largo de tu array es ${frutas.length}`);

// frutas.forEach(function(fruta) {
//    console.log(fruta)
// });


// let longitudDeFrutas = frutas.map(function(fruta) {
//    return fruta.length
// });
// console.log(longitudDeFrutas)

// console.log(frutas.indexOf("naranja"));

let j = 1;
do {
    let boton = document.getElementById(`boton${j}`);
    boton.style.backgroundColor = "lightblue";
    j++;
} while (j <= 5);



const userEmail = document.getElementById("email").value;
const userEmailRepeat = document.getElementById("confirmarEmail").value;
const userPassword = document.getElementById("password").value;
const userPasswordRepeat = document.getElementById("confirmarPassword").value;
function contraseña(){
   if (userPassword.length >= 8){
      let imputpassword = document.getElementById("password")
      imputpassword.style.borderColor = "green";
      imputpassword.style.color = "green";
   } else {
      let imputpassword = document.getElementById("password")
      imputpassword.style.borderColor = "red";
      imputpassword.style.color = "red";
   }
}