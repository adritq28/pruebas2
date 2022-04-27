function reemplaza_imagen(imagen) {
    imagen.onerror = "";
    imagen.src = "carga.png";
    return true;
}