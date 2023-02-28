function crearMapeoDescripcionDeProductos(productos) {
  const mapaProductos = {};

  productos.forEach((producto) => {
    if (mapaProductos[producto.id]) {
      return;
    }
    if (!mapaProductos[producto.id]) {
      mapaProductos[producto.id] = {
        descripcion: producto.descripcion,
      };
    }
  });

  return mapaProductos;
}

export function escucharClickParaAbrirPopUp(productos) {
  const productosHTML = document.querySelectorAll(".button");
  let descripcionProductos = crearMapeoDescripcionDeProductos(productos);

  productosHTML.forEach((producto) => {
    producto.addEventListener("click", function (e) {
      const elementoProducto = e.target.parentElement;
      let [nombre, img, precio] = elementoProducto.childNodes;

      const popUpBackground = document.createElement("div")
      const popUp = document.createElement("div");
      const popColumns = document.createElement("div");
      const popUpImgContainer = document.createElement("div");
      const popUpImg = document.createElement("img");
      const popUpContent = document.createElement("div");
      const popUpTitle = document.createElement("h2");
      const popUpPrecio = document.createElement("span");
      const popUpDescripcion = document.createElement("p");
      const contenedorBotones = document.createElement("div");
      const popUpBoton = document.createElement("a");
      const popUpCloseBoton = document.createElement("a");

      popUpImg.src = img.src;
      popUpTitle.textContent = nombre.textContent;
      popUpPrecio.textContent = precio.textContent;
      popUpDescripcion.textContent =
        descripcionProductos[elementoProducto.dataset.id]["descripcion"];

      popUpBoton.textContent = "Comprar";
      popUpBoton.href = "https://wa.me/64034386";
      popUpBoton.target = "_blank";
      popUpCloseBoton.textContent = "Cerrar";

      popUpBackground.classList.add("popUp-background");
      popUp.classList.add("popup");
      popColumns.classList.add("popup-columns");
      popUpImgContainer.classList.add("popup-img");
      popUpContent.classList.add("popup-content");
      contenedorBotones.classList.add("popup-contenedor-botones");
      popUpBoton.classList.add("button");
      popUpCloseBoton.classList.add("button");

      popUpImgContainer.appendChild(popUpImg);

      popUpContent.appendChild(popUpTitle);
      popUpContent.appendChild(popUpPrecio);
      popUpContent.appendChild(popUpDescripcion);

      contenedorBotones.appendChild(popUpCloseBoton);
      contenedorBotones.appendChild(popUpBoton);
      popUpContent.appendChild(contenedorBotones);

      popUp.appendChild(popUpImgContainer);
      popUp.appendChild(popUpContent);
      popUpBackground.appendChild(popUp);

      document.body.appendChild(popUpBackground);
      popUpBackground.classList.toggle("popup-visible");

      popUpCloseBoton.addEventListener("click", (e) => {
        e.preventDefault();
        popUpBackground.classList.toggle("popup-visible");
      });
    });
  });

}
