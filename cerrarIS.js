document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const username = document.getElementById("username").value.trim();
      const mensaje = document.getElementById("bienvenida");
      
        // Esperar un pequeño tiempo antes de ocultar el modal
          const modal = document.getElementById("ventanaIS");
          if (modal) modal.style.display = "none";
      
        setTimeout(() => {
          mensaje.style.display = "none";
        }, 3000);
      
    });
  });