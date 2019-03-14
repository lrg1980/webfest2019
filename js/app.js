// Cambia de color el fondo al hacer scroll
window.onscroll = function (e) {
     const scroll = window.scrollY;
     
     const header = document.querySelector('#navegacion-principal');
     if (scroll > 300) {
          header.classList.add('bg-success');
     } else {
          header.classList.remove('bg-success');
     }
};

// Jquery CountDown
$(document).ready(function () {
     $('#fecha').countdown('2019/05/23', function (evento) {
          $(this).html(evento.strftime('<span>%D</span> Días <span>%H</span> Horas <span>%M</span> Minutos <span>%S</span> Segundos'))
     });
});