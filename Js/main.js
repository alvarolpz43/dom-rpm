const openmodal = document.querySelector('.hero-cta');
const modal = document.querySelector('.modal');
const closemodal = document.querySelector('.modal-close');


openmodal.addEventListener('click', function abrir(){
    modal.classList.add('modal--show')
});

closemodal.addEventListener('click',function cerrar(){
    modal.classList.remove('modal--show')
});

// const openmodal2 = document.querySelector('.hero-cta');
// const modal2 = document.querySelector('.modal-2');
// const closemodal2 = document.querySelector('.modal-close-2');


// openmodal2.addEventListener('click', function abrir(){
//     modal2.classList.add('modal--show-2')
// });

// closemodal2.addEventListener('click',function cerrar(){
//     modal2.classList.remove('modal--show-2')
// });

// const usuario = "adso2556678";
// const password = "adso2023"

// let usu = prompt('ingrese el usuario');

// let contra = prompt('ingrese la contraseña');

// if(usu !== usuario && contra !== password){
//     alert('no puedes ingresar')
// }

// else if(usu == usuario && contra == password){
//     alert('bienvenido');

// }

// const usu = 'adso2556678';
// const contra = 'adso2023';
// let i = 0;

// do{

// function iniciosesion() {
//     // Obtener los valores de los campos de entrada
//     let usuario = document.getElementById('usuario').value;
//     let password = document.getElementById('contraseña').value;

//     // Verificar si los campos están vacíos
//     if (usuario === '' || password === '') {
//       alert('Por favor, ingresa el usuario y la contraseña.');
//       // return false;
//       console.log(false)
//     }

//     // Verificar si las credenciales son correctas
//     if (usuario === usu && password === contra) {
//       alert('Inicio de sesión exitoso. ¡Bienvenido!');
//       // return true;
//       console.log(true);
//     } else {
//       alert('Credenciales inválidas. Por favor, intenta nuevamente.');
//       // return false;
//       console.log(false);
      
//     }
//   }
// i++;
// }
//   while(i < 3);

const usu = 'adso2556678';
const contra = 'adso2023';
let i = 0;

let entrar = document.getElementById('entrar');
entrar.addEventListener('click', iniciar);

function iniciar(){
  let usuario = document.getElementById('usuario').value;
  let password = document.getElementById('contraseña').value;
  
  // Verificar si las credenciales son correctas
  if (usuario === usu && password === contra) {
    alert('Inicio de sesión exitoso. ¡Bienvenido!');
    console.log(true);
  } else {
    alert('Credenciales inválidas. Por favor, intenta nuevamente.');
    console.log(false);
  }
}



const posada = document.querySelector('.caja-contenedor');
const imagen = document.querySelector('.columna');
const nav = document.querySelector('.navbar');
let escoger = document.getElementById('escoger');
escoger.addEventListener('click', roles);

let rol1 = 'Bienvenido motero';
let rol2 = 'Bienvenido Motoposada';
let rol3 = 'Bienvenidos al mundo de las rutas para moteros';

function roles() {
  let nuevo = parseInt(prompt('¿Qué tipo de motero eres? (1: Motero  2: Motoposada o 3: Invitado)'));

  while (nuevo !== 1 && nuevo !== 2 && nuevo !== 3) {
    alert('Ese número no es válido');
    nuevo = parseInt(prompt('¿Qué tipo de motero eres? (1, 2 o 3)'));
  }

  if (nuevo === 1) {
    document.querySelector('.content h3').textContent = rol1;
    document.querySelector('.presupuesto h1').textContent= 'Conoce El Presupuesto De Tu Viaje';
    document.querySelector('.detalles h1').textContent= 'Motoposadas en tu ruta';
    nav.children[0].textContent = 'Rutas';
    nav.children[1].textContent = '';
    nav.children[2].textContent = 'Garaje';
    nav.children[3].textContent = 'Iniciar Sesion';
  } else if (nuevo === 2) {
    document.querySelector('.content h3').textContent = rol2;
    document.querySelector('.detalles h1').textContent= 'Rutas Donde Hay Motoposadas';
    document.querySelector('.presupuesto h1').textContent= 'Presupuesto Para Una Motoposada';
    imagen.children[0].children[0].src = '../img/mpsada-1.jpg';
    nav.children[0].textContent = '';
    nav.children[1].textContent = 'Ubicación';
    nav.children[2].textContent = 'Motoposada';
    nav.children[3].textContent = 'Iniciar Sesion';
  } else if (nuevo === 3) {
    document.querySelector('.content h3').textContent = rol3;
    nav.children[0].textContent = 'Rutas';
    nav.children[1].textContent = 'Motoposada';
    nav.children[2].textContent = 'Presupuesto';
    nav.children[3].textContent = 'Registrarse';
  }
}



