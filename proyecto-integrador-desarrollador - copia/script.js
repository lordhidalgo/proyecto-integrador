// script.js
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const catalogSection = document.getElementById("catalog-section");

    // Manejar el evento de inicio de sesión
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Aquí podrías realizar una validación de usuario
        if (username === "admin" && password === "1234") {
            alert("Inicio de sesión exitoso");
            catalogSection.style.display = "block"; // Mostrar catálogo
            document.querySelector('.login-form').style.display = "none"; // Ocultar el formulario de inicio de sesión
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });

    // Cargar el catálogo de juegos (puedes personalizarlo)
    loadGameCatalog();
});

// Función para cargar el catálogo de juegos
function loadGameCatalog() {
    const games = [
        {
            name: "Juego 1",
            availability: "En stock",
            image: "ruta/a/imagen1.jpg",
        },
        {
            name: "Juego 2",
            availability: "Agotado",
            image: "ruta/a/imagen2.jpg",
        },
        {
            name: "Juego 3",
            availability: "En stock",
            image: "ruta/a/imagen3.jpg",
        },
        // Añade más juegos aquí
    ];

    const gameCatalog = document.getElementById("game-catalog");

    games.forEach((game) => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item");
        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <div class="availability">Disponibilidad: ${game.availability}</div>
            <button>Añadir al Carrito</button>
        `;
        gameCatalog.appendChild(gameItem);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        },
      },
    });
  });