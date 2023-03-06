let cantidad = prompt('¿Cuántos números desea ingresar?');

cantidad = parseInt(cantidad);

let numeros = [];

for (let i = 0; i < cantidad; i++) {
  let num = prompt(`Ingrese el número ${i + 1}:`);
  num = Number(num);
  if (isNaN(num)) {
    alert('Por favor ingrese números válidos.');
    break;
  } else {
    numeros.push(num);
  }
}

if (numeros.length !== cantidad) {
  alert('Por favor ingrese números válidos.');
} else {
  let operacion = prompt('Ingrese la operación a realizar (+, -, *, /):');

  switch (operacion) {
    case '+':
      let suma = 0;
      for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
      }
      alert(`El resultado de la suma es: ${suma}`);
      break;
    case '-':
      let resta = numeros[0];
      for (let i = 1; i < numeros.length; i++) {
        resta -= numeros[i];
      }
      alert(`El resultado de la resta es: ${resta}`);
      break;
    case '*':
      let multiplicacion = 1;
      for (let i = 0; i < numeros.length; i++) {
        multiplicacion *= numeros[i];
      }
      alert(`El resultado de la multiplicación es: ${multiplicacion}`);
      break;
    case '/':
      let division = numeros[0];
      for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] === 0) {
          alert('No se puede dividir por cero.');
          break;
        } else {
          division /= numeros[i];
        }
      }
      alert(`El resultado de la división es: ${division}`);
      break;
    default:
      alert('La operación ingresada no es válida.');
      break;
  }
}