const text = [
    "Seja para construir um site,", 
    "uma loja virtual,",
    "desenvolver um aplicativo,", 
    "criar uma identidade visual impactante",
    "ou otimizar a presença digital da sua marca,",
    "estamos prontos para ajudar você a alcançar seus objetivos."
  ];

  let index = 0;
  let isDeleting = false;
  const speed = 100;  // Velocidade da digitação
  const pauseBetweenCycles = 2000;  // Pausa antes de recomeçar o ciclo

  function typeWriterEffect() {
    const element = document.getElementById("typewriter-text");

    // Se não estiver apagando e o texto ainda não terminou
    if (!isDeleting && index <= text.join(' ').length) {
      element.textContent = text.join(' ').slice(0, index);  // Mostra o texto até o índice atual
      index++;
      setTimeout(typeWriterEffect, speed);  // Continua a digitar
    } 
    // Se terminou de digitar, aguarda e começa a apagar
    else if (index === text.join(' ').length && !isDeleting) {
      setTimeout(() => {
        isDeleting = true;
        typeWriterEffect();
      }, pauseBetweenCycles);
    }
    // Se estiver apagando e ainda há texto para apagar
    else if (isDeleting && index >= 0) {
      element.textContent = text.join(' ').slice(0, index);
      index--;
      setTimeout(typeWriterEffect, speed / 2);  // Apaga mais rápido
    } 
    // Se o texto foi todo apagado, reinicia o ciclo de digitação
    else if (index < 0 && isDeleting) {
      isDeleting = false;
      setTimeout(typeWriterEffect, speed);
    }
  }

  // Inicia o efeito ao carregar a página
  window.onload = typeWriterEffect;