const isNumber = "^[0-9]+$";
var input = document.getElementById("input");
var select = document.getElementById("select");
let numbers = [];

function add() {
  if (input.value != "" && input.value.match(isNumber) != null) {
    numbers.push(input.value);
    let html = "";
    for (let i = 0; i < numbers.length; i++) {
      html = html + "<li>" + numbers[i] + "</li>" + "\n";
    }
    document.getElementById("list").innerHTML = html;
    alert("Número agregado");
  } else {
    alert("Valor ingresado vacío o no es un número");
  }
}

function operation() {
  let numbers2 = [];
  switch (select.value) {
    case "ZA":
      numbers2 = numbers.slice();
      numbers2.sort(function (a, b) {
        return b - a;
      });
      alert("Los numeros de mayor a menor son: " + numbers2);
      break;
    case "AZ":
      numbers2 = numbers.slice();
      numbers2.sort(function (a, b) {
        return a - b;
      });
      alert("Los numeros de menor a mayor son: " + numbers2);
      break;
    case "SumarTodo":
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
      }
      alert("La suma de todos los valores es: " + sum);
      break;
    case "ElevadoADos":
      for (let i = 0; i < numbers.length; i++) {
        let num = Number(numbers[i]) * Number(numbers[i]);
        numbers2.push(num);
      }
      alert("Los números multiplicados por sí mismo: " + numbers2);
      break;
    default:
      break;
  }
}

function show() {
  console.log(numbers);
}
