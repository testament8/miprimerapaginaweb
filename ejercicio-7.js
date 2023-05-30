//  6
    var botonesSubir = document.querySelectorAll('.subir');
    var botonesBajar = document.querySelectorAll('.bajar');

    //  7 y 8
    botonesBajar.forEach(function(boton) {
      boton.addEventListener('click', function() {
        var li = this.parentNode; 
        var lista = li.parentNode; 
        if (li.nextElementSibling) {
          lista.insertBefore(li.nextElementSibling, li); 
        }
      });
    });

    botonesSubir.forEach(function(boton) {
      boton.addEventListener('click', function() {
        var li = this.parentNode; 
        var lista = li.parentNode; 
        if (li.previousElementSibling) {
          lista.insertBefore(li, li.previousElementSibling);
        }
      });
    });