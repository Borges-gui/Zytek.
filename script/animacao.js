// SELEÇÃO DE ELEMENTOS PARA ANIMAÇÃO
const elementos = document.querySelectorAll(".animacao");
const elementos2 = document.querySelectorAll(".animacao2");

// OBSERVADOR DE INTERSEÇÃO
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animacao-mostrar');
        }
    });
});

const myObserver2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animacao2-mostrar');
        }
    });
});

// APLICANDO O OBSERVADOR EM CADA ELEMENTO
elementos.forEach((elemento) => {
    myObserver.observe(elemento); 
});

elementos2.forEach((elemento) => {
    myObserver2.observe(elemento);
});

