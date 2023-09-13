console.log("Imprimir impares 1-20: Usando un bucle, escribe un código que haga que 'console.log' imprima todos los valores impares del 1 al 20.");
for (var impar=1; impar<=20; impar++){
    if (impar % 2 != 0) {
        console.log(impar);
    }
}


console.log("Disminuir múltiplos de 3: Usando un bucle, escribe un código que haga que 'console.log' imprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.");
for (var multip3=100; multip3>=0; multip3--){
    if (multip3 % 3 == 0) {
        console.log(multip3);
    }
}


console.log("Imprime la secuencia: Usando un bucle, escribe un código que haga que console.log imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.");
for (var i=4; i>= -3.5; i -= 1.5){
    console.log(i);
}


console.log("Sigma: Escribe código que sume todos los valores del 1 al 100 en una variable 'sum' y, al final, 'console.log' dé como resultado '1 + 2 + 3 + ... + 98 + 99 + 100'. Deberíamos obtener '5050' al final.");
var sum = 0;
for (var suma = 1; suma <= 100; suma++) {
    sum += suma;
}
console.log(sum);


console.log("Factorial: Escribe código que multiplique todos los valores del 1 al 12 en una variable 'product' y, al final, 'console.log' dé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600 al final.");
var product = 1;
for (var multi = 1; multi <= 12; multi++) {
    product *= multi;
}
console.log(product);