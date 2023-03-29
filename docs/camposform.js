const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const form = document.getElementById("formul")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-_])[A-Za-z\d@$!%*?&-_]{8,}$/;
    parrafo.innerHTML = ""
    if(!regexNombre.test(nombre.value) || nombre.value.length <= 2 || nombre.value.length == 0 || nombre.value.length > 20){
        warnings += `¡Nombre no valido!<br>`;
        entrar = true;
    }//validaciónNombre
    if(!regexEmail.test(email.value) || email.value.length == 0 || email.value.length >= 200){
        warnings += `¡Correo electrónico no valido!<br>`;
        entrar = true;
    }//validaciónCorreoElectrónico
    if(!regexPass.test(pass.value) || pass.value.length == 0 || pass.value.length > 20){
        warnings += `¡Contraseña no valida!<br>`;
        entrar = true;
    } //validaciónContraseña

    if(entrar){
        parrafo.innerHTML += `<div class="alert alert-danger" role="alert">
        ${warnings}
      </div>`;
    }else{
        parrafo.innerHTML += `<div class="alert alert-success" role="alert">
         <h3>Formulario correcto <br> ¡Enviado! </h3>
      </div>`
      form.reset();
    }
})


