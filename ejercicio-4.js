
 function invertirCadena(cad) {
    return cad.split("").reverse().join("");
}





function realizarOperaciones(num1, num2) {
    var resultado = new Object(); // Crear un objeto vacío para almacenar los resultados
  
    resultado.suma = num1 + num2; 
    resultado.resta = num1 - num2; 
    resultado.multiplicacion = num1 * num2; 
    resultado.division = num1 / num2
    return resultado

}
console.log (realizarOperaciones (8, 2));



// ejemplo 6

// 2: 
var personas = [
    { nombre: 'Juan', edad: 25, ciudad: 'Buenos Aires' },
    { nombre: 'María', edad: 30, ciudad: 'New York' },
    { nombre: 'Carlos', edad: 35, ciudad: 'Paris' }
  ];
  
  // 3:
  function crearMensajesDePresentacion(personas) {
   // 4: 
    var mensajes = [];
  
   // 5: 
    personas.forEach(function(persona) {
    
   // 6: 
      var mensaje = 'Mi nombre es ' + persona.nombre + ', tengo ' + persona.edad + ' años y vivo en ' + persona.ciudad + '.';
  
      //  7:
      mensajes.push(mensaje);
    });
  
    // 8: 
    return mensajes;
  }
  
  // 9: 
  var mensajesDePresentacion = crearMensajesDePresentacion(personas);
  
  // 10: 
  mensajesDePresentacion.forEach(function(mensaje) {
    console.log(mensaje);
  }); 