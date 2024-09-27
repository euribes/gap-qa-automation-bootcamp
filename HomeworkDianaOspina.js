// Problem #1

limit = prompt('Enter a number:');

function solutionMultiple3Or5(limit) {

    let acumulador = 0;

    if (limit < 0) {
        return acumulador;
    }

    else {

        for (var i = 3; i < limit; i++) {
            if ((i % 3 == 0) || (i % 5 == 0)) {
                acumulador += i;
            }
        }
    }
    return acumulador;
}

console.log("La suma de los multiplos es: ", solutionMultiple3Or5(limit))

//Problem 2

number = prompt('Enter a number to validate if it is a Narcissistic number:');

function solutionIsNarcissistic(number) {

    var valoresAceptados = /^[1-9]+$/;
    let isNarcissictic = false;
    if (number.match(valoresAceptados)) {

        let Narcissictic = Array.from(String(number), Number);
        let acum = 0;
        for (var i = 0; i < Narcissictic.length; i++) {
            acum += Math.pow(Narcissictic[i], Narcissictic.length);
        }
        if (acum == number) {
            isNarcissictic = true;
        }
        return isNarcissictic;
    }
    else {
        alert("Por favor ingrese un numero en base 10");
        return isNarcissictic;
    }

}

console.log(solutionIsNarcissistic(number))

//Problem 3

response = prompt('What was the name of your first pet?');

function solutionMask(response) {
    mask = "";
    if (response.length < 5) {
        return response;
    }

    else {

        for (var i = 0, chr; i < response.length; i++) {

            if (i < (response.length - 4)) {
                mask += "#";
            }
            else {
                mask += response.charAt(i);
            }

        }

        return mask;
    }
}

console.log(solutionMask(response))

// Problem 4

frase = prompt("Enter a sentence to validate if it is a pangram");

function comprobarTodasLetras(frase) {

    let alphabetic = new Set("abcdefghijklmnopqrstuvwxyz")
    for (let c of frase.toLowerCase()) {
        alphabetic.delete(c)
    }
    if (alphabetic.size == 0)
        return true
    else
        return false

}

console.log(comprobarTodasLetras(frase));

// Problem 5

cadena = prompt("Enter a value to validate the repeated char");

function getFrequency(cadena) {
   
    var valoresAceptados=/^[a-zA-Z0-9 ]+$/;
    if(cadena.match(valoresAceptados)){
        let str=cadena.toLowerCase();
        return cadena.split('').filter((c, i, a)=>a.indexOf(c) !== i).length
    }
    alert("Por favor ingrese una cadena que contenga solo numeros o letras");
 }
    
    
    

    console.log(getFrequency(cadena));

   
