const btnLogin = document.querySelector("#btn-login")

btnLogin.onclick = function (event){
  event.preventDefault ();

  const inputs = document.querySelectorAll("input");

  inputs.forEach((input)=>{
    // localStorage.setItem(key-value)
    //------------------------------
    //Insertamos dentro del local storage
    console.log(inputs)
    localStorage.setItem(input.name,input.value)
  });

  login();

};

const email = localStorage.getItem("email")
const password = localStorage.getItem("password")

function login(){
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  form.style.display = "none";
  usuarioSection.style.display = "flex";
  titleEmail.innerHTML = email;
  titlePassword.innerHTML = password;
};

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("#cerrar-sesion");
const usuarioSection = document.querySelector("#usuario-logged");

if(email !== null && password !== null){
  //el usuario está logeado, voy a ocultar el form
  
} else {
  usuarioSection.style.display = "none"
}

btnCerrarSesion.onclick = function(){
  //vamos a eliminar las variables del localstorage
  // localStorage.removeItem("password");
  // localStorage.removeItem("email");
  localStorage.clear();
  // mostarr el formulario y ocultarl el mensaje
  form.style.display = "flex";
  usuarioSection.style.display = "none";
}