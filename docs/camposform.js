let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let form = document.getElementById("form");
let parrafo = document.getElementById("alertaRegistro");

form.addEventListener('submit', e=>{
    e.preventDefault()
    let alerta = "";
    let valido = false;
    parrafo.innerHTML = "";
    
    let regexNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    let regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-_])[A-Za-z\d@$!%*?&-_]{8,}$/;

    if(!regexNombre.test(nombre.value) || nombre.value.length <= 2 || nombre.value.length == 0 || nombre.value.length > 20){
        alerta += `<h3>¡Nombre no valido!</h3> <br>`;
        valido = true;
    }//validaciónNombre

    if(!regexpEmail.test(email.value) || email.value.length == 0 || email.value.length >= 200){
        alerta += `<h3>¡Correo electrónico no valido!</h3> <br>`;
        valido = true;
    }//validaciónCorreoElectrónico

    if(!regexPass.test(pass.value) || pass.value.length == 0 || pass.value.length > 20){
        alerta += `<h3>¡Contraseña no valida! </h3><br>`;
        valido = true;
    } 

    if(valido){
        parrafo.innerHTML += `
        <div class="alert alert-danger" role="alert">
            ${alerta}
        </div>`; 
    }

    if(!valido){
        parrafo.innerHTML += `
        <div class="alert alert-success" role="alert">
            <h3> ¡Tu registro ha sido exitoso! </h3>
        </div>`;
    }



      
})
