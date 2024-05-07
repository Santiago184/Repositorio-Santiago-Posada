// Datos para las tarjetas
const cardData = [
    {
        imgSrc: "/IMG/logo.png",
        title: "Chiquitita",
        description: "Página web de comida",
        logos: ["/IMG/html-5.png", "/IMG/css-3.png"],
        link: "https://chiquititacomida2.000webhostapp.com"
    },
    // Puedes agregar más objetos al array para crear más tarjetas
];

// Función para crear una tarjeta
function createCard(data) {
    const cardContainer = document.getElementById("cardContainer");
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = data.imgSrc;
    img.alt = "Imagen";

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const title = document.createElement("h2");
    title.textContent = data.title;

    const description = document.createElement("p");
    description.textContent = data.description;

    const logosContainer = document.createElement("div");
    logosContainer.classList.add("logos-container");

    data.logos.forEach(logoSrc => {
        const logo = document.createElement("img");
        logo.src = logoSrc;
        logo.alt = "Logo";
        logosContainer.appendChild(logo);
    });

    const link = document.createElement("a");
    link.href = data.link;
    link.textContent = "Ir al sitio";
    link.target="_blank"

    card.appendChild(img);
    cardInfo.appendChild(title);
    cardInfo.appendChild(description);
    cardInfo.appendChild(logosContainer);
    cardInfo.appendChild(link);
    card.appendChild(cardInfo);

    cardContainer.appendChild(card);
}

// Función para duplicar la tarjeta
cardData.forEach(createCard)

