import { supabase } from "../supabase/supabase-client.js";

// Función para crear una tarjeta HTML de producto
function crearTarjetaProducto(producto) {
  return `
    <div class="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <img src="${producto.image_url}" alt="${producto.nombre}" class="w-full h-48 object-cover rounded mb-4">
      <h3 class="text-lg font-semibold">${producto.nombre}</h3>
      <p class="text-gray-600">${producto.descripcion}</p>
      <p class="font-bold text-blue-600 mt-2">$${producto.precio}</p>
      <a href="./docs/product.html?id=${producto.id_producto}" class="text-sm text-blue-500 hover:underline mt-2 inline-block">
        Ver producto
      </a>
    </div>
  `;
}

// Obtener productos desde Supabase y renderizarlos
async function cargarProductos() {
  const { data: productos, error } = await supabase
    .from("productos")
    .select("*");

  const catalogo = document.querySelector("#catalogo");

  if (error) {
    console.error("Error al cargar productos:", error.message);
    catalogo.innerHTML =
      "<p class='text-red-500'>Error al cargar productos.</p>";
    return;
  }

  if (!productos || productos.length === 0) {
    catalogo.innerHTML =
      "<p class='text-gray-500'>No hay productos disponibles.</p>";
    return;
  }

  catalogo.innerHTML = productos.map(crearTarjetaProducto).join("");
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", cargarProductos);
