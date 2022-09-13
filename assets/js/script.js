$(document).ready(function () {
  // similar a querySelectorAll()
  // param es un strign con selector CSS
$("#navBar").load("components/navBar.html");
$("#footer").load("components/footer.html");

let boton = document.getElementById('btn-contacto');
let form = document.getElementById('form');
boton.addEventListener('click', (e) =>{
        //try y catch para el manejo de errores
        try {
            //Recuperar valores del formulario por sus respectivos inputs
            let nombre = document.getElementById('nombre').value;
            let phone = document.getElementById('phone').value;
            let email = document.getElementById('email').value;
            let region = document.getElementById('region').value;
            let checkOption = document.querySelector("input[name='radio-stacked']:checked").value;
            let message = document.getElementById('message').value;

            // Creamos el objeto "contactoPolera"
            let contactoPolera = {
                nombre,
                phone,
                email,
                region,
                checkOption,
                message,
                date: (new Date()).toISOString()
            };

            // Comprobamos si los datos fueron registrados de forma exitosa
            // console.dir(contactoPolera);

            // llamamos a la funcion para guardar los datos del form y como parametros indicamos el objeto "contactoPolera"
            saveContactoPolera(contactoPolera);

            // Alert que se mostrara debajo del form y al apretar boton enviar
            // Almacenamos el div.prueba en una variable llamada capa
            let capa = document.getElementById('prueba');
            // a la nueva variable capa le insertamos un elemento html con el texto que queremos
            capa.innerHTML= '<div class="alert alert-success role="alert" class="text-center">Se envio correctamente</div>'

            // Metodo para resetear el formulario
            form.reset();

            // delay y dentro de este reseteamos la pagina
            setTimeout(() => {
                location.reload(); 
            }, 3000);


        } catch (e) {
            console.log('error');
            // mostrarError(e.message);
        }

    });

    // Validaciones del formulario (Bootstrap)
    (function () {
        "use strict";
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll(".needs-validation");
    
        // Loop over them and prevent submission
        Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add("was-validated");
            },
            false
        );
        });
    })();

});

// Funcion para Guardar Datos desde el formulario a base de datos Firebase
async function saveContactoPolera(contactoPolera){
    // La url de firebase debe finalizar con /"nombreObjeto".json
    const url = 'https://curso-fronend-default-rtdb.firebaseio.com/contactoPolera.json';

    const respuesta = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(contactoPolera)
    })

    const data = await respuesta.json();
    // mensajeExitoso('Se guardo correctamente su suscripción')
}

// function mensajeExitoso(mensaje){
//     alert(mensaje);
// }


