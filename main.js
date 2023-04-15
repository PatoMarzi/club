//  Simulacion de socios de un club

function validarOpcion(min, max, opcion) {
  while (opcion < min || opcion > max) {
    alert(`Opcion inválida. Ingrese un número entre ${min} y ${max}`);
    opcion = parseInt(prompt("Opción elegida"));
  }
  return opcion;
}

function menu() {
  let rta = parseInt(
    prompt(
      "* * * * * CLUB CODERHOUSE * * * * * \n1. Alta socio\n2. Listar socios\n3. Consultar deuda socio \n4. Modificar socio\n5. Baja socio\n0. Salir"
    )
  );

  return rta;
}

function programaPrincipal() {
  let op = 1;

  do {
    op = menu();
    while (op < 0 || op > 5) {
      op = validarOpcion(0, 5, op);
    }
    switch (op) {
      case 1:
        altaSocio();
        break;
      case 2:
        listaSocio();
        break;
      case 3:
        deudaSocio();
        break;
      case 4:
        modificarSocio();
        break;
      case 5:
        bajaSocio();
        break;
      case 0:
        alert("Usted ha elegido salir");
        break;
    }
  } while (op != 0);
  return op;
}

// Función para dar alta un socio

function altaSocio() {}

// Función para dar de baja un socio

function bajaSocio() {}

function listaSocio() {}

function deudaSocio() {}

function modificarSocio() {}




class Socio {
  constructor(nroSocio, nombre, apellido, direccion, telefono, deuda, antiguedad) {
    this.nroSocio = nroSocio;
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.deuda = deuda;
    this.antiguedad = antiguedad;
  }
}








// Programa Principal

let a = 1;



while (a != 0) {
  a = programaPrincipal();
}
