// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.//

const numero = 4;
if (numero % 2 == 0) {
  console.log("El número" + " " + numero + " " + "es par.");
} else console.log("El número" + " " + numero + " " + "es impar.");

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.//

function dosNum(numA, numB) {
  let numA = 3;
  let numB = 2;
  if (numA > numB) {
    return console.log(
      "El número" + " " + numA + " " + "es mayor que el número" + " " + numB
    );
  }
  if (numA < numB) {
    return console.log(
      "El número" + " " + numB + " " + "es mayor que el número" + " " + numA
    );
  } else {
    return console.log("Los numeros son iguales.");
  }
}
