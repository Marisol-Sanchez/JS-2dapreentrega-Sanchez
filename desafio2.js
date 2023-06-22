//PROYECTO DE CINE INDEPENDIENTE

let carrito = []; 

function menu() {
  do {
    opcionIngresada = parseInt(
      prompt(`¡Hola! Bienvenido a CINEPIOLIS. Estás en el menú, ¿qué deseas hacer?
        1 - Ver cartelera
        2 - Buscar nombre de la película
        3 - Buscar director de la película
        4 - Sugerir una película para nuestra cartelera
        5 - Comprar entradas
        6 - Ver carrito de compras
        0 - Salir del menú`)
    );
    switch (opcionIngresada) {
      case 1:
        verCartelera(cartelera);
        break;
      case 2:
        buscarPorTitulo(cartelera);
        break;
      case 3:
        buscarPorDirector(cartelera);
        break;
      case 4:
        agregarPelicula();
        break;
      case 5:
        comprarEntrada();
        break;
      case 6:
        verCarrito();
        break;
      case 0:
        console.log(`Saliste de nuestro menú, ¡vuelve pronto!`);
        break;
      default:
        console.log(
          "Opción no válida, ingrese alguna presente en el menú"
        );
        break;
    }
  } while (opcionIngresada !== 0);
}

class Pelicula {
  constructor(id, director, titulo, precio) {
    this.id = id;
    this.director = director;
    this.titulo = titulo;
    this.precio = precio;
  }

  mostrarInfoPelicula() {
    console.log(`La película fue dirigida por ${this.director}. Su título es ${this.titulo} y el precio de la 
    función es ${this.precio}`);
  }
}

const pelicula1 = new Pelicula(1,"Alejandro Doria","Esperando la Carroza",1000);
const pelicula2 = new Pelicula(2, "Juan José Campanella", "El secreto de sus ojos", 1000);
const pelicula3 = new Pelicula(3, "Luis Ortega", "El ángel", 1000);
const pelicula4 = new Pelicula(4, "Juan Szifron", "Relatos Salvajes", 1000);
const pelicula5 = new Pelicula(5, "Gastón Duprat", "El ciudadano Ilustre", 1000);

const cartelera = [];
cartelera.push(pelicula1, pelicula2, pelicula3, pelicula4, pelicula5);
console.log(cartelera);

// Funciones:

function verCartelera(array) {
  console.log(`Nuestra cartelera de hoy es:`);
  for (let pelicula of array) {
    console.log(pelicula.id, pelicula.director, pelicula.titulo, pelicula.precio);
  }
}

function buscarPorTitulo(array) {
  let tituloBuscado = prompt("Ingrese el título de la película que desea ver");
  let busqueda = array.find(
    (pelicula) =>
      pelicula.titulo.toUpperCase() === tituloBuscado.toUpperCase()
  );
  if (busqueda == undefined) {
    console.log(`La película ${tituloBuscado} no está en la cartelera de hoy, pero puedes agregarla a las sugerencias.`);
  } else {
    console.log(busqueda);
  }
}

function buscarPorDirector(arr) {
  let directorBusqueda = prompt("Ingrese el director que está buscando");
  let busqueda = arr.find(
    (pelicula) => pelicula.director.toLowerCase() === directorBusqueda.toLowerCase()
  );
  if (busqueda == undefined) {
    console.log(`El director ${directorBusqueda} no dirige películas en la cartelera de hoy.`);
  } else {
    verCartelera(busqueda);
  }
}

function agregarPelicula(){
    let directorIngresado = prompt("Ingrese el nombre del autor")
    let tituloIngresado = prompt("Ingrese el nombre del titulo")
    let precioIngresado = parseInt(prompt("Ingrese el precio"))
    const peliculaNueva = new Pelicula(cartelera.length+1,directorIngresado, tituloIngresado, precioIngresado)
    cartelera.push(peliculaNueva)
    
}

function comprarEntrada() {
    let tituloBuscado = prompt("Ingrese el título de la película que desea ver");
    let busqueda = cartelera.find(
      (pelicula) =>
        pelicula.titulo.toUpperCase() === tituloBuscado.toUpperCase()
    );
  
    if (busqueda == undefined) {
      console.log(`La película "${tituloBuscado}" no está en la cartelera de hoy.`);
    } else {
      let cantidadEntradas = parseInt(
        prompt(`Ingrese la cantidad de entradas para la película "${tituloBuscado}"`)
      );
  
      if (isNaN(cantidadEntradas) || cantidadEntradas <= 0) {
        console.log("La cantidad de entradas ingresada no es válida.");
      } else {
        let total = busqueda.precio * cantidadEntradas;
        let confirmacion = prompt(`El total a pagar es $${total}. ¿Desea confirmar la compra? (S/N)`);
  
        if (confirmacion.toUpperCase() === "S") {
          for (let i = 0; i < cantidadEntradas; i++) {
            carrito.push(busqueda);
          }
          console.log(`${cantidadEntradas} entrada(s) para la película "${tituloBuscado}" han sido agregadas al carrito.`);
        } else {
          console.log("Compra cancelada.");
        }
      }
    }
  }
  
  function verCarrito() {
    if (carrito.length === 0) {
      console.log("El carrito está vacío.");
      return;
    }
  
    console.log("Productos en el carrito:");
    carrito.forEach((producto) => {
      let cantidadEntradas = 0;
      for (let p of carrito) {
        if (p.titulo === producto.titulo) {
          cantidadEntradas++;
        }
      }
      console.log(`película: "${producto.titulo}" cantidad de entradas: ${cantidadEntradas} precio total: ${producto.precio}`);
    });
  }

menu();
 