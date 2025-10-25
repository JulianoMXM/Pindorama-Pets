document.addEventListener("DOMContentLoaded", function() {

  const slides = document.querySelectorAll(".slide");
  const pontos = document.querySelectorAll(".botao-campanha");

  const nextButton = document.querySelector("#arrow-next");
  const backButton = document.querySelector("#arrow-back");

  let currentSlideIndex = 0;
  const totalSlides = slides.length;

  function moveToSlide(targetIndex){

    if(targetIndex >= totalSlides){
      targetIndex = 0;
    }

    if(targetIndex < 0){
      targetIndex = totalSlides - 1;
    }

    slides.forEach(slide => {
      slide.classList.remove("active");
    });

    pontos.forEach(ponto => {
      ponto.classList.remove("active");
    });

    slides[targetIndex].classList.add("active");
    pontos[targetIndex].classList.add("active");

    currentSlideIndex = targetIndex;

  }

  nextButton.addEventListener("click", function() {
    moveToSlide(currentSlideIndex + 1);
  });
  
  backButton.addEventListener("click", function(){
    moveToSlide(currentSlideIndex - 1);
  });

  pontos.forEach((ponto, index) => {

    ponto.addEventListener("click", function(){

      moveToSlide(index);

    });

  });

  moveToSlide(0);

});

// ========== MENU RESPONSIVO ==========
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// ========== BOTÃO DE CONTATO ==========
const botaoContato = document.getElementById('botaoContato');
botaoContato.addEventListener('click', () => {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});

// ========== FORMULÁRIO DE CONTATO ==========
const formContato = document.getElementById('formContato');
formContato.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! 🐾');
  formContato.reset();
});
