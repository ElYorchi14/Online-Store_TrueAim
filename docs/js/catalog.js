import { supabase } from "/Online-Store_TrueAim/supabase/supabase-client.js";

let productosGlobal = []; // Se usará para filtrar sin recargar

async function cargarProductos() {
  const container = document.querySelector("#productos-container");
  const { data: productos, error } = await supabase
    .from("productos")
    .select("*");

  if (error) {
    container.innerHTML =
      "<p class='text-red-500'>Error al cargar productos.</p>";
    return;
  }

  productosGlobal = productos;
  mostrarProductos(productos);
}

function mostrarProductos(lista) {
  const container = document.querySelector("#productos-container");
  if (!lista.length) {
    container.innerHTML =
      "<p class='text-gray-500'>No se encontraron productos.</p>";
    return;
  }

  container.innerHTML = lista
    .map(
      (producto) => `
      <div class="bg-white p-4 rounded shadow">
        <h3 class="text-lg font-semibold">${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="text-blue-600 font-bold">$${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id_producto})" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Agregar al carrito</button>
      </div>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  cargarProductos();

  const buscador = document.querySelector("#buscador");
  buscador.addEventListener("input", (e) => {
    const texto = e.target.value.toLowerCase();
    const filtrados = productosGlobal.filter((p) =>
      p.nombre.toLowerCase().includes(texto)
    );
    mostrarProductos(filtrados);
  });
});
