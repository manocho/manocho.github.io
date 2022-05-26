/* Scripts de la página */


/* Validación de los campos del formulario
 Estoy usando "ELSE IF" para concatenar condiciones
1) Campo Nombre = Limitar el tipo de caracteres
2) Campo Apellido = Limitar el tipo de caracteres
3) Campo Mensaje = Limitar el mínimo y máximo de caracteres

*/

function validarFormulario() {
    var specialChars = /[^a-zA-Z0-9 ]/g;
    if (document.forms["contacto"]["nombre"].value.match(specialChars)) {
        alert("Caracteres inválidos en el campo Nombre!");
        return false;
    } else if (document.forms["contacto"]["apellido"].value.match(specialChars)) {
        alert("Caracteres inválidos en el campo Apellido!");
        return false;
    } else if (document.forms["contacto"]["mensaje"].value.length<16 || document.forms["contacto"]["mensaje"].value.length>500) {
        alert("Por favor ingrese un mensaje mayor a 16 caracteres y menor a 500");
        return false;
    }
} 
