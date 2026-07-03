// Seleciona todos os slides do carrossel
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function nextSlide() {
    // Remove a classe 'active' do slide atual para escondê-lo
    slides[currentSlide].classList.remove('active');
    
    // Avança para o próximo slide (e volta para o 0 se chegar ao fim)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Adiciona a classe 'active' no novo slide para mostrá-lo
    slides[currentSlide].classList.add('active');
}

// Configura o temporizador para mudar de notícia a cada 4000 milissegundos (4 segundos)
setInterval(nextSlide, 4000);