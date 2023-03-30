const usuario = document.getElementById("usuario")
const comu = document.getElementById("comu")
let mensaje = document.getElementById("mensaje");
const campos = document.getElementById("campos")
const parr = document.getElementById("aviso")

    campos.addEventListener("submit", e => {
        e.preventDefault()
        let avisos = ""
        let valido = false
        let pruebaNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
        let pruebaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        parr.innerHTML = ""
        if(!pruebaNombre.test(usuario.value) || usuario.value.length <= 2 || usuario.value.length == 0 || nombre.value.length > 20){
            avisos += `¡Nombre no valido!<br>`;
            valido = true;
        }//validaciónNombre

        if(!pruebaEmail.test(comu.value) || comu.value.length == 0 || comu.value.length >= 200){
            avisos += `¡Correo electrónico no valido!<br>`;
            valido = true;
        }

        if(mensaje.value.length >= 150 || mensaje.value.length == 0){
            avisos += `¡Mensaje no valido!<br>`
            valido = true
          }//validaciónMensaje

        if (valido) {
            parr.innerHTML += `<div class="alert alert-danger" role="alert">
            ${avisos}
          </div>`;
            // parr.innerHTML = avisos
        } else {
            // parr.innerHTML = "Enviado"
            avisos +=`¡Formulario Correcto!`
            parr.innerHTML  += `
            <div class="alert alert-success" role="alert">
                <h3> ${avisos} </h3>
            </div>`;
            var dir = document.createElement("a");
            dir.href = `mailto:beatlemania345@gmail.com?subject= 
            Contacto Coraline&body=${usuario.value}
            %20%0D%0A %20%0D%0A${mensaje.value} %20%0D%0A %20%0D%0A %20%0D%0A 
            Correo cliente: ${comu.value}`;
            dir.click();
            campos.reset();
    }
})


