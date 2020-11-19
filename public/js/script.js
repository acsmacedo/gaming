function menuMobile() {
  const btn = document.querySelector('.btn-mobile');
  const menu = document.querySelector('.menu');

  btn.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
  });
}

menuMobile();
