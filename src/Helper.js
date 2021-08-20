// calcula la diferencia de anios
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// calcular el total a pagar según la marca
export function calcularMarca(marca) {
  let incremento;
  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    case "otro":
      incremento = 2;
      break;
    default:
      break;
  }
  return incremento;
}

// calcular el tipo de seguro
export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}
