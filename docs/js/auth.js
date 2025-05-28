import { supabase } from "/Online-Store_TrueAim/supabase/supabase-client.js";

// Registro
const registerForm = document.querySelector("#register-form");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Registro exitoso. Verifica tu correo.");
      // ✅ Redirigir al login
      window.location.href = "/Online-Store_TrueAim/auth/login.html";
    }
  });
}

// Login
const loginForm = document.querySelector("#login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Login exitoso");
      window.location.href = "/Online-Store_TrueAim/index.html";
    }
  });
}

// Reset
const resetForm = document.querySelector("#reset-form");
if (resetForm) {
  resetForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Correo de recuperación enviado");
    }
  });
}
