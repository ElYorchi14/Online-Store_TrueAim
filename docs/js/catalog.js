// /docs/js/catalog.js
import { supabase } from "../supabase/supabase-client.js";

const $productList = document.getElementById("product-list");

async function cargarProductos() {
  try {
    const { data: productos, error } = await supabase
      .from("products")
      .select("*");

    if (error) throw error;

    if (!productos.length) {
      $productList.innerHTML =
        "<p class='col-span-3 text-center'>No hay productos disponibles.</p>";
      return;
    }

    productos.forEach((producto) => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded shadow";

      card.innerHTML = `
        <img src="${producto.imageUrl}" alt="${producto.title}" class="w-full h-48 object-cover rounded mb-4">
        <h2 class="text-xl font-semibold mb-2">${producto.title}</h2>
        <p class="text-gray-700 mb-2">$${producto.price}</p>
        <a href="./product.html?id=${producto.id}" class="text-blue-500 hover:underline">Ver más</a>
      `;

      $productList.appendChild(card);
    });
  } catch (error) {
    console.error("Error al cargar productos:", error.message);
    $productList.innerHTML =
      "<p class='text-red-500'>No se pudieron cargar los productos.</p>";
  }
}

document.addEventListener("DOMContentLoaded", cargarProductos);
