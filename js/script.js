window.addEventListener('load', function(){
  greeting(), todayYear();
});

function greeting() {
  var greeting;
  var time = new Date().getHours();
  if (time < 12) { greeting = "Bom Dia!";}
  else if (time < 18) { greeting = "Boa Tarde!";}
  else { greeting = "Boa Noite!";}

  document.getElementById("greeting").innerHTML = greeting;
}

function todayYear() {
  var year = new Date().getFullYear();
  document.getElementById("year").innerHTML = year;
}


$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

function mascara(t, mask){
  var i = t.value.length;
  var saida = mask.substring(1,0);
  var texto = mask.substring(i)
    if (texto.substring(0,1) != saida){
    t.value += texto.substring(0,1);
    }
}

window.onload = function(){ 
  var modal = document.getElementById('myModal');
  var modal1 = document.getElementById('myModal1');
  var modal2 = document.getElementById('myModal2');
  var modal3 = document.getElementById('myModal3');
  var modal4 = document.getElementById('myModal4');
  var modal5 = document.getElementById('myModal5');
  var modal6 = document.getElementById('myModal6');
  var modal7 = document.getElementById('myModal7');

  var btn = document.getElementById("myBtn");
  var btn1 = document.getElementById("myBtn1");
  var btn2 = document.getElementById("myBtn2");
  var btn3 = document.getElementById("myBtn3");
  var btn4 = document.getElementById("myBtn4");
  var btn5 = document.getElementById("myBtn5");
  var btn6 = document.getElementById("myBtn6");
  var btn7 = document.getElementById("myBtn7");

  var btnClose = document.getElementById("btnClose");
  var btnClose1 = document.getElementById("btnClose1");
  var btnClose2 = document.getElementById("btnClose2");
  var btnClose3 = document.getElementById("btnClose3");
  var btnClose4 = document.getElementById("btnClose4");
  var btnClose5 = document.getElementById("btnClose5");
  var btnClose6 = document.getElementById("btnClose6");
  var btnClose7 = document.getElementById("btnClose7");

  btn.onclick = function() { modal.style.display = "block";}
  btn1.onclick = function() { modal1.style.display = "block";}
  btn2.onclick = function() { modal2.style.display = "block";}
  btn3.onclick = function() { modal3.style.display = "block";}
  btn4.onclick = function() { modal4.style.display = "block";}
  btn5.onclick = function() { modal5.style.display = "block";}
  btn6.onclick = function() { modal6.style.display = "block";}
  btn7.onclick = function() { modal7.style.display = "block";}

  btnClose.onclick = function() { modal.style.display = "none";}
  btnClose1.onclick = function() { modal1.style.display = "none";}
  btnClose2.onclick = function() { modal2.style.display = "none";}
  btnClose3.onclick = function() { modal3.style.display = "none";}
  btnClose4.onclick = function() { modal4.style.display = "none";}
  btnClose5.onclick = function() { modal5.style.display = "none";}
  btnClose6.onclick = function() { modal6.style.display = "none";}
  btnClose7.onclick = function() { modal7.style.display = "none";}

  window.onclick = function(event) {
      if (event.target == modal) { modal.style.display = "none";}
      else if (event.target == modal1) { modal1.style.display = "none";}
      else if (event.target == modal2) { modal2.style.display = "none";}
      else if (event.target == modal3) { modal3.style.display = "none";}
      else if (event.target == modal4) { modal4.style.display = "none";}
      else if (event.target == modal5) { modal5.style.display = "none";}
      else if (event.target == modal6) { modal6.style.display = "none";}
      else if (event.target == modal7) { modal7.style.display = "none";}
      else {}
    }
  };

