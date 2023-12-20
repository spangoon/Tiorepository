alert("¡Bienvenidos a este quizz de mateticas!⭐⭐⭐")
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menuContainer = document.getElementById('menu-container');
    var currentLeft = parseInt(window.getComputedStyle(menuContainer).left);
  
    
    if (currentLeft < 0) {
      menuContainer.style.left = '0';
    } else {
      menuContainer.style.left = '-250px';
    }
  });

  //

  

  //


  document.addEventListener('DOMContentLoaded', function () {
    var empezarButton = document.querySelector('.Alerta button');

    empezarButton.addEventListener('click', function () {
      var confirmacion = confirm('¡Agárrate fuerte, porque tu futuro está lleno de posibilidades y aventuras esperando a ser exploradas! ¿Seuro que queires comenzar?');

      if (confirmacion) {
        window.location.href = 'Maths.html';
      }
    });
  });