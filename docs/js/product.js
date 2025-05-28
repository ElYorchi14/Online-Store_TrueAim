import { supabase } from "/Online-Store_TrueAim/supabase/supabase-client.js";

// Obtener el ID desde la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function cargarProducto() {
  const container = document.querySelector("#producto-container");

  if (!id) {
    container.innerHTML = "<p class='text-red-500'>Producto no encontrado.</p>";
    return;
  }

  const { data: producto, error } = await supabase
    .from("productos")
    .select("*")
    .eq("id_producto", id)
    .single();

  if (error || !producto) {
    container.innerHTML =
      "<p class='text-red-500'>No se pudo cargar el producto.</p>";
    return;
  }

  container.innerHTML = `
  <div class="bg-white p-6 rounded shadow">
    <div class="grid md:grid-cols-2 gap-6">
      <img src="${producto.image_url}" alt="${producto.nombre}" class="w-full h-64 object-cover rounded" />
      <div>
        <h2 class="text-2xl font-bold mb-2">${producto.nombre}</h2>
        <p class="text-gray-600 mb-4">${producto.descripcion}</p>
        <p class="text-blue-600 font-bold text-xl mb-4">$${producto.precio}</p>
        <p class="text-sm text-gray-500 mb-4">Stock disponible: ${producto.stock}</p>

        <button onclick="agregarAlCarrito(${producto.id_producto})" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4">
          Agregar al carrito
        </button>

        <div class="flex gap-4">
          <a href="/Online-Store_TrueAim/cart.html" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Ir al carrito
          </a>
          <a href="/Online-Store_TrueAim/index.html" class="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition">
            Volver al catálogo
          </a>
        </div>
      </div>
    </div>
  </div>
`;

  function agregarAlCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
  }
}

document.addEventListener("DOMContentLoaded", cargarProducto);
