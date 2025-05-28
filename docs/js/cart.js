import { supabase } from "/Online-Store_TrueAim/supabase/supabase-client.js";

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
        <button onclick="eliminarDelCarrito(${producto.id_producto})" class="mt-2 text-sm text-red-500 hover:underline">Eliminar</button>
      </div>
    `
    )
    .join("");

  const total = productos.reduce((sum, p) => sum + p.precio, 0);
  container.innerHTML += `
    <div class="text-right font-bold text-xl mt-4">Total: $${total.toFixed(
      2
    )}</div>
    <div class="text-right mt-4">
      <button id="btn-comprar" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Simular compra</button>
    </div>
  `;

  document.querySelector("#btn-comprar").addEventListener("click", () => {
    alert(
      "Gracias por tu compra. Te hemos enviado un correo con la confirmación."
    );
    localStorage.removeItem("carrito");
    location.href = "/Online-Store_TrueAim/index.html";
  });
}

window.eliminarDelCarrito = function (id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito = carrito.filter((pid) => pid !== id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload();
};

document.addEventListener("DOMContentLoaded", () => {
  cargarCarrito();

  const btnSimularCompra = document.querySelector("#simular-compra");
  if (btnSimularCompra) {
    btnSimularCompra.addEventListener("click", async () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }

      const emailUsuario = (await supabase.auth.getUser()).data.user?.email;

      if (!emailUsuario) {
        alert("Debes iniciar sesión para completar la compra.");
        window.location.href = "/Online-Store_TrueAim/auth/login.html";
        return;
      }

      alert(
        `Compra simulada con éxito. Se ha enviado una confirmación a ${emailUsuario}.`
      );

      // Limpiar carrito
      localStorage.removeItem("carrito");

      // Redirigir al catálogo tras unos segundos
      setTimeout(() => {
        window.location.href = "/Online-Store_TrueAim/index.html";
      }, 2000);
    });
  }
});
