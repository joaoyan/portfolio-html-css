// ======================
// ANO AUTOMÁTICO
// ======================

document.getElementById("year").textContent =
new Date().getFullYear();


// ======================
// EFEITO DIGITAÇÃO
// ======================

const typingElement =
document.getElementById("typing-name");

const text = "João Yan";

let index = 0;

function typeWriter() {

    if(index < text.length){

        typingElement.textContent += text.charAt(index);

        index++;

        setTimeout(typeWriter, 120);
    }
}

if(typingElement){

    typingElement.textContent = "";

    typeWriter();
}


// ======================
// ANIMAÇÃO DOS CARDS
// ======================

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }
    });

}, {
    threshold: 0.15
});

cards.forEach(card => {

    observer.observe(card);
});


// ======================
// HOVER NOS PROJETOS
// ======================

const projects =
document.querySelectorAll(".project-box");

projects.forEach(project => {

    project.addEventListener("mouseenter", () => {

        project.style.transform =
        "translateY(-10px)";
    });

    project.addEventListener("mouseleave", () => {

        project.style.transform =
        "translateY(0)";
    });
});


// ======================
// CONTADOR DE VISITAS
// ======================

let visits =
localStorage.getItem("portfolio_visits");

if(!visits){

    visits = 1;

} else {

    visits = Number(visits) + 1;
}

localStorage.setItem(
    "portfolio_visits",
    visits
);

console.log(
`Visitas ao portfolio: ${visits}`
);


// ======================
// MENSAGEM DE BOAS-VINDAS
// ======================

setTimeout(() => {

    console.log(
        "Bem-vindo ao portfólio de João Yan 🚀"
    );

}, 1000);