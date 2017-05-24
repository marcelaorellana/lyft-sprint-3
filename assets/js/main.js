var botonStart = document.getElementById("startId");


botonStart.addEventListener("click", function(){
	var coorX = parseInt(document.getElementById("inputAuto1").value);
	var coorY = parseInt(document.getElementById("inputAuto2").value);
	document.getElementById("playWithId").classList.toggle("no");
	console.log(coorX + coorY);
	document.getElementById("juegoId").classList.remove("no");

	var autoMu = document.getElementById("autito");

	var coorX50 = (coorX * 100) / 2;
	var coorY50 = (coorY * 100) / 2;
	autoMu.style.left = coorX50 + "px";
	autoMu.style.top = coorY50 + "px";



function animacion(e){
	if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40){

		var pintado = document.createElement("div");
		pintado.classList.add("rosa");
		pintado.style.left = coorX50 + "px";
		pintado.style.top = coorY50 + "px";
		document.getElementById("cuadroId").appendChild(pintado);
		console.log(coorX50 +"X" +coorY50);

		if(e.keyCode == 39){//right
			if(coorX50 < 450){
				coorX50 += 50;
				autoMu.style.left = coorX50 + "px";
			}
		}
		if(e.keyCode == 37){//left
			if(coorX50 > 0){
				coorX50 -= 50;
				autoMu.style.left = coorX50 + "px";
			}
		}
		if(e.keyCode == 38){//up
			if(coorY50 > 0){
				coorY50 -= 50;
				autoMu.style.top = coorY50 + "px";
			}
		}
		if(e.keyCode == 40){//down
			if(coorY50 < 250){
				coorY50 += 50;
				autoMu.style.top = coorY50 + "px";
			}
		}

	}
}
document.onkeydown = animacion;
});

