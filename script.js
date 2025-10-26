document.addEventListener("DOMContentLoaded", function() {

  const slides = document.querySelectorAll(".slide");
  const pontos = document.querySelectorAll(".botao-campanha");

  const nextButton = document.querySelector("#arrow-next");
  const backButton = document.querySelector("#arrow-back");

  let slideAtualIndice = 0;
  const totalSlides = slides.length;

  function moverParaSlide(slideIndice){

    if(slideIndice >= totalSlides){
      slideIndice = 0;
    }

    if(slideIndice < 0){
      slideIndice = totalSlides - 1;
    }

    slides.forEach(slide => {
      slide.classList.remove("active");
    });

    pontos.forEach(ponto => {
      ponto.classList.remove("active");
    });

    slides[slideIndice].classList.add("active");
    pontos[slideIndice].classList.add("active");

    slideAtualIndice = slideIndice;

  }

  nextButton.addEventListener("click", function() {
    moverParaSlide(slideAtualIndice + 1);
  });
  
  backButton.addEventListener("click", function(){
    moverParaSlide(slideAtualIndice - 1);
  });

  pontos.forEach((ponto, index) => {

    ponto.addEventListener("click", function(){

      moverParaSlide(index);

    });

  });

  moverParaSlide(0);

  //========== AVALIAÇÃO ===========//

  const paginasAvaliacao = document.querySelectorAll(".avaliacao");
  const nextSeta = document.querySelector("#seta-next");
  const backSeta = document.querySelector("#seta-back");

  let paginaAtual = 0;
  const totalPaginas = Math.ceil(paginasAvaliacao.length/3);
  const paginaAtualAvaliacao = document.querySelector("#pagina-atual-avaliacao");

  function moverParaAvaliacao(paginaAtualIndice){

  if(paginaAtualIndice === (totalPaginas-1)){
    nextSeta.classList.remove("active");
  } else {
    nextSeta.classList.add("active");
  }
  
  if(paginaAtualIndice === 0){
    backSeta.classList.remove("active");
  } else {
    backSeta.classList.add("active");
  }

  paginasAvaliacao.forEach(avaliacao => {
    avaliacao.classList.remove("active");
  });

  const inicioIndex = paginaAtualIndice * 3;
        
  for (let i = inicioIndex; i < inicioIndex + 3; i++) {

      if (paginasAvaliacao[i]) {

          paginasAvaliacao[i].classList.add("active");

      }

  }

  paginaAtual = paginaAtualIndice;

  paginaAtualAvaliacao.textContent = paginaAtualIndice + 1;

  }

  nextSeta.addEventListener("click", function(){

    moverParaAvaliacao(paginaAtual + 1);

    nextSeta.classList.add("clicado");
    setTimeout(function() {
      nextSeta.classList.remove("clicado");
    }, 300);

  });

  backSeta.addEventListener("click", function(){

    moverParaAvaliacao(paginaAtual - 1);

    backSeta.classList.add("clicado");
    setTimeout(function() {
      backSeta.classList.remove("clicado");
    }, 300);

  });
  
  //========== RESPONSIVIDADE ===========//

  const logoImagem = document.querySelector("#logoImagem");
  const petsDetalhe = document.querySelector("#pets-detalhe");
  const textoCentral = document.querySelector("#texto-banner-central");
  const imagemQuemSomos = document.querySelector("#img-logo");


  const logoDesktop = "imagens/logo/logoCompleta.svg";
  const logoMobile = "imagens/logo/logoMobile.svg";
  const detalheDesktop = "imagens/banner-central/waveform.svg";
  const detalheMobile = "imagens/banner-central/elipse.svg";
  const quemSomosDesktop = "imagens/logo/logoCompleta.svg";
  const quemSomosMobile = "imagens/logo/logoMobileBranca.svg";

  function ajustarResponsividade() {

    if(window.innerWidth <= 768){

      logoImagem.src = logoMobile;
      petsDetalhe.src = detalheMobile;
      textoCentral.innerHTML = "Cuidamos do seu<br>animal com muito<br>amor";
      imagemQuemSomos.src = quemSomosMobile;
      


    } else {
      
      logoImagem.src = logoDesktop;
      petsDetalhe.src = detalheDesktop;
      textoCentral.innerHTML = "Cuidando do Seu Pet com<br>Profissionalismo e Carinho";
      imagemQuemSomos.src = quemSomosDesktop;

    }

  }

  window.addEventListener('resize', ajustarResponsividade);
  
});





