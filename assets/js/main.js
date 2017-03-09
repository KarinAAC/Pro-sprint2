// funcionalidad del dropdown
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

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

// funcionalidades de la página coders
document.getElementById("enviar1").onclick = function() {
  var respuestasBuenas = 0;
  var respuestasMalas = 0;
  var respuesta1 = document.getElementsByName("r1");
  var respuesta2 = document.getElementsByName("r2");
  var respuesta3 = document.getElementsByName("r3");

  if(respuesta1[0] == false && respuesta1[1] == false && respuesta1[2] == false){
    alert("Porfavor, completar la pregunta número 1");
  }
  if(respuesta2[0] == false && respuesta2[1] == false && respuesta2[2] == false){
    alert("Porfavor, completar la pregunta número 2");
  }
  if(respuesta3[0] == false && respuesta3[1] == false && respuesta3[2] == false){
    alert("Porfavor, completar la pregunta número 3");
  }
  /* else {
  op1[0].checked ? cb++ : cm++;
  op2[2].checked ? cb++ : cm++;
  op3[2].checked ? cb++ : cm++;
   document.getElementById("quiz1").innerHTML ="Tienes " +cb + " correcta(s)";
  }
}

document.getElementById("bt2").onclick = function(){
  var cb = 0;  //cuenta buenas
  var cm= 0; // cuenta malas
  var op1 = document.getElementsByName("p4");
  var op2 = document.getElementsByName("p5");
  var op3 = document.getElementsByName("p6");

  if(op1[0].checked == false && op1[1].checked == false && op1[2].checked == false ){
    alert ("Responder la pregunta 1")
  }
  else if(op2[0].checked == false && op2[1].checked == false && op2[2].checked == false ){
    alert ("Responder la pregunta 2")
  }
  else if(op3[0].checked == false && op3[1].checked == false && op3[2].checked == false ){
    alert ("Responder la pregunta 3")
  }
  else {
  op1[1].checked ? cb++ : cm++;
  op2[0].checked ? cb++ : cm++;
  op3[1].checked ? cb++ : cm++;
 document.getElementById("quiz2").innerHTML ="Tienes " +cb + " correcta(s)";*/
}
