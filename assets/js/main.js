var botonStart = document.getElementById("startId");


botonStart.addEventListener("click", function(){
	var coorX = parseInt(document.getElementById("inputAuto1").value);
	var coorY = parseInt(document.getElementById("inputAuto2").value);
	var autoMu = document.getElementById("autito");
	var coorX50 = (coorX * 80);
	var coorY50 = (coorY * 80);

	document.getElementById("playWithId").classList.toggle("no");
	
	document.getElementById("juegoId").classList.remove("no");

	console.log(coorX + coorY);

	autoMu.style.left = coorX50 + "px";
	autoMu.style.top = coorY50 + "px";

function animacion(e){
	if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40){
		e.preventDefault();
		var pintado = document.createElement("div");
		pintado.classList.add("rosa");
		pintado.style.left = coorX50 + "px";
		pintado.style.top = coorY50 + "px";
		document.getElementById("cuadroId").appendChild(pintado);
		console.log(coorX50 +"X" +coorY50);

		if(e.keyCode == 39){//right
			if(coorX50 < 720){
				coorX50 += 80;
				autoMu.style.left = coorX50 + "px";
			}
		}
		if(e.keyCode == 37){//left
			if(coorX50 > 0){
				coorX50 -= 80;
				autoMu.style.left = coorX50 + "px";
			}
		}
		if(e.keyCode == 38){//up
			if(coorY50 > 0){
				coorY50 -= 80;
				autoMu.style.top = coorY50 + "px";
			}
		}
		if(e.keyCode == 40){//down
			if(coorY50 < 400){
				coorY50 += 80;
				autoMu.style.top = coorY50 + "px";
			}
		}

	}
}
document.onkeydown = animacion;
});

//validación del numero de telefono el en header
function validacionNumero(){
	var botonNumero = document.getElementById("becomeId");

	botonNumero.addEventListener("click", function(){

		var numero = document.getElementById("signupId").value;
		if (isNaN(numero)) {
			alert("No es número");
		}
		else{
			alert("Gracias! Ya estás Inscrito!")
		}
	});
}
validacionNumero();

