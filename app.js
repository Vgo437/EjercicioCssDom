//muestra un mensaje cuando se presiona el boton aceptar
const eventoClick = e =>{
    alert("se presiono el boton");
}


const titulo = document.createElement('h1');
titulo.innerHTML='Federacion BBM';
titulo.setAttribute("id","titulo");

const imagen = document.createElement('img');
imagen.setAttribute("src","logo.jpg");
imagen.setAttribute("width","200px")
imagen.setAttribute("height","200px")
imagen.setAttribute("id","logo");

const slogan = document.createElement('p');
slogan.innerHTML = "unidos por el cambio";

//se agregan elementos al section
const section1 = document.createElement('section');
section1.setAttribute("class","flex");
section1.setAttribute("id","contenido1");
section1.appendChild(imagen);
section1.appendChild(titulo);
section1.appendChild(slogan);

document.body.appendChild(section1);

const section2 = document.createElement('section');
section2.setAttribute("class","flex");
section2.setAttribute("id","contenido2");

const form  = document.createElement('form');
form.setAttribute("id","formulario");

const nombreLabel= document.createElement ('label');
nombreLabel.setAttribute("id","nombre");
nombreLabel.innerHTML = "ingrese el nombre <br>";

const inputNombre = document.createElement('input');
inputNombre.setAttribute("type","text");
inputNombre.setAttribute("name","nombre");
inputNombre.setAttribute("placeholder","nombre");

const correoLabel = document.createElement('label');
correoLabel.setAttribute("id","correo");
correoLabel.innerHTML = "<br> Ingrese el correo <br>";

const inputCorreo = document.createElement('input');
inputCorreo.setAttribute("type","text");
inputCorreo.setAttribute("name","correo");
inputCorreo.setAttribute("placeholder","correo");

const ciudadLabel = document.createElement('label');
ciudadLabel.setAttribute("id","ciudad");
ciudadLabel.innerHTML = "<br> Seleccione la ciudad <br>";

const ciudad = document.createElement('select');
ciudad.setAttribute("id","ciudad");

const ciudadOption1 = document.createElement('option');
ciudadOption1.innerText = "Medellin";

const ciudadOption2 = document.createElement('option');
ciudadOption2.innerText = "Bogota";

const ciudadOption3 = document.createElement('option');
ciudadOption3.innerText = "Cali";

ciudad.appendChild(ciudadOption1);
ciudad.appendChild(ciudadOption2);
ciudad.appendChild(ciudadOption3);

const boton = document.createElement('button');
boton.id = "boton";
boton.innerHTML = "aceptar";
boton.addEventListener("click",eventoClick);

form.appendChild(nombreLabel);
form.appendChild(inputNombre);
form.appendChild(correoLabel);
form.appendChild(inputCorreo);
form.appendChild(ciudadLabel);
form.appendChild(ciudad);
form.appendChild(boton);

section2.appendChild(form);
document.body.appendChild(section2);

const section3 = document.createElement('section');
section3.setAttribute("class","flex");
section3.setAttribute("id","contenido3");

const enlace1 = document.createElement('a');
enlace1.setAttribute("href","#");
enlace1.setAttribute("id","enlace");
enlace1.innerText = "inicio sesion";


const enlace2 = document.createElement('a');
enlace2.setAttribute("href","#");
enlace1.setAttribute("id","enlace");
enlace2.innerText = "crear cuenta";

const salto = document.createElement('br');

const ul = document.createElement('ul');
ul.setAttribute("id","list-opciones");

const li1= document.createElement('li');
li1.innerText = "Mas información";

const li2 = document.createElement ('li');
li2.innerText = "Contactenos";

const li3 = document.createElement ('li');
li3.innerText = "Trabaje con nosotros";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

section3.appendChild(enlace1);
section3.appendChild(salto);
section3.appendChild(enlace2);
section3.appendChild(ul);
document.body.appendChild (section3);

