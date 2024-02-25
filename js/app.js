/*BANNER*/
let btn_menu = document.getElementById("hamburger_menu");
let title_banner = document.querySelector(".title");

btn_menu.addEventListener("click", () => {
    title_banner.style.display = (title_banner.style.display === 'none') ? 'flex' : 'none';
})

/*MENU*/
//Función para cerrar el menú al dar click al enlace
document.addEventListener("DOMContentLoaded", function() {
    //Guardamos los enlaces en un array
    const menuLinks = document.querySelectorAll('.nav_menu_links a');
    //Guardamos el checkbox
    const hamburgerCheckbox = document.getElementById('hamburger_menu');
    
    //Reccorremos el array
    menuLinks.forEach(link => {
    //Se agrega un evento click a cada enlace, para que cuando de clic en algún enlace se cierre el menú
      link.addEventListener('click', function() {
        hamburgerCheckbox.checked = false;
      });
    });
  });  

/*FORMULARIO CONTACTO*/
//Captura elementos span(para mostrar error) por id
let form = document.getElementById("form");
let name_error = document.getElementById("name_error");
let email_error = document.getElementById("email_error");
let subject_error = document.getElementById("subject_error");
let message_error = document.getElementById("message_error");

//Agrega evento submit al formulario
form.addEventListener("submit", e => {
    //Toma datos del formulario por id al momento de hacer click
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message"); 
    
    console.log(validateName(name));
    console.log(validateEmail(email));
    console.log(validateSubjectAndMessage(subject, message));
    
    if(!validateName(name) || !validateEmail(email) || !validateSubjectAndMessage(subject, message)){
        // Vaciamos el campo
        if(!validateName(name)){
            name.value = "";
        }
        if(!validateEmail(email)){
            email.value = "";
        }
        if(!validateSubjectAndMessage(subject, message)){
            subject.value = "";
            message.value = "";
        }
        //Evita envio del formulario
        e.preventDefault();
    }

    let confirmation = document.querySelector(".confirmation");
    confirmation.style.display = "block";
})

//Funciones - Validaciones 
const validateName = (name) => {
    let validateName = /^[A-Za-záéíóúñÁÉÍÓÚÑ\s]+$/; // Modificamos la expresión regular

    if (name.value === "" || name.value.length < 1) {
        name_error.classList.add("error");
        name_error.innerHTML = "Por favor ingresa tu nombre";
        return false;
    }
    // Verificamos si hay números en el nombre
    if (!validateName.test(name.value)) {
        name_error.classList.add("error");
        name_error.innerHTML = "No se permiten números en el nombre";
        return false;
    }
    return true;
}

const validateEmail = (email) => {
    let validateEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (email.value === "") {
        email_error.classList.add("error");
        email_error.innerHTML = "Por favor ingresa tu correo";

        return false;
    }
    if (!validateEmail.test(email.value)){
        email_error.classList.add("error");
        email_error.innerHTML = "Ingresa un correo valido";

        return false;
    }

    return true;
};

const validateSubjectAndMessage = (subject, message) => {
    if (subject.value === ""){
        subject_error.classList.add("error");
        subject_error.innerHTML = "No puede estar el campo vacio";

        return false;
    }
    if (message.value === "") {
        message_error.classList.add("error");
        message_error.innerHTML = "No puede estar el campo vacio";  

        return false;
    }

    return true;
}
