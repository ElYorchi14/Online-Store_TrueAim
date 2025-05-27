// /docs/js/productDetail.js
import { supabase } from "../supabase/supabase-client.js";

const $productDetail = document.getElementById("product-detail");

// Obtener el ID desde la URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

async function cargarProducto() {
  try {
    if (!productId) throw new Error("ID de producto no válido");

    const { data: producto, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", productId)
      .single();

    if (error || !producto) throw error;

    $productDetail.innerHTML = `
      <img src="${producto.imageUrl}" alt="${producto.title}" class="w-full h-64 object-cover rounded mb-4">
      <h1 class="text-2xl font-bold mb-2">${producto.title}</h1>
      <p class="text-gray-700 mb-2">${producto.description}</p>
      <p class="text-lg font-semibold text-green-600 mb-4">$${producto.price}</p>
      <p class="text-sm text-gray-500">Categoría: ${producto.category}</p>
      <p class="text-sm text-gray-500">Stock: ${producto.stock}</p>
    `;
  } catch (err) {
    console.error("Error al mostrar el producto:", err.message);
    $productDetail.innerHTML =
      "<p class='text-red-500'>No se pudo cargar la información del producto.</p>";
  }
}

document.addEventListener("DOMContentLoaded", cargarProducto);
