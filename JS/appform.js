const CaracteresProbables = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const mensajeForm = document.querySelector(".mensajeForm");

const form = document.getElementById("form");

const inputs = document.querySelectorAll("#form input");

const btn = document.getElementById("btn");

const validarFormulario = (e) => {
    switch(e.target.name)
    {
        case "nombre":
            if(CaracteresProbables.nombre.test(e.target.value))
            {
                mensajeForm.id = "mensajeForm";
                btn.classList = "btn btn-primary";
            }
            else
            {
                mensajeForm.id = "mensajeForm-activo";
                btn.classList += " disabled";
            }
        break;
        case "apellido":
            if(CaracteresProbables.nombre.test(e.target.value))
            {
                mensajeForm.id = "mensajeForm";
                btn.classList = "btn btn-primary";
            }
            else
            {
                mensajeForm.id = "mensajeForm-activo";
                btn.classList += " disabled";
            }
        break;
        case "email":
            if(CaracteresProbables.correo.test(e.target.value))
            {
                mensajeForm.id = "mensajeForm";
                btn.classList = "btn btn-primary";
            }
            else
            {
                mensajeForm.id = "mensajeForm-activo";
                btn.classList += " disabled";
            }
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});