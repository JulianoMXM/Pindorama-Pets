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
