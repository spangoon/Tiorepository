document.getElementById('menu-toggle').addEventListener('click', function() {
    var menuContainer = document.getElementById('menu-container');
    var currentLeft = parseInt(window.getComputedStyle(menuContainer).left);
  
    
    if (currentLeft < 0) {
      menuContainer.style.left = '0';
    } else {
      menuContainer.style.left = '-250px';
    }
  });
  
