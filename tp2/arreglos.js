var arregloNumAleantorio = [];
for (let i = 0; i < 10; i++) {
    arregloNumAleantorio.push(Math.floor(Math.random() * 100) + 1); //aca hace un arreglo generando 10  
}                                                                   //numeros randoms

console.log("Arreglo generado:", arregloNumAleantorio);

var suma = 0;
for (let i = 0; i < arregloNumAleantorio.length; i++) {      // aca sumamos el total los numeros dados por el 
    suma += arregloNumAleantorio[i];                         // arreglo
}

var promedio = suma / arregloNumAleantorio.length;  // y aca sacamos el promedio total de los numeros

console.log("Suma de todos los números:", suma);
console.log("Promedio de todos los números:", promedio);

let maximoNunero = Math.max(...arregloNumAleantorio) //aca da el numero maximo del arreglo
let minimoNunero = Math.min(...arregloNumAleantorio) //y el minimo

console.log("numero maximo: ", maximoNunero)
console.log("numero minimo", minimoNunero)

arregloNumAleantorio.shift();
arregloNumAleantorio.pop();    //aca eliminamos el primer y ultimo elemento del arreglo
console.log("arreglo despues de la eliminaciones: ", arregloNumAleantorio)

var nuevoElemento = Math.floor(Math.random() * 100) + 1;
arregloNumAleantorio.push(nuevoElemento);     //aca agregamos un elemento al arreglo
console.log("el arreglo con un nuevo numero es asi:", arregloNumAleantorio)


arregloNumAleantorio.sort((a, b) => a - b);  //aca ordenamos de menor a mayor el arreglo
console.log("Arreglode menor a mayor:", arregloNumAleantorio);


arregloNumAleantorio.reverse();  //y aca lo que hace es ponerlos en el orden contrario al reves
console.log("Arreglo invertido:", arregloNumAleantorio);