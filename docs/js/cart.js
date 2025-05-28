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
        <button onclick="eliminarDelCarrito(${producto.id_producto})"
          class="mt-2 text-sm text-red-500 hover:underline">Eliminar</button>
      </div>
    `
    )
    .join("");

  const total = productos.reduce((sum, p) => sum + p.precio, 0);
  container.innerHTML += `
    <div class="text-right font-bold text-xl mt-4">Total: $${total.toFixed(
      2
    )}</div>
  `;
}

window.eliminarDelCarrito = function (id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito = carrito.filter((pid) => pid !== id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload();
};

document.addEventListener("DOMContentLoaded", () => {
  cargarCarrito();

  const simularCompraBtn = document.querySelector("#simular-compra");
  if (simularCompraBtn) {
    simularCompraBtn.addEventListener("click", async () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }

      const { data } = await supabase.auth.getUser();
      const email = data?.user?.email;

      if (!email) {
        alert("Debes iniciar sesión para comprar.");
        window.location.href = "/Online-Store_TrueAim/auth/login.html";
        return;
      }

      simularCompraBtn.disabled = true;
      simularCompraBtn.innerText = "Procesando compra...";

      setTimeout(() => {
        alert(`Gracias por tu compra. Se ha enviado un correo a ${email}.`);
        localStorage.removeItem("carrito");
        window.location.href = "/Online-Store_TrueAim/success.html";
      }, 3000);
    });
  }
});
