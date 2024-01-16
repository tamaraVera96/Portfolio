//Captura elementos span(para mostrar error) por id
let name_error = document.getElementById("name_error");
let email_error = document.getElementById("email_error");
let subject_error = document.getElementById("subject_error");
let message_error = document.getElementById("message_error");
let btn_submit = document.getElementById("btn_submit");

//Agrega evento click al boton
btn_submit.addEventListener("click", e => {
    //Toma datos del formulario por id al momento de hacer click
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message"); 
    //Evita envio del formulario
    e.preventDefault();

    validateName(name);
    validateEmail(email);
    validateSubjectAndMessage(subject, message);
})

//Funciones - Validaciones
const validateName = (name) => {
    let validateName = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
    //.value para tomar el valor del input y .length para saber cuantos caracteres tiene
    if (name.value === "" || name.value.length < 1) {
        //Añade la clase de error al span capturado al comienzo
        name_error.classList.add("error");
        //Modifica el valor del texto del span
        name_error.innerHTML = "Por favor ingresa tu nombre";
    }
    //Método .test para validar regex (validateName)
    else if (!validateName.test(name)){
        name_error.classList.add("error");
        name_error.innerHTML = "No se permite números";
        //Vacia el campo
        name.value = "";
    }
}
const validateEmail = (email) => {
    let validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (email.value === "") {
        email_error.classList.add("error");
        email_error.innerHTML = "Por favor ingresa tu correo";
    }
    else if(!validateEmail.test(email.value)){
        email_error.classList.add("error");
        email_error.innerHTML = "Ingresa un correo valido";
    }
};

const validateSubjectAndMessage = (subject, message) => {
    if (subject.value === ""){
        subject_error.classList.add("error");
        subject_error.innerHTML = "No puede estar el campo vacio";
    }
    if (message.value === "") {
        message_error.classList.add("error");
        message_error.innerHTML = "No puede estar el campo vacio";  
    }
}