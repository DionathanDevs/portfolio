// Função que será chamada quando o elemento entrar na tela
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.hidden'); // Seleciona todos os elementos com a classe .hidden

    // Configura o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona a classe 'visible' quando o elemento entra na tela
            } 
        });
    }, { threshold: 0.5 }); // Define que o elemento será considerado visível quando 50% dele estiver visível na tela

    // Adiciona o observer a cada elemento
    elements.forEach(element => observer.observe(element));
};

// Quando o conteúdo da página for totalmente carregado, chama a função revealOnScroll
document.addEventListener('DOMContentLoaded', revealOnScroll);

const header = document.querySelector('header');

// Adiciona uma classe quando o usuário rolar a página
window.onscroll = function() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); // Adiciona a classe 'scrolled' ao rolar
    } else {
        header.classList.remove('scrolled'); // Remove a classe 'scrolled' quando estiver no topo
    }
};
// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        // Obtém o ID da seção alvo a partir do atributo href
        const targetId = this.getAttribute('href').substring(1); // Remove o "#"
        const targetElement = document.getElementById(targetId);

        // Centraliza a seção na tela
        targetElement.scrollIntoView({
            behavior: 'smooth', // Rola suavemente
            block: 'center', // Centraliza verticalmente
            inline: 'nearest' // Não afeta o alinhamento horizontal
        });
    });
});



const button = document.querySelector('.nav-burguer-btn');
const navList = document.querySelector('.nav-burguer-list');

// Adiciona o evento de clique ao botão
button.addEventListener('click', () => {
  // Alterna a classe 'active' no menu
  navList.classList.toggle('active');
});


