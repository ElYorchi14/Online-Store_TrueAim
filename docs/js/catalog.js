import { supabase } from "/Online-Store_TrueAim/supabase/supabase-client.js";

let todosLosProductos = [];

async function cargarProductos() {
  const { data: productos, error } = await supabase
    .from("productos")
    .select("*");

  if (error) {
    console.error("Error al cargar productos:", error.message);
    return;
  }

  todosLosProductos = productos;
  mostrarProductos(productos);
}

function mostrarProductos(productos) {
  const catalogo = document.getElementById("catalogo");
  if (!catalogo) return;

  catalogo.innerHTML = productos
    .map(
      (producto) => `
    <div class="bg-white p-4 rounded shadow">
      <h3 class="text-lg font-bold">${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p class="text-blue-600 font-bold">$${producto.precio}</p>
      <button onclick="agregarAlCarrito(${producto.id_producto})"
        class="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
        Añadir al carrito
      </button>
    </div>
  `
    )
    .join("");
}

function filtrarProductos(termino) {
  const filtro = termino.toLowerCase();
  const filtrados = todosLosProductos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(filtro) ||
      p.descripcion.toLowerCase().includes(filtro)
  );
  mostrarProductos(filtrados);
}

document.addEventListener("DOMContentLoaded", () => {
  cargarProductos();

  const buscador = document.getElementById("buscador");
  if (buscador) {
    buscador.addEventListener("input", (e) => {
      filtrarProductos(e.target.value);
    });
  }
});

window.agregarAlCarrito = function (id) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto añadido al carrito");
};
