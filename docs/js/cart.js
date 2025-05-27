import { supabase } from "../supabase/supabase-client.js";

async function cargarCarrito() {
  const container = document.querySelector("#carrito-container");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carrito.length === 0) {
    container.innerHTML = "<p class='text-gray-500'>Tu carrito está vacío.</p>";
    return;
  }

  const { data: productos, error } = await supabase
    .from("productos")
    .select("*")
    .in("id_producto", carrito);

  if (error) {
    container.innerHTML =
      "<p class='text-red-500'>Error al cargar el carrito.</p>";
    return;
  }

  container.innerHTML = productos
    .map(
      (producto) => `
    <div class="bg-white p-4 rounded shadow">
      <h3 class="text-lg font-semibold">${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p class="text-blue-600 font-bold">$${producto.precio}</p>
    </div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", cargarCarrito);
