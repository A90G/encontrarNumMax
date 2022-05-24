/*• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo


Ingrese número: 9
Ingrese número: 7
Ingrese número: -1
Ingrese número: 1
Ingrese número: 0
El máximo es 9
*/
let ingresos: boolean = false;
let num: number = Number(prompt("Ingrese un número que desee"));
let numMax: number = num;
let númeroMínimo: number = num;

while (num !== 0) {
  ingresos = true;

  if (num > numMax) {
    numMax = num;
  }
   num = Number(prompt("Ingrese otro número que desee"));
  }

  if (ingresos) {
    console.log("El número máximo es: " + numMax);
  }
  
    while (num !== 0) {
    ingresos = true;
    if (num < númeroMínimo) {
      númeroMínimo = num;
    }
    num = Number(prompt("Ingrese un número"));
  }
  
  if (ingresos) {
    console.log("El número mínimo es: " + númeroMínimo);
  }

