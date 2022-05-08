const inputImagen = document.getElementById("input-imagen");
const btnAgregar = document.getElementById("btn-agregar-imagen");
const imagenAgregada = document.getElementById("imagen-agregada");
const contenedorAgregar = document.getElementById("contenedor-agregar-imagen");
const labelImagen = document.getElementById("label-imagen");



btnAgregar.addEventListener("click", () => inputImagen.click());
contenedorAgregar.addEventListener("click", () => inputImagen.click());


//Cambiando fondo del contenedor de la imagen cuando se arrastra un archivo.
contenedorAgregar.addEventListener("dragover", (event) => {

    event.preventDefault();
    contenedorAgregar.classList.add("contenedor_imagen-activo");
});

//Removiendo el fondo del contendor de la imagen cuando se deja de arrastrar el archivo. 
contenedorAgregar.addEventListener("dragleave", (event) => {

    event.preventDefault();
    contenedorAgregar.classList.remove("contenedor_imagen-activo");
});

//Leyendo el archivo que se está subiendo.
const subirImagen = (file) => {

    const lectorArchivo = new FileReader();
    lectorArchivo.readAsDataURL(file);

    //Cargando el archivo y escondiendo los mensajes.
    lectorArchivo.addEventListener("load", (event) => {

        labelImagen.style.display = "none";
        imagenAgregada.style.display = "block";
        imagenAgregada.setAttribute("src", event.target.result);
    });
}

//Mostrando el archivo una vez soltado en el contenedor.
contenedorAgregar.addEventListener("drop", (event) => {

    event.preventDefault();

    inputImagen.files = event.dataTransfer.files;
    const imagen = inputImagen.files[0];

    subirImagen(imagen);
});


//Función para que se cambie cada vez que sea necesario el archivo.
contenedorAgregar.addEventListener("change", (event) => {

    const archivo = event.target.file;

    subirImagen(archivo);
});