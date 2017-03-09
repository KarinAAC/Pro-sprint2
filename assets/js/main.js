
// funcionalidad de los botones : Sprint1, Sprint2, Sprint3
function botones(tema) {
   var tema1 = document.getElementById("tema1");
   var tema2 = document.getElementById("tema2");
   var tema3 = document.getElementById("tema3");

   if(tema == "tema1"){
     tema1.style.display  = "block";
     tema2.style.display  = "none";
     tema3.style.display  = "none";
   }
   if(tema == "tema2"){
     tema1.style.display = "none";
     tema2.style.display = "block";
     tema3.style.display = "none";
   }
   if (tema == 'tema3') {
     tema1.style.display  = "none";
     tema2.style.display  = "none";
     tema3.style.display  = "block";
   }


  }
