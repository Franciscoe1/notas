function verificarNotas() {
    const notas = [];
    for (let i = 1; i <= 5; i++) {
      let nota;
      do {
        const input = prompt(`Ingrese la nota ${i} del primer parcial (0-10):`);
        nota = parseFloat(input);
        if (isNaN(nota) || nota < 0 || nota > 10) {
          alert("Por favor, ingrese una nota válida entre 0 y 10.");
        }
      } while (isNaN(nota) || nota < 0 || nota > 10);
      notas.push(nota);
    }
  
    const promedio = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;
    console.log("Notas ingresadas:", notas);
    console.log("Promedio:", promedio.toFixed(2));
  
    if (notas.every(nota => nota >= 7)) {
      console.log("¡Pasa de año directamente!");
    } else if (promedio >= 3.5) {
      console.log("Se queda a supleetorios.");
    } else {
      console.log("Pierde el semestre.");
    }
  }
  
  verificarNotas();