function moveSlide(button, direction) {
    // Pega o container (botão clicado)
    const container = button.parentElement;
    
    // Seleciona o carrossel e as imagens dentro dele
    const carousel = container.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
  
    // Obtém o índice atual (ou começa do 0)
    let currentIndex = parseInt(carousel.getAttribute('data-index')) || 0;
 
    // Atualiza o índice com base na direção
    currentIndex += direction;
  
    // Garante que o índice fique dentro do intervalo
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
  
    // Move o carrossel usando translateX
    const offset = -currentIndex * images[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  
    // Salva o novo índice no atributo data
    carousel.setAttribute('data-index', currentIndex);
  }
  

/*Animação Header/banner*/
  const header = document.querySelector('header');

let angle = 0;
function animateGradient() {
  angle += 1; // velocidade do movimento
  if (angle > 360) angle = 0;
  
  // Exemplo de degrade girando no ângulo
  header.style.background = `linear-gradient(${angle}deg, #004aad, #0055cc, #003080, #004aad)`;
  
  requestAnimationFrame(animateGradient);
}
animateGradient();

