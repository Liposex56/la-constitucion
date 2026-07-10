$(function(){

	var conteo=0;
	var conti=0;
	
$("#superado").hide();
$("#pregunta1").hide();
$("#pregunta2").hide();
$("#pregunta3").hide();
$("#pregunta4").hide();
$("#pregunta5").hide();
$("#incorrecto").hide();
$("#parte1").hide();
$("#parte2").hide();
$("#parte3").hide();
$("#continuar").hide();
$("#reintentar").hide();
$("#opcion1b").hide();
$("#opcion2b").hide();
$("#opcion3b").hide();
$("#opcion4b").hide();
$("#opcion1c").hide();
$("#opcion2c").hide();
$("#opcion3c").hide();
$("#opcion4c").hide();
$("#opcion1d").hide();
$("#opcion2d").hide();
$("#opcion3d").hide();
$("#opcion4d").hide();
$("#opcion1e").hide();
$("#opcion2e").hide();
$("#opcion3e").hide();
$("#opcion4e").hide();
$("#botonayuda").hide();


////////////////////////////////////////////////////////////////////
$("#iniciar").on("tap",function(){

	$("#paisaje").hide();
	$("#iniciar").hide();
	$("#botonmensaje").hide();
	$("#continuar").show();
	$("#parte1").show();
	$("#botonayuda").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#reintentar").on("tap",function(){

	$("#reintentar").hide();
	$("#incorrecto").hide();
	
});
/////////////////////////////////////////////////////////////////////
$("#continuar").on("tap",function(){

	conti++;
	if (conti==1) {
		$("#parte1").hide();
		$("#parte2").show();
	}
	if (conti==2) {
		$("#parte2").hide();
		$("#parte3").show();
	}
	if (conti==3) {
		$("#parte3").hide();
		$("#continuar").hide();
		$("#pregunta1").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion1a").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
		var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion2a").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();

	var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion3a").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
		var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion4a").on("tap",function(){

	$("#opcion1a").hide();
	$("#opcion2a").hide();
	$("#opcion3a").hide();
	$("#opcion4a").hide();
	$("#pregunta1").hide();
	$("#pregunta2").show();
	$("#opcion1b").show();
	$("#opcion2b").show();
	$("#opcion3b").show();
	$("#opcion4b").show();
		var audio1 = document.getElementById("audioB");

audio1.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion1b").on("tap",function(){

	$("#opcion1b").hide();
	$("#opcion2b").hide();
	$("#opcion3b").hide();
	$("#opcion4b").hide();
	$("#pregunta2").hide();
	$("#pregunta3").show();
	$("#opcion1c").show();
	$("#opcion2c").show();
	$("#opcion3c").show();
	$("#opcion4c").show();
	var audio1 = document.getElementById("audioB");

audio1.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion2b").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
	var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion3b").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
		var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion4b").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
		var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion1c").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
		var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion2c").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
		var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion3c").on("tap",function(){

	$("#opcion1c").hide();
	$("#opcion2c").hide();
	$("#opcion3c").hide();
	$("#opcion4c").hide();
	$("#pregunta3").hide();
	$("#pregunta4").show();
	$("#opcion1d").show();
	$("#opcion2d").show();
	$("#opcion3d").show();
	$("#opcion4d").show();
		var audio1 = document.getElementById("audioB");

audio1.play();
	
});
////////////////////////////////////////////////////////////////////////
$("#opcion4c").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
	var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion1d").on("tap",function(){

	$("#opcion1d").hide();
	$("#opcion2d").hide();
	$("#opcion3d").hide();
	$("#opcion4d").hide();
	$("#pregunta4").hide();
	$("#pregunta5").show();
	$("#opcion1e").show();
	$("#opcion2e").show();
	$("#opcion3e").show();
	$("#opcion4e").show();
	var audio1 = document.getElementById("audioB");

audio1.play();
	
});
////////////////////////////////////////////////////////////////////////
$("#opcion2d").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
	var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion3d").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
	var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion4d").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
	var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion1e").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
	var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion2e").on("tap",function(){

	$("#opcion1e").hide();
	$("#opcion2e").hide();
	$("#opcion3e").hide();
	$("#opcion4e").hide();
	$("#pregunta5").hide();
	$("#superado").show();
	$("#botonayuda").hide();
	var audio1 = document.getElementById("audioB");

audio1.play();
	
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion3e").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
	var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion4e").on("tap",function(){

	$("#incorrecto").show();
	$("#reintentar").show();
	var audio = document.getElementById("audioM");

audio.play();
	
});
/////////////////////////////////////////////////////////////////////




});