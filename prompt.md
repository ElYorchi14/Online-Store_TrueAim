¡Perfecto! Ya con esta información, vamos a construir un **prompt eficiente y modular** que puedas usar directamente en tu proyecto y documentar en `prompt.md`.

### ✅ Vamos a trabajar **por módulos**, así que este será el prompt inicial para el **Módulo 1: Estructura base y autenticación**.

Después podemos seguir con: catálogo de productos, carrito, simulación de pago, etc.

---

### 🧠 **PROMPT PARA CHATGPT – MÓDULO 1: Estructura Base + Registro y Autenticación**

---

**● Contexto:**
Estoy desarrollando un e-Commerce de nicho como proyecto académico en una materia de desarrollo web. El proyecto se desplegará en GitHub Pages y Firebase (o Supabase), y simula una tienda online con al menos 5 productos. Toda la conceptualización de negocio ya está definida en el chat. Este primer módulo se enfocará en construir la estructura base del sitio, el sistema de registro e inicio de sesión, y la integración con Firebase o Supabase para la autenticación de usuarios.

---

**● Rol:**
Eres un desarrollador web senior especializado en apps de e-Commerce y Firebase/Supabase. Tienes experiencia enseñando a estudiantes cómo estructurar proyectos escalables, modulares y fáciles de mantener. Tu código es claro, moderno y documentado para que pueda integrarse en un repositorio académico. Utilizas buenas prácticas de seguridad, estructura de carpetas organizada y explicaciones concisas en los comentarios del código.

---

**● Acción:**

1. Crea una estructura base para un e-Commerce minimalista usando HTML, CSS (Tailwind o puro) y JavaScript (o framework ligero como Vite).
2. Integra Firebase (o Supabase) para la autenticación.
3. Implementa formularios para registro, inicio de sesión y recuperación de contraseña.
4. Asegura que el sistema guarde correctamente los datos del usuario y que el login sea persistente.
5. Agrega comentarios en el código para explicar cada sección clave.
6. Estructura el proyecto de forma que sea fácil ir agregando módulos como productos, carrito, pagos, etc.
7. No incluyas aún diseño visual complejo ni productos. Eso será parte de otro módulo.

---

**● Formato:**
Código en HTML, CSS (preferente Tailwind) y JS o Vite (según sugerencia de la IA). Estructurado por carpetas (`/src`, `/auth`, etc.) y con archivos `.js` o `.ts` separados. Código con comentarios claros. Todas las respuestas deben estar pensadas para copiar y pegar al proyecto.

---

**● Público objetivo:**
El código está destinado a un estudiante universitario con conocimientos básicos-intermedios de desarrollo web, desplegando en Firebase y GitHub Pages. Necesita explicaciones claras dentro del código para entender e integrar cada módulo. El contenido será subido a GitHub como parte de un entregable final.

---

¿Quieres que avancemos ahora con el prompt del **Módulo 2: Catálogo de productos** o prefieres que te genere el código para el Módulo 1?

¡Sí, claro que me acuerdo! Continuemos entonces con el **Módulo 2: Catálogo de productos** para tu proyecto de e-Commerce. Vamos a crear un **prompt detallado y eficiente** para que ChatGPT pueda ayudarte a construir un sistema funcional, limpio y expandible para mostrar productos.

---

### 🛍️ **PROMPT PARA CHATGPT – MÓDULO 2: Catálogo de productos para e-Commerce**

---

**● Contexto:**
Estoy desarrollando un e-Commerce de nicho como proyecto académico. El sitio está desplegado en GitHub Pages y usa Firebase o Supabase como backend. El **Módulo 1** ya contiene la estructura del sitio y el sistema de autenticación. Ahora necesito implementar el **catálogo de productos**, que se conecte a la base de datos (Firebase o Supabase), lea los productos y los muestre dinámicamente en una interfaz responsiva y minimalista. Cada producto debe tener su propia página individual y el catálogo debe ser fácil de filtrar o buscar en módulos posteriores.

---

**● Rol:**
Eres un desarrollador web especializado en front-end e integración con bases de datos en Firebase/Supabase. Tienes experiencia en proyectos e-Commerce donde la presentación del catálogo es clave para la experiencia del usuario. Eres organizado, claro, y generas código modular, fácilmente reutilizable y bien comentado.

---

**● Acción:**

1. Diseña la estructura del catálogo en HTML y CSS (preferente Tailwind).
2. Crea una base de datos (en Firebase o Supabase) con una colección llamada `products`, con los siguientes campos por producto:

   - `id`, `title`, `description`, `price`, `imageUrl`, `stock`, `category`

3. Escribe el código para consultar esta colección desde el frontend y mostrar los productos como tarjetas.
4. Asegúrate de que el catálogo se actualice automáticamente si se agrega un nuevo producto.
5. Cada producto debe tener un botón o enlace que lleve a su página individual (`product.html?id=...`) donde se muestre su información completa.
6. Usa parámetros en la URL (`window.location.search`) para cargar dinámicamente el producto en su página individual.
7. El diseño debe ser responsive y minimalista, adaptable a dispositivos móviles.
8. Agrega comentarios al código para facilitar su comprensión e integración con módulos posteriores (carrito, búsqueda, filtros).

---

**● Formato:**
Código en HTML + Tailwind CSS y JavaScript modular. Carpeta `/products/` con los archivos relacionados. El acceso a la base de datos debe hacerse en un archivo separado, por ejemplo `firebaseConfig.js` o `supabaseService.js`. Todos los scripts deben ir comentados, sin explicaciones fuera del código.

---

**● Público objetivo:**
Este prompt está dirigido a ChatGPT 4 o superior. El destinatario final es un estudiante con conocimientos intermedios de desarrollo web. Necesita un catálogo limpio, funcional, bien estructurado y fácil de mantener para futuras funcionalidades como el carrito o filtros por categoría.

---

¿Quieres que ahora te genere el código para este módulo, o prefieres que avancemos al **Módulo 3: Carrito de compras**?
