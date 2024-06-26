// Datos para las tarjetas
const data = [
    {
        title: "Survive Space",
        text: "Es un juego donde tienes que sobrevivir a oleadas de enemigos.",
        listItems: ["Rol", "Programador","Modelador"],
        images: ["/IMG/unity.png", "/IMG/hola.png","/IMG/blender.png"],
        videoSrc: "https://www.youtube.com/watch?v=xTl--yWvKM8"
    },
    
    {
        title: "Stumble food",
        text: "Es un juego multijugador donde tienes que superar varios obstáculos para llegar a la meta.",
        listItems: ["Rol", "Programador"],
        images: ["/IMG/unity.png", "/IMG/hola.png"],
        videoSrc: "https://www.youtube.com/watch?v=7tCRn1Tm61A" 
    }
    
];

// Función para crear una tarjeta
function createCard(info) {
    const cardContainer = document.getElementById("card-container");

    const card = document.createElement("div");
    card.classList.add("card");

    const cardContainerDiv = document.createElement("div");
    cardContainerDiv.classList.add("card-container");

    const title = document.createElement("h2");
    title.textContent = info.title;
    title.classList.add("card-title");
    cardContainerDiv.appendChild(title);

    const text = document.createElement("p");
    text.textContent = info.text;
    text.classList.add("card-text");
    cardContainerDiv.appendChild(text);

    const ul = document.createElement("ul");
    info.listItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    cardContainerDiv.appendChild(ul);

    info.images.forEach(imageSrc => {
        const image = document.createElement("img");
        image.src = imageSrc;
        image.alt = "Imagen";
        cardContainerDiv.appendChild(image);
    });

    const video = document.createElement("iframe");
    video.src = info.videoSrc.replace("watch?v=", "embed/");
    video.width = "560";
    video.height = "315";
    video.frameborder = "0";
    video.allowfullscreen = true;
    
    card.appendChild(cardContainerDiv);
    card.appendChild(video);

    cardContainer.appendChild(card);
}

// Crear tarjetas para cada conjunto de datos
data.forEach(createCard);
