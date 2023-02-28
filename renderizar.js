import { productos } from "./productos.js";
import { escucharClickParaAbrirPopUp } from "./popup.js";

const contenedorProductos = document.querySelector(".products");
export function renderizar() {
  productos.forEach((producto) => {
    const productoContenedor = document.createElement("div");
    const productoTitulo = document.createElement("h3");
    const productoImg = document.createElement("img");
    const productoPrecio = document.createElement("p");
    const productoBoton = document.createElement("a");

    const productoTituloTexto = producto["nombre"];
    const productoImgLink = producto["img"];
    const productoPrecioTexto = "₡" + producto["precio"];

    productoTitulo.textContent = productoTituloTexto;
    productoImg.src = productoImgLink;
    productoPrecio.textContent = productoPrecioTexto;
    productoBoton.textContent = "Ver mas detalles";

    productoContenedor.classList.add("product");
    productoBoton.classList.add("button");
    productoContenedor.dataset.id = producto["id"];

    productoContenedor.appendChild(productoTitulo);
    productoContenedor.appendChild(productoImg);
    productoContenedor.appendChild(productoPrecio);
    productoContenedor.appendChild(productoBoton);

    contenedorProductos.appendChild(productoContenedor);
  });
  escucharClickParaAbrirPopUp(productos);
}
